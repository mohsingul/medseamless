import React from 'react';
import { Link } from 'react-router-dom';
const Error500 = () => {
    return(
          <div className="main-wrapper error-wrapper">
        <div className="error-box">
            <h1>500</h1>
            <h3><i className="fa fa-warning"></i> Oops! Something went wrong</h3>
            <p>The page you requested was not found.</p>
            <Link to="/dashboard" className="btn btn-primary go-home">Go to Home</Link>
        </div>
    </div>
    )
};


export default Error500;