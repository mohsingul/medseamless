import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Table } from "antd";
import Delete from "../../../assets/images/sent.png";
import Dropdown from "react-bootstrap/Dropdown";
import {
  itemRender,
  onShowSizeChange,
} from "../../../components/paginationfunction";
import { Link } from 'react-router-dom';

class LeaveType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          leavetype: "Casual Leave",
          leavedays: "12days",
          tags: ["active"],
        },

        {
          id: 2,
          leavetype: "Medical Leave",
          leavedays: "12days",
          tags: ["inactive"],
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

    const columns = [
      {
        title: "#",
        dataIndex: "id",
      },
      {
        title: "Leave type",
        dataIndex: "leavetype",
      },
      {
        title: "Leave Days",
        dataIndex: "leavedays",
      },
      {
        title: "Status",
        dataIndex: "tags",
        render: (tags) => (
          <span>
            {tags.map((tag, i) => {
              let color = tag === "active" ? "green" : "red";
              return (
                <Dropdown key={i}>
                  <Dropdown.Toggle id="dropdown-basic" className={`${color} custom-badge `}>
                    <span>{tag}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Inactive</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
              <Link to="/edit-leave" className="dropdown-item">Edit</Link>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => this.handleShow("delete")}
              >
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
      },
    ];

    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-8 col-5">
              <h4 className="page-title">Leave Type</h4>
            </div>
            <div className="col-sm-4 col-7 text-right m-b-30">
              <Link
                to="/leave-add"
                className="btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Leave Type
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  className="table-striped right"
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
          {/*modal */}
          <Modal
            show={this.state.show === "delete"}
            onHide={this.handleClose}
            centered
            className="delete-modal"
          >
            <Modal.Body closeButton className="text-center">
              <img src={Delete} alt="" width="50" height="46" />
              <h3>Are you sure want to delete this Leave Type?</h3>
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
      </div>
    );
  }
}

export default LeaveType;
