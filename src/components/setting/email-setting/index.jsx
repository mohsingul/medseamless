import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from "react-router-dom";
class EmailSettings extends Component{

    render(){
        const { location } = this.props;
        let pathname = location.pathname;
        const options = [
            { value: 'none', label: 'none' },
            { value: 'SSL', label: 'SSL' },
           { value: 'SSL', label: 'SSL' },
          ]
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
							<div className="form-group">
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="mailoption" id="phpmail" defaultValue="option1" />
									<label className="form-check-label" htmlFor="phpmail">PHP Mail</label>
								</div>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="mailoption" id="smtpmail" defaultValue="option2" />
									<label className="form-check-label" htmlFor="smtpmail">SMTP</label>
								</div>
							</div>
							<h4 className="page-title">PHP Email Settings</h4>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Email From Address</label>
                                        <input className="form-control" type="email" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Emails From Name</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
							<h4 className="page-title m-t-30">SMTP Email Settings</h4>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>SMTP HOST</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>SMTP USER</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>SMTP PASSWORD</label>
                                        <input className="form-control" type="password" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>SMTP PORT</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>SMTP Security</label>
                                        <Select options={options} className="select"/>
                                       
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>SMTP Authentication Domain</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 m-t-20 text-center">
                                <button type="button" className="btn btn-primary submit-btn">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
        );
    }
}

export default EmailSettings;
