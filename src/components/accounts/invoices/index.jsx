import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Table, Dropdown, Button, Menu } from "antd";
import { EllipsisOutlined } from '@ant-design/icons';
import Delete from "../../../assets/images/sent.png";
import { Tag } from 'antd';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";
import { Link } from 'react-router-dom';
import axios from 'axios';
import l from "lodash";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner'
import { TurnedIn } from "@material-ui/icons";
import { EndPoints } from "../../../endPoint"
import { AuthHandler } from "./../../../AuthHandler"

function Invoice() {
  const [show, setShow] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filterPateintName, setFilterPatientName] = useState("")
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const [filterStatus, setFilterStatus] = useState({ value: 'All', label: 'All' });
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState();


  // data: [
  //   {
  //     id: 1,
  //     InvoiceNumber: '#INV-0001',
  //     Patient: 'Charles Ortega',
  //     Date: '1 Aug 2018',
  //     DueDate: '7 Aug 2018',
  //     Amount: '$20',
  //     tags: ['Paid'],
  //   },
  //   {
  //     id: 2,
  //     InvoiceNumber: '#INV-0001',
  //     Patient: 'Charles Ortega',
  //     Date: '1 Aug 2018',
  //     DueDate: '7 Aug 2018',
  //     Amount: '$20',
  //     tags: ['Sent'],
  //   },
  //   {
  //     id: 3,
  //     InvoiceNumber: '#INV-0001',
  //     Patient: 'Charles Ortega',
  //     Date: '1 Aug 2018',
  //     DueDate: '7 Aug 2018',
  //     Amount: '$20',
  //     tags: ['Partially Paid'],
  //   },
  //   {
  //     id: 4,
  //     InvoiceNumber: '#INV-0001',
  //     Patient: 'Charles Ortega',
  //     Date: '1 Aug 2018',
  //     DueDate: '7 Aug 2018',
  //     Amount: '$20',
  //     tags: ['Sent'],
  //   },
  //   {
  //     id: 5,
  //     InvoiceNumber: '#INV-0001',
  //     Patient: 'Charles Ortega',
  //     Date: '1 Aug 2018',
  //     DueDate: '7 Aug 2018',
  //     Amount: '$20',
  //     tags: ['Paid'],
  //   },

  // ],

  const handleClose = () => {
    setShow(false);
  };
  const handleChange = (date, caller) => {
    if (caller === "start") setStartDate(date)
    else if (caller === "end") setEndDate(date)
  };

  const handleShow = (id, record) => {
    setShow(id)
    setSelectedInvoice(record);
  };


  const status = [
    { value: 'All', label: 'All' },
    { value: 'Paid', label: 'Paid' },
    { value: 'Unpaid', label: 'Unpaid' },
  ]

  const columns = [

    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Invoice Number",
      dataIndex: "InvoiceNumber",
    },
    {
      title: "Patient",
      dataIndex: "Patient",
    },
    {
      title: "Created Date",
      dataIndex: "Date",
    },
    {
      title: "Amount (PKR)",
      dataIndex: "Amount",
    },
    {
      title: "Role",
      dataIndex: "tags",
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag === 'Paid' ? "green" : tag === 'Sent' ? "blue" : 'red';
            return (
              <Tag color={color} key={tag} className="custom-badge">
                {tag}
              </Tag>
            );
          })}
        </span>
      ),

    },
    {
      title: "Action",
      dataIndex: "Action",
      render: (text, record) => {
        const menu = (
          <Menu>
            {record.tags.length > 0 && record.tags[0].toUpperCase() !== 'PAID' && <Menu.Item key="edit">
              <Link to={{ pathname: "/edit-invoice", invoice: { ...record } }} ><i className="fa fa-pencil m-r-5"></i>Edit</Link>
            </Menu.Item>}
            <Menu.Item key="edit">
              <Link to={{ pathname: "/view-invoice", invoice: { ...record } }} > <i className="fa fa-eye m-r-5"></i>View</Link>
            </Menu.Item>
            {record.tags.length > 0 && record.tags[0].toUpperCase() !== 'PAID' && <Menu.Item key="delete" onClick={() => handleShow("delete", record)}>
              <i className="fa fa-trash-o m-r-5"></i>Delete
            </Menu.Item>}
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
  const onDelete = async () => {
    setDeleting(true);
    if (!selectedInvoice || !selectedInvoice.documentId) {
      notify("UID not found", "e")
      setDeleting(false);
    }

    const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "username": AuthHandler.getUser().username };
    const path = `${EndPoints.backendProd}/api/Invoices/deleteInvoice/`
    console.log(path);

    try {
      await axios.post(path,
        {
          id: selectedInvoice.documentId
        },
        { headers }
      )

      setDeleting(false);
      let indexOfRowToDelete = -1
      data.find((row, index) => {
        row.documentId === selectedInvoice.documentId && (indexOfRowToDelete = index);
      })
      const copiedData = data;
      indexOfRowToDelete !== -1 && copiedData.splice(indexOfRowToDelete, 1);
      setData(copiedData)
      setShow(null)
      notify("Invoice deleted successfully", "s")

    } catch (error) {
      console.log(error)
      setDeleting(false);
      notify(error.message, "e")

      return;
    }

  }
  useEffect(() => {

    void (async () => {
      const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "username": AuthHandler.getUser().username };
      const path = `${EndPoints.backendProd}/api/Invoices?size=20`
      const info = localStorage.getItem('clinicInfo')
      if (info === "undefined") throw new Error("Contact admin to get your details added")
      const jsonInfo = JSON.parse(info)
      console.log(path);
      try {
        const response = await axios.get(path,
          { headers }
        )
        // id: 1,
        //     InvoiceNumber: '#INV-0001',
        //     Patient: 'Charles Ortega',
        //     Date: '1 Aug 2018',
        //     DueDate: '7 Aug 2018',
        //     Amount: '$20',
        //     tags: ['Paid'],
        console.log(response)
        const invoices = l.cloneDeep(response.data.Info);
        const processedInvoice = []
        // const today = new Date();
        invoices.forEach((invoice, index) => {
          if (invoice.Patient === null) return
          const invoiceObject = {};
          invoiceObject.documentId = invoice._id
          invoiceObject.InvoiceNumber = `${jsonInfo.Abbreviation}INV-${invoice.ID.toString().padStart(3, '0')}`;
          invoiceObject.Patient = invoice.Patient.Name;
          invoiceObject.Date = `${new Date(invoice.CreatedDate).toLocaleDateString()} , ${new Date(invoice.CreatedDate).toLocaleTimeString()}`;
          invoiceObject.Amount = parseInt(invoice.Amount).toLocaleString();
          invoiceObject.tags = !invoice.Role ? ['Unpaid'] : ['Paid'];
          processedInvoice.push(invoiceObject);
        })
        setData(processedInvoice)
      } catch (error) {
        console.log(error)
        return;
      }
      setLoading(false);
    })();

  }, [])

  const formatDate = (dateToFormat) => {
    dateToFormat = dateToFormat.replace(/\s*,\s*/g, ',');
    const [day, month, year] = dateToFormat.split(',')[0].split('/'); // Extract date parts
    const time = dateToFormat.split(',')[1]; // Extract time part
    const format = new Date(`${year}-${month}-${day}T${time}`);
    return format
  }
  const applyFilter = () => {
    const dataSourceCopy = l.cloneDeep(data);
    const applyDateFilter = startDate !== null && endDate !== null;
    const applyStatusFilter = filterStatus.value !== "All"
    const applyPatientNameFilter = filterPateintName !== ""

    const filteredDataSource = dataSourceCopy.filter((record) => {
      let satisfiesName = true
      let satisfiesDateRange = true
      let satisfiesStatus = true
      if (applyPatientNameFilter)
        satisfiesName = record.Patient.toLowerCase().includes(filterPateintName.toLowerCase())
      if (applyDateFilter)
        satisfiesDateRange = new Date(formatDate(record.Date)).getDate() >= startDate.getDate() && new Date(formatDate(record.Date)).getDate() <= endDate.getDate()
      if (applyStatusFilter)
        satisfiesStatus = record.tags[0].toUpperCase() === filterStatus.value.toUpperCase()

      return satisfiesName && satisfiesDateRange && satisfiesStatus

    })
    let notificationAlert = ""
    let notificationType = "i";
    if (!applyDateFilter && !applyStatusFilter && !applyPatientNameFilter) { notificationAlert = "No filter selected"; notificationType = "e" }
    else { notificationAlert = "Showing fitlered results"; notificationType = "i" }
    notify(notificationAlert, notificationType)
    setFilteredData(filteredDataSource.length === data.length ? null : filteredDataSource);
  }
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
            <h4 className="page-title">Invoices</h4>
          </div>
          <div className="col-sm-8 col-9 text-right m-b-20">
            <Link
              to="/create-invoice"
              className="btn btn btn-primary btn-rounded float-right"
            >
              <i className="fa fa-plus"></i>Create new Invoices
            </Link>
          </div>
        </div>
        <div className="row filter-row">
          <div className="col-sm-3 col-md-2">
            <div className="form-group form-focus focused">
              <label className="focus-label">From</label>
              <div className="cal-icon">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => handleChange(date, "start")}
                  className="form-control datetimepicker"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-2">
            <div className="form-group form-focus focused">
              <label className="focus-label">To</label>
              <div className="cal-icon">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => handleChange(date, "end")}

                  className="form-control datetimepicker"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-2">
            <div className="form-group form-focus focused">
              <label className="focus-label">Patient</label>
              <div className="">
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
            <div className="form-group form-focus select-focus focused custom_select">
              <label className="focus-label">Status</label>
              <Select value={filterStatus} onChange={(e) => setFilterStatus(e)} options={status} className="select floating" />
            </div>
          </div>
          <div className="col-sm-5 col-md-3">
            <button type="button" onClick={(e) => { e.preventDefault(); applyFilter(); notify("Click clear filter to show default invoices", "i") }} className="btn btn-success">Filter</button>
            {filteredData && <button type="button" onClick={() => { setFilteredData(null); setStartDate(null); setEndDate(null); setFilterStatus({ value: 'All', label: 'All' }); setFilterPatientName("") }} className="btn btn-info">Clear filter</button>}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive" style={{ "overflowX": "hidden" }}>
              <Table
                className="table-striped"
                columns={columns}
                // bordered
                scroll={{ x: 'max-content' }} 
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
          {deleting ? <h3>Deleting record...</h3> : <h3>Are you sure want to delete this Invoice?</h3>}
          <ClipLoader color={'black'} loading={deleting} size={30} />
          <div className="m-t-20">
            <a className="dropdown-item btn btn-white" aria-disabled={deleting} onClick={() => setShow(false)} href="#0">
              Close
            </a>
            <a
              aria-disabled={deleting}
              className="dropdown-item btn btn-danger"
              href="#0"
              data-toggle="modal"
              data-target="#delete_doctor"
              onClick={onDelete}
            >
              <i className="fa fa-trash-o m-r-5"></i> Delete
            </a>
          </div>
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
      {/*modal */}
    </div >
  );

}

export default Invoice;
