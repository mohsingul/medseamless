import React, { Component } from "react";
import IMG01 from '../../../assets/images/placeholder.jpg';
import IMG02 from '../../../assets/images/user.jpg';

class Mailview extends Component {
    render(){
        return(
            <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">View Message</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card-box">
                            <div className="mailview-content">
                                <div className="mailview-header">
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <div className="text-ellipsis m-b-10">
                                                <span className="mail-view-title">HRMS Bootstrap Admin Template</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="mail-view-action">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-white btn-sm" data-toggle="tooltip" title="Delete"> <i className="fa fa-trash-o"></i></button>
                                                    <button type="button" className="btn btn-white btn-sm" data-toggle="tooltip" title="Reply"> <i className="fa fa-reply-all"></i></button>
                                                    <button type="button" className="btn btn-white btn-sm" data-toggle="tooltip" title="Forward"> <i className="fa fa-share"></i></button>
                                                </div>
                                                <button type="button" className="btn btn-white btn-sm" data-toggle="tooltip" title="Print"> <i className="fa fa-print"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sender-info">
                                        <div className="sender-img">
                                            <img width="40" alt="" src={IMG02} className="rounded-circle" />
                                        </div>
                                        <div className="receiver-details float-left">
                                            <span className="sender-name">John Doe (johnjoe@example.com)</span>
                                            <span className="receiver-name">
												to <span>me</span>, <span>Richard</span>, <span>Paul</span>
                                            </span>
                                        </div>
                                        <div className="mail-sent-time">
                                            <span className="mail-time">18 Sep. 2017 9:42 AM</span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="mailview-inner">
                                    <p>Hello Richard,</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Thanks,
									<br /> John Doe</p>
                                </div>
                            </div>
                            <div className="mail-attachments">
                                <p><i className="fa fa-paperclip"></i> 2 Attachments - <a href="#0">View all</a> | <a href="#0">Download all</a></p>
                                <ul className="attachments clearfix text-center">
                                    <li>
                                        <div className="attach-file"><i className="fa fa-file-pdf-o"></i></div>
                                        <div className="attach-info">
											<a href="#0" className="attach-filename">daily_meeting.pdf</a>
                                            <div className="attach-fileize"> 842 KB</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="attach-file"><i className="fa fa-file-word-o"></i></div>
                                        <div className="attach-info">
											<a href="#0" className="attach-filename">documentation.docx</a>
                                            <div className="attach-fileize"> 2,305 KB</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="attach-file"><img src={IMG01} alt="Attachment" /></div>
                                        <div className="attach-info">
											<a href="#0" className="attach-filename">webdesign.png</a>
                                            <div className="attach-fileize"> 1.42 MB</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="attach-file"><img src={IMG01} alt="Attachment" /></div>
                                        <div className="attach-info">
											<a href="#0" className="attach-filename">webdevelopment.png</a>
                                            <div className="attach-fileize"> 1.1 MB</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mailview-footer">
                                <div className="row">
                                    <div className="col-sm-6 left-action">
                                        <button type="button" className="btn btn-white"><i className="fa fa-reply-all"></i> Reply</button>
                                        <button type="button" className="btn btn-white"><i className="fa fa-share"></i> Forward</button>
                                    </div>
                                    <div className="col-sm-6 right-action">
                                        <button type="button" className="btn btn-white"><i className="fa fa-print"></i> Print</button>
                                        <button type="button" className="btn btn-white"><i className="fa fa-trash-o"></i> Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>  
        );
    }
};

export default Mailview;