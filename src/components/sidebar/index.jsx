import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import './index.css';
import l from "lodash";

const Sidebar = (props) => {
  const [open, setOpen] = useState(false);
  const [activeIds
    , setActiveIds] = useState([]);

  const handleShow = (id) => {
    setOpen(id);
  };
  const [expandAll, setExpandAll] = useState(false);

  const handleClick = (id) => {
    let stateCopy = l.cloneDeep(activeIds)
    console.log(activeIds)
    if (stateCopy.includes(id))
      stateCopy = stateCopy.filter((ids) => {
        return ids !== id
      })
    else
      stateCopy.push(id)
    setActiveIds(stateCopy)
  };
  useEffect(() => {
    console.log(activeIds)
  }, [activeIds])

  const { location } = props;
  const pathname = location.pathname;
  useEffect(() => {
    if (activeIds.length > 0)
      setExpandAll(true)
  }, [activeIds])

  var pageurl = [
    "/change-password-user",
    "/voice-call",
    "/settings",
    "/login",
    "/error-500",
    "/error-404",
    "/lock-screen",
    "/forgot-password",
    "/register",
    "/change-password",
  ];

  if (pageurl.includes(pathname)) {
    return " ";
  }
  const handleExpandAll = () => {
    if (!expandAll)
      setActiveIds(["Accounts", "Procedures", "Patients","Appointments"])
    else
      setActiveIds([])
    setExpandAll(!expandAll);
  }


  return (
    <div className="hideAllForPrint sidebar" id="sidebar">
      {/* <Scrollbars
        style={{
          width: "auto",
          height: "100%",
        }}
        className="menu"
      > */}
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li onClick={handleExpandAll} className="menu-title">Main
              <i class={`${expandAll ? "fa fa-minus-square" : "fa fa-plus-square"}`} aria-hidden="true"></i>
            </li>
            <li>
              <Link to="/dashboard" className={`${'/dashboard' === pathname ? 'activemenu' : ''}`}>
                <i className="fa fa-dashboard"></i> <span>Dashboard</span>
              </Link>
            </li>
            {/*<li>
              <Link to="/doctor-list" className={`${'/doctor-list' === pathname || '/add-doctor' === pathname || '/edit-doctor' === pathname ? 'activemenu' : ''}`}>
                <i className="fa fa-user-md"></i> <span>Doctors</span>
              </Link>
            </li> */}

            <li className="submenu ">
              <Link to="#" onClick={() => { handleClick('Procedures') }}>
                <i className="fa fa-stethoscope"></i> <span> Procedures  </span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul style={{ display: "none" }} className={`${activeIds.includes('Procedures') ? 'showsubmenu' : ''}`}>
                <li>
                  <Link to="/add-procedures" className={`${'/add-procedures' === pathname ? 'activesubmenu' : ''}`}>
                    <i class="fa fa-plus-square" aria-hidden="true"></i> <span>Add Procedure</span>
                  </Link>
                </li>
                <li>
                  <Link to="/procedures" className={`${'/procedures' === pathname ? 'activemenu' : ''}`}>
                    <i class="fa fa-eye" aria-hidden="true"></i> <span>View Procedures</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="submenu ">
              <Link to="#" onClick={() => { handleClick('Patients') }}>
                <i className="fa fa-wheelchair"></i> <span> Patients  </span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul style={{ display: "none" }} className={`${activeIds.includes('Patients') ? 'showsubmenu' : ''}`}>
                <li>
                  <Link to="/add-patients" className={`${'/add-patients' === pathname ? 'activesubmenu' : ''}`}>
                    <i class="fa fa-plus-square" aria-hidden="true"></i> <span>Add Patient</span>
                  </Link>
                </li>
                <li>
                  <Link to="/patients" className={`${'/patients' === pathname ? 'activemenu' : ''}`}>
                    <i class="fa fa-eye" aria-hidden="true"></i> <span>View Patients</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="submenu ">
              <Link to="#" onClick={() => { handleClick('Appointments') }}>
                <i className="fa fa-calendar"></i><span> Appointments  </span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul style={{ display: "none" }} className={`${activeIds.includes('Appointments') ? 'showsubmenu' : ''}`}>
                <li>
                  <Link to="/add-appointments" className={`${'/add-procedures' === pathname ? 'activesubmenu' : ''}`}>
                    <i class="fa fa-plus-square" aria-hidden="true"></i> <span>Add Appointment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/appointments" className={`${'/appointments' === pathname ? 'activemenu' : ''}`}>
                    <i class="fa fa-eye" aria-hidden="true"></i> <span>View Appointments</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="submenu ">
              <Link to="#" onClick={() => { handleClick('Accounts') }}>
                <i className="fa fa-money"></i> <span> Accounts  </span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul style={{ display: "none" }} className={`${activeIds.includes('Accounts') ? 'showsubmenu' : ''}`}>
                <li>
                  <Link to="/create-invoice" className={`${'/create-invoice' === pathname ? 'activesubmenu' : ''}`}><i class="fa fa-plus" aria-hidden="true"></i> Create Invoice</Link>
                </li>
                <li>
                  <Link to="/invoice" className={`${'/invoice' === pathname || '/edit-invoice' === pathname || '/view-invoice' === pathname ? 'activesubmenu' : ''}`}><i class="fa fa-file-text" aria-hidden="true"></i> Invoices</Link>
                </li>

                <li>
                  <Link to="/payments" className={`${'/payments' === pathname ? 'activesubmenu' : ''}`}><i class="fa fa-credit-card" aria-hidden="true"></i> Payments</Link>
                </li>
              </ul>
            </li>

            {/* <li>
              <Link to="/settings" className={`${'/settings' === pathname ? 'activemenu' : ''}`}>
                <i className="fa fa-cog"></i> <span>Settings</span>
              </Link>
            </li> */}
          </ul>
        </div>
      {/* </Scrollbars> */}
    </div>
  );
};

export default withRouter(Sidebar);
