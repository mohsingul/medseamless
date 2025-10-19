import React, {Component} from 'react';
import user from '../../../../assets/images/user.jpg';
import Select from 'react-select';

class AddExpense extends Component{

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
                        <h4 className="page-title">New Expense</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Item Name</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchase From</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchase Date</label>
                                        <div className="cal-icon">
                                            <input className="form-control datetimepicker" type="text" />
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
                                        <input placeholder="$50" className="form-control" type="text" />
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
                                <button className="btn btn-primary submit-btn">Create Expense</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>    
          </div>    
        );
    }
};

export default AddExpense;