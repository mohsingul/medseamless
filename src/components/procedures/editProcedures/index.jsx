import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { EndPoints } from "../../../endPoint";
import { AuthHandler } from "./../../../AuthHandler";
import ClipLoader from "react-spinners/ClipLoader";


function AddProcedures() {
    const history = useHistory();
    const location = useLocation();
    const [procedureTitle, setProcedureTitle] = useState("");
    const [procedureCost, setCost] = useState(0);
    const [loading, setLoading] = useState(false)
    const [description, setDescription] = useState("");
    const [prcedureStatus, setStatus] = useState(true);
    const [errorMessage, setErrorMessage] = useState(true);
    const [record, setRecord] = useState()



    useEffect(() => {
        try {
            const procedureToEdit = location.procedure;
            if (!procedureToEdit) {
                setLoading(false)
            }
            setRecord(procedureToEdit)
            setProcedureTitle(procedureToEdit.Name)
            setCost(procedureToEdit.Cost)
            setDescription(procedureToEdit.Description)
            setStatus(procedureToEdit.Role)
            setLoading(false)

        }
        catch (e) {
            setErrorMessage("Can't process Procedure")
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


    const handleChangeTitle = e => {
        setProcedureTitle(e.target.value)
    };

    const handleChangeCost = e => {
        setCost(e.target.value)
    };
    const handleChangeDescription = value => {
        setDescription(value)
    };

    /**
     * On create appointment
     */
    const handleSubmit = async () => {
        setLoading(true);
        const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "username": AuthHandler.getUser().username };
        const path = `${EndPoints.backendProd}/api/Procedures/editProcedure`
        console.log(path);
        try {
            await axios.put(path,
                {
                    _id: record._id,
                    id: record.id,
                    name: procedureTitle,
                    cost: procedureCost,
                    description, description,
                    role: prcedureStatus
                }, { headers }
            )
            setLoading(false);
            notify("Procedure added successfully", "s")
            history.push({
                pathname: '/procedures',
                search: '?query=abc',
            })
        } catch (error) {
            console.log(error)
            setLoading(false);
            notify(error.message, "e")
            return;
        }

    }
    return (

        <div className="page-wrapper">
            <div className="content">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h4 className="page-title">{`Update Procedure - ${record ? record.Name : ""} (PKR ${record ? record.Cost : ""})`}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Procedure Title <span className="text-danger">*</span></label>
                                        <input className="form-control" value={procedureTitle} onChange={handleChangeTitle} type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Cost <span className="text-danger">*</span></label>
                                        <input className="form-control" value={procedureCost} onChange={handleChangeCost} type="number" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea value={description} onChange={(e) => handleChangeDescription(e.target.value)} cols="30" rows="4" className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label className="display-block">Status</label>

                                <div className="form-check form-check-inline">
                                    <input
                                        onChange={() => setStatus(true)} // Update status to true when this radio button is clicked
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        id="product_active"
                                        value="active"
                                        checked={prcedureStatus === true} // If status is true, this radio button is selected
                                    />
                                    <label className="form-check-label" htmlFor="product_active">
                                        Active
                                    </label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input
                                        onChange={() => setStatus(false)} // Update status to false when this radio button is clicked
                                        className="form-check-input"
                                        type="radio"
                                        name="status"
                                        id="product_inactive"
                                        value="inactive"
                                        checked={prcedureStatus === false} // If status is false, this radio button is selected
                                    />
                                    <label className="form-check-label" htmlFor="product_inactive">
                                        Inactive
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="m-t-20 text-center">
                            <button onClick={handleSubmit} className="btn btn-primary submit-btn">Edit Procedure</button>
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
                    <h3>Adding Procedure</h3>
                    <br />
                    <ClipLoader color={'black'} loading={loading} size={30} />
                </Modal.Body>
            </Modal>
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

export default AddProcedures;