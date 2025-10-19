import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { EndPoints } from "../../../endPoint";
import axios from 'axios';
import { AuthHandler } from '../../../AuthHandler';
import { ToastContainer, toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner'
import ImageUpload from '../../../components/imgUpload/index'

function ChangePassword() {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isMatched, setIsMatched] = useState(true);
    const [username, setUserName] = useState(true);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        console.log()
        const user = AuthHandler.getUser()
        if (!user) return;
        setUserName(user.username)
    }, [])
    const notify = (message, type) => {
        if (type === "s") {
            toast.success(message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
        }
        else if (type === "e") {
            toast.error(message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
        }
        else if (type === "i") {
            toast.info(message, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
        }
    }
    const handleChangePassword = async (e) => {
        e.preventDefault();
        setLoading(true)
        const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*","username":AuthHandler.getUser().username  };
        let path = `${EndPoints.backendProd}/api/Users/editUser`
        console.log(path);
        try {
            await axios.post(path,
                { email: username, newPassword, oldPassword },
                {headers}
            )
            notify("Password changed Successfully", "s")
            setLoading(false)

        } catch (error) {
            notify("Old password is incorrect", "e")
            setLoading(false)
        }

        setLoading(false)
    }

    useEffect(() => {
        setIsMatched(newPassword === confirmPassword)
    }, [newPassword, confirmPassword])
    return (
        <>
            {/* <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="/dashboard"><i className="fa fa-home back-icon"></i> <span>Back to Home</span></Link>
                        </li>
                        <li className="menu-title">Settings</li>
                        <li>
                            <Link to="/settings" className={`${'/settings' === pathname ? 'activemenu' : ''}`}><i className="fa fa-building"></i> <span>Company Settings</span></Link>
                        </li>
                        <li>
                            <Link to="/localization" className={`${'/localization' === pathname ? 'activemenu' : ''}`}><i className="fa fa-clock-o"></i> <span>Localization</span></Link>
                        </li>
                        <li>
                            <Link to="/theme-settings" className={`${'/theme-settings' === pathname ? 'activemenu' : ''}`}><i className="fa fa-picture-o"></i> <span>Theme Settings</span></Link>
                        </li>
                        <li>
                            <Link to="/role-permission" className={`${'/role-permission' === pathname || '/add-role' === pathname ? 'activemenu' : ''}`}><i className="fa fa-key"></i> <span>Roles & Permissions</span></Link>
                        </li>
                        <li>
                            <Link to="/email-settings" className={`${'/email-settings' === pathname ? 'activemenu' : ''}`}><i className="fa fa-envelope-o"></i> <span>Email Settings</span></Link>
                        </li>
                        <li>
                            <Link to="/invoice-settings" className={`${'/invoice-settings' === pathname ? 'activemenu' : ''}`}><i className="fa fa-pencil-square-o"></i> <span>Invoice Settings</span></Link>
                        </li>
                        <li>
                            <Link to="/salary-settings" className={`${'/salary-settings' === pathname ? 'activemenu' : ''}`}><i className="fa fa-money"></i> <span>Salary Settings</span></Link>
                        </li>
                        <li>
                            <Link to="/notification-setting" className={`${'/notification-setting' === pathname ? 'activemenu' : ''}`}><i className="fa fa-globe"></i> <span>Notifications</span></Link>
                        </li>
                       <li>
                            <Link to="/change-password" className={`${'/change-password' === pathname ? 'activemenu' : ''}`}><i className="fa fa-lock"></i> <span>Change Password</span></Link>
                        </li>
                        <li>
                            <Link to="/leave-type" className={`${'/leave-type' === pathname ? 'activemenu' : ''}`}><i className="fa fa-cogs"></i> <span>Leave Type</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-md-6 offset-md-2">
                            <h4 className="page-title">Settings</h4>
                            <form>
                                {/* <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>Logo</label>
                                            <ImageUpload/>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label>Old password</label>
                                            <input type="password" onChange={e => setOldPassword(e.target.value)} value={oldPassword} className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>New password</label>
                                            <input type="password" onChange={e => setNewPassword(e.target.value)} value={newPassword} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Confirm password</label>
                                            <input type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                {
                                    !isMatched &&
                                    < div className="row">
                                        <div className="col-sm-12 text-center m-t-20">
                                            <span style={{ color: "red" }}>Passwords do not match</span>
                                        </div>
                                    </div>
                                }

                            </form>
                            <div className="row">
                                <div className="col-sm-12 text-center m-t-20">
                                    <button type="button" disabled={!isMatched && !username && !oldPassword && !newPassword} onClick={handleChangePassword} className="btn btn-primary submit-btn">Update Password</button>
                                </div>
                            </div>
                            {loading &&
                                <div className="row" style={{ display: "grid", "justifyContent": "center" }}>
                                    <div className="col-sm-12 text-center m-t-20">
                                        <ThreeDots
                                            visible={true}
                                            height="80"
                                            width="80"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            color="#009EFB"
                                            wrapperClass="blocks-wrapper"
                                        />
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    theme="dark"
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div >
        </>
    );
};

export default ChangePassword;