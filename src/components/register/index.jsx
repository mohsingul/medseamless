import React, { Component } from 'react';
import logo from '../../assets/images/logo-dark.png';
import { Link } from 'react-router-dom';

class Register extends Component{
    render(){
        return(
            <div className="account-wrapper">
			<div className="account-center">
            <div className="account-box">
                    <form action="/dashboard" className="form-signin">
						<div className="account-logo">
                            <Link to="/dashboard"><img src={logo} alt="" /></Link>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Mobile Number</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group checkbox">
                            <label>
                                <input type="checkbox" /> I have read and agree the Terms & Conditions
                            </label>
                        </div>
                        <div className="form-group text-center">
                            <button className="btn btn-primary account-btn" type="submit">Signup</button>
                        </div>
                        <div className="text-center login-link">
                            Already have an account? <Link to="/login">Login</Link>
                        </div>
                    </form>
                </div>
			</div>
        </div>
        
        );
    }
}
export default Register;