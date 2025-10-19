import React, { Component } from 'react';
import logo from '../../assets/images/logo-dark.png';

class UserChangepassword extends Component{
    render(){
        return(
            <div className="main-wrapper account-wrapper">
            <div className="account-page">
                <div className="account-center">
                    <div className="account-box">
                        <form className="form-signin" action="#">
                            <div className="account-logo">
                                <a href="/dashboard"><img src={logo} alt="" /></a>
                            </div>
                            <div className="form-group">
                                <label>Current Password</label>
                                <input type="text" className="form-control" autofocus />
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary account-btn" type="submit">Reset Password</button>
                            </div>
                            <div className="text-center register-link">
                                <a href="/login">Back to Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default UserChangepassword