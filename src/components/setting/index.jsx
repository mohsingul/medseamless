import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from "react-router-dom";

class Setting extends Component{
    
    render(){

        const { location } = this.props;
        let pathname = location.pathname;

        const country = [
            { value: 'USA', label: 'USA' },
            { value: 'UK', label: 'UK' },
          
          ]
          const state = [
            { value: 'California', label: 'California' },
            { value: 'Alaska', label: 'Alaska' },
           
          ]
        return(
         <>   <div className="sidebar" id="sidebar">
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
                            <h3 className="page-title">Company Settings</h3>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Company Name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" defaultValue="" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Contact Person</label>
                                        <input className="form-control " defaultValue="Daniel Porter" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input className="form-control " defaultValue="3864 Quiet Valley Lane, Sherman Oaks, CA, 91403" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="form-group">
                                        <label>Country</label>
                                        <Select options={country} className="select"/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="form-group">
                                        <label>City</label>
                                        <input className="form-control" defaultValue="Sherman Oaks" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="form-group">
                                        <label>State/Province</label>
                                        <Select options={state} className="select"/>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-6 col-lg-3">
                                    <div className="form-group">
                                        <label>Postal Code</label>
                                        <input className="form-control" defaultValue="91403" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" defaultValue="danielporter@example.com" type="email" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input className="form-control" defaultValue="818-978-7102" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Mobile Number</label>
                                        <input className="form-control" defaultValue="818-635-5579" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Fax</label>
                                        <input className="form-control" defaultValue="818-978-7102" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Website Url</label>
                                        <input className="form-control" defaultValue="https://www.example.com" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 text-center m-t-20">
                                    <button type="button" className="btn btn-primary submit-btn">Save</button>
                                </div>
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

export default Setting;