import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Table } from "antd";
import Dropdown from "react-bootstrap/Dropdown";
import Delete from "../../../assets/images/sent.png";
import { Tag } from 'antd';
import user from '../../../assets/images/user.jpg'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";


class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          image: user,
          Name: 'Albina Simonis',
          EmployeeID: 'NS-0001',
          Email: 'albinasimonis@example.com',
          Mobile: '	828-634-2744',
          Date: '7 May 2015',
         tags: ['Nurse'],
         },
         {
            id: 2,
            image: user,
            Name: 'Cristina Groves',
            EmployeeID: 'NS-0002',
            Email: 'cristinagroves@example.com',
            Mobile: '928-344-5176',
            Date: '7 May 2015',
          tags: ['Doctor'],
         },
         {
            id: 3,
            image: user,
            Name: 'Mary Mericle',
            EmployeeID: 'NS-0003',
            Email: 'marymericle@example.com',
            Mobile: '603-831-4983',
            Date: '7 May 2015',
          tags: ['Accountant'],
         },
         {
            id: 4,
            image: user,
            Name: 'Haylie Feeney',
            EmployeeID: 'NS-0004',
            Email: 'hayliefeeney@example.com',
            Mobile: '828-634-2744',
            Date: '7 May 2015',
          tags: ['Accountant'],
         },
         {
            id: 5,
            image: user,
            Name: 'Zoe Butler',
            EmployeeID: 'NS-0005',
            Email: 'zoebutler@example.com',
            Mobile: '444-555-9999',
            Date: '7 May 2015',
          tags: ['Accountant'],
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
    const { data } = this.state;
    const role = [
      { value: 'Nurse', label: 'Nurse' },
      { value: 'Doctor', label: 'Doctor' },
      { value: 'Accountant', label: 'Accountant' },
      { value: 'Laboratorist', label: 'Laboratorist' },
    ]
    const columns = [
        {
            title: "Name",
            dataIndex: "Name",
            render: (text, record) => (
              <div className="table-avatar">
                <a href="#0" className="avatar avatar-sm mr-2">
                  <img alt="" src={record.image} />
                </a>
                {text}
              </div>
            ),
           
          },
        {
            title: "Employee ID",
            dataIndex: "EmployeeID",
        },
        {
            title: "Email",
            dataIndex: "Email",
        },
        {
            title: "Mobile",
            dataIndex: "Mobile",
        },
        {
            title: "Join Date",
            dataIndex: "Date",
        },
      {
        title: "Role",
        dataIndex: "tags",
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag === 'Nurse' ? "green" : tag === 'Accountant' ? "purple" : 'red';
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
              <Link to="/edit-employee" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
              <Dropdown.Item href="#/action-2" onClick={() => this.handleShow("delete")}><i className="fa fa-trash-o m-r-5"></i>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
       
      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Employee</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
              to="/add-employee"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Employee
              </Link>
            </div>
        </div>
          <div className="row filter-row">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus">
                            <label className="focus-label">Employee ID</label>
                            <input type="text" className="form-control floating" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus">
                            <label className="focus-label">Employee Name</label>
                            <input type="text" className="form-control floating" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus select-focus focused custom_select">
                            <label className="focus-label">Role</label>
                            <Select options={role} className="select "/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
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
            <h3>Are you sure want to delete this Employee?</h3>
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

export default EmployeeList;
