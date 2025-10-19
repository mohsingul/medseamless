
import React from "react";
import Select from 'react-select';
import { Table, Input, Button, Popconfirm, Form } from 'antd';

export function DynamicTableRows({ rowsData, itemOptions, deleteTableRows, handleChange }) {
    return (

        rowsData.map((data, index) => {

            const serialNo = data["#"];
            const item = data["item"];
            const description = data["description"];
            const cost = data["cost"];
            const amount = data["amount"];
            const quantity = data["qty"];
            return (
                <tr key={index}>
                    <td style={{ width: "3%", textAlign: "center" }} >
                        <label>{serialNo}</label>
                    </td>
                    <td style={{ width: "30%" }}>
                        <Select key={1} onChange={(value) => (handleChange(index, value, "item"))} value={item} options={itemOptions} className="select"></Select>
                    </td>
                    <td style={{ width: "35%" }}>
                        <input disabled={true} className="form-control text-left form-amt disabledOverride" value={description} defaultValue="0" readOnly="" type="text" />
                    </td>
                    <td style={{ width: "10%" }}>
                        <input disabled={true} className="form-control text-left form-amt disabledOverride" value={cost} defaultValue="0" readOnly="" type="text" />
                    </td>
                    <td style={{ width: "10%" }}>
                        <input className="form-control text-left form-amt " onChange={(e) => { e.preventDefault(); handleChange(index, e.target.value, "qty") }} value={quantity} defaultValue={1} readOnly="" type="number" />
                    </td>
                    <td style={{ width: "12%" }}>
                        <input disabled={true} className="form-control text-left form-amt disabledOverride" value={amount} defaultValue="0" readOnly="" type="text" />
                    </td>
                    {/* <td><input type="text" value={emailAddress} onChange={(evnt) => (handleChange(index, evnt))} name="emailAddress" className="form-control" /> </td>
                    <td><input type="text" value={salary} onChange={(evnt) => (handleChange(index, evnt))} name="salary" className="form-control" /> </td> */}
                    <td style={{ width: "5%" }}>
                        <button className="btn btn-outline-danger" onClick={(e) => { e.preventDefault(); deleteTableRows(index) }}>x</button>
                    </td>
                </tr >
            )
        })

    )

}