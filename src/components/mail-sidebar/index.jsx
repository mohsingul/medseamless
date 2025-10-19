import React, { Component } from "react";

class MailSidebar extends Component {
    render(){
        return(
            <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="/dashboard"><i className="fa fa-home back-icon"></i> <span>Back to Home</span></a>
                        </li>
                        <li className="menu-title"><a href="/compose-mail" className="btn btn-primary btn-block">Compose</a></li>
                        <li className="active">
                            <a href="/inbox">Inbox <span className="mail-count">(21)</span></a>
                        </li>
                        <li>
                            <a href="#0">Starred</a>
                        </li>
                        <li>
                            <a href="#0">Sent Mail</a>
                        </li>
                        <li>
                            <a href="#0">Trash</a>
                        </li>
                        <li>
                            <a href="#0">Draft <span className="mail-count">(8)</span></a>
                        </li>
                        <li className="menu-title">Label <a href="#0" className="add-user-icon"><i className="fa fa-plus"></i></a></li>
                        <li>
                            <a href="#0"><i className="fa fa-circle text-success mail-label"></i> Work</a>
                        </li>
                        <li>
                            <a href="#0"><i className="fa fa-circle text-danger mail-label"></i> Office</a>
                        </li>
                        <li>
                            <a href="#0"><i className="fa fa-circle text-warning mail-label"></i> Personal</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}

export default MailSidebar;