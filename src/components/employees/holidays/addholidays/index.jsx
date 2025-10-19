import React, {Component} from 'react';
import DatePicker from "react-datepicker";

class AddHoliday extends Component{
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
        return(
         <div className="page-wrapper">
                <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Holiday</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="form-group">
                                <label>Holiday Name <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Holiday Date <span className="text-danger">*</span></label>
                                <div className="cal-icon">
                                <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                                className="form-control datetimepicker"
                                                />
                                </div>
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Holiday</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
              
        );
    }
};

export default AddHoliday;