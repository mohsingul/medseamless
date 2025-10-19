import React, {Component} from 'react';
import user from '../../../../assets/images/user.jpg';
import Select from 'react-select';
import DatePicker from "react-datepicker";

class EditExpense extends Component{
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
        const status = [
            { value: 'Select Role', label: 'Select Role' },
            { value: 'Nurse', label: 'Nurse' },
           ];
           const purchased = [
            { value: 'Daniel', label: 'Select Role' },
            { value: 'Nurse', label: 'Nurse' },
           ];
           const paid = [
            { value: 'Cheque', label: 'Cheque' },
            { value: 'Cash', label: 'Cash' },
           ];

        return(
            <div className="page-wrapper">
                  <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Edit Expense</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Item Name</label>
                                        <input className="form-control" type="text" defaultValue="Anaesthetic machine"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchase From</label>
                                        <input className="form-control" type="text" defaultValue="Biomedical Equipment Inc"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchase Date</label>
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
                                        <label>Purchased By </label>
                                        <Select options={purchased} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input placeholder="$50" className="form-control" type="text" defaultValue="$62480"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Paid By</label>
                                        <Select options={paid} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Status</label>
                                        <Select options={status} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Attachments</label>
                                        <input className="form-control" type="file" />
                                    </div>
                                </div>
                            </div>
                            <div className="attach-files">
                                <ul>
                                    <li>
                                        <img src={user} alt="" />
                                        <a href="#0" className="fa fa-close file-remove"></a>
                                    </li>
                                    <li>
                                        <img src={user} alt="" />
                                        <a href="#0" className="fa fa-close file-remove"></a>
                                    </li>
                                </ul>
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

export default EditExpense;