import React, { useEffect, useState } from "react";
import { Table } from "antd";
import {
  itemRender,
  onShowSizeChange,
} from "../../paginationfunction";
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { ThreeDots } from 'react-loader-spinner'
import { EndPoints } from "../../../endPoint"
import {AuthHandler} from "./../../../AuthHandler" 

function Payments() {
  const [data, setData] = useState([])

  const [loading, setLoading] = useState(true);
  const columns = [

    {
      title: "Invoice id",
      dataIndex: "invoiceid",
      render: (text, record) => <a href="#0">{text}</a>,
      sorter: (a, b) => a.invoiceid.length - b.invoiceid.length,
    },
    {
      title: "Patient",
      dataIndex: "patient",
      sorter: (a, b) => a.patient.length - b.patient.length,
    },
    {
      title: "Payment Type",
      dataIndex: "paymenttype",
      sorter: (a, b) => a.paymenttype.length - b.paymenttype.length,
    },
    {
      title: "Paid Date",
      dataIndex: "date",
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Paid Amount",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
    },

  ];
  useEffect(() => {

    void (async () => {
      const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*","username":AuthHandler.getUser().username };
      let path = `${EndPoints.backendProd}/api/Payments?size=20`
      console.log(path);
      try {
        const invoiceRes = await axios.get(path,
          { headers }
        )

        console.log(invoiceRes);
        const resPaymentData = invoiceRes.data.Info;
        const constructedData = []
        const info = localStorage.getItem('clinicInfo')
        if (info === "undefined") throw new Error("Contact admin to get your details added")
        const jsonInfo = JSON.parse(info)
        // id: 1,
        // invoiceid: '#INV-0001',
        // patient: 'Charles Ortega',
        // paymenttype: 'Paypal',
        // date: '	8 Aug 2017',
        // amount: '$500',
        resPaymentData.forEach((mainItem, index) => {
          if (!mainItem.Invoice) return;
          const itemToPush = {
            id: index + 1,
            invoiceid: `${jsonInfo.Abbreviation}INV-${mainItem.Invoice.ID.toString().padStart(3, '0')}`,
            patient: mainItem.Invoice.Patient ? mainItem.Invoice.Patient.Name : "",
            paymenttype: mainItem.Invoice.ModeOfPayment,
            date: `${new Date(mainItem.Invoice.CreatedDate).toLocaleDateString()}, ${new Date(mainItem.Invoice.CreatedDate).toLocaleTimeString()}`,
            amount: mainItem.Invoice.Amount,

          }
          constructedData.push(itemToPush)
        })
        setData(constructedData);
        setLoading(false)

      } catch (error) {
        console.log(error)
        setLoading(false)
        return;
      }
      // setLoading(false);
    })();

  }, [])
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
            <h4 className="page-title">Payments</h4>
          </div>

        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
                className="table-striped"
                style={{ overflowX: "auto" }}
                columns={columns}
                // bordered
                dataSource={data}
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

    </div>
  );
}

export default Payments;
