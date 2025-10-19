import { Button, Form, Input, Popconfirm } from 'antd';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";
import { DateTimePicker } from "react-tempusdominus-bootstrap";
import { DynamicTableRows } from "./tableRows";
import { ThreeDots } from 'react-loader-spinner'
import FadeInOut from "../../../animation/fader"
import { EndPoints } from "../../../../endPoint"
import {AuthHandler} from "./../../../../AuthHandler" 

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider defaultValue={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async (e) => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

function CreateInvoice() {
  const [columns, setColumns] = useState([
    {
      title: '#',
      dataIndex: 'key',
    },
    {
      title: 'Item',
      dataIndex: 'item',
      render: (text, record) =>
        <Input type="text" className="form-control" />

    },
    {
      title: 'Description',
      dataIndex: 'description',
      render: (text, record) =>
        <Input type="text" className="form-control" />

    },
    {
      title: 'Unit Cost',
      dataIndex: 'cost',
      render: (text, record) =>
        <Input type="text" className="form-control" />

    },
    {
      title: 'Qty',
      dataIndex: 'qty',
      render: (text, record) =>
        <Input type="text" className="form-control" />

    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      render: (text, record) =>
        <Input type="text" className="form-control" />

    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a href="#0" className="text-center"><i className="fa fa-trash-o"></i></a>
          </Popconfirm>
        ) : null,
    },
  ]);
  const history = useHistory();

  const [dataSource, setDataSource] = useState([
    {
      key: '0',
      item: 'Full body checkup',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      cost: '150',
      qty: '1',
      amount: '150'
    },
    {
      key: '1',
      item: 'Blood Test',
      description: 'Lorem ipsum dolor sit amet, consectetur',
      cost: '12',
      qty: '1',
      amount: '150'
    },
  ]);

  const handleDelete = (key) => {
    const ds = [...dataSource];
    setDataSource(ds.filter((item) => item.key !== key));
  };


  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setDataSource(newData);
  };


  const client = [
    { value: 'Please Select', label: 'Please Select' },
    { value: 'Charles Ortega', label: 'Charles Ortega' },
    { value: 'Denise Stevens', label: 'Denise Stevens' }
  ];

  const department = [
    { value: 'Select Department', label: 'Select Department' },
    { value: 'Dentists', label: 'Dentists' },
    { value: 'Neurology', label: 'Neurology' }
  ];
  const role = [
    { value: 'Paid', label: 'Paid', boolValue: true },
    { value: 'Unpaid', label: 'Unpaid', boolValue: false },
  ];
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  // const columns = columns.map((col) => {
  //   if (!col.editable) {
  //     return col;
  //   }

  //   return {
  //     ...col,
  //     onCell: (record) => ({
  //       record,
  //       editable: col.editable,
  //       dataIndex: col.dataIndex,
  //       title: col.title,
  //       handleSave: handleSave,
  //     }),
  //   };
  // });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState();
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(0);
  const [phoneNo, setPhoneNo] = useState("");
  const [selectedDepartment, seTSelectedDepartment] = useState("");
  const [selectedTax, setSelectedTax] = useState();
  const [selectedRole, setSelectedRole] = useState({ value: 'Unpaid', label: 'Unpaid', boolValue: false })
  const [selectedPaymentMode, setSelectedPaymentMode] = useState({ value: 'cash', label: 'Cash' })

  const [modeOfPayments,] = useState([
    { value: 'cash', label: 'Cash', },
    { value: 'card', label: 'Card', },
    { value: 'online', label: 'Online', }
  ]);
  const [patientsToDisplay, setPatientsToDisplay] = useState([
    { value: 'Select', label: 'Select', }
  ]);
  const [doctorsToDisplay, setDoctorsToDisplay] = useState([
    { value: 'Select', label: 'Select', }
  ]);
  const [phoneNoToDisplay, setPhoneNoToDisplay] = useState([
    { value: 'Select', label: 'Select', }
  ]);
  const [taxToDisplay, setTaxToDisplay] = useState([
    { value: 'Select', label: 'Select', }
  ]);
  const [itemsToDisplay, setItemsToDisplay] = useState([
    { value: 'Select', label: 'Select', }
  ]);
  // const tax = [
  //   { value: 'Select Tax', label: 'Select Tax' },
  //   { value: 'VAT', label: 'VAT' },
  //   { value: 'GST', label: 'GST' }
  // ];

  const handleChange = (dataToSet, stateToSet) => {
    switch (stateToSet) {
      case "patient":
        const phoneNoSelect = phoneNoToDisplay.find((_patient) => {
          return _patient._id === dataToSet._id;
        })
        console.log(dataToSet)
        setSelectedPatient(dataToSet);
        setPhoneNo(phoneNoSelect)
        break;
      case "phoneNo":
        const patient = patientsToDisplay.find((_patient) => {
          return _patient._id === dataToSet._id;
        })
        setSelectedPatient(patient);
        setPhoneNo(dataToSet);
        break;
      case "tax":
        setSelectedTax(dataToSet)
        break;
      case "doctor":
        setSelectedDoctor(dataToSet)
        seTSelectedDepartment(dataToSet.department);
        console.log(dataToSet)
        break;
      case "role":
        setSelectedRole(dataToSet);
        break;
      case "otherInfo":
        setOtherInfo(dataToSet);
        break;
      case "paymentMode":
        setSelectedPaymentMode(dataToSet)
        break;
      default:
        return;
    }
  };
  const [serialNo, setSerialNo] = useState(2)
  const [otherInfo, setOtherInfo] = useState("");
  useEffect(() => {

    void (async () => {
      const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*","username":AuthHandler.getUser().username };
      let path = `${EndPoints.backendProd}/api/Invoices/getInvoiceData`
      console.log(path);
      try {
        const invoiceRes = await axios.get(path,
          { headers }
        )
        path = `${EndPoints.backendProd}/api/Taxes`
        const taxRes = await axios.get(path,
          { headers }
        )

        console.log(invoiceRes);
        console.log(taxRes);
        const resTax = taxRes.data.Info;
        const resPatients = invoiceRes.data.Patients;
        const resDoctors = invoiceRes.data.Doctors;
        const resProcedures = invoiceRes.data.Procedures;
        // const resAvailableId = invoiceRes.data.Invoices[0].ID;
        const PatientsToDisplay = [];
        const PhoneNoToDisplay = [];
        const DoctorsToDisplay = [];
        const itemsToDisplay = [];
        const TaxToDisplay = [];
        resPatients.map((resPatient) => {
          PatientsToDisplay.push({ value: resPatient.Name, label: resPatient.Name, _id: resPatient._id, phoneNo: resPatient.Phone, patientEmail: resPatient.Email })
          PhoneNoToDisplay.push({ value: resPatient.Phone, label: resPatient.Phone, patientName: resPatient.Name, _id: resPatient._id, patientEmail: resPatient.Email })
        })
        resDoctors.map((resDoctor) => {
          DoctorsToDisplay.push({ value: resDoctor.Name, label: resDoctor.Name, _id: resDoctor._id, department: resDoctor.Department.Name })
        })
        // todo- Need to be handled.
        itemsToDisplay.map((resDoctor) => {
          DoctorsToDisplay.push({ value: resDoctor.Name, label: resDoctor.Name, _id: resDoctor._id, department: resDoctor.Department.Name })
        })
        let itemCount = 0;
        resProcedures.map((resProcedure) => {
          itemCount++;
          itemsToDisplay.push({ key: itemCount, value: resProcedure.Name, label: resProcedure.Name, _id: resProcedure._id, role: resProcedure.Role, cost: resProcedure.Cost, description: resProcedure.Description })
        })
        let defaultTax = {}
        resTax.map((_tax) => {
          const taxToPush = { value: _tax.Name, label: _tax.Name, _id: _tax._id, role: _tax.Role, percentage: _tax.Percentage }
          TaxToDisplay.push(taxToPush)
          if (taxToPush.value === "GST")
            defaultTax = taxToPush;
        })
        // setSelectedInvoiceId(resAvailableId);
        setItemsToDisplay(itemsToDisplay);
        setTaxToDisplay(TaxToDisplay);
        setSelectedTax(defaultTax);
        setPatientsToDisplay(PatientsToDisplay);
        setPhoneNoToDisplay(PhoneNoToDisplay);
        setDoctorsToDisplay(DoctorsToDisplay);

      } catch (error) {
        console.log(error)
        return;
      }
      setLoading(false);
    })();

  }, [])

  //   let itemTableDataVar = []

  //   const getDefaultItem = (itemsSource, selectedToReflect) => {
  //     return {
  //       key: serialNo,
  //       serial: serialNo,
  //       item: <Select key={1} value={selectedToReflect} options={itemsSource} onChange={(data) => handleTableItemChange(data, l.cloneDeep(serialNo))} className="select"></Select>,
  //       description: selectedToReflect ? selectedToReflect.description : "",
  //       unitCost: selectedToReflect && selectedToReflect.cost ? parseInt(selectedToReflect.cost) : "",
  //       qty: <input style={{ "width": "10%" }} value={1} className="form-control" />,
  //       amount: selectedToReflect && selectedToReflect.cost ? parseInt(selectedToReflect.cost) : "",
  //       operation: "delete"
  //     }

  //   }

  //   useEffect(() => {
  //     const defaultItem = getDefaultItem(itemsToDisplay)
  //     setItemTableData([defaultItem])
  //   }, itemsToDisplay, getDefaultItem)

  //   /**
  //  * Item Data setting and state.
  //  */
  //   const [itemTableData, setItemTableData] = useState([getDefaultItem(itemsToDisplay)]);

  //   const handleTableItemChange = (selectedData, key,source) => {
  //     const toSplice = source.find((i) => { return i.key === key })
  //     source.splice(source.indexOf(toSplice))
  //     setItemTableData([...source, getDefaultItem(itemsToDisplay, selectedData)]);
  //   }



  /**
   * on item add
   */
  const handleAdd = () => {
    const newSerial = serialNo + 1;
    const item = {
      key: newSerial,
      serial: newSerial,
      // item: <Select key={1} options={itemsToDisplay} onChange={(data) => handleTableItemChange(data, newSerial, () => { return itemTableData })()} className="select"></Select>,
      description: "",
      unitCost: "",
      qty: <input style={{ "width": "10%" }} value={1} className="form-control" />,
      amount: "",
      operation: "delete"
    }
    // const testArray = [...itemTableData, item];
    // itemTableDataVar = testArray;
    // setItemTableData(testArray)
    setSerialNo(newSerial);
  };

  // /**
  //  * item table columns
  //  */
  // const itemTableColumns = [
  //   {
  //     title: '#',
  //     dataIndex: 'serial',
  //     key: 'serial',
  //   },
  //   {
  //     title: 'Item',
  //     dataIndex: 'item',
  //     key: 'item',
  //   },
  //   {
  //     title: 'Description',
  //     dataIndex: 'description',
  //     key: 'description',
  //   },
  //   {
  //     title: 'Unit Cost',
  //     dataIndex: 'unitCost',
  //     key: 'unitCost',
  //   },
  //   {
  //     title: 'Qty',
  //     dataIndex: 'qty',
  //     key: 'qty',
  //   },
  //   {
  //     title: 'Amount',
  //     dataIndex: 'amount',
  //     key: 'amount',
  //   },
  //   {
  //     title: 'operation',
  //     dataIndex: 'operation',
  //     key: 'operation',
  //   },
  // ]

  const [rowsData, setRowsData] = useState([{
    "#": 1,
    item: { value: 'Select', label: 'Select' },
    description: "",
    cost: 0,
    qty: 1,
    amount: 0
  }]);
  const addTableRows = () => {

    const rowsInput = {
      "#": serialNo,
      item: { value: 'Select', label: 'Select' },
      description: "",
      cost: 0,
      qty: 1,
      amount: 0
    }
    setSerialNo(serialNo + 1)
    setRowsData([...rowsData, rowsInput])

  }
  const deleteTableRows = (index) => {
    setSerialNo(serialNo - 1)
    const rows = [...rowsData];
    rows.splice(index, 1);
    for (let iterator = index; iterator < rows.length; iterator++) {
      rows[iterator]["#"] = parseInt(rows[iterator]["#"]) - 1
    }

    setRowsData(rows);
  }
  const [totalDiscount, setTotalDiscount] = useState(0)
  const handleChangeTable = (index, value, caller) => {

    const rowsInput = [...rowsData];
    switch (caller) {
      case "item":
        rowsInput[index]["item"] = value;
        rowsInput[index]["description"] = value.description;
        rowsInput[index]["cost"] = value.cost;
        const cost = parseInt(rowsInput[index]["cost"])
        const quantity = parseInt(rowsInput[index]["qty"])
        const totalAmount = quantity * cost;
        rowsInput[index]["amount"] = isNaN(totalAmount) ? 0 : totalAmount;
        break;
      case "qty":
        try {
          if (parseInt(value) < 1) return;
          const quantity = parseInt(rowsInput[index]["qty"] = value)
          const cost = parseInt(rowsInput[index]["cost"])
          const totalAmount = quantity * cost;
          rowsInput[index]["amount"] = isNaN(totalAmount) ? 0 : totalAmount;
        } catch (_e) {
          return
        }
        break;
      case "totalDiscount":
        if (value < 0 || value > 100) return;
        setTotalDiscount(value > totalDiscount ? totalDiscount + 1 : totalDiscount - 1)
        break;
      default:
    }
    setRowsData(rowsInput);



  }
  const [_totalAmount, setTotalAmount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const toasterWrapper = (message, type) => {
    switch (type) {
      case "success":
        notify(message, "s");
        break;
      case "fail":
        notify(<><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>{message}</>, "e")
        break;
      default:
    }
  }
  useEffect(() => {
    // if (!selectedTax || !selectedTax.percentage) return;
    let totalAmount = 0;
    rowsData.forEach((row) => {
      totalAmount = totalAmount + parseInt(row.amount)
    })
    // const taxAddition = parseInt(selectedTax.percentage) / 100 * totalAmount;
    // const _totalAmount = taxAddition + totalAmount
    const discount = parseInt(totalDiscount) / 100 * totalAmount;

    setTotalAmount(totalAmount);
    setGrandTotal(totalAmount - discount)
  }, [rowsData, selectedTax])

  const [createdInvId, setCreatedInvoiceId] = useState("");
  const handleSaveInvoice = async (e) => {
    e.preventDefault();


    const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*","username":AuthHandler.getUser().username  };
    const path = `${EndPoints.backendProd}/api/Invoices/addInvoice`
    console.log(path);
    try {
      let validationPassed = true;
      //
      if (!selectedPatient || !selectedPatient._id) { toasterWrapper("Patient is not selected", "fail"); validationPassed = false }
      if (!selectedDoctor || !selectedDoctor._id) { toasterWrapper("Doctor is not selected", "fail"); validationPassed = false }
      // if (!selectedTax || !selectedTax._id) { toasterWrapper("Tax is not selected", "fail"); validationPassed = false }
      if (grandTotal === 0) { toasterWrapper("Grand Total couldn't be 0", "fail"); validationPassed = false }
      if (!rowsData || rowsData.length === 0) { toasterWrapper("No items selected for Invoice !", "fail"); validationPassed = false }
      if (selectedRole.boolValue === undefined) { toasterWrapper("Invalid Invoice Status", "fail"); validationPassed = false }
      if (!validationPassed) return;
      //
      setSaving(true);
      const res = await axios.post(path,
        {
          
          id: "123",
          patientId: selectedPatient._id,
          doctorId: selectedDoctor._id,
          // taxId: selectedTax._id,
          taxId: "63407929233b2d9f21bbad18",
          createdDate: new Date(),
          amount: grandTotal,
          modeOfPayment: selectedPaymentMode.value,
          items: rowsData,
          discount: totalDiscount,
          otherInformation: otherInfo ?? " ",
          role: selectedRole.boolValue
        },{headers}
      )
      const invDocId = res.data._id
      if (!invDocId) throw new Error("Problem creating invoice. Perform refresh")
      setCreatedInvoiceId(res.data.id);
      setSaving(false);
      toast('Invoice created Successfully',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#007EFB',
            color: '#FFFFFF',
          },
          position: "top-center",
          duration: 10000
        }
      );
      //program-nav
      history.push({
        pathname: '/view-invoice',
        search: '?query=abc',
        invoice: { documentId: invDocId }
      })

    } catch (error) {
      console.log(error)
      setSaving(false);
      toast(error.message ?? "X Unexpected error occurred",
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
  }
  return (
    <div className="page-wrapper">
      {loading ?
        <FadeInOut show={true} duration={700}> <div style={{ "background": "white", "height": "100%", "width": "100%", position: "fixed", "zIndex": 999, "paddingTop": "44vh", "paddingBottom": "44vw", "paddingRight": "44vh", "paddingLeft": "44vw" }}>
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            color="#009EFB"
            wrapperClass="blocks-wrapper"
          /><br />
        </div> </FadeInOut> :
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Invoices</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <form>
                {/*row */}
                <div className="row">
                  {/* <div className="col-sm-6 col-md-3">
                    <div className="form-group">
                      <label>Invoice id <span className="text-danger">*</span></label>
                      <input value={`INV-${selectedInvoiceId}`} disabled={true} className="form-control" />
                    </div>
                  </div> */}
                  <div className="col-sm-6 col-md-3">
                    <div className="form-group">
                      <label>Patient <span className="text-danger">*</span></label>...
                      <Select value={selectedPatient} onChange={(e) => { handleChange(e, "patient") }} options={patientsToDisplay} className="select" />
                    </div>
                  </div>
                  {/*col */}
                  <div className="col-sm-6 col-md-3">
                    <div className="form-group">
                      <label>Phone No</label>
                      <Select value={phoneNo} onChange={(e) => { handleChange(e, "phoneNo") }} options={phoneNoToDisplay} className="select" />
                    </div>

                  </div>{/*col */}
                  <div className="col-sm-6 col-md-3">
                    <div className="form-group">
                      <label>Doctor <span className="text-danger">*</span></label>
                      <Select onChange={(e) => { handleChange(e, "doctor") }} options={doctorsToDisplay} className="select" />
                    </div>
                  </div>
                  {/* <div className="col-sm-6 col-md-3">
                    <div className="form-group">
                      <label>Department <span className="text-danger">*</span></label>
                      <input value={selectedDepartment} className="form-control" type="text" />
                    </div>
                  </div> */}
                  {/* <div className="form-group">
                      <label>Tax</label>
                      <Select options={tax} className="select" />

                    </div> */}
                  {/* <div className="col-sm-6 col-md-3">
                    <div className="form-group conditionalDisable" >
                      <label>Tax</label>
                      <Select value={selectedTax} onChange={(e) => { handleChange(e, "tax") }} options={taxToDisplay} className="select conditionalDisable" />
                    </div>
                  </div> */}
                  <div className="col-sm-6 col-md-3">
                    <div className="form-group">
                      <label>Status</label>
                      <Select value={selectedRole} options={role} onChange={(e) => { handleChange(e, "role") }} className="select" />
                    </div>
                  </div>
                  <div className="col-md-6 col-md-3">
                    <div className="form-group">
                      <label>Payment type</label>
                      <Select value={selectedPaymentMode} options={modeOfPayments} onChange={(e) => { handleChange(e, "paymentMode") }} className="select" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="table-responsive">

                      <Button
                        onClick={(e) => { e.preventDefault(); addTableRows() }}
                        type="primary"
                        style={{
                          marginBottom: 16,
                        }}
                      >
                        Add a row
                      </Button>

                      {/* <Table
                        columns={itemTableColumns}
                        dataSource={itemTableData}
                      /> */}
                      <div className="row">
                        <div className="col-sm-12">
                          <table className="table">
                            <thead>
                              <tr>
                                <th style={{ width: "3%" }}>#</th>
                                <th style={{ width: "30%" }}>Item</th>
                                <th style={{ width: "35%" }} >Description</th>
                                <th style={{ width: "10%" }}>Unit Cost</th>
                                <th style={{ width: "10%" }}>Qty</th>
                                <th style={{ width: "12%" }}>Amount</th>
                                {/* <th><button className="btn btn-outline-success" onClick={(e) => { e.preventDefault(); addTableRows() }} >+</button></th> */}
                              </tr>
                            </thead>
                            <tbody>
                              <DynamicTableRows rowsData={rowsData} itemOptions={itemsToDisplay} deleteTableRows={deleteTableRows} handleChange={handleChangeTable} />
                            </tbody>
                          </table>
                        </div>
                        <div className="col-sm-4">
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-hover table-white">
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td className="text-right">Total</td>
                              <td style={{ textAlign: 'right', width: '230px' }}> Rs {_totalAmount.toLocaleString()}</td>
                            </tr>
                            {/* <tr>
                              <td colSpan="5" style={{ textAlign: 'right' }}>Tax</td>
                              <td style={{ textAlign: 'right', width: '230px' }}>
                                <label><span style={{ color: "red" }}>{selectedTax !== undefined ? selectedTax.percentage : 0} %</span></label>
                              </td>
                            </tr> */}
                            <tr>
                              <td colSpan="5" style={{ textAlign: 'right' }}>
                                Discount %
                              </td>
                              <td style={{ textAlign: 'right', width: '230px' }}>
                                <label><span style={{ color: "green", width: "10%", flexDirection: "row" }}>
                                  <input value={totalDiscount} onChange={(e) => { handleChangeTable(undefined, e.target.value, "totalDiscount") }} className="form-control" type="number" />%
                                </span></label>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="5" style={{ textAlign: 'right', fontWeight: 'bold' }}>
                                Grand Total
                              </td>
                              <td style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '16px', width: '230px' }}>
                                Rs {grandTotal.toLocaleString()}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Other Information</label>
                          <textarea className="form-control" value={otherInfo} onChange={(e) => { handleChange(e.target.value, "otherInfo") }} rows="4"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="text-center m-t-20">
                      <button onClick={handleSaveInvoice} className="btn btn-primary submit-btn">Save Invoice</button>
                    </div>
                  </div>
                </div>
                {/*row */}
              </form>
            </div>
          </div>
        </div>
      }
      <Modal
        show={saving}
        centered
        className="delete-modal"
      >
        <Modal.Body closeButton className="text-center">
          <h3>Saving Invoice ...</h3>
          <br />
          <ClipLoader color={'black'} loading={saving} size={30} />
        </Modal.Body>
      </Modal>
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
    </div >
  );
}

export default CreateInvoice;