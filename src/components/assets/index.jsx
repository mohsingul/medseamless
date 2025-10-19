import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Modal } from "react-bootstrap";
import { Table } from "antd";
import Delete from "../../assets/images/sent.png";
import Dropdown from "react-bootstrap/Dropdown";
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import { Link } from 'react-router-dom';

class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      startDate: new Date(),
      data: [
        {
          id: 1,
          user: "John Doe",
          name: "Anaesthetic machine",
          assetid: "#AST-0001",
          date: "22 Jun 2018",
          warrenty: "4 Years",
          warrentyend: "22 Jun 2022",
          amount: "$62480",
          tags: ["active"],
        },
        {
          id: 2,
          user: "John Doe",
          name: "Anaesthetic machine",
          assetid: "#AST-0001",
          date: "22 Jun 2018",
          warrenty: "4 Years",
          warrentyend: "22 Jun 2022",
          amount: "$62480",
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
        title: "Asset User",
        dataIndex: "user",
        sorter: (a, b) => a.user.length - b.user.length,
      },
      {
        title: "Asset Name",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: "Asset ID",
        dataIndex: "assetid",
        sorter: (a, b) => a.assetid.length - b.assetid.length,
      },
      {
        title: "Purchase Date",
        dataIndex: "date",
        sorter: (a, b) => a.date.length - b.date.length,
      },
      {
        title: "Warrenty",
        dataIndex: "warrenty",
        sorter: (a, b) => a.warrenty.length - b.warrentylength,
      },
      {
        title: "Warrenty End",
        dataIndex: "warrentyend",
        sorter: (a, b) => a.warrentyend.length - b.warrentyend.length,
      },
      {
        title: "Amount",
        dataIndex: "amount",
        sorter: (a, b) => a.amount.length - b.amount.length,
      },
      {
        title: "Status",
        dataIndex: "tags",
        render: (tags) => (
          <span>
            {tags.map((tag, i) => {
              let color = tag === "active" ? "green" : "red";
              return (
                <Dropdown  key={i}>
                  <Dropdown.Toggle id="dropdown-basic" className={`${color} custom-badge `}>
                    <span>{tag}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Pending</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Approved</Dropdown.Item>
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
              <Link to="/assets-edit">Edit</Link>
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
            <div className="col-sm-8 col-6">
              <h4 className="page-title">Assets</h4>
            </div>
            <div className="col-sm-4 col-6 text-right m-b-30">
              <Link to ="/assets-add"
                className="btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Asset
              </Link>
            </div>
          </div>
          <div className="row filter-row">
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus focused">
                <label className="focus-label">Employee Name</label>
                <input type="text" className="form-control floating" />
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus focused">
                <label className="focus-label">From</label>
                <div className="cal-icon">
                  <DatePicker
                    className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    placeholderText="From"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="form-group form-focus">
                <label className="focus-label">To</label>
                <div className="cal-icon">
                  <DatePicker
                    className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    placeholderText="To"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <a href="#0" className="btn btn-success btn-block">
                {" "}
                Search{" "}
              </a>
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
          {/*modal */}
          <Modal
            show={this.state.show === "delete"}
            onHide={this.handleClose}
            centered
            className="delete-modal"
          >
            <Modal.Body closeButton className="text-center">
              <img src={Delete} alt="" width="50" height="46" />
              <h3>Are you sure want to delete this Assets?</h3>
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
      </div>
    );
  }
}

export default Assets;
