import React, { useEffect, useState } from "react";
import config from 'config';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
  Redirect
} from "react-router-dom";
import { AuthHandler } from "./AuthHandler";
import Login from './components/login';
import Register from './components/register';
import ForgotPassword from './components/forgotpassword';
import UserChangepassword from './components/user-password';
import Header from './components/header';
import Sidebar from './components/sidebar';
import SettingSidebar from './components/setting-sidebar';
import MailSidebar from './components/mail-sidebar';
import Dashboard from './components/dashboard';
import DoctorList from './components/doctorslist';
import AddDoctor from './components/doctorslist/adddoctor';
import EditDoctor from './components/doctorslist/editdoctor';
import Patients from './components/patients';
import AddPatient from './components/patients/addpatients';
import EditPatient from './components/patients/editpatients';
import Appointments from './components/appointments';
import AddAppointments from './components/appointments/addappointment';
import EditAppointments from './components/appointments/editappointment';
import Schedule from './components/schedule';
import AddSchedule from './components/schedule/addschedule';
import EditSchedule from './components/schedule/editshedule';
import Departments from './components/departments';
import AddDepartment from './components/departments/adddepartments';
import EditDepartment from './components/departments/editdepartment';
import EmployeeList from './components/employees/employeelist';
import AddEmployee from './components/employees/employeelist/add-employee';
import EditEmployee from './components/employees/employeelist/edit-employee';
import Leave from './components/employees/leave/index';
import AddLeave from './components/employees/leave/addleave';
import EditLeave from './components/employees/leave/editleave';
import Holidays from './components/employees/holidays';
import AddHoliday from './components/employees/holidays/addholidays';
import EditHoliday from './components/employees/holidays/editholidays';
import Attendance from './components/employees/attendance';
import Invoice from './components/accounts/invoices';
import InvoiceEdit from './components/accounts/invoices/edit';
import InvoiceView from './components/accounts/invoices/view';
import CreateInvoice from './components/accounts/invoices/create';
import Payments from './components/accounts/payments/index';
import Expense from './components/accounts/expense/index';
import AddExpense from './components/accounts/expense/add-expense';
import EditExpense from './components/accounts/expense/edit-expense';
import Taxes from './components/accounts/taxes';
import AddTaxes from './components/accounts/taxes/add-taxes';
import EditTaxes from './components/accounts/taxes/edit-taxes';
import Fund from './components/accounts/fund';
import AddFund from './components/accounts/fund/add-fund';
import EditFund from './components/accounts/fund/edit-fund';
import Salary from './components/payroll/salary';
import AddSalary from './components/payroll/salary/add-salay';
import EditSalary from './components/payroll/salary/edit-salary';
import SalaryView from './components/payroll/salary/salary-view';
import Payslip from './components/payroll/payslip';
import Chat from './components/chat';
import Voicecall from './components/voicecall';
import Editprofile from './components/editprofile';
import Videocall from './components/videocall';
import IncomingCall from './components/incomingcall';
import Activities from './components/activities';
import ComposeMail from './components/mail';
import Inbox from './components/mail/inbox';
import MailView from './components/mail/mail-view';
import Blog from './components/blog';
import BlogDetails from './components/blog/blog-detail';
import AddBlog from './components/blog/blog-add';
import BlogEdit from './components/blog/blog-edit';
import Assets from './components/assets';
import EditAssets from './components/assets-edit';
import AssetsAdd from './components/assets-add';
import Profile from './components/profile';
import Setting from './components/setting';
import Localization from './components/setting/basic-settings';
import themeSetting from './components/setting/theme-settings';
import rolepermission from './components/setting/role-permission';
import editrole from './components/setting/role-permission/edit-role';
import addrole from './components/setting/role-permission/add-role';
import EmailSettings from './components/setting/email-setting';
import InvoiceSetting from './components/setting/invoice-settings';
import SalarySetting from './components/setting/salary-settings';
import notificationSetting from './components/setting/notifications-settings';
import ChangePassword from './components/setting/change-password';
import LeaveType from './components/setting/leave-type';
import LeaveEdit from './components/setting/leave-type/edit-leave';
import LeaveAdd from './components/setting/leave-type/add-leave';
import ExpenseReport from './components/reports/expense-report';
import EditExpenseReport from './components/reports/expense-report/edit-expense';
import ExpenseInvoiceReport from './components/reports/invoice-report';
import Error500 from './components/error-500';
import Error404 from './components/error-404';
import Lockscreen from './components/lock-screen';
import Blank from './components/blank';
import uikit from './components/uielements/uikit';
import typography from './components/uielements/typo';
import tabs from './components/uielements/tabs';
import BasicInput from './components/uielements/forms/basic-inputs';
import FormInputGroup from './components/uielements/forms/form-input-groups';
import Formhorizontal from './components/uielements/forms/form-horizontal';
import FormVertical from './components/uielements/forms/form-vertical';
import TableBasic from './components/uielements/tables/table-basic';
import DataTable from './components/uielements/tables/data-table';
import Procedures from './components/procedures';
import AddProcedure from './components/procedures/addProcedures';
import EditProcedure from './components/procedures/editProcedures';
import { ProtectedRoute } from "./protectedRoutes";
const AppUniversal = function (props) {

  const settingurl = [
    '/settings',
    '/localization',
    '/theme-settings',
    '/role-permission',
    '/edit-role',
    '/add-role',
    '/email-settings',
    '/invoice-settings',
    '/salary-settings',
    '/notification-setting',
    '/change-password',
    '/leave-type',
    '/edit-leave',
    '/leave-add',
  ]

  const mailurl = [
    '/inbox',
    '/compose-mail',
    '/mail-view'
  ]
  const history = useHistory();
  const [tokenAcquired, setTokenAcquired] = useState(false)
  // console.log('location', props.location.pathname)
  // useEffect(() => {
  //   const tokenExpiry = localStorage.getItem('TOKEN_EXPIRY'); // or use context if using React Context API
  //   if (tokenExpiry) {
  //     const expiryDate = new Date(tokenExpiry).getTime();
  //     const currentTime = new Date().getTime();
  //     const timeLeft = expiryDate - currentTime;
  //     console.log(`expiry at ${tokenExpiry}  `)
  //     // Log out when the token expires
  //     if (timeLeft > 0) {
  //       const timer = setTimeout(() => {
  //         AuthHandler.clearToken(); // Clear token or perform logout
  //         history.push('/login'); // Redirect to login page
  //       }, timeLeft);

  //       return () => clearTimeout(timer); // Clear timer on unmount
  //     } else {
  //       AuthHandler.clearToken(); // Token a.lready expired
  //       history.push('/login');
  //     }
  //   }
  // }, [tokenAcquired, history]);

  return (

    <Router basename={`${config.publicPath}`}>
      <div className="main-wrapper">
        <Route component={Header} />
        {/* {
          (settingurl.includes(props.location.pathname) ? <Route component={SettingSidebar} />
            : mailurl.includes(props.location.pathname) ? <Route component={MailSidebar} /> : <Route component={Sidebar} />)
        } */}

        <Route component={Sidebar} />
        <Switch>
          <Redirect exact from="/" to="/login" />
          {/* <Route path="/login" render={(props) => <Login {...props} triggerTokenCheck={() => { setTokenAcquired(true) }} />} /> */}
          <Route path="/login" render={(props) => <Login {...props} />} />
          <Route path="/register" component={Register} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/change-password-user" component={UserChangepassword} />
          <ProtectedRoute path="/change-password" component={ChangePassword} />
          <ProtectedRoute path="/procedures" component={Procedures} />
          <ProtectedRoute path="/edit-procedures" component={EditProcedure} />
          <ProtectedRoute path="/add-procedures" component={AddProcedure} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/doctor-list" component={DoctorList} />
          <ProtectedRoute path="/add-doctor" component={AddDoctor} />
          <ProtectedRoute path="/edit-doctor" component={EditDoctor} />
          <ProtectedRoute path="/patients" component={Patients} />
          <ProtectedRoute path="/add-patients" component={AddPatient} />
          <ProtectedRoute path="/edit-patients" component={EditPatient} />
          <ProtectedRoute path="/appointments" component={Appointments} />
          <ProtectedRoute path="/add-appointments" component={AddAppointments} />
          <ProtectedRoute path="/edit-appointments" component={EditAppointments} />
          {/* <ProtectedRoute path="/schedule" component={Schedule} />
          <ProtectedRoute path="/add-schedule" component={AddSchedule} />
          <ProtectedRoute path="/edit-schedule" component={EditSchedule} />
          <ProtectedRoute path="/departments" component={Departments} />
          <ProtectedRoute path="/add-departments" component={AddDepartment} />
          <ProtectedRoute path="/edit-departments" component={EditDepartment} />
          <ProtectedRoute path="/employee-list" component={EmployeeList} />
          <ProtectedRoute path="/add-employee" component={AddEmployee} />
          <ProtectedRoute path="/edit-employee" component={EditEmployee} />
          <ProtectedRoute path="/leave" component={Leave} />
          <ProtectedRoute path="/add-leave" component={AddLeave} />
          <ProtectedRoute path="/leave-edit" component={EditLeave} />
          <ProtectedRoute path="/holidays" component={Holidays} />
          <ProtectedRoute path="/add-holidays" component={AddHoliday} />
          <ProtectedRoute path="/edit-holidays" component={EditHoliday} />
          <ProtectedRoute path="/attendance" component={Attendance} /> */}
          <ProtectedRoute path="/invoice" component={Invoice} />
          <ProtectedRoute path="/edit-invoice" component={InvoiceEdit} />
          <ProtectedRoute path="/view-invoice" component={InvoiceView} />
          <ProtectedRoute path="/create-invoice" component={CreateInvoice} />
          <ProtectedRoute path="/payments" component={Payments} />
          <ProtectedRoute path="/invoice-settings" component={InvoiceSetting} />
          {/* <ProtectedRoute path="/expense" component={Expense} />
          <ProtectedRoute path="/add-expense" component={AddExpense} />
          <ProtectedRoute path="/edit-expense" component={EditExpense} />
          <ProtectedRoute path="/taxes" component={Taxes} />
          <ProtectedRoute path="/add-taxes" component={AddTaxes} />
          <ProtectedRoute path="/edit-taxes" component={EditTaxes} />
          <ProtectedRoute path="/fund" component={Fund} />
          <ProtectedRoute path="/add-fund" component={AddFund} />
          <ProtectedRoute path="/edit-fund" component={EditFund} />
          <ProtectedRoute path="/salary" component={Salary} />
          <ProtectedRoute path="/salary-view" component={SalaryView} />
          <ProtectedRoute path="/add-salary" component={AddSalary} />
          <ProtectedRoute path="/edit-salary" component={EditSalary} />
          <ProtectedRoute path="/payslip" component={Payslip} />
          <ProtectedRoute path="/chat" component={Chat} />
          <ProtectedRoute path="/voice-call" component={Voicecall} />
          <ProtectedRoute path="/edit-profile" component={Editprofile} />
          <ProtectedRoute path="/video-call" component={Videocall} />
          <ProtectedRoute path="/incoming-call" component={IncomingCall} />
          <ProtectedRoute path="/activities" component={Activities} />
          <ProtectedRoute path="/compose-mail" component={ComposeMail} />
          <ProtectedRoute path="/inbox" component={Inbox} />
          <ProtectedRoute path="/mail-view" component={MailView} />
          <ProtectedRoute path="/blog" component={Blog} />
          <ProtectedRoute path="/blog-details" component={BlogDetails} />
          <ProtectedRoute path="/add-blog" component={AddBlog} />
          <ProtectedRoute path="/edit-blog" component={BlogEdit} />
          <ProtectedRoute path="/assets" component={Assets} />
          <ProtectedRoute path="/assets-edit" component={EditAssets} />
          <ProtectedRoute path="/assets-add" component={AssetsAdd} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/settings" component={Setting} />
          <ProtectedRoute path="/localization" component={Localization} />
          <ProtectedRoute path="/theme-settings" component={themeSetting} />
          <ProtectedRoute path="/role-permission" component={rolepermission} />
          <ProtectedRoute path="/edit-role" component={editrole} />
          <ProtectedRoute path="/add-role" component={addrole} />
          <ProtectedRoute path="/email-settings" component={EmailSettings} />
          <ProtectedRoute path="/salary-settings" component={SalarySetting} />
          <ProtectedRoute path="/notification-setting" component={notificationSetting} />
          <ProtectedRoute path="/leave-type" component={LeaveType} />
          <ProtectedRoute path="/edit-leave" component={LeaveEdit} />
          <ProtectedRoute path="/leave-add" component={LeaveAdd} />
          <ProtectedRoute path="/expense-report" component={ExpenseReport} />
          <ProtectedRoute path="/edit-expense-report" component={EditExpenseReport} />
          <ProtectedRoute path="/invoice-expense-report" component={ExpenseInvoiceReport} />
          <ProtectedRoute path="/lock-screen" component={Lockscreen} />
          <ProtectedRoute path="/blank-page" component={Blank} />
          <ProtectedRoute path="/uikit" component={uikit} />
          <ProtectedRoute path="/typography" component={typography} />
          <ProtectedRoute path="/tabs" component={tabs} />
          <ProtectedRoute path="/basic-input" component={BasicInput} />
          <ProtectedRoute path="/form-input-group" component={FormInputGroup} />
          <ProtectedRoute path="/form-horizontal" component={Formhorizontal} />
          <ProtectedRoute path="/form-vertical" component={FormVertical} />
          <ProtectedRoute path="/basic-table" component={TableBasic} />
          <ProtectedRoute path="/data-table" component={DataTable} /> */}
          <Route path="/error-500" component={Error500} />
          <Route path="/error-404" component={Error404} />

        </Switch>
      </div>
      
      <div className="sidebar-overlay" data-reff />
    </Router>
  );
};

export default AppUniversal;
