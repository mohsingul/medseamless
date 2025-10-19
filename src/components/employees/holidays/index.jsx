import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Table } from "antd";
import Dropdown from "react-bootstrap/Dropdown";
import Delete from "../../../assets/images/sent.png";
import { Link } from 'react-router-dom';

import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";


class Holidays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
      data: [
        {
          id: 1,
          Title: 'New Year',
          Holiday: '1 Jan 2018',
          Day: 'Monday',
          enabled: false
         },
         {
            id: 2,
            Title: 'New Year',
            Holiday: '13 Apr 2018',
            Day: 'Friday',
            enabled: false
           }, 
           {
            id: 3,
            Title: 'May Day',
            Holiday: '1 May 2018',
            Day: 'Tuesday',
            enabled: false
           },
           {
            id: 4,
            Title: 'Memorial Day',
            Holiday: '28 May 2018',
            Day: 'Monday',
            enabled: false
           },
           {
            id: 5,
            Title: 'Bakrid',
            Holiday: '23 Aug 2018',
            Day: 'Wednesday',
            enabled: true
           },
           {
            id: 6,
            Title: 'Deepavali',
            Holiday: '18 Oct 2018',
            Day: 'Wednesday',
            enabled: true
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
            title: "Title",
            dataIndex: "Title",
        },
        {
            title: "Holiday Date",
            dataIndex: "Holiday",
        },
        {
            title: "Day",
            dataIndex: "Day",
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
              <Link to="/edit-holidays" class="dropdown-item">Edit</Link>
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
              <h4 className="page-title">Holidays</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/add-holidays"
                className="btn btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Holidays
              </Link>
            </div>
        </div>
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <Table
                  rowClassName={record => !record.enabled && "disabled-row"}
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
            <h3>Are you sure want to delete this Holiday?
 </h3>
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

export default Holidays;
