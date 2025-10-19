import React, { useEffect, useState } from "react";


import axios from 'axios';
import CountUp from "react-countup";
import ClipLoader from "react-spinners/ClipLoader";
import VisibilitySensor from "react-visibility-sensor";
// import DoctorScroll from './doctors';
import ProgressRate from './hospital';
import DailyCashInflow from './patientIn';
import PatientsTable from './patients';
import PatientTotal from './patienttotal';
import UpcomingTable from './upcoming';
import { ColorRing } from 'react-loader-spinner'
import { useHistory, useLocation } from "react-router-dom";
import { EndPoints } from "../../endPoint"
import { AuthHandler } from "../../AuthHandler";
import { ToastContainer, toast } from 'react-toastify';
import { Modal } from "react-bootstrap";


export default function Dashboard() {
    const location = useLocation()
    const history = useHistory();

    const [totalPatients, setTotalPatients] = useState(0)
    const [pendingInvoices, setPendingInvoices] = useState(0)
    const [todaysAppointments, setAppointmentsInaDay] = useState(0)
    const [dailyCashInFlow, setDailyCashInFlow] = useState(0)
    const [monthlyInflow, setMonthlyInflow] = useState(undefined);
    const [last30Inflow, setLast30Inflow] = useState(undefined);
    const [startCounter, setStartCounter] = useState(false);
    const [loading, setLoading] = useState(true);
    const [hidePrivateData, setHidePrivateData] = useState(true);
    const [modalstate,setModalState]=useState(true)
    const notify = (message, type) => {
        if (type === "s") {
            toast.success(<>message <button onClick={() => history.push("/")}>Login</button></>, {
                position: "bottom-left",
                autoClose: 50000,
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
                autoClose: 50000,
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
    useEffect(() => {
        // if (!location.authenticated)
        //     history.push("/login")
        debugger;
        const viewportMetaTag = document.querySelector('meta[name="viewport"]');
        viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
        void (async () => {
            setLoading(true);
            const token = AuthHandler.getAuthToken();
            if (!token) {
                notify("Unauthorized request, Please login again or contact administrator", "e")
                notify("Click here to authenticate", "i")
                setLoading(false);
                return;
            }
            const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "x-auth-token": token, "username": AuthHandler.getUser().username };
            const path = `${EndPoints.backendProd}/api/Dashboard`

            console.log(path);
            try {
                const response = await axios.get(path,
                    { headers }
                )
                setTotalPatients(response.data.patients)
                setPendingInvoices(response.data.pendingInvoices)
                setAppointmentsInaDay(response.data.appointmentInDay)
                setDailyCashInFlow(response.data.sum)
                setMonthlyInflow(response.data.monthlyInflow)
                setLast30Inflow(response.data.last30Inflow)
                setLoading(false);

            } catch (error) {
                console.log(error)
                setLoading(false);
                return;
            }
        })();

    }, [])

    /**
     * CountUPCallBack
     */
    const onVisibilityChange = (isVisible) => {
        if (isVisible) {
            setStartCounter(true);
        }
    };
    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                            <div className="dash-widget">
                                <span className="dash-widget-bg2"><i className="fa fa-user-o"></i></span>
                                <div className="dash-widget-info text-right">
                                    <h3> {loading ? <ColorRing
                                        height="40"
                                        width="40"
                                        radius="9"
                                        color="green"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                    /> : <VisibilitySensor
                                        onChange={onVisibilityChange}
                                        offset={{ top: 10 }}
                                        delayedCall
                                    >
                                        <CountUp end={totalPatients ?? 0} />
                                    </VisibilitySensor>}</h3>
                                    <span className="widget-title2">Patients <i className="fa fa-check" aria-hidden="true"></i></span>
                                </div>
                            </div>
                        </div>
                        <div onClick={(e) => { e.preventDefault(); setHidePrivateData(!hidePrivateData) }} className={`col-md-6 col-sm-6 col-lg-6 col-xl-3 ${hidePrivateData ? 'blur-div' : ""}`}>
                            <div className="dash-widget">
                                <span className="dash-widget-bg1"><i className="fa fa-money" aria-hidden="true"></i></span>
                                <div className="dash-widget-info text-right">
                                    <h3>
                                        {loading ? <ColorRing
                                            height="40"
                                            width="40"
                                            radius="9"
                                            color="green"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="blocks-wrapper"
                                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                        /> : <VisibilitySensor
                                            onChange={onVisibilityChange}
                                            offset={{ top: 10 }}
                                            scrollThrottle={1}
                                            delayedCall
                                        >
                                            <CountUp end={dailyCashInFlow ?? 0} />
                                        </VisibilitySensor>}
                                    </h3>
                                    <span className="widget-title1">Daily Revenue <i className="fa fa-check" aria-hidden="true"></i></span>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                            <div className="dash-widget">
                                <span className="dash-widget-bg3"><i className="fa fa-stethoscope" aria-hidden="true"></i></span>
                                <div className="dash-widget-info text-right">
                                    <h3>
                                        {loading ? <ColorRing
                                            height="40"
                                            width="40"
                                            radius="9"
                                            color="green"
                                            ariaLabel="blocks-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="blocks-wrapper"
                                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                        /> : <VisibilitySensor
                                            onChange={onVisibilityChange}
                                            offset={{ top: 10 }}
                                            delayedCall
                                        >
                                            <CountUp end={todaysAppointments ?? 0} />
                                        </VisibilitySensor>}
                                    </h3>
                                    <span className="widget-title3">Appointments in Queue <i className="fa fa-check" aria-hidden="true"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                            <div className="dash-widget">
                                <span className="dash-widget-bg4"><i className="fa fa-circle-o-notch" aria-hidden="true"></i></span>
                                <div className="dash-widget-info text-right">
                                    <h3> {loading ? <ColorRing
                                        height="40"
                                        width="40"
                                        radius="9"
                                        color="green"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                    /> : <VisibilitySensor
                                        onChange={onVisibilityChange}
                                        offset={{ top: 10 }}
                                        delayedCall
                                    >
                                        <CountUp end={pendingInvoices ?? 0} />
                                    </VisibilitySensor>}</h3>
                                    <span className="widget-title4">Pending invoices <i className="fa fa-check" aria-hidden="true"></i></span>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="card">
                                <div className="card-body">
                                    <PatientTotal data={last30Inflow} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="card">
                                <div className="card-body">
                                    <DailyCashInflow data={monthlyInflow} />

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* row */}
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12 appointment-table">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title d-inline-block">Upcoming Appointments</h4> <a href="/appointments" className="btn btn-primary float-right">View all</a>
                                </div>

                                <UpcomingTable />

                            </div>
                        </div>
                        {/* <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                            <DoctorScroll />
                        </div> */}
                    </div>
                    <ToastContainer
                        onClick={() => { history.push("/") }}
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
                    {/* row */}
                    {/* <div className="row">
                        <div className="col-12 col-md-6 col-lg-8 col-xl-8">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title d-inline-block">New Patients </h4> <a href="/patients" className="btn btn-primary float-right">View all</a>
                                </div>
                                <div className="card-block">
                                    <div className="table-responsive">
                                        <PatientsTable />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="hospital-barchart">
                                <h4 className="card-title d-inline-block">Hospital Management</h4>
                                <div className="bar-chart">
                                    <div className="legend">
                                        <div className="item">
                                            <h4>Level1</h4>
                                        </div>

                                        <div className="item">
                                            <h4>Level2</h4>
                                        </div>
                                        <div className="item text-right">
                                            <h4>Level3</h4>
                                        </div>
                                        <div className="item text-right">
                                            <h4>Level4</h4>
                                        </div>
                                    </div>
                                    <ProgressRate />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* row */}

                     <Modal
          show={modalstate}
          onHide={()=>{}}
          centered
          className="delete-modal"
        >
          <Modal.Body closeButton className="text-center">
            <h3>Demo account does not contain all the features</h3>
            <div className="m-t-20">
              <a className="dropdown-item btn btn-white" href="#0" onClick={()=>{setModalState(false)}}>
               Continue
              </a>
             
            </div>
          </Modal.Body>
        </Modal>
                </div>
            </div>
        </>
    )
}

