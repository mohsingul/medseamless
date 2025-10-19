import axios from 'axios';
import l from "lodash";
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';
import Select from 'react-select';
import { useHistory } from "react-router-dom"
import { EndPoints } from "../../../endPoint"
import {AuthHandler} from "./../../../AuthHandler" 


function AddAppointments() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [appointmentId, setAppointmentId] = useState("");
    const [patientName, setPatientName] = useState("");
    const [patientPhoneNo, setPatientPhoneNo] = useState("");
    const [department, setDepartment] = useState("");
    const [doctor, setDoctor] = useState("");
    const [patientEmail, setPatientEmail] = useState("");
    const [Message, setMessage] = useState("");
    const [status, setStatus] = useState(true);
    const [loading, setLoading] = useState(true);
    const [duration, setDuration] = useState({ value: '30', label: '30m' });
    const [patientsToDisplay, setPatientsToDisplay] = useState([
        { value: 'Select', label: 'Select', }
    ]);
    const [phoneNoToDisplay, setPhoneNoToDisplay] = useState([
        { value: 'Select', label: 'Select', }
    ]);
    const [doctorsToDisplay, setDoctorsToDisplay] = useState([
        { value: 'Select', label: 'Select', }
    ]);
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
    const handleChange = (dataToSet, stateToSet) => {
        switch (stateToSet) {
            case "patientName":
                const phoneNoSelect = phoneNoToDisplay.find((_patient) => {
                    return _patient._id === dataToSet._id;
                })
                console.log(dataToSet)
                setPatientName(dataToSet);
                setPatientPhoneNo(phoneNoSelect)
                setPatientEmail(dataToSet.patientEmail)
                break;
            case "phoneNo":
                const patient = patientsToDisplay.find((_patient) => {
                    return _patient._id === dataToSet._id;
                })
                setPatientName(patient);
                setPatientPhoneNo(dataToSet);
                setPatientEmail(dataToSet.patientEmail)
                break;
            case "email":
                setPatientEmail(dataToSet);
                break;
            case "doctor":
                setDoctor(dataToSet._id);
                setDepartment(dataToSet.department);
                break;
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

    const durationToDisplay = [
        { value: '15', label: '15m' },
        { value: '30', label: '30m' },
        { value: '45', label: '45m' },
        { value: '60', label: '1hr' },
        { value: '75', label: '1hr 15m' },
        { value: '90', label: '1hr 30m' },
    ];

    useEffect(() => {

        void (async () => {
            const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*","username":AuthHandler.getUser().username };
            const path = `${EndPoints.backendProd}/api/Appointments/getAppointmentData`
            console.log(path);
            try {
                const response = await axios.get(path,
                    { headers }
                )
                console.log(response);
                const resPatients = response.data.Patients;
                const resDoctors = response.data.Doctors;
                const PatientsToDisplay = [];
                const PhoneNoToDisplay = [];
                const DoctorsToDisplay = [];
                resPatients.map((resPatient) => {
                    PatientsToDisplay.push({ value: resPatient.Name, label: resPatient.Name, _id: resPatient._id, phoneNo: resPatient.Phone, patientEmail: resPatient.Email })
                    PhoneNoToDisplay.push({ value: resPatient.Phone, label: resPatient.Phone, patientName: resPatient.Name, _id: resPatient._id, patientEmail: resPatient.Email })
                })
                resDoctors.map((resDoctor) => {
                    DoctorsToDisplay.push({ value: resDoctor.Name, label: resDoctor.Name, _id: resDoctor._id, department: resDoctor.Department.Name })
                })
                setPatientsToDisplay(PatientsToDisplay);
                setPhoneNoToDisplay(PhoneNoToDisplay);
                setDoctorsToDisplay(DoctorsToDisplay);

            } catch (error) {
                console.log(error)
                return;
            }finally{

                setLoading(false);
            }
        })();

    }, [])

    /**
     * On create appointment
     */
    const handleSubmit = async () => {
        setLoading(true);
        const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*","username":AuthHandler.getUser().username };
        const path = `${EndPoints.backendProd}/api/Appointments/addAppointment`
        console.log(path);
        try {
            await axios.post(path,
                {
                    id:"123",
                    patientId: l.cloneDeep(patientName._id),
                    doctorId: l.cloneDeep(doctor),
                    status: l.cloneDeep(status),
                    dateTime: l.cloneDeep(startDate),
                    duration: l.cloneDeep(duration.value),
                    note: l.cloneDeep(Message)
                },{headers}
            )
            setLoading(false);
            notify("appointment created successfully", "s")
            history.push({
                pathname: '/appointments',
                search: '?query=abc',
            })
        } catch (error) {
            console.log(error)
            setLoading(false);
            notify(error.message, "e")
            return;
        }

    }
    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-success" : "text-error";
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
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Add Appointment</h4>
                    </div>
                </div>
                <div className="row">

                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Patient Name</label>
                                        <Select value={patientName} onChange={(e) => { handleChange(e, "patientName") }} options={patientsToDisplay} className="select" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Department</label>
                                        <input value={department} disabled={true} className="form-control" type="email" />
                                    </div>
                                </div> */}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Doctor</label>
                                        <Select options={doctorsToDisplay} onChange={(e) => { handleChange(e, "doctor") }} className="select" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <DatePicker
                                            showTimeSelect
                                            selected={startDate}
                                            onChange={(date) => { console.log(date.toUTCString()); setStartDate(date) }}
                                            timeClassName={handleColor}
                                            className="form-control datetimepicker"
                                        />
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
                                        <input value={patientEmail} disabled={true} onChange={(e) => handleChange(e.target.value, "email")} className="form-control" type="email" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Patient Phone Number</label>
                                        <Select value={patientPhoneNo} onChange={(e) => { console.log(e); handleChange(e, "phoneNo") }} options={phoneNoToDisplay} className="select" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea value={Message} onChange={(e) => handleChange(e.target.value, "message")} cols="30" rows="4" className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label className="display-block">Appointment Status</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" onClick={(e) => setStatus(true)} type="radio" name="status" id="product_active" defaultValue="option1" defaultChecked />
                                    <label className="form-check-label" htmlFor="product_active">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" onClick={(e) => setStatus(false)} type="radio" name="status" id="product_inactive" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="product_inactive">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="m-t-20 text-center">
                            <button onClick={handleSubmit} className="btn btn-primary submit-btn">Create Appointment</button>
                        </div>
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
        </div >
    );

};

export default AddAppointments;