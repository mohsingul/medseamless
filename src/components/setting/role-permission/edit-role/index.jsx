import React, { Component } from 'react';

class editrole extends Component{

    render(){
    
        return(
            <div className="page-wrapper">  
            <div className="content">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <h4 className="page-title">Edit Role</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <form>
                        <div className="form-group">
                            <label>Role Name <span className="text-danger">*</span></label>
                            <input className="form-control" defaultValue="Team Leader" type="text" />
                        </div>
                        <div className="form-group">
                            <label className="display-block">Status</label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="status" id="role_active" defaultValue="option1" checked />
                                <label className="form-check-label" htmlFor="role_active">
                                Active
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="status" id="role_inactive" defaultValue="option2" />
                                <label className="form-check-label" htmlFor="role_inactive">
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
}

export default editrole;
