import React, { Component } from 'react';
import { Link } from "react-router-dom";


class notificationSetting extends Component{
    
    render(){
        const { location } = this.props;
        let pathname = location.pathname;
        return(
           <>
       <div className="sidebar" id="sidebar">
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
        </div>
            <div className="page-wrapper">
             <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Notifications Settings</h4>
                        <div>
                            <ul className="list-group notification-list">
                                <li className="list-group-item">
                                    Employee
                                    <div className="material-switch float-right">
                                        <input id="staff_module" type="checkbox" defaultChecked="checked" />
                                        <label htmlFor="staff_module" className="badge-primary"></label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Holidays
                                    <div className="material-switch float-right">
                                        <input id="holidays_module" type="checkbox" />
                                        <label htmlFor="holidays_module" className="badge-primary"></label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Leave Request
                                    <div className="material-switch float-right">
                                        <input id="leave_module" type="checkbox" />
                                        <label htmlFor="leave_module" className="badge-primary"></label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Events
                                    <div className="material-switch float-right">
                                        <input id="events_module" type="checkbox" />
                                        <label htmlFor="events_module" className="badge-primary"></label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Chat
                                    <div className="material-switch float-right">
                                        <input id="chat_module" type="checkbox" />
                                        <label htmlFor="chat_module" className="badge-primary"></label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        );
    }
};

export default notificationSetting;