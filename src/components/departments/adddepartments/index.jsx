import React, {Component} from 'react';



class AddDepartment extends Component{

    render(){
        return(
            <div className="page-wrapper">
                          <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Department</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
							<div className="form-group">
								<label>Department Name</label>
								<input className="form-control" type="text" />
							</div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea cols="30" rows="4" className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label className="display-block">Department Status</label>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="status" id="product_active" value="option1" defaultChecked />
									<label className="form-check-label" htmlFor="product_active">
									Active
									</label>
								</div>
								<div className="form-check form-check-inline">
									<input className="form-check-input" type="radio" name="status" id="product_inactive" value="option2" />
									<label className="form-check-label" htmlFor="product_inactive">
									Inactive
									</label>
								</div>
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Department</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
};

export default AddDepartment;