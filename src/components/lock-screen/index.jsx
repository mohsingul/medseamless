import React from 'react';
import user from '../../assets/images/user.jpg';
import { Link } from 'react-router-dom';
const Lockscreen = () => {
    return(
        <div className="main-wrapper error-wrapper">
        <div className="error-box">
            <form action="/dashboard">
                <div className="lock-user">
                    <img className="rounded-circle" src={user} alt="" />
                    <h6>John Doe</h6>
                </div>
                <div className="form-group">
                    <input className="form-control" placeholder="Enter Password" type="password" />
                </div>
                <div className="text-center">
                    <Link to="/login">Sign in as a different user?</Link>
                </div>
            </form>
        </div>
    </div>
    )
};


export default Lockscreen;