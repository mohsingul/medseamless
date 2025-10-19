import React, { useEffect, useState } from 'react';
import IMG01 from '../../../assets/images/user.jpg';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { Toaster, toast } from 'react-hot-toast';
import { Modal } from "react-bootstrap";
import { useLocation, useParams } from 'react-router-dom';
import { EndPoints } from "../../../endPoint"
import {AuthHandler} from "./../../../AuthHandler" 

function AddPatient(props) {
    const [name, setName] = useState("");
    const [documentId, setDocumentId] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState(new Date());
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [status, setStatus] = useState(true);
    const [loading, setLoading] = useState(false)
    const location = useLocation()
    const handleChangeDob = date => {
        setDob(date)
    };
    const handleChangeName = e => {
        setName(e.target.value)
    };

    const handleChangeAddress = e => {
        setAddress(e.target.value)
    };
    const handleChangeGender = e => {
        setGender(e.target.name)
    };
    const handleChangeEmail = e => {
        setEmail(e.target.value)
    };
    const handleChangeCity = e => {
        setCity(e.target.value)
    };
    const handleChangePhoneNo = e => {
        setPhoneNo(e.target.value)
    };
    const handleChangeStatus = e => {
        const targetName = e.target.id;
        setStatus(targetName === "active" ? true : false)

    };
    useEffect(() => {
        const patient = location.patient.record;
        setDocumentId(patient._id);
        setAddress(patient.Address);
        setEmail(patient.Email);
        setDob(patient.Dob)
        setGender(patient.Gender);
        setCity(patient.City)
        setName(patient.Name);
        setPhoneNo(patient.Phone);
    }, [location])
    const handleSubmit = async () => {
        setLoading(true);

        const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*","username":AuthHandler.getUser().username  };
        const path = `${EndPoints.backendProd}/api/Patients/editPatient`
        console.log(path);
        try {
            await axios.put(path,
                {
                   
                   _id:documentId, id: "12", name, email, dob, gender, status, address, city, phoneNo
                },
                { headers}
            )
            setLoading(false);
            toast('Patient updated successfully',
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
            setLoading(false);
            toast('Unexpected Error Occurred',
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
    const options = [
        { value: 'California', label: 'California' },
        { value: 'Alaska', label: 'Alaska' },
        { value: 'Alabama', label: 'Alabama' }
    ]

    const country = [
        { value: 'PAK', label: 'PAK' },
        { value: 'UK', label: 'UK' },

        // { value: 'UK', label: 'UK' },
    ]
    return (

        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">Edit Patient</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>First Name <span className="text-danger">*</span></label>
                                        <input className="form-control" value={name} onChange={handleChangeName} type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Email <span className="text-danger">*</span></label>
                                        <input className="form-control" value={email} onChange={handleChangeEmail} type="email" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <div className="cal-icon">
                                        <DatePicker
                                                selected={new Date(dob)}
                                                onChange={handleChangeDob}
                                                peekNextMonth
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode='select'
                                                maxDate={new Date()}
                                                className="form-control datetimepicker"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group gender-select">
                                        <label className="gen-label">Gender:</label>
                                        <div className="form-check-inline">
                                            <label className="form-check-label">
                                                <input type="radio" name="MALE" onChange={handleChangeGender}checked={gender==="MALE"}className="form-check-input" />Male
                                            </label>
                                        </div>
                                        <div className="form-check-inline">
                                            <label className="form-check-label">
                                                <input type="radio" name="FEMALE" onChange={handleChangeGender}checked={gender==="FEMALE"} className="form-check-input" />Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input type="text" value={address} onChange={handleChangeAddress} className="form-control " />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <Select options={country} 
                                                defaultValue={country[0]} 
                                                isDisabled={true} 
                                                className=" select" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input type="text" value={city} onChange={handleChangeCity} className="form-control" />
                                            </div>
                                        </div>
                                        {/* <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>State/Province</label>
                                                <Select options={options} className=" select" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-3">
                                            <div className="form-group">
                                                <label>Postal Code</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Phone </label>
                                        <input className="form-control" value={phoneNo} onChange={handleChangePhoneNo} type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Avatar</label>
                                        <div className="profile-upload">
                                            <div className="upload-img">
                                                <img alt="" src={IMG01} />
                                            </div>
                                            <div className="upload-input">
                                                <input type="file" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="display-block">Status</label>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChangeStatus} className="form-check-input" type="radio" name="status" id="doctor_active"
                                      value="option1" defaultChecked />
                                    <label className="form-check-label" htmlFor="doctor_active">
                                        Active
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onChange={handleChangeStatus} className="form-check-input" type="radio" name="status" id="doctor_inactive"
                                        value="option2" />
                                    <label className="form-check-label" htmlFor="doctor_inactive">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="m-t-20 text-center">
                            <button onClick={handleSubmit} className="btn btn-primary submit-btn">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={loading}
                centered
                className="delete-modal"
            >
                <Modal.Body closeButton className="text-center">
                    <h3>Updating patient record ...</h3>
                    <br />
                    <ClipLoader color={'black'} loading={loading} size={30} />
                </Modal.Body>
            </Modal>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default AddPatient;