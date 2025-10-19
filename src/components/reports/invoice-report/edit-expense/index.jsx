import React, { Component } from 'react';
import IMG01 from '../../../../assets/images/user.jpg';
import Select from 'react-select';


class EditExpenseReport extends Component{

    render(){
        const purchased = [
            { value: 'Daniel Porter', label: 'Daniel Porter' },
            { value: 'Roger Dixon', label: 'Roger Dixon' },
    ];
    const paid = [
        { value: 'Cash', label: 'Cash' },
        { value: 'Cheque', label: 'Cheque' },
];
const status = [
    { value: 'Pending', label: 'Pending' },
    { value: 'Approved', label: 'Approved' },
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
                                        <input className="form-control" defaultValue="Anaesthetic machine" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchase From</label>
                                        <input className="form-control" defaultValue="Biomedical Equipment Inc" type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchase Date</label>
                                        <div className="cal-icon">
                                            <input className="form-control datetimepicker" type="text" defaultValue="22 Jun 2018" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Purchased By </label>
                                        <Select options={purchased} className="select"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input className="form-control" defaultValue="$62480" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Paid By</label>
                                        <Select options={paid} className="select"/>
                                     
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Status</label>
                                        
                                        <Select options={status} className="select"/>
                                      
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
                                        <img src={IMG01} alt="" />
                                        <a href="#0" className="fa fa-close file-remove"></a>
                                    </li>
                                    <li>
                                        <img src={IMG01} alt="" />
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
}

export default EditExpenseReport;
