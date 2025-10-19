import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Table } from "antd";
import Dropdown from "react-bootstrap/Dropdown";
import Delete from "../../../assets/images/sent.png";

import { Link } from "react-router-dom";

import { itemRender, onShowSizeChange } from "../../paginationfunction";

class Fund extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          name: "Albina Simonis",
          type: "Percentage of Basic Salary",
          employeeshare: "2%",
          share: "2%",
          tags: ["pending"],
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
        title: "Employee Name",
        dataIndex: "name",
      },
      {
        title: "Provident Fund Type",
        dataIndex: "type",
      },
      {
        title: "Employee Share",
        dataIndex: "employeeshare",
      },
      {
        title: "Organization Share",
        dataIndex: "share",
      },
      {
        title: "Role",
        dataIndex: "tags",
        render: (tags) => (
          <span>
            {tags.map((tag, i) => {
              let color =
                tag === "active"
                  ? "green"
                  : tag === "pending"
                  ? "red"
                  : "purple";
              return (
                <Dropdown key={i}>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className={`${color} custom-badge `}
                  >
                    <span>{tag}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Approved</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Pending</Dropdown.Item>
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
              <Link to="/edit-fund" className="dropdown-item">Edit</Link>
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
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Provident Fund</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/add-fund"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Fund
              </Link>
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
            <h3>Are you sure want to delete this Doctor?</h3>
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

export default Fund;
