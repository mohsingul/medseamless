import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import sent from '../../../assets/images/sent.png';
import { Link } from 'react-router-dom'; 

class rolepermission extends Component{
    constructor(props){
        super(props);

        this.state = {
            show: false
        }
    }

    handleClose=()=>{
        this.setState({
            show:false
        });
    }

    handleShow=(id)=>{
        this.setState({
            show:id
        });
    }

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
                    <div className="col-sm-8">
                        <h4 className="page-title">Roles & Permissions</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-3">
                        <Link to="/add-role" className="btn btn-primary btn-block">
                            <i className="fa fa-plus"></i> Add Roles</Link>
                        <div className="roles-menu">
                            <ul>
                                <li className="active">
                                    <a href="#0">Administrator</a>
									<span className="role-action">
										<Link to="/edit-role">
											<span className="action-circle large">
												<i className="material-icons">edit</i>
											</span>
										</Link>
										<a href="#0" onClick={()=>this.handleShow('delete')}>
											<span className="action-circle large delete-btn">
												<i className="material-icons">delete</i>
											</span>
										</a>
									</span>
                                </li>
                                <li><a href="">Doctor</a></li>
                                <li><a href="">Nurse</a></li>
                                <li><a href="">Laboratorist</a></li>
                                <li><a href="">Pharmacist</a></li>
                                <li><a href="">Accountant</a></li>
                                <li><a href="">Receptionist</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-8 col-xl-9">
                        <h6 className="card-title m-b-20">Module Access</h6>
                        <div className="m-b-30">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    Employee
                                    <div className="material-switch float-right">
                                        <input id="staff_module" type="checkbox" />
                                        <label htmlFor="staff_module" className="badge-success"></label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Holidays
                                    <div className="material-switch float-right">
                                        <input id="holidays_module" type="checkbox" />
                                        <label htmlFor="holidays_module" className="badge-success"></label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Leave Request
                                    <div className="material-switch float-right">
                                        <input id="leave_module" type="checkbox" />
                                        <label htmlFor="leave_module" className="badge-success"></label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Events
                                    <div className="material-switch float-right">
                                        <input id="events_module" type="checkbox" />
                                        <label htmlFor="events_module" className="badge-success"></label>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    Chat
                                    <div className="material-switch float-right">
                                        <input id="chat_module" type="checkbox" />
                                        <label htmlFor="chat_module" className="badge-success"></label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped custom-table">
                                <thead>
                                    <tr>
                                        <th>Module Permission</th>
                                        <th className="text-center">Read</th>
                                        <th className="text-center">Write</th>
                                        <th className="text-center">Create</th>
                                        <th className="text-center">Delete</th>
                                        <th className="text-center">Import</th>
                                        <th className="text-center">Export</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Employee</td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Holidays</td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Leave Request</td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Events</td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" defaultChecked="" />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={this.state.show === 'delete'} onHide={this.handleClose} centered>
                 
                        <Modal.Body>
                    <div className="modal-body text-center">
						<img src={sent} alt="" width="50" height="46" />
						<h4 className="m-t-10">Are you sure want to delete this Role?</h4>
						<div className="m-t-20"> <a href="#0" className="btn btn-white" data-dismiss="modal">Close</a>
							<button type="submit" className="btn btn-danger">Delete</button>
						</div>
					</div>
                        </Modal.Body>
                    </Modal>     
         </div>
         </>   
        );
    }
}

export default rolepermission;
