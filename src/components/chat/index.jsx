import React, { Component } from "react";
import user from '../../assets/images/user.jpg';
import IMG01 from '../../assets/images/patient-thumb-01.jpg';
import { Link } from 'react-router-dom';
import placeholder from '../../assets/images/placeholder.jpg';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Modal } from 'react-bootstrap';
import attachment from '../../assets/images/attachment.png';

class Chat extends Component {
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
        return(
       <>     
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="/dashboard"><i className="fa fa-home back-icon"></i> <span>Back to Home</span></Link>
                        </li>
                        <li className="menu-title">Chat Groups <a href="#0" className="add-user-icon" onClick={()=>this.handleShow('group')}><i className="fa fa-plus"></i></a></li>
                        <li>
                            <Link to="/chat">#General</Link>
                        </li>
                        <li>
                            <Link to="/chat">#Video Responsive Survey</Link>
                        </li>
                        <li>
                            <Link to="/chat">#500rs</Link>
                        </li>
                        <li>
                            <Link to="/chat">#warehouse</Link>
                        </li>
                        <li className="menu-title">Direct Chats <Link to="#0" className="add-user-icon" onClick={()=>this.handleShow('chats')}><i className="fa fa-plus"></i></Link></li>
                        <li>
                            <Link to="/chat"><span className="chat-avatar-sm user-img"><img src={user} alt="" className="rounded-circle" /><span className="status online"></span></span> John Doe <span className="badge badge-pill bg-danger float-right">1</span></Link>
                        </li>
                        <li>
                            <Link to="/chat"><span className="chat-avatar-sm user-img"><img src={user} alt="" className="rounded-circle" /><span className="status offline"></span></span> Richard Miles <span className="badge badge-pill bg-danger float-right">18</span></Link>
                        </li>
                        <li>
                            <Link to="/chat"><span className="chat-avatar-sm user-img"><img src={user} alt="" className="rounded-circle" /><span className="status away"></span></span> John Smith</Link>
                        </li>
                        <li className="active">
                            <Link to="/chat"><span className="chat-avatar-sm user-img"><img src={user} alt="" className="rounded-circle" /><span className="status online"></span></span> Jennifer <span className="badge badge-pill bg-danger float-right">108</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="page-wrapper" style={{height: '100vh'}}>
            <div className="chat-main-row chat-layout">
                <div className="chat-main-wrapper">
                     <div className="col-lg-9 message-view chat-view">
                     <div className="chat-window">
                            <div className="fixed-header">
                            <div className="navbar">
                                    <div className="user-details mr-auto">
                                        <div className="float-left user-img m-r-10">
                                            <Link to="/profile" title="Jennifer Robinson">
                                                <img src={IMG01} alt="" className="w-40 rounded-circle" />
                                                    <span className="status online"></span></Link>
                                        </div>
                                        <div className="user-info float-left">
                                            <Link to="/profile"><span className="font-bold">Jennifer Robinson</span>
                                             <i className="typing-text">Typing...</i></Link>
                                            <span className="last-seen">Last seen today at 7:50 AM</span>
                                        </div>
                                    </div>
                                    <div className="search-box">
                                        <div className="input-group input-group-sm">
                                            <input type="text" className="form-control" placeholder="Search" />
                                            <span className="input-group-append">
													<button className="btn" type="button"><i className="fa fa-search"></i></button>
												</span>
                                        </div>
                                    </div>
                                    <ul className="nav custom-menu">
                                        <li className="nav-item">
                                            <a href="#chat_sidebar" className="nav-link task-chat profile-rightbar float-right" id="task_chat"><i className="fa fa-user"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/voice-call"><i className="fa fa-phone"></i></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/video-call"><i className="fa fa-video-camera"></i></a>
                                        </li>
                                        <li className="nav-item dropdown dropdown-action">
                                            <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-cog"></i></a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#0">Delete Conversations</a>
                                                <a className="dropdown-item" href="#0">Settings</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                           </div>
                           <div className="chat-contents">
                                <div className="chat-content-wrap">
                                    <div className="chat-wrap-inner">
                                        <div className="chat-box">
                                            <div className="chats">
                                                <div className="chat chat-right">
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>Hello. What can I do for you?</p>
                                                                <span className="chat-time">8:30 am</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat-line">
                                                    <span className="chat-date">October 8th, 2015</span>
                                                </div>
                                                <div className="chat chat-left">
                                                    <div className="chat-avatar">
                                                        <Link to="/profile" className="avatar">
                                                            <img alt="Jennifer Robinson" src={user} className="img-fluid rounded-circle" />
                                                        </Link>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>I'm just looking around.</p>
                                                                <p>Will you tell me something about yourself? </p>
                                                                <span className="chat-time">8:35 am</span>
                                                            </div>
                                                        </div>
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>Are you there? That time!</p>
                                                                <span className="chat-time">8:40 am</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat chat-right">
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>Where?</p>
                                                                <span className="chat-time">8:35 am</span>
                                                            </div>
                                                        </div>
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
                                                                <span className="chat-time">8:42 am</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat chat-left">
                                                    <div className="chat-avatar">
                                                        <Link to="/profile" className="avatar">
                                                            <img alt="Jennifer Robinson" src="assets/img/patient-thumb-02.jpg" className="img-fluid rounded-circle"/>
                                                        </Link>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>You wait for notice.</p>
                                                                <span className="chat-time">8:30 am</span>
                                                            </div>
                                                        </div>
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>Consectetuorem ipsum dolor sit?</p>
                                                                <span className="chat-time">8:50 am</span>
                                                            </div>
                                                        </div>
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>OK?</p>
                                                                <span className="chat-time">8:55 am</span>
                                                            </div>
                                                        </div>
                                                        <div className="chat-bubble">
                                                            <div className="chat-content img-content">
                                                                <div className="chat-img-group clearfix">
                                                                    <p>Uploaded 3 Images</p>
                                                                    <a className="chat-img-attach" href="#0">
                                                                        <img width="182" height="137" alt="" src={placeholder} />
                                                                        <div className="chat-placeholder">
                                                                            <div className="chat-img-name">placeholder.jpg</div>
                                                                            <div className="chat-file-desc">842 KB</div>
                                                                        </div>
                                                                    </a>
                                                                    <a className="chat-img-attach" href="#0">
                                                                        <img width="182" height="137" alt="" src={placeholder} />
                                                                        <div className="chat-placeholder">
                                                                            <div className="chat-img-name">842 KB</div>
                                                                        </div>
                                                                    </a>
                                                                    <a className="chat-img-attach" href="#0">
                                                                        <img width="182" height="137" alt="" src={placeholder} />
                                                                        <div className="chat-placeholder">
                                                                            <div className="chat-img-name">placeholder.jpg</div>
                                                                            <div className="chat-file-desc">842 KB</div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <span className="chat-time">9:00 am</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat chat-right">
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>OK!</p>
                                                                <span className="chat-time">9:00 am</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat chat-left">
                                                    <div className="chat-avatar">
                                                        <Link to="/profile" className="avatar">
                                                            <img alt="Jennifer Robinson" src={user} className="img-fluid rounded-circle" />
                                                        </Link>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>Uploaded 3 files</p>
                                                                <ul className="attach-list">
                                                                    <li><i className="fa fa-file"></i> <a href="#0">example.avi</a></li>
                                                                    <li><i className="fa fa-file"></i> <a href="#0">activity.psd</a></li>
                                                                    <li><i className="fa fa-file"></i> <a href="#0">example.psd</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>Consectetuorem ipsum dolor sit?</p>
                                                                <span className="chat-time">8:50 am</span>
                                                            </div>
                                                        </div>
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>OK?</p>
                                                                <span className="chat-time">8:55 am</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat chat-right">
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content img-content">
                                                                <div className="chat-img-group clearfix">
                                                                    <p>Uploaded 6 Images</p>
                                                                    <a className="chat-img-attach" href="#0">
                                                                        <img width="182" height="137" alt="" src={placeholder} />
                                                                        <div className="chat-placeholder">
                                                                            <div className="chat-img-name">placeholder.jpg</div>
                                                                            <div className="chat-file-desc">842 KB</div>
                                                                        </div>
                                                                    </a>
                                                                    <a className="chat-img-attach" href="#0">
                                                                        <img width="182" height="137" alt="" src={placeholder} />
                                                                        <div className="chat-placeholder">
                                                                            <div className="chat-img-name">842 KB</div>
                                                                        </div>
                                                                    </a>
                                                                    <a className="chat-img-attach" href="#0">
                                                                        <img width="182" height="137" alt="" src={placeholder} />
                                                                        <div className="chat-placeholder">
                                                                            <div className="chat-img-name">placeholder.jpg</div>
                                                                            <div className="chat-file-desc">842 KB</div>
                                                                        </div>
                                                                    </a>
                                                                    <a className="chat-img-attach" href="#0">
                                                                        <img width="182" height="137" alt="" src={placeholder} />
                                                                        <div className="chat-placeholder">
                                                                            <div className="chat-img-name">placeholder.jpg</div>
                                                                            <div className="chat-file-desc">842 KB</div>
                                                                        </div>
                                                                    </a>
                                                                    <a className="chat-img-attach" href="#0">
                                                                        <img width="182" height="137" alt="" src={placeholder} />
                                                                        <div className="chat-placeholder">
                                                                            <div className="chat-img-name">placeholder.jpg</div>
                                                                            <div className="chat-file-desc">842 KB</div>
                                                                        </div>
                                                                    </a>
                                                                    <a className="chat-img-attach" href="#0">
                                                                        <img width="182" height="137" alt="" src={placeholder} />
                                                                        <div className="chat-placeholder">
                                                                            <div className="chat-img-name">placeholder.jpg</div>
                                                                            <div className="chat-file-desc">842 KB</div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <span className="chat-time">9:00 am</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat chat-left">
                                                    <div className="chat-avatar">
                                                        <Link to="/profile" className="avatar">
                                                            <img alt="Jennifer Robinson" src={user} className="img-fluid rounded-circle" />
                                                        </Link>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <ul className="attach-list">
                                                                    <li className="pdf-file"><i className="fa fa-file-pdf-o"></i> <a href="#0">Document_2016.pdf</a></li>
                                                                </ul>
                                                                <span className="chat-time">9:00 am</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat chat-right">
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <ul className="attach-list">
                                                                    <li className="pdf-file"><i className="fa fa-file-pdf-o"></i> <a href="#0">Document_2016.pdf</a></li>
                                                                </ul>
                                                                <span className="chat-time">9:00 am</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat chat-left">
                                                    <div className="chat-avatar">
                                                        <Link to="/profile" className="avatar">
                                                            <img alt="Jennifer Robinson" src={user} className="img-fluid rounded-circle" />
                                                        </Link>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <p>Typing ...</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-footer">
                                <div className="message-bar">
                                    <div className="message-inner">
                                        <a className="link attach-icon" href="#0" data-toggle="modal" data-target="#drag_files">
                                            <img src={attachment} alt="" /></a>
                                        <div className="message-area">
                                            <div className="input-group">
                                                <textarea className="form-control" placeholder="Type message..."></textarea>
                                                <span className="input-group-append">
													<button className="btn btn-primary" type="button"><i className="fa fa-send"></i></button>
												</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>       
                       </div>          
                    </div>{/*col9 */}
                    <div className="col-lg-3 message-view chat-profile-view chat-sidebar" id="chat_sidebar">
                    <div className="chat-window video-window profile-tabs">
                    <Tabs defaultActiveKey="calls" id="uncontrolled-tab-example">
                            <Tab eventKey="calls" title="Calls" className="nav-link active">
                                       
                                        <div className="chat-box">
                                            <div className="chats">
                                                <div className="chat chat-left">
                                                    <div className="chat-avatar">
                                                        <Link to="/profile" className="avatar">
                                                            <img alt="John Doe" src={user} className="img-fluid rounded-circle" />
                                                        </Link>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <span className="chat-user">You</span> <span className="chat-time">8:35 am</span>
                                                                <div className="call-details">
                                                                    <i className="material-icons">phone_missed</i>
                                                                    <div className="call-info">
                                                                        <div className="call-user-details">
                                                                            <span className="call-description">Jeffrey Warden missed the call</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                               </div>
                                               <div className="chat-line">
                                                    <span className="chat-date">January 29th, 2015</span>
                                                </div>
                                                <div className="chat chat-left">
                                                    <div className="chat-avatar">
                                                        <Link to="/profile" className="avatar">
                                                            <img alt="John Doe" src={user} className="img-fluid rounded-circle" />
                                                        </Link>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <span className="chat-user">Richard Miles</span> <span className="chat-time">8:35 am</span>
                                                                <div className="call-details">
                                                                    <i className="material-icons">phone_missed</i>
                                                                    <div className="call-info">
                                                                        <div className="call-user-details">
                                                                            <span className="call-description">You missed the call</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="chat chat-left">
                                                    <div className="chat-avatar">
                                                        <Link to="/profile" className="avatar">
                                                            <img alt="John Doe" src={user} className="img-fluid rounded-circle" />
                                                        </Link>
                                                    </div>
                                                    <div className="chat-body">
                                                        <div className="chat-bubble">
                                                            <div className="chat-content">
                                                                <span className="chat-user">You</span> <span className="chat-time">8:35 am</span>
                                                                <div className="call-details">
                                                                    <i className="material-icons">ring_volume</i>
                                                                    <div className="call-info">
                                                                        <div className="call-user-details">
                                                                            <a href="#0" className="call-description call-description--linked" data-qa="call_attachment_link">Calling John Smith ...</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                              
                            </Tab>
                      
                            <Tab eventKey="profile" title="Profile" className="nav-link">
                            <div>
                                        
                                                <div className="table-content">
                                                <div className="chat-profile-img">
                                                        <div className="edit-profile-img">
                                                            <img src={user} alt="" />
                                                            <span className="change-img">Change Image</span>
                                                        </div>
                                                        <h3 className="user-name m-t-10 mb-0">John Doe</h3>
                                                        <small className="text-muted">BMBS</small>
                                                        <Link to="/edit-profile" className="btn btn-primary edit-btn"><i className="fa fa-pencil"></i></Link>
                                                    </div>
                                                    <div className="chat-profile-info">
                                                        <ul className="user-det-list">
                                                            <li>
                                                                <span>Username:</span>
                                                                <span className="float-right text-muted">johndoe</span>
                                                            </li>
                                                            <li>
                                                                <span>DOB:</span>
                                                                <span className="float-right text-muted">24 July</span>
                                                            </li>
                                                            <li>
                                                                <span>Email:</span>
                                                                <span className="float-right text-muted">johndoe@example.com</span>
                                                            </li>
                                                            <li>
                                                                <span>Phone:</span>
                                                                <span className="float-right text-muted">9876543210</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <ul className="nav nav-tabs nav-tabs-solid nav-justified mb-0">
                                                            <li className="nav-item"><a className="nav-link active" href="#all_files" data-toggle="tab">All Files</a></li>
                                                            <li className="nav-item"><a className="nav-link" href="#my_files" data-toggle="tab">My Files</a></li>
                                                        </ul>
                                                        <div className="tab-content">
                                                            <div className="tab-pane show active" id="all_files">
                                                                <ul className="files-list">
                                                                    <li>
                                                                        <div className="files-cont">
                                                                            <div className="file-type">
                                                                                <span className="files-icon"><i className="fa fa-file-pdf-o"></i></span>
                                                                            </div>
                                                                            <div className="files-info">
                                                                                <span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                                                                                <span className="file-author"><a href="#0">Loren Gatlin</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                                                                            </div>
                                                                            <ul className="files-action">
                                                                                <li className="dropdown dropdown-action">
                                                                                    <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h"></i></a>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="#0">Download</a>
                                                                                        <a className="dropdown-item" href="#0" data-toggle="modal" data-target="#share_files">Share</a>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="tab-pane" id="my_files">
                                                                <ul className="files-list">
                                                                    <li>
                                                                        <div className="files-cont">
                                                                            <div className="file-type">
                                                                                <span className="files-icon"><i className="fa fa-file-pdf-o"></i></span>
                                                                            </div>
                                                                            <div className="files-info">
                                                                                <span className="file-name text-ellipsis">AHA Selfcare Mobile Application Test-Cases.xls</span>
                                                                                <span className="file-author"><a href="#0">John Doe</a></span> <span className="file-date">May 31st at 6:53 PM</span>
                                                                            </div>
                                                                            <ul className="files-action">
                                                                                <li className="dropdown dropdown-action">
                                                                                    <a href="" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-h"></i></a>
                                                                                    <div className="dropdown-menu">
                                                                                        <a className="dropdown-item" href="#0">Download</a>
                                                                                        <a className="dropdown-item" href="#0" data-toggle="modal" data-target="#share_files">Share</a>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </div>
                                           </div>
                            </Tab>
                        </Tabs>
                    
                      
                   </div>{/*tab */}
                </div>
              </div>  
            </div> 
          </div> {/*page-wrapper */}
          <Modal show={this.state.show === 'group'} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <h3 className="modal-title">Create a group</h3>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="modal-body">
                            <p>Groups are where your team communicates. They’re best when organized around a topic — #leads, for example.</p>
                            <form>
                                <div className="form-group">
                                    <label>Group Name <span className="text-danger">*</span></label>
                                    <input className="form-control" type="text"  />
                                </div>
                                <div className="form-group">
                                    <label>Send invites to: <span className="text-muted-light">(optional)</span></label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="m-t-50 text-center">
                                    <button className="btn btn-primary submit-btn">Create Group</button>
                                </div>
                            </form>
                        </div>
                        </Modal.Body>
                    </Modal>
                    <Modal show={this.state.show === 'chats'} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                        <h3 className="modal-title">Create a group</h3>
                        </Modal.Header>
                        <Modal.Body>
                        <div className="modal-body">
                            <div className="input-group m-b-30">
                                <input placeholder="Search to start a chat" className="form-control search-input" id="btn-input" type="text" />
                                <span className="input-group-append">
									<button className="btn btn-primary">Search</button>
								</span>
                            </div>
                            <div>
                                <h5>Recent Conversations</h5>
                                <ul className="chat-user-list">
                                    <li>
                                        <a href="#0">
                                            <div className="media">
												<span className="avatar align-self-center">J</span>
												<div className="media-body align-self-center text-nowrap">
													<div className="user-name">Jeffery Lalor</div>
													<span className="designation">Team Leader</span>
												</div>
												<div className="text-nowrap align-self-center">
													<div className="online-date">1 day ago</div>
												</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <div className="media ">
												<span className="avatar align-self-center">B</span>
												<div className="media-body align-self-center text-nowrap">
													<div className="user-name">Bernardo Galaviz</div>
													<span className="designation">MBBS, MD</span>
												</div>
												<div className="align-self-center text-nowrap">
													<div className="online-date">3 days ago</div>
												</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <div className="media">
												<span className="avatar align-self-center">
													<img src={user} alt="John Doe" />
												</span>
												<div className="media-body text-nowrap align-self-center">
													<div className="user-name">John Doe</div>
													<span className="designation">MBBS, MD</span>
												</div>
												<div className="align-self-center text-nowrap">
													<div className="online-date">7 months ago</div>
												</div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="m-t-50 text-center">
                                <button className="btn btn-primary submit-btn">Create Group</button>
                            </div>
                        </div>
                        </Modal.Body>
                    </Modal>     
          </>     
        );
    }
}  

export default Chat;