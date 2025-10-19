import React, { Component } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import user from "../../../assets/images/user.jpg";

class PatientsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image: user,
          Name: "John Doe",
          mail: "Johndoe21@gmail.com",
          phone: "+1-202-555-0125",
          action: "Fever",
        },
        {
          id: 2,
          image: user,
          Name: "Richardz",
          mail: "Richard123@yahoo.com",
          phone: "202-555-0127",
          action: "Cancer",
        },
        {
          id: 3,
          image: user,
          Name: "Villiam",
          mail: "Johndoe21@gmail.com",
          phone: "+1-202-555-0106",
          action: "Eye",
        },
      ],
    };
  }
  render() {
    const { data } = this.state;

    const columns = [
      {
        dataIndex: "Name",
        render: (text, record) => (
          <>
            <a href="#0" className="avatar avatar-sm mr-2">
              <img alt="" src={record.image} />
            </a>
            <a href="#0">{text}</a>
          </>
        ),
      },
      {
        dataIndex: "mail",
        render: (text, record) => (
          <>
            <h5 className="time-title p-0">{text}</h5>
          </>
        ),
      },
      {
        dataIndex: "phone",
        render: (text, record) => (
          <>
            <h5 className="time-title p-0">{text}</h5>
          </>
        ),
      },
      {
        dataIndex: "action",
        render: (text, record) => (
          <a href="#0" className="btn btn-primary btn-primary-one float-right">
            {text}
          </a>
        ),
      },
    ];
    return (
      <div>
        <Table
          className="table-striped customtable white"
          style={{ overflowX: "auto" }}
          columns={columns}
          dataSource={data}
          rowKey={(record) => record.id}
          pagination={false}
        />
      </div>
    );
  }
}

export default PatientsTable;
