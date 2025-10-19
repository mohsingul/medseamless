import React, {Component} from 'react';


class AddFund extends Component{

    render(){
        return(
            <div className="page-wrapper">
                        <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Provident Fund</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Employee Name</label>
                                        <select className="form-control select">
                                            <option defaultValue="3">John Doe (FT-0001)</option>
                                            <option defaultValue="23">Richard Miles (FT-0002)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Provident Fund Type</label>
                                        <select className="form-control select">
                                            <option defaultValue="Fixed Amount" selected="">Fixed Amount</option>
                                            <option defaultValue="Percentage of Basic Salary">Percentage of Basic Salary</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="show-fixed-amount">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Employee Share (Amount)</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Organization Share (Amount)</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="show-basic-salary">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Employee Share (%)</label>
                                                    <input className="form-control" type="text" /> 
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label>Organization Share (%)</label>
                                                    <input className="form-control" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control" rows="4" cols="50"></textarea>
                                    </div>
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

export default AddFund;