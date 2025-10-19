import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Table } from "antd";
import Delete from "../../../assets/images/sent.png";
import Dropdown from "react-bootstrap/Dropdown";
import {
  itemRender,
  onShowSizeChange,
} from "../../../components/paginationfunction";
import { Tag } from 'antd';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';

class ExpenseInvoiceReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      startDate: new Date(),
      data: [
        {
          id:1,
          Invoice: 'Anaesthetic machine',
          client:'Biomedical Equipment Inc',
          date:'22 Jun 2018',
          due:'Tarah Shropshire',
          amount:'$62480',
          status:'Cheque',
          tags: ["Paid"],
         },
         {
          id:2,
          Invoice: 'Anaesthetic machine',
          client:'Biomedical Equipment Inc',
          date:'22 Jun 2018',
          due:'Tarah Shropshire',
          amount:'$62480',
          status:'Cheque',
          tags: ["Paid"],
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

    const options = [
      { value: 'Select buyer', label: 'Select buyer' },
      { value: 'Loren Gatlin', label: 'Loren Gatlin' },
      { value: 'Tarah Shropshire', label: 'Tarah Shropshire' }
    ]
    const { data } = this.state;
 
    const columns = [
      {
        title: "#",
        dataIndex: "id",
        sorter: (a, b) => a.Invoice.length - b.Invoice.length,
      },
      {
        title: "Invoice Number",
        dataIndex: "Invoice",
        sorter: (a, b) => a.Invoice.length - b.Invoice.length,
      },
      {
        title: "Client",
        dataIndex: "client",
        sorter: (a, b) => a.client.length - b.client.length,
      },
      {
        title: "Created Date",
        dataIndex: "date",
        sorter: (a, b) => a.date.length - b.date.length,
      },
      {
        title: "Due Date",
        dataIndex: "due",
        sorter: (a, b) => a.by.length - b.by.length,
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
            {tags.map((tag) => {
              let color = tag === "Paid" ? "green" : "red";
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
              <Link to="/edit-invoice" class="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
              <Link to="/edit-invoice" class="dropdown-item"><i className="fa fa-eye m-r-5"></i>View</Link>
              <Dropdown.Item href="#0" ><i className="fa fa-file-pdf-o m-r-5"></i>Download</Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => this.handleShow("delete")}
              >
                <i className="fa fa-trash-o m-r-5"></i>Delete
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
              <h4 className="page-title">Invoice Report</h4>
            </div>
       </div>
       <div className="row filter-row">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus select-focus custom_select">
                            <label className="focus-label">Patient</label>
                            <Select options={options} className="select-menu"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus focused">
                            <label className="focus-label">From</label>
                            <div className="cal-icon">
                            <DatePicker
                              selected={this.state.startDate}
                              onChange={this.handleChange}
                              className="form-control datetimepicker floating form-focus"
                              />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus focused">
                            <label className="focus-label">To</label>
                            <div className="cal-icon">
                            <DatePicker
                              selected={this.state.startDate}
                              onChange={this.handleChange}
                              className="form-control datetimepicker floating form-focus"
                              />
                            </div>
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
                  className="table-striped right"
                  style={{ overflowX: "scroll" }}
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
              <h3>Are you sure want to delete this invoice report?</h3>
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

export default ExpenseInvoiceReport;
