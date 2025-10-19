import { Table, Dropdown, Menu,Button } from "antd";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import LoadingOverlay from 'react-loading-overlay';
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Delete from "../../assets/images/sent.png";
import { Toaster, toast } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner'
import { EndPoints } from "../../endPoint"
import { AuthHandler } from "./../../AuthHandler"
import { EllipsisOutlined } from '@ant-design/icons';
import l from "lodash";

import axios from 'axios';

import IMG01 from "../../assets/images/user.jpg";
import {
  itemRender,
  onShowSizeChange
} from "../../components/paginationfunction";

function Patients(props) {
  const [show, setShow] = useState(null);
  const [data, setData] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState();
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)

  const [filteredData, setFilteredData] = useState(null);
  const [filterPateintName, setFilterPatientName] = useState("")
  const [filterPatientPhoneNum, setFilterPatientPhoneNum] = useState("")


  useEffect(() => {

    void (async () => {
      const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "username": AuthHandler.getUser().username };
      const path = `${EndPoints.backendProd}/api/Patients?size=200`
      console.log(path);
      try {
        const response = await axios.get(path,
          { headers }
        )
        console.log(response)
        const patients = response.data.Info;
        const today = new Date();
        patients.forEach((patient) => {
          const birthDate = new Date(patient.Dob);
          const age = today.getFullYear() - birthDate.getFullYear()
          patient.Age = age;
          patient.image = IMG01;
        })
        setData(response.data.Info)
      } catch (error) {
        console.log(error)
        return;
      }
      setLoading(false);
    })();

  }, [])

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (id, record) => {
    setShow(id)
    setSelectedPatient(record);
  };

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
      title: "Age",
      dataIndex: "Age",
      render: (text, record) => <div className="text-center">{text}</div>,
      sorter: (a, b) => a.Age.length - b.Age.length,
    },
    {
      title: "Address",
      dataIndex: "Address",
      sorter: (a, b) => a.Address.length - b.Address.length,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      sorter: (a, b) => a.Phone.length - b.Phone.length,
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a, b) => a.Email.length - b.Email.length,
    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, record) => {
        const menu = (
          <Menu>
            <Menu.Item key="edit">
              <Link to={{ pathname: "/edit-patients", patient: { record } }}>
                <i className="fa fa-pencil m-r-5"></i>Edit
              </Link>
            </Menu.Item>
            <Menu.Item key="delete" onClick={() => handleShow("delete", record)}>
              <i className="fa fa-trash-o m-r-5"></i>Delete
            </Menu.Item>
          </Menu>
        );
  
        return (
          <Dropdown overlay={menu} trigger={['click']} className="dropdown dropdown-action">
            <Button type="text" icon={<EllipsisOutlined />} />
          </Dropdown>
        );
      },
    },
  ];

  const onDelete = async () => {
    setDeleting(true);

    if (!selectedPatient || !selectedPatient._id) {
      toast('UID not found',
        {
          icon: 'X',
          style: {
            borderRadius: '10px',
            background: '#F62D51',
            color: '#FFFFFF',
          },
          position: "bottom-center",
          duration: 5000
        }
      );
    }
    const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "username": AuthHandler.getUser().username };
    const path = `${EndPoints.backendProd}/api/Patients/deletePatient/`
    console.log(path);
    try {
      await axios.post(path,
        {
          id: selectedPatient._id
        },
        { headers }
      )

      setDeleting(false);
      let indexOfRowToDelete = -1
      data.find((row, index) => {
        row._id === selectedPatient._id && (indexOfRowToDelete = index);
      })
      const copiedData = data;
      indexOfRowToDelete !== -1 && copiedData.splice(indexOfRowToDelete, 1);
      setData(copiedData)
      setShow(null)
      toast('Record deleted successfully',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#009EFB',
            color: '#FFFFFF',
          },
          position: "bottom-center",
          duration: 5000
        }
      );
    } catch (error) {
      console.log(error)
      setDeleting(false);
      toast(error.message,
        {
          icon: 'X',
          style: {
            borderRadius: '10px',
            background: '#F62D51',
            color: '#FFFFFF',
          },
          position: "bottom-center",
          duration: 5000
        }
      );
      return;
    }

  }

  const applyFilter = () => {
    const dataSourceCopy = l.cloneDeep(data);
    const applyPatientNameFilter = filterPateintName !== ""
    const applyFilterPatientPhone = filterPatientPhoneNum !== ""
    const filteredDataSource = dataSourceCopy.filter((record) => {
      let satisfiesName = true
      let satisfiesPhoneNo = true
      if (applyPatientNameFilter)
        satisfiesName = record.Name.toLowerCase().includes(filterPateintName.toLowerCase())
      if (applyFilterPatientPhone)
      satisfiesPhoneNo = record.Phone.toLowerCase().includes(filterPatientPhoneNum.toLowerCase())

      return satisfiesName && satisfiesPhoneNo

    })
    // let notificationAlert = ""
    // let notificationType = "i";
    // if (!applyDateFilter && !applyStatusFilter && !applyPatientNameFilter) { notificationAlert = "No filter selected"; notificationType = "e" }
    // else { notificationAlert = "Showing fitlered results"; notificationType = "i" }
    // notify(notificationAlert, notificationType)
    setFilteredData(filteredDataSource.length === data.length ? null : filteredDataSource);
  }
  const handleInputChange = (e) => {
    if (/^\d*$/.test(e.target.value)) {  // Allow only numbers
      setFilterPatientPhoneNum(e.target.value)
    }
  };
  return (
    <div className="page-wrapper">
      {loading && <div style={{ "background": "white", "height": "100%", "width": "100%", position: "fixed", "zIndex": 999, "paddingTop": "44vh", "paddingBottom": "44vw", "paddingRight": "44vh", "paddingLeft": "44vw" }}>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          color="#009EFB"
          wrapperClass="blocks-wrapper"
        /><br />
      </div>}
      <div className="content">
        <div className="row">
          <div className="col-sm-4 col-3">
            <h4 className="page-title">Patients</h4>
          </div>
          <div className="col-sm-8 col-9 text-right m-b-20">
            <Link
              to="/add-patients"
              className="btn btn btn-primary btn-rounded float-right"
            >
              <i className="fa fa-plus"></i> Add Patient
            </Link>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-3 col-md-2">
            <div className="form-group form-focus focused">
              <label className="focus-label">Name</label>
              <div >
                <input
                  type="text"
                  value={filterPateintName}
                  onChange={(e) => { setFilterPatientName(e.target.value) }}
                  className="form-control datetimepicker"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-2">
            <div className="form-group form-focus focused">
              <label className="focus-label">Phone No</label>
              <div >
                <input
                  type="text"
                  value={filterPatientPhoneNum}
                  onChange={(e) => { handleInputChange(e) }}
                  className="form-control datetimepicker"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-5 col-md-3">
            <button type="button" onClick={(e) => { e.preventDefault(); applyFilter() }} className="btn btn-success">Filter</button>
            {filteredData && <button type="button" onClick={() => { setFilteredData(null); setFilterPatientName(""); setFilterPatientPhoneNum("") }} className="btn btn-info">Clear filter</button>}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
                className="table-striped"
                style={{ overflowX: "scroll" }}
                columns={columns}
                // bordered
                dataSource={filteredData ?? data}
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
        show={show === "delete"}
        onHide={handleClose}
        centered
        className="delete-modal"
      >
        <Modal.Body closeButton className="text-center">

          <img src={Delete} alt="" width="50" height="46" />
          {deleting ? <h3>Deleting record...</h3> : <h3>Are you sure want to delete this Patient?</h3>}
          <ClipLoader color={'black'} loading={deleting} size={30} />
          {!deleting && <div className="m-t-20">
            <a className="dropdown-item btn btn-white" onClick={() => setShow(false)} href="#0">
              Close
            </a>
            <a
              className="dropdown-item btn btn-danger"
              href="#0"
              data-toggle="modal"
              data-target="#delete_doctor"
              onClick={onDelete}
            >
              <i className="fa fa-trash-o m-r-5"></i> Delete
            </a>
          </div>}
        </Modal.Body>
      </Modal>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  );
}

export default Patients;
