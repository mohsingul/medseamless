import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import './index.css'
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import { Modal } from "react-bootstrap";
import Info from "./info.png";
import logo from '../../../../assets/images/logo.png';
import { EndPoints } from "../../../../endPoint"
import { AuthHandler } from "./../../../../AuthHandler"

// import { jsPDF } from "jspdf";

function InvoiceView() {
  const location = useLocation()
  const [show, setShow] = useState(null);
  const [discountValue, setDiscountValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [patientName, setPatientName] = useState("");
  const [invoiceId, setInvoiceId] = useState("");
  const [patientPhoneNo, setPatientPhoneNo] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [total, setTotal] = useState(0);
  const [toastIds, setToastIds] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [invoiceTimeStamp, setInvoiceTampStamp] = useState(new Date())
  const [otherInfo, setOtherInfo] = useState(0);
  const [paid, setPaid] = useState(true);
  const [role, setRole] = useState(true);
  const [tax, setTax] = useState(0);
  const [paymentMode, setPaymentMode] = useState("");
  const [doctorName, setDoctorName] = useState(true);
  const [updatingInvoice, setUpdatingInvoice] = useState(false);
  const history = useHistory();
  const [clinicInfo, setclinicInfo] = useState({ title: "", add: "", pc: "", abb: "" })
  const [data, setData] = useState([
    {
      key: "1",
      item: "Full body checkup",
      description: "Lorem ipsum dolor sit amet, consectetur",
      cost: "150",
      qty: "3",
      total: "350",
    },
    {
      key: "2",
      item: "Full body checkup",
      description: "Lorem ipsum dolor sit amet, consectetur",
      cost: "120",
      qty: "2",
      total: "250",
    },
    {
      key: "3",
      item: "Full body checkup",
      description: "Lorem ipsum dolor sit amet, consectetur",
      cost: "100",
      qty: "1",
      total: "150",
    },
  ]);

  const printReceipt = () => {

    if (!role) {
      handleShow("print")
      // const id = notify("Cant print unpaid invoice", "e");
      // setToastIds([...toastIds, id]);
      return;
    }
    // var pdf = new jsPDF('p', 'pt', 'letter');
    // const source = document.querySelector('#tempTarget')
    // pdf.canvas.height = 72 * 11;
    // pdf.canvas.width = 72 * 8.5;

    // pdf.html(source)

    // pdf.save('test.pdf');
    window.print();
  }
  const columns = [
    {
      title: "#",
      dataIndex: "key",
    },
    {
      title: "Item",
      dataIndex: "item",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Unit Cost",
      dataIndex: "cost",
    },
    {
      title: "Qty",
      dataIndex: "qty",
    },
    {
      title: "Total",
      dataIndex: "total",
    },
  ];
  useEffect(() => {

    void (async () => {
      const info = localStorage.getItem('clinicInfo')
      if (info === "undefined") throw new Error("Contact admin to get your details added")
      const jsonInfo = JSON.parse(info)

      const invoiceParam = location.invoice;
      if (!invoiceParam) history.push("/error-404");
      const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "username": AuthHandler.getUser().username };
      let path = `${EndPoints.backendProd}/api/Invoices/getInvoiceByIDPrint?id=${invoiceParam.documentId}`
      console.log(path);
      try {
        const invoiceRes = await axios.get(path,
          { headers }
        )

        console.log(invoiceRes);
        const resInvoiceData = invoiceRes.data.invoiceByID;
        // const _tax = invoiceRes.data.invoiceByID.Tax.Percentage;
        // setTax(_tax);
        const resAvailableId = resInvoiceData.ID;
        setInvoiceId(`${jsonInfo.Abbreviation}INV-${resAvailableId.toString().padStart(3, '0')}`);

        setPatientName(resInvoiceData.Patient.Name)
        setPatientPhoneNo(resInvoiceData.Patient.Phone)
        setPatientEmail(resInvoiceData.Patient.Email)
        setPaymentMode(resInvoiceData.ModeOfPayment);
        const constructedData = []
        let totalAmountWithoutDiscountAndTaxes = 0;
        resInvoiceData.Items.forEach((mainItem) => {
          const itemToPush = {
            cost: mainItem.cost,
            key: mainItem["#"],
            item: mainItem.item.value,
            qty: mainItem.qty,
            total: mainItem.amount,
            description: mainItem.description,

          }
          totalAmountWithoutDiscountAndTaxes = totalAmountWithoutDiscountAndTaxes + mainItem.amount;
          constructedData.push(itemToPush)
        })
        // const amountAfterTax = totalAmountWithoutDiscountAndTaxes + (totalAmountWithoutDiscountAndTaxes * (parseInt(_tax) / 100))
        // setTax(amountAfterTax - totalAmountWithoutDiscountAndTaxes);
        // setDiscountValue(amountAfterTax - resInvoiceData.Amount);
        //newV

        setDiscountValue(((parseInt(resInvoiceData.Discount) / 100) * totalAmountWithoutDiscountAndTaxes)); //newly added
        //newA
        setData(constructedData);
        setDoctorName(resInvoiceData.Doctor.Name)
        setTotal(totalAmountWithoutDiscountAndTaxes);
        setGrandTotal(resInvoiceData.Amount);
        setInvoiceTampStamp(new Date(resInvoiceData.CreatedDate))
        setOtherInfo(resInvoiceData.OtherInformation)
        setRole(resInvoiceData.Role)
        setPaid(resInvoiceData.ModeOfPayment)
        // // additional invoice info

        const jsonAdd = JSON.parse(jsonInfo.Address)
        setclinicInfo({ title: jsonInfo.Title, add: jsonAdd.add, city: jsonAdd.city, pc: jsonAdd.pc, abb: jsonInfo.Abbreviation })

      } catch (error) {
        console.log(error)
        setLoading(null);
        return;
      }
      setLoading(false);
    })();

  }, [])

  const onClickUpdateInvoiceStatus = async () => {
    setUpdatingInvoice(true);

    const invoiceParam = location.invoice;
    const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "username": AuthHandler.getUser().username };
    let path = `${EndPoints.backendProd}/api/Invoices/updateInvoiceStatus?id=${invoiceParam.documentId}`
    console.log(path);
    try {
      const invoiceRes = await axios.put(path, {}, { headers }
      )

      console.log(invoiceRes);

    } catch (error) {
      console.log(error)
      setUpdatingInvoice(false);
      const t_id = notify("X Can't update status", "e")

      setToastIds([...toastIds, t_id]);
      return;
    }
    setUpdatingInvoice(false);
    setRole(true);
    setShow(false);
    toastIds.forEach((idd) => toast.dismiss())
    window.print();

  }
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (id) => {
    setShow(id);
  };
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

  return (
    <div className="page-wrapper printInvoice" id="tempTarget">
      {loading && <div style={{ "background": "white", "height": "100%", "width": "100%", position: "fixed", "zIndex": 999, "paddingTop": "44vh", "paddingBottom": "44vw", "paddingRight": "44vh", "paddingLeft": "44vw" }}>
        <ClipLoader className="loading" color={'black'} loading={loading} size={60} /><br />
      </div>}
      {loading === null && <div style={{ "background": "white", "height": "100%", "width": "100%", position: "fixed", "zIndex": 999, "paddingTop": "44vh", "paddingBottom": "44vw", "paddingRight": "40vh", "paddingLeft": "40vw" }}>
        <label>Error generating invoice</label>
      </div>}
      <div className="content printInvoice">
        <div className="row hideAllForPrint">
          <div className="col-sm-5 col-4">
            <h4 className="page-title">Invoice</h4>
          </div>
          <div className="col-sm-7 col-8 text-right m-b-30">
            <div className="btn-group btn-group-sm">
              <button className="btn btn-white">CSV</button>
              <button className="btn btn-white">PDF</button>
              <button className="btn btn-white" onClick={printReceipt}  >
                <i className="fa fa-print fa-lg" ></i> Print
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="row custom-invoice">
                  <div className="col-6 col-sm-6 m-b-20">
                    <img
                      src={localStorage.getItem('_LOGO_')}
                      className="inv-logo"
                      alt=""
                    />
                    <ul className="list-unstyled">
                      <li>{clinicInfo.title}</li>
                      <li>{clinicInfo.add}</li>
                      <li>{clinicInfo.city}</li>
                      <li>{clinicInfo.pc}</li>
                    </ul>
                  </div>
                  <div className="col-6 col-sm-6 m-b-20">
                    <div className="invoice-details">
                      <h4 className="text-uppercase">{invoiceId}</h4>
                      <ul className="list-unstyled">
                        <li>
                          Generated on : <span>{`${invoiceTimeStamp.toLocaleDateString()}, ${invoiceTimeStamp.toLocaleTimeString()}`}</span>
                        </li>
                        {!role && <li>
                          Printed on: <span>{`${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`}</span>
                        </li>}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/*row*/}
                  <div className="col-sm-6 col-lg-6 m-b-20">
                    <h5>Invoice to:</h5>
                    <ul className="list-unstyled">
                      <li>
                        <h5>
                          <strong>{patientName}</strong>
                        </h5>
                      </li>
                      <li>
                        <span>{patientPhoneNo}</span>
                      </li>
                      <li>
                        <a href={`mailto:${patientEmail}`}>{patientEmail}</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-6 m-b-20">
                    <div className="invoices-view">
                      {/* <span className="text-muted">Patient Details:</span> */}
                      <ul className="list-unstyled invoice-payment-details">
                        {/* <li>
                          <h5>
                            Total Due: <span className="text-right">$288.2</span>
                          </h5>
                        </li> */}
                        {/* <li>
                          Country: <span>Pakistan</span>
                        </li>
                        <li>
                          City: <span>Islamabad</span>
                        </li> */}
                        <li>
                          Payment method: <span>{paymentMode}</span>
                        </li>
                        <li>
                          Doctor name: <span>{doctorName}</span>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <Table
                    className="table-striped"
                    style={{ overflowX: "auto" }}
                    columns={columns}
                    // bordered
                    dataSource={data}
                    pagination={false}
                  />
                </div>
              </div>
              <div className="row invoice-payment">
                <div className="col-sm-7"></div>
                <div className="col-sm-5">
                  <div className="m-b-20">
                    <h6>Total </h6>
                    <div className="table-responsive no-border">
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <th>{`Subtotal (Pkr) :`}</th>
                            <td className="text-right">{`${total.toLocaleString()}`}</td>
                          </tr>
                          {/* <tr>
                            <th>
                              Tax: <span className="text-regular"></span>
                            </th>
                            <td className="text-right">{tax}</td>
                          </tr> */}
                          {discountValue !== 0 && <tr>
                            <th>
                              Discount: <span className="text-regular"></span>
                            </th>
                            <td className="text-right">{parseInt(discountValue).toLocaleString()}</td>
                          </tr>}
                          <tr>
                            <th>{`Grand Total (Pkr) :`}</th>
                            <td className="text-right text-primary">
                              <h5>{`${grandTotal.toLocaleString()}`}</h5>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {otherInfo && <div className="invoice-info">
                <h5>Other information</h5>
                <p className="text-muted">
                  {otherInfo}
                </p>
              </div>}
            </div>
          </div>
        </div>{" "}
        {/*row*/}
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
      <Modal
        show={show === "print"}
        onHide={handleClose}
        centered
        className="delete-modal"
      >
        <Modal.Body closeButton className="text-center">
          {!updatingInvoice ? <>
            <img src={Info} alt="" width="50" height="46" />
            <h3>Can't print unpaid invoice. Do you want to update this invoice as paid ?</h3>
            <div className="m-t-20">
              <a className="dropdown-item btn btn-white" onClick={((e) => { e.preventDefault(); setShow(null) })}>
                Close
              </a>
              <a
                className="dropdown-item btn btn-success"
                href="#0"
                data-toggle="modal"
                data-target="#delete_doctor"
                onClick={(e) => { e.preventDefault(); onClickUpdateInvoiceStatus() }}
              >
                <i className="fa fa-refresh m-r-5"></i> update
              </a>
            </div></> : <><ClipLoader className="loading" color={'black'} loading={true} size={40} /><br /><label>updating invoice status as <span style={{ color: "green" }}>paid</span></label></>}
          <br />
        </Modal.Body>
      </Modal>
      {/*modal */}
    </div >
  );
}

export default InvoiceView;
