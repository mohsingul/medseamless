import { Table, Dropdown, Button, Menu } from "antd";
import { EllipsisOutlined } from '@ant-design/icons';
import Delete from "../../assets/images/sent.png";
import { Tag } from 'antd';
import {
  itemRender,
  onShowSizeChange,
} from "../../components/paginationfunction";


import React, { useEffect, useState } from "react";

import { Modal } from "react-bootstrap";
import LoadingOverlay from 'react-loading-overlay';
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Toaster, toast } from 'react-hot-toast';
import { ThreeDots } from 'react-loader-spinner'
import { EndPoints } from "../../endPoint"
import { AuthHandler } from "./../../AuthHandler"

import axios from 'axios';

import IMG01 from "../../assets/images/user.jpg";



function Procedure(props) {
  const [show, setShow] = useState(null);
  const [data, setData] = useState([]);
  const [selectedProcedure, setSelectedProcedure] = useState();
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {

    void (async () => {
      const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "username": AuthHandler.getUser().username };
      const path = `${EndPoints.backendProd}/api/Procedures?size=200`
      console.log(path);
      try {
        const response = await axios.get(path,
          { headers }
        )
        console.log(response)
        const procedures = response.data.Info;
        setData(response.data.Info)
      } catch (error) {
        console.log(error)
        return;
      }
      setLoading(false);
    })();

  }, [])

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (id, record) => {
    setShow(id)
    setSelectedProcedure(record);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "ID",
      render: (text, record) => (
        <div className="table-avatar">
          <a href="#0" className="avatar avatar-sm mr-2">
            <img alt="" src={record.image} />
          </a>
          {text}
        </div>
      ),
      sorter: (a, b) => a.ID.length - b.ID.length,
    },
    {
      title: "Name",
      dataIndex: "Name",
      // render: (text, record) => <div className="text-center">{text}</div>,
      sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "Cost",
      dataIndex: "Cost",
      sorter: (a, b) => a.Cost.length - b.Cost.length,
    },
    {
      title: "Description",
      dataIndex: "Description",
      sorter: (a, b) => a.Description.length - b.Description.length,

    },
    {
      title: "Status",
      dataIndex: "Role",
      render: Role => (
        <span>
          <Tag color={Role ? "green" : 'red'} key={Role ? "green" : 'red'} className="custom-badge">
            {Role ? "Active" : 'In Active'}
          </Tag>
        </span>
      ),
    },

    {
      title: "Action",
      dataIndex: "Action",
      render: (text, record) => {
        const menu = (
          <Menu>
            <Menu.Item key="edit">
              <Link to={{ pathname: "/edit-procedures", procedure: { ...record } }} >
                <i className="fa fa-pencil m-r-5"></i>Edit</Link>
            </Menu.Item>
            <Menu.Item key="delete" onClick={() => handleShow("delete", record)}>
              <i className="fa fa-trash-o m-r-5"></i>Delete
            </Menu.Item>
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

  const onDelete = async () => {
    setDeleting(true);

    if (!selectedProcedure || !selectedProcedure._id) {
      toast('UID not found',
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
    }
    const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "username": AuthHandler.getUser().username };
    const path = `${EndPoints.backendProd}/api/Procedures/deleteProcedure/`
    console.log(path);
    try {
      await axios.post(path,
        {
          id: selectedProcedure._id
        },
        { headers }
      )

      setDeleting(false);
      let indexOfRowToDelete = -1
      data.find((row, index) => {
        row._id === selectedProcedure._id && (indexOfRowToDelete = index);
      })
      const copiedData = data;
      indexOfRowToDelete !== -1 && copiedData.splice(indexOfRowToDelete, 1);
      setData(copiedData)
      setShow(null)
      toast('Record deleted successfully',
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
      setDeleting(false);
      toast(error.message,
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
            <h4 className="page-title">Procedures</h4>
          </div>
          <div className="col-sm-8 col-9 text-right m-b-20">
            <Link
              to="/add-procedures"
              className="btn btn btn-primary btn-rounded float-right"
            >
              <i className="fa fa-plus"></i> Add Procedure
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <Table
                className="table-striped"
                style={{ overflowX: "scroll" }}
                columns={columns}
                // bordered
                dataSource={[...data]}
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
          {deleting ? <h3>Record Deletion</h3> : <h3>Are you sure want to delete this Procedure?</h3>}
          <ClipLoader color={'black'} loading={deleting} size={30} />
          {!deleting && <div className="m-t-20">
            <a className="dropdown-item btn btn-white" onClick={() => setShow(false)} href="#0">
              Close
            </a>
            <a
              className="dropdown-item btn btn-danger"
              href="#0"
              data-toggle="modal"
              data-target="#delete_doctor"
              onClick={onDelete}
            >
              <i className="fa fa-trash-o m-r-5"></i> Delete
            </a>
          </div>}
        </Modal.Body>
      </Modal>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  );
}

export default Procedure;

