import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import Delete from "../../assets/images/sent.png";
import IMG01 from "../../assets/images/doctor-thumb-01.jpg";
import IMG02 from "../../assets/images/doctor-thumb-02.jpg";
import IMG03 from "../../assets/images/doctor-thumb-03.jpg";
import IMG04 from "../../assets/images/doctor-thumb-04.jpg";
import IMG05 from "../../assets/images/doctor-thumb-05.jpg";
import {Link } from "react-router-dom";

class DoctorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = (id) => {
    this.setState({
      show: id,
    });
  };
  render() {
    return (
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-sm-4 col-3">
              <h4 className="page-title">Doctors</h4>
            </div>
            <div className="col-sm-8 col-9 text-right m-b-20">
              <Link
                to="/add-doctor"
                className="btn btn-primary btn-rounded float-right"
              >
                <i className="fa fa-plus"></i> Add Doctor
              </Link>
            </div>
          </div>
          <div className="row doctor-grid">
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <Link className="avatar" to="/profile">
                    <img alt="" src={IMG01} />
                  </Link>
                </div>
                <Dropdown className="dropdown profile-action">
                  <Dropdown.Toggle className="action-icon dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link to="/edit-doctor" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => this.handleShow("delete")}
                    >
                      <i className="fa fa-trash-o m-r-5"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h4 className="doctor-name text-ellipsis">
                  <Link to="/profile">Cristina Groves</Link>
                </h4>
                <div className="doc-prof">Gynecologist</div>
                <div className="user-country">
                  <i className="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
          
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <Link className="avatar" to="/profile">
                  <img alt="" src={IMG05} />
                  </Link>
                </div>
                <Dropdown className="dropdown profile-action">
                  <Dropdown.Toggle className="action-icon dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link to="/edit-doctor" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => this.handleShow("delete")}
                    >
                      <i className="fa fa-trash-o m-r-5"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h4 className="doctor-name text-ellipsis">
                  <Link to="/profile">Marie Wells</Link>
                </h4>
                <div className="doc-prof">Psychiatrist</div>
                <div className="user-country">
                  <i className="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                <Link to="/profile" className="avatar">
                    <img alt="" src={IMG04} />
                  </Link>
                </div>
                <Dropdown className="dropdown profile-action">
                  <Dropdown.Toggle className="action-icon dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link to="/edit-doctor" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => this.handleShow("delete")}
                    >
                      <i className="fa fa-trash-o m-r-5"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h4 className="doctor-name text-ellipsis">
                  <Link to="/profile">Mark Hunter</Link>
                </h4>
                <div className="doc-prof">Urologist</div>
                <div className="user-country">
                  <i className="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="#0">
                    <img alt="" src={IMG05} />
                  </a>
                </div>
                <Dropdown className="dropdown profile-action">
                  <Dropdown.Toggle className="action-icon dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link to="/edit-doctor" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => this.handleShow("delete")}
                    >
                      <i className="fa fa-trash-o m-r-5"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h4 className="doctor-name text-ellipsis">
                 <Link to="/profile">Michael Sullivan</Link>
                </h4>
                <div className="doc-prof">Ophthalmologist</div>
                <div className="user-country">
                  <i className="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <Link className="avatar" to="/profile">
                    <img alt="" src={IMG01} />
                  </Link>
                </div>
                <Dropdown className="dropdown profile-action">
                  <Dropdown.Toggle className="action-icon dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link to="/edit-doctor" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => this.handleShow("delete")}
                    >
                      <i className="fa fa-trash-o m-r-5"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h4 className="doctor-name text-ellipsis">
                 <Link to="/profile">Linda Barrett</Link>
                </h4>
                <div className="doc-prof">Dentist</div>
                <div className="user-country">
                  <i className="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <Link className="avatar" to="/profile">
                    <img alt="" src={IMG02} />
                  </Link>
                </div>
                <Dropdown className="dropdown profile-action">
                  <Dropdown.Toggle className="action-icon dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link to="/edit-doctor" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => this.handleShow("delete")}
                    >
                      <i className="fa fa-trash-o m-r-5"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h4 className="doctor-name text-ellipsis">
                 <Link to="/profile">Ronald Jacobs</Link>
                </h4>
                <div className="doc-prof">Oncologist</div>
                <div className="user-country">
                  <i className="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <Link className="avatar" to="/profile">
                    <img alt="" src={IMG03} />
                    </Link>
                </div>
                <Dropdown className="dropdown profile-action">
                  <Dropdown.Toggle className="action-icon dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link to="/edit-doctor" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => this.handleShow("delete")}
                    >
                      <i className="fa fa-trash-o m-r-5"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h4 className="doctor-name text-ellipsis">
                 <Link to="/profile">Albert Sandoval</Link>
                </h4>
                <div className="doc-prof">Neurologist</div>
                <div className="user-country">
                  <i className="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <Link className="avatar" to="/profile">
                    <img alt="" src={IMG04} />
                    </Link>
                </div>
                <Dropdown className="dropdown profile-action">
                  <Dropdown.Toggle className="action-icon dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link to="/edit-doctor" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => this.handleShow("delete")}
                    >
                      <i className="fa fa-trash-o m-r-5"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h4 className="doctor-name text-ellipsis">
                 <Link to="/profile">Diana Bailey</Link>
                </h4>
                <div className="doc-prof">General Surgery</div>
                <div className="user-country">
                  <i className="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="/profile">
                    <img alt="" src={IMG04} />
                  </a>
                </div>
                <Dropdown className="dropdown profile-action">
                  <Dropdown.Toggle className="action-icon dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link to="/edit-doctor" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => this.handleShow("delete")}
                    >
                      <i className="fa fa-trash-o m-r-5"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h4 className="doctor-name text-ellipsis">
                 <Link to="/profile">Shirley Willis</Link>
                </h4>
                <div className="doc-prof">Radiologist</div>
                <div className="user-country">
                  <i className="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="/profile">
                    <img alt="" src={IMG05} />
                  </a>
                </div>
                <Dropdown className="dropdown profile-action">
                  <Dropdown.Toggle className="action-icon dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link to="/edit-doctor" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => this.handleShow("delete")}
                    >
                      <i className="fa fa-trash-o m-r-5"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h4 className="doctor-name text-ellipsis">
                 <Link to="/profile">Pamela Curtis</Link>
                </h4>
                <div className="doc-prof">Pediatrics</div>
                <div className="user-country">
                  <i className="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="/profile">
                    <img alt="" src={IMG01} />
                  </a>
                </div>
                <Dropdown className="dropdown profile-action">
                  <Dropdown.Toggle className="action-icon dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link to="/edit-doctor" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => this.handleShow("delete")}
                    >
                      <i className="fa fa-trash-o m-r-5"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h4 className="doctor-name text-ellipsis">
                 <Link to="/profile">Justin Parker</Link>
                </h4>
                <div className="doc-prof">Physical Therapist</div>
                <div className="user-country">
                  <i className="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4  col-lg-3">
              <div className="profile-widget">
                <div className="doctor-img">
                  <a className="avatar" href="#0">
                    <img alt="" src={IMG05} />
                  </a>
                </div>
                <Dropdown className="dropdown profile-action">
                  <Dropdown.Toggle className="action-icon dropdown-toggle">
                    <i className="fa fa-ellipsis-v"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                    <Link to="/edit-doctor" className="dropdown-item"><i className="fa fa-pencil m-r-5"></i>Edit</Link>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => this.handleShow("delete")}
                    >
                      <i className="fa fa-trash-o m-r-5"></i>Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h4 className="doctor-name text-ellipsis">
                 <Link to="/profile">Michael Sullivan</Link>
                </h4>
                <div className="doc-prof">Ophthalmologist</div>
                <div className="user-country">
                  <i className="fa fa-map-marker"></i> United States, San Francisco
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="see-all">
                <a className="see-all-btn" href="#0">
                  Load More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*modal */}
        <Modal
          show={this.state.show === "delete"}
          onHide={this.handleClose}
          centered
          className="delete-modal"
        >
          <Modal.Body closeButton className="text-center">
            <img src={Delete} alt="" width="50" height="46" />
            <h3>Are you sure want to delete this Doctor?</h3>
            <div className="m-t-20">
              <a className="dropdown-item btn btn-white" href="#0">
                 Close
              </a>
              <a
                className="dropdown-item btn btn-danger"
                href="#0"
                data-toggle="modal"
                data-target="#delete_doctor"
              >
                <i className="fa fa-trash-o m-r-5"></i> Delete
              </a>
            </div>
          </Modal.Body>
        </Modal>
        {/*modal */}
      </div>
    );
  }
}

export default DoctorList;
