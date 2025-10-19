import React, {Component} from 'react';
import IMG01 from '../../../assets/images/user.jpg';
import Select from 'react-select';
import DatePicker from "react-datepicker";

class EditDoctor extends Component{
    constructor(props){
        super(props);
        this.state={
           startDate: new Date()
        }
    }
    handleChange = date => {
        this.setState({
          startDate: date
        });
      }; 
    render(){
        const options = [
            { value: 'California', label: 'California' },
            { value: 'Alaska', label: 'Alaska' },
            { value: 'Alabama', label: 'Alabama' }
          ]

          const country = [
            { value: 'US', label: 'US' },
            { value: 'UK', label: 'UK' },
          ]
          
        return(
            <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Edit Doctor</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">
                            <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>First Name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" defaultValue="Justin" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input className="form-control" type="text" defaultValue="Parker" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Username <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" defaultValue="justinparker" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Email <span className="text-danger">*</span></label>
                                        <input className="form-control" type="email" defaultValue="justinparker@example.com" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control" type="password" /> 
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Confirm Password</label>
                                        <input className="form-control" type="password" />
                                    </div>
                                </div>
								<div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <div className="cal-icon">
                                        <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                                className="form-control datetimepicker"
                                                />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
									<div className="form-group gender-select">
										<label className="gen-label">Gender:</label>
										<div className="form-check-inline">
											<label className="form-check-label">
												<input type="radio" name="gender" className="form-check-input" />Male
											</label>
										</div>
										<div className="form-check-inline">
											<label className="form-check-label">
												<input type="radio" name="gender" className="form-check-input" />Female
											</label>
										</div>
									</div>
                                </div>
								<div className="col-sm-12">
									<div className="row">
										<div className="col-sm-12">
											<div className="form-group">
												<label>Address</label>
												<input type="text" className="form-control " />
											</div>
										</div>
										<div className="col-sm-6 col-md-6 col-lg-3">
											<div className="form-group">
												<label>Country</label>
												<Select options={country} className="select" />
												
											</div>
										</div>
										<div className="col-sm-6 col-md-6 col-lg-3">
											<div className="form-group">
												<label>City</label>
												<input type="text" className="form-control" />
											</div>
										</div>
										<div className="col-sm-6 col-md-6 col-lg-3">
											<div className="form-group">
												<label>State/Province</label>
                                                <Select options={options} className="select"/>
												
											</div>
										</div>
										<div className="col-sm-6 col-md-6 col-lg-3">
											<div className="form-group">
												<label>Postal Code</label>
												<input type="text" className="form-control" />
											</div>
										</div>
									</div>
								</div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Phone </label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
									<div className="form-group">
										<label>Avatar</label>
										<div className="profile-upload">
											<div className="upload-img">
												<img alt="" src={IMG01} />
											</div>
											<div className="upload-input">
												<input type="file" className="form-control" />
											</div>
										</div>
									</div>
                                </div>
                            </div>
							<div className="form-group">
                                <label>Short Biography</label>
                                <textarea className="form-control" rows="3" cols="30"></textarea>
                            </div>
                            <div className="form-group">
                                <label className="display-block">Status</label>
								<div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="status" id="doctor_active" 
                                    defaultValue="option1" defaultChecked />
									<label className="form-check-label" htmlFor="doctor_active">
									Active
									</label>
								</div>
								<div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="status" id="doctor_inactive"
                                     defaultValue="option2" />
									<label className="form-check-label" htmlFor="doctor_inactive">
									Inactive
									</label>
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
        );
    }
};

export default EditDoctor;