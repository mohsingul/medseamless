import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Table } from "antd";
import Dropdown from "react-bootstrap/Dropdown";
import Delete from "../../../assets/images/sent.png";
import user from "../../../assets/images/user.jpg";
import { Tag } from 'antd';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";
import { Link } from 'react-router-dom';

class Leave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      startDate: new Date(),
      data: [
        {
          id: 1,
          image: user,
          Name:'Haylie Feeney',
          Employee: 'Laboratorist',
          Leave: 'Casual Leave',
          From:'13 May 2018',
          To:'13 May 2018',
          Days: "2 days",
          Reason: 'Not feeling well',
         tags: ['New'],
         },
         {
            id: 2,
            image: user,
            Name:'Cristina Groves',
            Employee: 'Doctor',
            Leave: 'Medical Leave',
            From:'13 Jul 2018',
            To:'15 Jul 2018',
            Days: "3 days",
            Reason: 'Going to Vacation',
           tags: ['Declined'],
           },
           {
            id: 3,
            image: user,
            Name:'Mary Mericle',
            Employee: 'Accountant',
            Leave: 'Casual Leave',
            From:'27 Jun 2018',
            To:'28 Jun 2018',
            Days: "2 days",
            Reason: 'Going to Native Place',
           tags: ['Approved'],
           },
           {
            id: 4,
            image: user,
            Name:'Albina Simonis',
            Employee: 'Nurse',
            Leave: 'Casual Leave',
            From:'8 Aug 2018',
            To:'8 Aug 2018',
            Days: "1 days",
            Reason: 'Family Function',
           tags: ['New'],
           },


      ],
    };
  }
  handleChange = date => {
    this.setState({
      startDate: date
    });
  }; 
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
    const type = [
      { value: 'select', label: 'select' },
      { value: 'Casual Leave', label: 'Casual Leave' },
      { value: 'Medical Leave', label: 'Medical Leave' }
    ]
    const status = [
      { value: 'Pending', label: 'Pending' },
      { value: 'Approved', label: 'Approved' },
      { value: 'Rejected', label: 'Rejected' }
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
            sorter: (a, b) => a.Name.length - b.Name.length,
          },
        {
            title: "Leave Type",
            dataIndex: "Leave",
            sorter: (a, b) => a.Leave.length - b.Leave.length,
        },
        {
            title: "From",
            dataIndex: "From",
            sorter: (a, b) => a.From.length - b.From.length,
        },
        {
            title: "To",
            dataIndex: "To",
            sorter: (a, b) => a.To.length - b.To.length,
        },
        {
            title: "No of Days",
            dataIndex: "Days",
            sorter: (a, b) => a.Days.length - b.Days.length,
        },
        {
            title: "Reason",
            dataIndex: "Reason",
            sorter: (a, b) => a.Reason.length - b.Reason.length,
        },
      {
        title: "Status",
        dataIndex: "tags",
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag === 'Approved' ? "green" : tag === 'Declined' ? "red" : "purple";
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
              <Link to="/leave-edit" className="dropdown-item">Edit</Link>
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
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Leave Request</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/add-leave"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Leave
              </Link>
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
                        <div className="form-group form-focus select-focus focused custom_select ">
                            <label className="focus-label">Leave Type</label>
                            <Select options={type} className="select floating"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus select-focus focused custom_select ">
                            <label className="focus-label">Leave Status</label>
                            <Select options={status} className="select floating"/>
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
                    <div className="col-sm-6 col-md-3 col-xl-2 col-12">
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
            <h3>Are you sure want to delete this Leave Request?</h3>
            <div className="m-t-20">
              <a className="dropdown-item btn btn-white" href="#0">
                <i className="fa fa-pencil m-r-5"></i> Close
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

export default Leave;
