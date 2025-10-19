import React, { useState } from 'react';
import axios from 'axios';
import { EndPoints } from "../../../endPoint";
import { AuthHandler } from "./../../../AuthHandler";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';

import { Modal } from "react-bootstrap";

const InvoiceSetting = () => {
    // Access the location object from React Router
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [displayImage, setDisplayImage] = useState(localStorage.getItem('_LOGO_'))

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setDisplayImage(URL.createObjectURL(e.target.files[0]))
    };

    const handleUpload = async () => {
        setLoading(true)
        const formData = new FormData();
        const subdomainExtractorRegex = /\@(.*?)\./;
        formData.append('file', file, `${subdomainExtractorRegex.exec(AuthHandler.getUser().username)[1]}.com`);
        const _headers = { 'Content-Type': 'multipart/form-data', "Access-Control-Allow-Origin": "*", "username": AuthHandler.getUser().username };
        const path = `${EndPoints.backendProd}/api/file/upload`

        try {
            const res = await axios.post(path, formData, {
                headers: _headers
            });
            toast.success("Logo updated successfully , Please refresh", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
            localStorage.setItem('_LOGO_', displayImage)
            console.log('File uploaded successfully', res.data);
        } catch (error) {
            toast.error("Can't update logo", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
            console.error('Error uploading file', error);
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <>
            {loading &&
                <Modal
                    show={loading}
                    centered
                    className="delete-modal"
                >
                    <Modal.Body closeButton className="text-center">
                        <h3>Saving Logo</h3>
                        <br />
                        <ClipLoader color={'black'} loading={loading} size={30} />
                    </Modal.Body>
                </Modal>
            }
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <form>
                                <h4 className="page-title">Invoice Settings</h4>
                                {/* <div className="form-group row">
                                    <label className="col-lg-3 col-form-label">Invoice prefix</label>
                                    <div className="col-lg-9">
                                        <input className="form-control" defaultValue="INV" type="text" />
                                    </div>
                                </div> */}
                                <div className="form-group row">
                                    <label className="col-lg-3 col-form-label">Invoice Logo</label>
                                    <div className="col-lg-7">
                                        <input className="form-control" onChange={handleFileChange} type="file" />
                                        <span className="form-text text-muted">Recommended image size is 200px x 40px</span>
                                    </div>
                                    <div className="col-lg-2">
                                        <div className="img-thumbnail float-right">
                                            <img src={displayImage} className="img-fluid" alt="" width="100" height="100" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 m-t-20 text-center">
                                    <button type="button" disabled={file === null} onClick={handleUpload} className="btn btn-primary submit-btn">Save</button>
                                </div>
                            </form>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                // theme="dark"
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InvoiceSetting;
