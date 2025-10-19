import React, { Component } from "react";

class Inbox extends Component {
    render() {
        return (
        <div className="page-wrapper">
            <div className="content">
            <div className="row">
                <div className="col-sm-12">
                    <h4 className="page-title">Inbox</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card-box">
                        <div className="email-header">
                            <div className="row">
                                <div className="col-sm-10 col-md-8 col-8 top-action-left">
                                    <div className="float-left">
                                        <div className="btn-group dropdown-action">
                                            <button type="button" className="btn btn-white dropdown-toggle" data-toggle="dropdown">Select <i className="fa fa-angle-down "></i></button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#0">All</a>
                                                <a className="dropdown-item" href="#0">None</a>
                                                <div className="dropdown-divider"></div> 
                                                <a className="dropdown-item" href="#0">Read</a>
                                                <a className="dropdown-item" href="#0">Unread</a>
                                            </div>
                                        </div>
                                        <div className="btn-group dropdown-action">
                                            <button type="button" className="btn btn-white dropdown-toggle" data-toggle="dropdown">Actions <i className="fa fa-angle-down "></i></button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="#0">Reply</a>
                                                <a className="dropdown-item" href="#0">Forward</a>
                                                <a className="dropdown-item" href="#0">Archive</a>
                                                <div className="dropdown-divider"></div> 
                                                <a className="dropdown-item" href="#0">Mark As Read</a>
                                                <a className="dropdown-item" href="#0">Mark As Unread</a>
                                                <div className="dropdown-divider"></div> 
                                                <a className="dropdown-item" href="#0">Delete</a>
                                            </div>
                                        </div>
                                        <div className="btn-group dropdown-action">
                                            <button type="button" className="btn btn-white dropdown-toggle" data-toggle="dropdown"><i className="fa fa-folder"></i> <i className="fa fa-angle-down"></i></button>
                                            <div role="menu" className="dropdown-menu">
                                                <a className="dropdown-item" href="#0">Social</a>
                                                <a className="dropdown-item" href="#0">Forums</a>
                                                <a className="dropdown-item" href="#0">Updates</a>
                                                <div className="dropdown-divider"></div> 
                                                <a className="dropdown-item" href="#0">Spam</a>
                                                <a className="dropdown-item" href="#0">Trash</a>
                                                <div className="dropdown-divider"></div> 
                                                <a className="dropdown-item" href="#0">New</a>
                                            </div>
                                        </div>
                                        <div className="btn-group dropdown-action">
                                            <button type="button" data-toggle="dropdown" className="btn btn-white dropdown-toggle"><i className="fa fa-tags"></i> <i className="fa fa-angle-down"></i></button>
                                            <div role="menu" className="dropdown-menu">
                                                <a className="dropdown-item" href="#0">Work</a>
                                                <a className="dropdown-item" href="#0">Family</a>
                                                <a className="dropdown-item" href="#0">Social</a>
                                                <div className="dropdown-divider"></div> 
                                                <a className="dropdown-item" href="#0">Primary</a>
                                                <a className="dropdown-item" href="#0">Promotions</a>
                                                <a className="dropdown-item" href="#0">Forums</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-left d-none d-sm-block">
                                        <input type="text" placeholder="Search Messages" className="form-control search-message" />
                                    </div>
                                </div>
                                <div className="col-sm-2 col-md-4 col-4 top-action-right">
                                    <div className="text-right">
                                        <span className="text-muted d-none d-md-inline-block">Showing 10 of 112 </span>
                                        <button type="button" title="Refresh" data-toggle="tooltip" className="btn btn-white d-none d-md-inline-block"><i className="fa fa-refresh"></i></button>
                                        <div className="btn-group">
                                            <a className="btn btn-white"><i className="fa fa-angle-left"></i></a>
                                            <a className="btn btn-white"><i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="email-content">
                            <div className="table-responsive">
                                <table className="table table-inbox table-hover">
                                    <thead>
                                        <tr>
                                            <th colSpan="6">
                                                <input type="checkbox" id="check_all" />
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="unread clickable-row" data-href="/mail-view">
                                            <td>
                                                <input type="checkbox" className="checkmail" />
                                            </td>
                                            <td><span className="mail-important"><i className="fa fa-star starred"></i></span></td>
                                            <td className="name">John Doe</td>
                                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                                            <td><i className="fa fa-paperclip"></i></td>
                                            <td className="mail-date">13:14</td>
                                        </tr>
                                        <tr className="unread clickable-row" data-href="/mail-view">
                                            <td>
                                                <input type="checkbox" className="checkmail" />
                                            </td>
                                            <td><span className="mail-important"><i className="fa fa-star-o"></i></span></td>
                                            <td className="name">Envato Account</td>
                                            <td className="subject">Important account security update from Envato</td>
                                            <td></td>
                                            <td className="mail-date">8:42</td>
                                        </tr>
                                        <tr className="clickable-row" data-href="/mail-view">
                                            <td>
                                                <input type="checkbox" className="checkmail" />
                                            </td>
                                            <td><span className="mail-important"><i className="fa fa-star-o"></i></span></td>
                                            <td className="name">Twitter</td>
                                            <td className="subject">HRMS Bootstrap Admin Template</td>
                                            <td></td>
                                            <td className="mail-date">30 Nov</td>
                                        </tr>
                                        <tr className="unread clickable-row" data-href="/mail-view">
                                            <td>
                                                <input type="checkbox" className="checkmail" />
                                            </td>
                                            <td><span className="mail-important"><i className="fa fa-star-o"></i></span></td>
                                            <td className="name">Richard Parker</td>
                                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                                            <td></td>
                                            <td className="mail-date">18 Sep</td>
                                        </tr>
                                        <tr className="clickable-row" data-href="/mail-view">
                                            <td>
                                                <input type="checkbox" className="checkmail" />
                                            </td>
                                            <td><span className="mail-important"><i className="fa fa-star-o"></i></span></td>
                                            <td className="name">John Smith</td>
                                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                                            <td></td>
                                            <td className="mail-date">21 Aug</td>
                                        </tr>
                                        <tr className="clickable-row" data-href="/mail-view">
                                            <td>
                                                <input type="checkbox" className="checkmail" />
                                            </td>
                                            <td><span className="mail-important"><i className="fa fa-star-o"></i></span></td>
                                            <td className="name">me, Robert Smith (3)</td>
                                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                                            <td></td>
                                            <td className="mail-date">1 Aug</td>
                                        </tr>
                                        <tr className="unread clickable-row" data-href="/mail-view">
                                            <td>
                                                <input type="checkbox" className="checkmail" />
                                            </td>
                                            <td><span className="mail-important"><i className="fa fa-star-o"></i></span></td>
                                            <td className="name">Codecanyon</td>
                                            <td className="subject">Welcome To Codecanyon</td>
                                            <td></td>
                                            <td className="mail-date">Jul 13</td>
                                        </tr>
                                        <tr className="clickable-row" data-href="/mail-view">
                                            <td>
                                                <input type="checkbox" className="checkmail" />
                                            </td>
                                            <td><span className="mail-important"><i className="fa fa-star-o"></i></span></td>
                                            <td className="name">Richard Miles</td>
                                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                                            <td><i className="fa fa-paperclip"></i></td>
                                            <td className="mail-date">May 14</td>
                                        </tr>
                                        <tr className="unread clickable-row" data-href="/mail-view">
                                            <td>
                                                <input type="checkbox" className="checkmail" />
                                            </td>
                                            <td><span className="mail-important"><i className="fa fa-star-o"></i></span></td>
                                            <td className="name">John Smith</td>
                                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                                            <td></td>
                                            <td className="mail-date">11/11/16</td>
                                        </tr>
                                        <tr className="clickable-row" data-href="/mail-view">
                                            <td>
                                                <input type="checkbox" className="checkmail" />
                                            </td>
                                            <td><span className="mail-important"><i className="fa fa-star starred"></i></span></td>
                                            <td className="name">Mike Litorus</td>
                                            <td className="subject">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                                            <td></td>
                                            <td className="mail-date">10/31/16</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          </div>  
        );
    }
}

export default Inbox;