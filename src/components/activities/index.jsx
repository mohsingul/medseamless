import React, { Component } from 'react';
import user from '../../assets/images/user.jpg'

class Activities extends Component{

    render(){
     
        return(
        <div className="page-wrapper">
            <div className="content">
            <div className="row">
                <div className="col-sm-12">
                    <h4 className="page-title">Activities</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="activity">
                        <div className="activity-box">
                            <ul className="activity-list">
                                <li>
                                    <div className="activity-user">
                                        <a href="/profile" title="Lesley Grauer" data-toggle="tooltip" className="avatar">
                                            <img alt="Lesley Grauer" src={user} className="img-fluid rounded-circle" />
                                        </a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="/profile" className="name">Lesley Grauer</a> added new task <a href="#0">Hospital Administration</a>
                                            <span className="time">4 mins ago</span>
                                        </div>
                                    </div>
                                    <a className="activity-delete" href="#0" title="Delete">&times;</a>
                                </li>
                                <li>
                                    <div className="activity-user">
                                        <a href="/profile" className="avatar" title="Jeffery Lalor" data-toggle="tooltip">L</a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="/profile" className="name">Jeffery Lalor</a> added <a href="/profile" className="name">Loren Gatlin</a> and <a href="/profile" className="name">Tarah Shropshire</a> to project <a href="#0">Patient appointment booking</a>
                                            <span className="time">6 mins ago</span>
                                        </div>
                                    </div>
                                    <a className="activity-delete" href="#0" title="Delete">&times;</a>
                                </li>
                                <li>
                                    <div className="activity-user">
                                        <a href="/profile" title="Catherine Manseau" data-toggle="tooltip" className="avatar">
                                            <img alt="Catherine Manseau" src={user} className="img-fluid rounded-circle" />
                                        </a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="/profile" className="name">Catherine Manseau</a> completed task <a href="#0">Appointment booking with payment gateway</a>
                                            <span className="time">12 mins ago</span>
                                        </div>
                                    </div>
                                    <a className="activity-delete" href="#0" title="Delete">&times;</a>
                                </li>
                                <li>
                                    <div className="activity-user">
                                        <a href="#0" title="Bernardo Galaviz" data-toggle="tooltip" className="avatar">
                                            <img alt="Bernardo Galaviz" src={user} className="img-fluid rounded-circle" />
                                        </a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="/profile" className="name">Bernardo Galaviz</a> changed the task name <a href="#0">Doctor available module</a>
                                            <span className="time">1 day ago</span>
                                        </div>
                                    </div>
                                    <a className="activity-delete" href="#0" title="Delete">&times;</a>
                                </li>
                                <li>
                                    <div className="activity-user">
                                        <a href="/profile" title="Mike Litorus" data-toggle="tooltip" className="avatar">
                                            <img alt="Mike Litorus" src={user} className="img-fluid rounded-circle" />
                                        </a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="/profile" className="name">Mike Litorus</a> added new task <a href="#0">Patient and Doctor video conferencing</a>
                                            <span className="time">2 days ago</span>
                                        </div>
                                    </div>
                                    <a className="activity-delete" href="#0" title="Delete">&times;</a>
                                </li>
                                <li>
                                    <div className="activity-user">
                                        <a href="/profile" title="Jeffery Lalor" data-toggle="tooltip" className="avatar">
                                            <img alt="Jeffery Lalor" src={user} className="img-fluid rounded-circle" />
                                        </a>
                                    </div>
                                    <div className="activity-content">
                                        <div className="timeline-content">
                                            <a href="/profile" className="name">Jeffery Lalor</a> added <a href="/profile" className="name">Jeffrey Warden</a> and <a href="/profile" className="name">Bernardo Galaviz</a> to the task of <a href="#0">Private chat module</a>
                                            <span className="time">7 days ago</span>
                                        </div>
                                    </div>
                                    <a className="activity-delete" href="#0" title="Delete">&times;</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
};        

export default Activities;