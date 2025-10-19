import React, { useState } from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import user from '../../../assets/images/user.jpg';
import { useEffect } from 'react';
import axios from 'axios';
import l from "lodash";
import moment from "moment";
import { ThreeDots } from 'react-loader-spinner'
import { Link } from 'react-router-dom';
import { EndPoints } from "../../../endPoint"
import {AuthHandler} from "./../../../AuthHandler" 


function UpcomingTable() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

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
  useEffect(() => {

    void (async () => {
      const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*","username":AuthHandler.getUser().username  };
      const path = `${EndPoints.backendProd}/api/Appointments?size=15`
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
        // const today = new Date();
        const upComing = []
        appointments.forEach((appointment, index) => {
          appointment.id = index;
          // appointment.AppointmentID = appointment.ID;
          appointment.image = user;
          appointment.Name = appointment.Patient ? appointment.Patient.Name : "";
          // appointment.Department = appointment.Doctor.Department.Name;
          // const birthDate = new Date(appointment.Patient ? appointment.Patient.Dob : "22-1-1880");
          appointment.appointmentWith = appointment.Doctor ? appointment.Doctor.Name : "";
          // appointment.Age = today.getFullYear() - birthDate.getFullYear();
          const localAppDateTime = new Date(appointment.DateTime);
          appointment.Date = localAppDateTime.toLocaleDateString();
          const endTime = moment(localAppDateTime).add(parseInt(appointment.Duration), 'm').toDate();
          appointment.Timing = `${getFormattedTime(localAppDateTime)} - ${getFormattedTime(endTime)}`;
          // appointment.tags = [appointment.Status ? 'active' : 'inactive'];
          const appointmentStatus = appointment.Status;
          if (!appointmentStatus) {
            appointment.tags = [appointmentStatus ? 'active' : 'inactive']
            return;
          }
          // auto reflect status 
          const currentDate = new Date();
          const diffMonths = localAppDateTime.getMonth() - currentDate.getMonth();
          const diffSeconds = localAppDateTime.getTime() - currentDate.getTime();
          const difference_In_Time = localAppDateTime.getTime() - currentDate.getTime();
          const difference_In_Days = difference_In_Time / (1000 * 3600 * 24);

          let isActive = true;
          if ((diffMonths < 0 || diffMonths === 0) && difference_In_Days < 0) {
            isActive = false;
          }
          else if (difference_In_Days === Math.trunc(difference_In_Days)) {
            if (diffSeconds < 0) { isActive = false; }
          }
          isActive && upComing.push(appointment);
        })
        setData(upComing)
      } catch (error) {
        setLoading(false);
        console.log(error)
        return;
      }
      setLoading(false);
    })();

  }, [])

  const columns = [
    {

      dataIndex: 'Name',
      render: (text, record) => (
        <>
          <a href="#0" className="avatar avatar-sm mr-2"><img alt="" src={record.image} /></a>
          <a href="#0">{text}<span>{record.location}</span></a>
        </>
      ),
    },
    {

      dataIndex: 'appointmentWith',
      render: (text, record) => (
        <>
          <h5 className="time-title p-0">Appointment With</h5>
          <a href="#0">{text}</a>
        </>
      ),
    },
    {

      dataIndex: 'Date',
      render: (text, record) => (
        <>
          <h5 className="time-title p-0">Date</h5>
          <a href="#0">{text}</a>
        </>
      ),
    },
    {

      dataIndex: 'Timing',
      render: (text, record) => (
        <>
          <h5 className="time-title p-0">Timing</h5>
          <a href="#0">{text}</a>
        </>
      ),
    },
    {
      render: (text, record) => (
        <>
          <Link to={{ pathname: "/appointments", invoice: { ...record } }} className="btn btn-outline-primary take-btn">Take up</Link>
        </>
      ),
    },

  ]
  return (
    <div>
      {loading ? <div style={{ alignContent: "center", justifyContent: "center" }}> <ThreeDots
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        color="#009EFB"
        wrapperClass="blocks-wrapper"
      /></div> :
        <Table className="table-striped customtable white"
          style={{ overflowX: 'auto' }}
          columns={columns}
          dataSource={data}
          rowKey={record => record.id}
          pagination={false}
        />}
    </div>

  )
};

export default UpcomingTable;