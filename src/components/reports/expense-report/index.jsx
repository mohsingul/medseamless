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
import DatePicker from "react-datepicker";
import Select from 'react-select';
class ExpenseReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
       startDate: new Date(),
      data: [
        {
          id:1,
          item: 'Anaesthetic machine',
          from:'Biomedical Equipment Inc',
          date:'22 Jun 2018',
          by:'Tarah Shropshire',
          amount:'$62480',
          paid:'Cheque',
          tags: ["Approved"],
         },
         {
           id:2,
          item: 'Stretcher',
          from:'Biomedical Equipment Inc',
          date:'22 Jun 2018',
          by:'	Loren Gatlin',
          amount:'$62480',
          paid:'Cash',
          tags: ["Pending"],
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

    const options = [
      { value: 'Select buyer', label: 'Select buyer' },
      { value: 'Loren Gatlin', label: 'Loren Gatlin' },
      { value: 'Tarah Shropshire', label: 'Tarah Shropshire' }
    ]
    const { data } = this.state;
 
    const columns = [
      {
        title: "Item",
        dataIndex: "item",
        sorter: (a, b) => a.item.length - b.item.length,
      },
      {
        title: "Purchase type",
        dataIndex: "from",
        sorter: (a, b) => a.from.length - b.from.length,
      },
      {
        title: "Purchase Days",
        dataIndex: "date",
        sorter: (a, b) => a.date.length - b.date.length,
      },
      {
        title: "Purchased By",
        dataIndex: "by",
        sorter: (a, b) => a.by.length - b.by.length,
      },
      {
        title: "Amount",
        dataIndex: "amount",
        sorter: (a, b) => a.amount.length - b.amount.length,
      },
      {
        title: "Paid By",
        dataIndex: "paid",
        sorter: (a, b) => a.paid.length - b.paid.length,
      },
      {
        title: "Status",
        dataIndex: "tags",
        render: (tags) => (
          <span>
            {tags.map((tag, i) => {
              let color = tag === "Approved" ? "green" : "red";
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
              <Link to="/edit-expense-report" class="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
              <Dropdown.Item
                href="#/action-2"
                onClick={() => this.handleShow("delete")}
              >
               <i className="fa fa-trash-o m-r-5"></i> Delete
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
              <h4 className="page-title">Expense Report</h4>
            </div>
       </div>
       <div className="row filter-row">
                    <div className="col-sm-6 col-md-3">
                        <div className="form-group form-focus select-focus custom_select">
                            <label className="focus-label">Purchased By</label>
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
              <h3>Are you sure want to delete this expense report?</h3>
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

export default ExpenseReport;
