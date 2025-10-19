import React, { Component } from 'react';
import darklogo from "../../../assets/images/logo-dark.png"
import { Link } from "react-router-dom";

class themeSetting extends Component{
    
    render(){
        const { location } = this.props;
        let pathname = location.pathname
    
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
                        <form>
                            <h4 className="page-title">Theme Settings</h4>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label">Website Name</label>
                                <div className="col-lg-9">
                                    <input name="website_name" className="form-control" defaultValue="Medseamless" type="text" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label">Light Logo</label>
                                <div className="col-lg-7">
                                    <input className="form-control" type="file" />
                                    <span className="form-text text-muted">Recommended image size is 40px x 40px</span>
                                </div>
                                <div className="col-lg-2">
                                    <div className="img-thumbnail float-right"><img src={darklogo} alt="" width="40" height="40" /></div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-lg-3 col-form-label">Favicon</label>
                                <div className="col-lg-7">
                                    <input className="form-control" type="file" />
                                    <span className="form-text text-muted">Recommended image size is 16px x 16px</span>
                                </div>
                                <div className="col-lg-2">
                                    <div className="settings-image img-thumbnail float-right"><img src={darklogo} className="img-fluid" width="16" height="16" alt="" /></div>
                                </div>
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
        );
    }
};

export default themeSetting;