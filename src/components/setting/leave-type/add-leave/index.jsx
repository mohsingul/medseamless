import React, { Component } from 'react';


class LeaveAdd extends Component{

    render(){
     
        return(
            <div className="page-wrapper">
                <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Leave Type</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="form-group">
                                <label>Leave Type <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Number of days <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Add Leave Type</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default LeaveAdd;
