import React, {Component} from 'react';
import Select from 'react-select';


class AddTaxes extends Component{

    render(){
        const status = [
            { value: 'pending', label: 'pending' },
            { value: 'approved', label: 'approved' },
          
          ]
        return(
            <div className="page-wrapper">
                  <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Tax</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="form-group">
                                <label>Tax Name <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Tax Percentage (%) <span className="text-danger">*</span></label>
                                <input className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Status <span className="text-danger">*</span></label>
                                <Select options={status} />
                            </div>
                            <div className="m-t-20 text-center">
                                <button className="btn btn-primary submit-btn">Create Tax</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>  
          </div>    
        );
    }
};

export default AddTaxes;