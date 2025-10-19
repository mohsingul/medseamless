import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import logo from '../../assets/images/logo.png';
import user from "../../assets/images/user.jpg";
import Clock from 'react-digital-clock';
import { AuthHandler } from "../../AuthHandler";
import { EndPoints } from "../../endPoint";
const Header = () => {
  const [isSelected, setIsSelected] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const pageurl = ["/login", "/error-500", "/error-404", "/lock-screen", "/forgot-password", "/register", "/change-password-user"];
  const pathname = location.pathname;

  if (pageurl.includes(pathname)) {
    return null;
  }

  const getLogo = () => {
    console.log(localStorage.getItem('_LOGO_'))
    return localStorage.getItem('_LOGO_');
  }

  const getTitle = () => {
    try {
      const info = localStorage.getItem('clinicInfo');
      if (info === "undefined") return "Unknown";
      const _info = JSON.parse(info);
      const title = _info.Title;
      return title.length > 12 ? _info.Abbreviation : title;
    } catch (e) {
      return "Unknown";
    }
  }

  const toggle = (e) => {
    e.preventDefault();
    setIsSelected(!isSelected);
  };

  const handlesidebar = () => {
    document.body.classList.toggle('mini-sidebar');
  };

  const handleLogout = () => {
    AuthHandler.clearToken();
    window.location.href="https://medseamless.com/login"
  };

  return (
    <>
      <div className="header hideAllForPrint">
        <div className="header-left">
          <Link to="/dashboard" className="logo">
            <img src={getLogo()} width="35" height="35" alt="" />{" "}
            <span>{getTitle()}</span>
          </Link>
        </div>
        <a id="toggle_btn" href="#0" onClick={handlesidebar}>
          <i className="fa fa-bars"></i>
        </a>
        <a id="mobile_btn" className="mobile_btn float-left" href="#sidebar">
          <i className="fa fa-bars"></i>
        </a>
        <ul className="nav user-menu float-right">
          <Clock />
          <li className="nav-item dropdown has-arrow user-noti">
            <Link to="#0" className="dropdown-toggle nav-link user-link" data-toggle="dropdown">
              <span className="user-img">
                <img className="rounded-circle" src={user} width="24" alt="Admin" />
                <span className="status online"></span>
              </span>
              <span>{AuthHandler.getUser() && AuthHandler.getUser().username ? AuthHandler.getUser().username : "Unauthorized user"}</span>
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/change-password">Change password</Link>
              <Link className="dropdown-item" to="/invoice-settings">Invoice setting</Link>
              <Link className="dropdown-item" onClick={handleLogout} >Logout</Link>
            </div>
          </li>
        </ul>
        <div className="dropdown mobile-user-menu float-right">
          <Link to="#0" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-ellipsis-v"></i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to="/change-password">Change password</Link>
            <Link className="dropdown-item" to="/invoice-settings">Invoice setting</Link>
            <Link className="dropdown-item" onClick={handleLogout} to="/login">Logout</Link>
          </div>
        </div>
        <div className={`${isSelected ? "active" : ""} notification-box`}>
          <div className="msg-sidebar notifications msg-noti">
            <div className="topnav-dropdown-header">
              <span>Messages</span>
            </div>
            <div className="drop-scroll msg-list-scroll" id="msg_list">
              <ul className="list-box">
                <li>
                  <Link to="/chat">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">R</span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Richard Miles</span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix"></div>
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
                {/* Add more list items as needed */}
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <Link to="/chat">See all messages </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
