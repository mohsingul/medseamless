import React, { Component } from "react";
import Select from 'react-select';

class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
         
         },
      ],
    };
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (id) => {
    this.setState({
      show: id,
    });
  };
  render() {
    const months = [
        { value: 'Jan', label: 'Jan' },
        { value: 'Feb', label: 'Feb' },
        { value: 'Mar', label: 'Mar' }
      ]

      const years = [
        { value: '2017', label: '2017' },
        { value: '2016', label: '2016' },
        { value: '2015', label: '2015' }
      ]
    return (
      <div className="page-wrapper">
        <div className="content">
        <div className="row">
                    <div className="col-sm-12">
                        <h4 className="page-title">Attendance Sheet</h4>
                    </div>
                </div>
                <div className="row filter-row">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus">
                            <label className="focus-label">Employee Name</label>
                            <input type="text" className="form-control floating" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus select-focus custom_select">
                            <label className="focus-label">Select Month</label>
                            <Select options={months} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus select-focus custom_select">
                            <label className="focus-label">Select Year</label>
                            <Select options={years} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <a href="#0" className="btn btn-success btn-block"> Search </a>
                    </div>
                </div>
          <div className="row">
            <div className="col-md-12">
            <div className="table-responsive">
                            <table className="table table-striped custom-table mb-0">
                                <thead>
                                    <tr>
                                        <th>Employee</th>
                                        <th>1</th>
                                        <th>2</th>
                                        <th>3</th>
                                        <th>4</th>
                                        <th>5</th>
                                        <th>6</th>
                                        <th>7</th>
                                        <th>8</th>
                                        <th>9</th>
                                        <th>10</th>
                                        <th>11</th>
                                        <th>12</th>
                                        <th>13</th>
                                        <th>14</th>
                                        <th>15</th>
                                        <th>16</th>
                                        <th>17</th>
                                        <th>18</th>
                                        <th>19</th>
                                        <th>20</th>
                                        <th>22</th>
                                        <th>23</th>
                                        <th>24</th>
                                        <th>25</th>
                                        <th>26</th>
                                        <th>27</th>
                                        <th>28</th>
                                        <th>29</th>
                                        <th>30</th>
                                        <th>31</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Albina Simonis</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td>
                                            <div className="half-day"><span className="first-off"><i className="fa fa-check text-success"></i></span> <span className="first-off"><i className="fa fa-close text-danger"></i></span></div>
                                        </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td>
                                            <div className="half-day"><span className="first-off"><i className="fa fa-close text-danger"></i></span> <span className="first-off"><i className="fa fa-check text-success"></i></span></div>
                                        </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Cristina Groves</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Haylie Feeney</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Mary Mericle</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Zoe Butler</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Cristina Groves</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Marie Wells</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Henry Daniels</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Mark Hunter</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                    <tr>
                                        <td>Michael Sullivan</td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-close text-danger"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                        <td><i className="fa fa-check text-success"></i> </td>
                                    </tr>
                                </tbody>
                            </table>
						</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Attendance;
