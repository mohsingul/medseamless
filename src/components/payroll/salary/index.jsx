import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Table } from "antd";
import Dropdown from "react-bootstrap/Dropdown";
import Delete from "../../../assets/images/sent.png";
import { Tag } from 'antd';
import user from '../../../assets/images/user.jpg';
import Select from 'react-select'
import DatePicker from "react-datepicker";
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";
import { Link } from 'react-router-dom';

class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      startDate: new Date(),
      data: [
        {
          id: 1,
          image: user,
          employee: 'John Doe',
          employeeid: 'FT-0001',
          email:'johndoe@example.com',
          date:'1 Jan 2013',
          role:['Nurse'],
          salary:'$59698',
          payslip:'Generate Slip',
         },
         {
          id: 2,
          image: user,
          employee: 'John Doe',
          employeeid: 'FT-0001',
          email:'johndoe@example.com',
          date:'1 Jan 2013',
          role:['Nurse'],
          salary:'$59698',
          payslip:'Generate Slip',
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
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {
    const { data } = this.state;
    const role = [
      { value: 'Employee', label: 'Employee' },
      { value: 'Manager', label: 'Manager' },
     
    ]
    const leave = [
      { value: 'Pending', label: 'Pending' },
      { value: 'Approved', label: 'Approved' },
      { value: 'Rejected', label: 'Rejected' },
    ]
    const columns = [
      {
        title: "Employee",
        dataIndex: "employee",
        render: (text, record) => (
          <div className="table-avatar">
            <a href="#0" className="avatar avatar-sm mr-2">
              <img alt="" src={record.image} />
            </a>
            {text}
          </div>
        ),
        sorter: (a, b) => a.employee.length - b.employee.length,
      },

        {
            title: "Employee Id",
            dataIndex: "employeeid",
            sorter: (a, b) => a.employeeid.length - b.employeeid.length,
        },
        {
            title: "Email",
            dataIndex: "email",
            sorter: (a, b) => a.email.length - b.email.length,
        },
        {
            title: "joining Date",
            dataIndex: "date",
            sorter: (a, b) => a.date.length - b.date.length,
        },
     
      {
        title: "Salary",
        dataIndex: "salary",
        sorter: (a, b) => a.salary.length - b.salary.length,
    },

      {
        title: "Role",
        dataIndex: "role",
        render: role => (
          <span>
            {role.map(tag => {
              let color = tag === 'Paid' ? "green" : tag === 'Sent' ? "blue" : 'orange';
              return (
                <Tag color={color} key={tag} className="custom-badge">
                  {tag}
                </Tag>
              );
            })}
          </span>
        ),
      
      },
      {
        title: "payslip",
        dataIndex: "payslip",
        render: (text, record) => (
          <Link className="btn btn-sm btn-primary generate" to="/salary-view">Generate Slip</Link>
        ),
       
      },
      {
        title: "Action",
        dataIndex: "Action",
        render: (text, record) => (
          <Dropdown className="dropdown dropdown-action">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <a
                href="#0"
                className="action-icon dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-ellipsis-v"></i>
              </a>
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Link to="/edit-salary" className="dropdown-item">Edit</Link>
              <Dropdown.Item href="#/action-2" onClick={() => this.handleShow("delete")}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
      
      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
                   <div className="row">
                    <div className="col-sm-4 col-5">
                        <h4 className="page-title">Employee Salary</h4>
                    </div>
                    <div className="col-sm-8 col-7 text-right m-b-30">
                        <Link to="/add-salary" className="btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Salary</Link>
                    </div>
                </div>
                <div className="row filter-row">
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus">
                            <label className="focus-label">Employee Name</label>
                            <input type="text" className="form-control floating" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus select-focus custom_select">
                            <label className="focus-label">Role</label>
                            <Select options={role} className="select floating"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus select-focus custom_select">
                            <label className="focus-label">Leave Status</label>
                            <Select options={leave} className="select floating"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus focused">
                            <label className="focus-label">From</label>
                            <div className="cal-icon">
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                className="form-control datetimepicker"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus focused">
                            <label className="focus-label">To</label>
                            <div className="cal-icon">
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                className="form-control datetimepicker"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <a href="#0" className="btn btn-success btn-block"> Search </a>
                    </div>
                </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table-striped"
                  style={{ overflowX: "auto" }}
                  columns={columns}
                  // bordered
                  dataSource={data}
                  rowKey={(record) => record.id}
                  showSizeChanger={true}
                  pagination={{
                    total: data.length,
                    showTotal: (total, range) =>
                      `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                    showSizeChanger: true,
                    onShowSizeChange: onShowSizeChange,
                    itemRender: itemRender,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
                {/*modal */}
                <Modal
          show={this.state.show === "delete"}
          onHide={this.handleClose}
          centered
          className="delete-modal"
        >
          <Modal.Body closeButton className="text-center">
            <img src={Delete} alt="" width="50" height="46" />
            <h3>Are you sure want to delete this Salary?</h3>
            <div className="m-t-20">
              <a className="dropdown-item btn btn-white" href="#0">
                <i className="fa fa-pencil m-r-5"></i>Close
              </a>
              <a
                className="dropdown-item btn btn-danger"
                href="#0"
                data-toggle="modal"
                data-target="#delete_doctor"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </a>
            </div>
          </Modal.Body>
        </Modal>
        {/*modal */}
      </div>
    );
  }
}

export default Salary;
