import React, {Component} from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";

class AddEmployee extends Component{
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
        const role = [
            { value: 'Nurse', label: 'Nurse' },
            { value: 'Doctor', label: 'Doctor' },
            { value: 'Accountant', label: 'Accountant' },
            { value: 'Laboratorist', label: 'Laboratorist' },
          ]
        return(
            <div className="page-wrapper">
                 <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Employee</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">   
                     <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>First Name <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Username <span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Email <span className="text-danger">*</span></label>
                                        <input className="form-control" type="email" />
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
                                        <label>Employee ID <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Joining Date <span className="text-danger">*</span></label>
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
                                    <div className="form-group">
                                        <label>Phone </label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Role</label>
                                        <Select options={role} className="width100 select"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="display-block">Status</label>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="status" id="employee_active" value="option1" defaultChecked />
									<label className="form-check-label" htmlFor="employee_active">
									Active
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="status" id="employee_inactive" value="option2" />
									<label className="form-check-label" htmlFor="employee_inactive">
									Inactive
									</label>
								</div>
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Employee</button>
                            </div>
                        </form>
                    </div>
                 </div> 
              </div>
           </div>        
              
        );
    }
};

export default AddEmployee;