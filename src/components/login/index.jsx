import React, { useState } from 'react';
import logo from '../../assets/images/logo-dark.png';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { EndPoints } from '../../endPoint';
import axios from 'axios';
import { Oval } from 'react-loader-spinner'
import { AuthHandler } from '../../AuthHandler';
import { useEffect } from 'react';

function Login(props) {
    const history = useHistory();
    const [username, setUserName] = useState("admin@demo.com")
    const [password, setPassword] = useState("demo@12")
    const [authenticating, setAuthenticating] = useState(false);
    const [notAuthenticated, setNotAuthenticated] = useState(false)
    const [errMessage, setErrMessage] = useState("")

    useEffect(() => {
        const user = AuthHandler.getUser();
        if (user.username && user.password) {
            setUserName(user.username)
            setPassword(user.password)
        }
    }, [])
    const downloadFile = async (username) => {
        const subdomainExtractorRegex = /\@(.*?)\./;
        const headers = { "Access-Control-Allow-Origin": "*", "username": username };
        let path = `${EndPoints.backendProd}/api/file/download/${subdomainExtractorRegex.exec(username)[1]}.com`
        try {
            const response = await fetch(path, {
                method: 'GET',
                headers
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Create a blob from the response
            const blob = await response.blob();
            console.log('Blob type:', blob.type)
            const url = URL.createObjectURL(blob)
            localStorage.setItem('_LOGO_', url)
        } catch (error) {
            console.error('Error downloading file:', error);
        }
    };


    const onLogin = async (e) => {
        e && e.preventDefault()
        setNotAuthenticated(false)
        setAuthenticating(true)
        const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "username": username };
        let path = `${EndPoints.backendProd}/api/Users/userAuthentication`
        console.log(path);
        try {
            const authResult = await axios.post(path,
                { email: username, password, },
                { headers }
            )
            await downloadFile(username)
            const authToken = authResult.data.token
            AuthHandler.setAuthToken(authToken)
            localStorage.setItem('clinicInfo', JSON.stringify(authResult.data.info))
            localStorage.setItem('TOKEN_EXPIRY', authResult.data.tokenExpiry.toString())
            AuthHandler.setUserName({ username, password })
            // props.triggerTokenCheck()
            history.push({
                pathname: '/dashboard',
            })

        } catch (error) {
            if (error.response.status === 410)
                setErrMessage("Subscription ended, Please contact admin")
            else
                setErrMessage("Invalid username or password")
            AuthHandler.clearToken();
            setNotAuthenticated(true)
            setAuthenticating(false)
            console.log(error)
        }
        setAuthenticating(false)
        // setLoading(false);
        // let authenticated = false
        // if (username === essentials.u && essentials.p === password) authenticated = true;
        // localStorage.setItem("auth", JSON.stringify({ "isAuthenticated": authenticated }))
        // history.push({
        //     pathname: '/dashboard',
        //     authenticated: true
        // })
    }

    return (
        <div className="main-wrapper account-wrapper">
            <div className="account-page">
                <div className="account-center">
                    <div className="account-box">
                        <form action="/dashboard" className="form-signin">
                            <div className="account-logo">
                                <Link to="/dashboard"><img src={logo} alt="" /></Link>
                            </div>
                            <div className="form-group">
                                <label>Username or Email</label>
                                <input type="text" autoFocus="" value={username} onChange={(e) => setUserName(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" />
                            </div>
                            <div className="form-group text-center">
                               <span style={{color:"red"}}>To sigin using demo account, click on Login</span>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-primary account-btn" aria-disabled={authenticating} disabled={authenticating} onClick={onLogin} >Login</button>
                            </div>
                            {notAuthenticated && <div className="text-center register-link">
                                <span style={{ color: "red" }}>{errMessage}</span>
                            </div>}
                            {authenticating &&
                                <div style={{ "paddingLeft": "42%" }}>
                                    <Oval
                                        height={40}
                                        width={40}
                                        color="#009EFB"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                        ariaLabel='oval-loading'
                                        secondaryColor="#4fa94d"
                                        strokeWidth={2}
                                        strokeWidthSecondary={2}

                                    />
                                </div>
                            }
                            <div className="text-center register-link">
                                Don’t have an account? <Link to="/" >Register Now</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;