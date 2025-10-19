import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Table } from "antd";
import Dropdown from "react-bootstrap/Dropdown";
import Delete from "../../../assets/images/sent.png";

import Select from 'react-select';
import DatePicker from "react-datepicker";
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";

import { Link } from 'react-router-dom';
class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      show: null,
      data: [
        {
          id: 1,
          item: 'Anaesthetic machine',
          from: 'Biomedical Equipment Inc',
          date: '22 Jun 2018',
          by: 'Tarah Shropshire',
          amount:'$62480',
          paidby:'Cheque',
         tags: ['Approved'],
         },
         {
          id: 2,
          item: 'Aspiration/Suction Pump',
          from: 'Medi Pro Service',
          date: '24 Jul 2018',
          by: 'Tarah Shropshire',
          amount:'$3250',
          paidby:'Cheque',
         tags: ['Pending'],
         },
         {
          id: 3,
          item: 'Stretcher',
          from: 'Hospital Equipment In',
          date: '17 Aug 2018',
          by: 'Tarah Shropshire',
          amount:'$3250',
          paidby:'Cheque',
         tags: ['Approved'],
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

const purchased = [
  { value: ' Select ', label: ' Select ' },
  { value: 'Loren Gatlin', label: 'Loren Gatlin' },
  { value: 'Tarah Shropshir', label: 'Tarah Shropshir' },
 
]
const paid = [
  { value: ' Select ', label: ' Select ' },
  { value: 'Cash', label: 'Cash' },
  { value: 'Cheque', label: 'Cheque' },
 
]

    const columns = [
     
        {
            title: "Item",
            dataIndex: "item",
            sorter: (a, b) => a.item.length - b.item.length,
        },
        {
            title: "Purchase From",
            dataIndex: "from",
            sorter: (a, b) => a.from.length - b.from.length,
        },
        {
            title: "Purchase Date",
            dataIndex: "date",
            sorter: (a, b) => a.date.length - b.date.length,
        },
        {
            title: "Purchase By",
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
        dataIndex: "paidby",
        sorter: (a, b) => a.paidby.length - b.paidby.length,
       },
      {
        title: "Status",
        dataIndex: "tags",
        render: tags => (
          <span>
          
             {tags.map((tag, i) => {
            let color = tag === 'Approved' ? "green" : tag === 'Pending' ? "red" : 'purple';
              return (
                <Dropdown key={i}>
                  <Dropdown.Toggle id="dropdown-basic" className={`${color} custom-badge `}>
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
              <Link to="/edit-expense" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
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
              <h4 className="page-title">Expense</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/add-expense"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Expense
              </Link>
            </div>
        </div>
        <div className="row filter-row">
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12 custom_select">
                        <div className="form-group form-focus">
                            <label className="focus-label">Item Name</label>
                            <input type="text" className="form-control floating" />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12 custom_select">
                        <div className="form-group form-focus select-focus">
                            <label className="focus-label">Purchased By</label>
                            <Select options={purchased} className="select floating"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12 custom_select">
                        <div className="form-group form-focus select-focus">
                            <label className="focus-label">Paid By</label>
                            <Select options={paid} className="select floating"/>
                           
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
                        <div className="form-group form-focus focused">
                            <label className="focus-label">From</label>
                            <div >
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
                            <div >
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
            <h3>Are you sure want to delete this Expense?</h3>
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

export default Expense;
