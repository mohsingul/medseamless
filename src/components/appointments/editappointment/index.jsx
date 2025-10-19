import React, { Component } from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { TimePicker } from "react-tempusdominus-bootstrap";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { ThreeDots, Grid } from 'react-loader-spinner'
import { ToastContainer, toast, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { EndPoints } from "../../../endPoint"
import {AuthHandler} from "./../../../AuthHandler" 

function EditAppointments() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date())
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState("")
    const [phoneNo, setPhoneNo] = useState("")

    const [email, setEmail] = useState("")
    const [duration, setDuration] = useState({ value: '30', label: '30m' });
    const location = useLocation();

    const [active, setActive] = useState(true)
    const [appointmentId, setAppointmentId] = useState("")
    const [appDocId, setAppDocId] = useState("")
    const [selectedPatientId, setSelectedPatientId] = useState(true)
    const [patients, setPatients] = useState([{ value: 'Select', label: 'Select' }]);
    const [department, setDepartment] = useState({ value: 'Select', label: 'Select' });
    const [doctor, setDoctor] = useState([{ value: 'Select', label: 'Select', _id: "" }]);
    const durationToDisplay = [
        { value: '15', label: '15m' },
        { value: '30', label: '30m' },
        { value: '45', label: '45m' },
        { value: '60', label: '1hr' },
        { value: '75', label: '1hr 15m' },
        { value: '90', label: '1hr 30m' },
    ];

    useEffect(() => {
        setErrorMessage("")

        try {
            const appointmentData = location.appointmentData;
            if (!appointmentData) {
                setErrorMessage("Can't process appointment")
                setLoading(false)
            }
            setPatients([{ value: appointmentData.Patient.Name, label: appointmentData.Patient.Name }])
            setStartDate(new Date(appointmentData.DateTime))
            const _duration = appointmentData.Duration
            const _durationToDisplay = durationToDisplay.find((d) => {
                return d.value === _duration
            })
            setDuration({ value: appointmentData.Duration, label: `${_durationToDisplay.label}` })
            setAppointmentId(appointmentData.ID)
            setDoctor([{ value: appointmentData.Doctor, label: appointmentData.Doctor }])
            setEmail(appointmentData.Patient.Email)
            setSelectedPatientId(appointmentData.Patient._id)
            setAppDocId(appointmentData._id)
            setPhoneNo(appointmentData.Patient.Phone)
            setMessage(appointmentData.Note)
            setLoading(false)

        }
        catch (e) {
            setErrorMessage("Can't process appointment")
            setLoading(false)
        }
    }, [])
    const notify = (message, type) => {
        if (type === "s") {
            toast.success(message, {
                position: "bottom-left",
                autoClose: 5000,
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
                autoClose: 5000,
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
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
        }
    }
    /**
 * On create appointment
 */
    const handleSubmit = async () => {
        notify("Saving changes...", "i")

        setLoading(true)
        // setLoading(true);
        const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*","username":AuthHandler.getUser().username  };
        const path = `${EndPoints.backendProd}/api/Appointments/editAppointment`
        console.log(path);
        try {
            await axios.put(path,
                {
                    
                    _id: appDocId,
                    id: appointmentId,
                    patientId: selectedPatientId,
                    dateTime: startDate,
                    duration: duration.value,
                    note: message,
                    status: active
                },
                {headers}
            )
            setLoading(false);
            notify("Changes Saved", "s")
            history.push({
                pathname: '/appointments',
                search: '?query=abc',
            })
        } catch (error) {
            setLoading(false)
            notify("Unexpected error occurred", "e")


        }

    }
    const handleChange = (dataToSet, stateToSet) => {
        switch (stateToSet) {
            case "message":
                setMessage(dataToSet);
                break;
            case "duration":
                setDuration(dataToSet);
                break;
            default:
                return;
        }
    };
    return (
        <div className="page-wrapper">
            {loading && <div style={{ "background": "white", "height": "100%", "width": "100%", opacity: 0.7, position: "fixed", "zIndex": 999, "paddingTop": "44vh", "paddingBottom": "44vw", "paddingRight": "44vh", "paddingLeft": "44vw" }}>
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
            {/* {errorMessage && <div style={{ "background": "white", "height": "100%", "width": "100%", opacity: 1, position: "fixed", "zIndex": 999, "paddingTop": "44vh", "paddingBottom": "44vw", "paddingRight": "44vh", "paddingLeft": "44vw" }}>
                <Grid
                    visible={true}
                    height="80"
                    width="80"

                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    color="#b30000"
                    wrapperClass="blocks-wrapper"
                /><br />
                {errorMessage}
            </div>} */}
            <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Edit Appointment</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Appointment ID</label>
                                        <input className="form-control" type="text" value={appointmentId} readOnly="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div aria-disabled={true} className="form-group">
                                        <label>Patient Name</label>
                                        <Select value={patients.length > 0 ? patients[0] : {}} isDisabled={true} disabled={true} options={patients} className="select" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Department</label>
                                        <Select options={department} className="select" />
                                    </div>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Doctor</label>
                                        <Select isDisabled={true} options={doctor} value={doctor[0]} className="select" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <div className="cal-icon">
                                            <DatePicker
                                                showTimeSelect
                                                selected={startDate}
                                                onChange={(date) => { console.log(date.toUTCString()); setStartDate(date) }}
                                                // timeClassName={handleColor}
                                                className="form-control datetimepicker"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Duration</label>
                                        <Select value={duration} options={durationToDisplay} onChange={(e) => { handleChange(e, "duration") }} className="select" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Patient Email</label>
                                        <input className="form-control" value={email} disabled={true} type="email" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Patient Phone Number</label>
                                        <input className="form-control" value={phoneNo} disabled={true} type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea onChange={(e) => { setMessage(e.target.value) }} value={message} cols="30" rows="4" className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label className="display-block">Appointment Status</label>
                                <div className="form-check form-check-inline">
                                    <input onChange={() => { setActive(true) }} className="form-check-input" type="radio" name="status" id="product_active" defaultValue="option1" defaultChecked />
                                    <label onChange={() => { setActive(true) }} className="form-check-label" htmlFor="product_active">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={() => { setActive(false) }} className="form-check-input" type="radio" name="status" id="product_inactive" defaultValue="option2" />
                                    <label onChange={() => { setActive(false) }} className="form-check-label" htmlFor="product_inactive">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                            <div className="m-t-20 text-center">
                                <button onClick={(e) => { e.preventDefault(); handleSubmit() }} className="btn btn-primary submit-btn">Save Changes</button>
                            </div>
                        </form>
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
        </div>
    );
};

export default EditAppointments;