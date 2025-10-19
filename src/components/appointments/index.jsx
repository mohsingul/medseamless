import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Table, Dropdown, Button, Menu } from "antd";
import { EllipsisOutlined } from '@ant-design/icons';
import Delete from "../../assets/images/sent.png";
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import IMG01 from "../../assets/images/user.jpg";
import l from "lodash";
import moment from "moment";
import { ToastContainer, toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner'
import { EndPoints } from "../../endPoint"
import CountdownTimer from './countdownTimer';
import { AuthHandler } from "./../../AuthHandler"
function Appointments() {
  const [show, setShow] = useState(null);
  const [data, setData] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState();
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const getFormattedTime = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();

    // Check whether AM or PM
    const newformat = hours >= 12 ? 'PM' : 'AM';

    // Find current hour in AM-PM Format
    hours = hours % 12;

    // To display "0" as "12"
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return (hours + ':' + minutes + ' ' + newformat);
  }
  const notify = (message, type, autoClose) => {
    if (type === "s") {
      toast.success(message, {
        position: "bottom-left",
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
    }
    else if (type === "e") {
      toast.error(message, {
        position: "bottom-left",
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
    }
    else if (type === "i") {
      toast.info(message, {
        position: "bottom-left",
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
    }
  }
  useEffect(() => {
    notify("Overdue appointments would automatically set to inactive. Update appointment Date and Time to re-active", "i", 20000)
    void (async () => {
      const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "username": AuthHandler.getUser().username };
      const path = `${EndPoints.backendProd}/api/Appointments?size=20`
      console.log(path);
      try {
        const response = await axios.get(path,
          { headers }
        )
        // {
        //     id: 3,
        //     AppointmentID: 'APT0003',
        //     image: IMG01,
        //     Name: "Denise Stevens",
        //     Age: "38",
        //     Doctor: "Henry Daniels	",
        //     Department: 'Cardiology',
        //     Date: '30 Dec 2018',
        //     Time: '10:00am - 11:00am',
        //     tags: ['active'],
        //   },
        console.log(response)
        const appointments = l.cloneDeep(response.data.Info);
        const today = new Date();
        appointments.forEach((appointment, index) => {
          appointment.id = index;
          appointment.AppointmentID = appointment.ID;
          appointment.image = IMG01;
          appointment.Name = appointment.Patient ? appointment.Patient.Name : "";
          appointment.Phone = appointment.Patient ? appointment.Patient.Phone : "";
          // appointment.Department = appointment.Doctor.Department.Name;
          const birthDate = new Date(appointment.Patient ? appointment.Patient.Dob : "22-1-1880");
          appointment.Doctor = appointment.Doctor ? appointment.Doctor.Name : "";
          appointment.Age = today.getFullYear() - birthDate.getFullYear();
          const localAppDateTime = new Date(appointment.DateTime);
          appointment.Date = localAppDateTime;
          const endTime = moment(localAppDateTime).add(parseInt(appointment.Duration), 'm').toDate();
          appointment.Time = `${getFormattedTime(localAppDateTime)} - ${getFormattedTime(endTime)}`;
          // appointment.tags = [appointment.Status ? 'active' : 'inactive'];
          const appointmentStatus = appointment.Status;
          if (!appointmentStatus) {
            appointment.tags = [appointmentStatus ? 'active' : 'inactive']
            return;
          }
          appointment.tags = ['inactive', 'overdue']

        })
        setData(appointments)
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
    setSelectedAppointment(record);
  };
  const onDelete = async () => {
    setDeleting(true);

    if (!selectedAppointment || !selectedAppointment._id) {
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
    const path = `${EndPoints.backendProd}/api/Appointments/deleteAppointment/`
    console.log(path);
    try {
      await axios.post(path,
        {
          id: selectedAppointment._id
        },
        { headers }
      )

      setDeleting(false);
      let indexOfRowToDelete = -1
      data.find((row, index) => {
        row._id === selectedAppointment._id && (indexOfRowToDelete = index);
      })
      const copiedData = data;
      indexOfRowToDelete !== -1 && copiedData.splice(indexOfRowToDelete, 1);
      setData(copiedData)
      setShow(null)
      toast.success('Record deleted successfully',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#009EFB',
            color: '#FFFFFF',
          },
          position: "bottom-left",
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
  const columns = [
    {
      title: "ID",
      dataIndex: "AppointmentID",

    },
    {
      title: "Patient Name",
      dataIndex: "Name",
      render: (text, record) => (
        <div className="table-avatar">
          <a href="#0" className="avatar avatar-sm mr-2">
            <img alt="" src={record.image} />
          </a>
          {text}
        </div>
      ),

    },
    {
      title: "Age",
      dataIndex: "Age",
      render: (text, record) => <div className="text-center">{text}</div>,

    },
    {
      title: "Doctor Name",
      dataIndex: "Doctor",

    },
    // {
    //   title: "Department",
    //   dataIndex: "Department",

    // },
    {
      title: "Appointment Date",
      dataIndex: "Date",
      render: Date => (
        <span>
          {Date.toLocaleDateString()}
        </span>
      ),

    },
    {
      title: "Appointment Time",
      dataIndex: "Time",

    },
    {
      title: "Patient phone",
      dataIndex: "Phone",

    },
    {
      title: "Due In",
      dataIndex: "Date",
      render: Date => (
        <span>
          {
            <CountdownTimer targetDate={Date} />
          }
        </span>
      ),

    },
    // {
    //   title: "Status",
    //   dataIndex: "tags",
    //   render: tags => (
    //     <span>
    //       {tags.map(tag => {
    //         let color = tag === 'active' ? "green" : 'red';
    //         return (
    //           <Tag color={color} key={tag} className="custom-badge">
    //             {tag}
    //           </Tag>

    //         );
    //       })}
    //     </span>
    //   ),

    // },

    {
      title: "Action",
      dataIndex: "Action",
      render: (text, record) => {
        const menu = (
          <Menu>
            <Menu.Item key="edit">
              <Link to={{ pathname: "/edit-appointments", appointmentData: { ...record } }} >
                <i className="fa fa-pencil m-r-5"></i>Edit
              </Link>
            </Menu.Item>
            <Menu.Item key="delete" onClick={() => handleShow("delete", record)}>
              <i className="fa fa-trash-o m-r-5"></i>Delete
            </Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} trigger={['click']} className="dropdown dropdown-action" >
            <Button type="text" icon={<EllipsisOutlined />} />
          </Dropdown >
        );

      },

    },
  ];

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
            <h4 className="page-title">Appointments</h4>
          </div>
          <div className="col-sm-8 col-9 text-right m-b-20">
            <Link
              to="/add-appointments"
              className="btn btn btn-primary btn-rounded float-right"
            >
              <i className="fa fa-plus"></i> Add Appointments
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">

            <Table
              className="table-striped"
              style={{ overflowX: "scroll" }}
              columns={columns}
              // bordered
              dataSource={[...data]}
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
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        theme="dark"
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/*modal */}
      <Modal
        show={show === "delete"}
        onHide={handleClose}
        centered
        className="delete-modal"
      >
        <Modal.Body closeButton className="text-center">

          <img src={Delete} alt="" width="50" height="46" />
          {deleting ? <h3>Deleting record...</h3> : <h3>Are you sure want to delete this Appointment?</h3>}
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
      {/*modal */}
    </div>
  );

}

export default Appointments;
