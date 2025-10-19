import React, { Component } from 'react';

class EditProfile extends Component{

    render(){
     
        return(
            <div className="page-wrapper">
            <div className="content">
            <div className="row">
                <div className="col-sm-12">
                    <h4 className="page-title">Edit Profile</h4>
                </div>
            </div>
            <form>
                <div className="card-box">
                    <h3 className="card-title">Basic Informations</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile-img-wrap">
                                <img className="inline-block" src="assets/img/user.jpg" alt="user" />
                                <div className="fileupload btn">
                                    <span className="btn-text">edit</span>
                                    <input className="upload" type="file" />
                                </div>
                            </div>
                            <div className="profile-basic">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group form-focus">
                                            <label className="focus-label">First Name</label>
                                            <input type="text" className="form-control floating" value="John" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group form-focus">
                                            <label className="focus-label">Last Name</label>
                                            <input type="text" className="form-control floating" value="Doe" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group form-focus">
                                            <label className="focus-label">Birth Date</label>
                                            <div className="cal-icon">
                                                <input className="form-control floating datetimepicker" type="text" value="05/06/1985" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group form-focus select-focus">
                                            <label className="focus-label">Gendar</label>
                                            <select className="select form-control floating">
                                                <option value="male selected">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-box">
                    <h3 className="card-title">Contact Informations</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group form-focus">
                                <label className="focus-label">Address</label>
                                <input type="text" className="form-control floating" value="4487 Snowbird Lane" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">State</label>
                                <input type="text" className="form-control floating" value="New York" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Country</label>
                                <input type="text" className="form-control floating" value="United States" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Pin Code</label>
                                <input type="text" className="form-control floating" value="10523" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Phone Number</label>
                                <input type="text" className="form-control floating" value="631-889-3206" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-box">
                    <h3 className="card-title">Education Informations</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Institution</label>
                                <input type="text" className="form-control floating" value="Oxford University" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Subject</label>
                                <input type="text" className="form-control floating" value="Computer Science" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Starting Date</label>
                                <div className="cal-icon">
                                    <input type="text" className="form-control floating datetimepicker" value="01/06/2002" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Complete Date</label>
                                <div className="cal-icon">
                                    <input type="text" className="form-control floating datetimepicker" value="31/05/2006" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Degree</label>
                                <input type="text" className="form-control floating" value="BE Computer Science" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Grade</label>
                                <input type="text" className="form-control floating" value="Grade A" />
                            </div>
                        </div>
                    </div>
                    <div className="add-more">
                        <a href="#0" className="btn btn-primary"><i className="fa fa-plus"></i> Add More Institute</a>
                    </div>
                </div>
                <div className="card-box">
                    <h3 className="card-title">Experience Informations</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Company Name</label>
                                <input type="text" className="form-control floating" value="Digital Devlopment Inc" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Location</label>
                                <input type="text" className="form-control floating" value="United States" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Job Position</label>
                                <input type="text" className="form-control floating" value="Web Developer" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Period From</label>
                                <div className="cal-icon">
                                    <input type="text" className="form-control floating datetimepicker" value="01/07/2007" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-focus">
                                <label className="focus-label">Period To</label>
                                <div className="cal-icon">
                                    <input type="text" className="form-control floating datetimepicker" value="08/06/2018" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add-more">
                        <a href="#0" className="btn btn-primary"><i className="fa fa-plus"></i> Add More Experience</a>
                    </div>
                </div>
                <div className="text-center m-t-20">
                    <button className="btn btn-primary submit-btn" type="button">Save</button>
                </div>
            </form>
        </div>
            </div>

        );

    }
}

export default EditProfile;