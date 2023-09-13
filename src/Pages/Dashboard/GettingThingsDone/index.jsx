import React, { useState } from "react";
import "./Style.scss";
import Emp from "../../../assets/icons/user.png";
import Leave from "../../../assets/icons/leave.png";
import NewStock from "../../../assets/icons/stock.png";
import Receipt from "../../../assets/icons/receipt.png";
import Complain from "../../../assets/icons/complain.png";
import PayBill from "../../../assets/icons/paybill.png";
import RunPay from "../../../assets/icons/runpay.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { setValue } from "../../../Redux/slice/NavbarValues";
import { useDispatch } from "react-redux";
import CustomerForm from "../../customerManagement/CustomerForm";
import AddEmployee from "../../HumanResources/Employees/AddEmployee";
import LeaveForm from "../../HumanResources/Employees/Leave";
import AddOrder from "../../LabService/AddOrder";

const GettingThingDone = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [comp, setComp] = useState(0);
  const address = "/dashboard/getting-things-don";
  const handleCustomer = () => {
    // navigate('/customer-management/create-customer', { replace: true })
    // dispatch(setValue(3))
    // console.log(localStorage.getItem('selectedItemIndex'))
    // localStorage.removeItem('selectedItemIndex');
    // localStorage.setItem('selectedItemIndex', 3);
  };
  return (
    <div className="mainContainerGTD">
      <span className="pGTD">Getting Things Done</span>
      <div className="shortcuts">
        <p className="p2">shortcuts</p>
        {comp === 1 ? (
          <CustomerForm setShowForm={setComp} address={address} />
        ) : null}
        {comp === 2 ? (
          <AddEmployee setShowForm={setComp} address={address} />
        ) : null}
        {comp === 3 ? (
          <LeaveForm setShowForm={setComp} address={address} />
        ) : null}
        {comp === 4 ? (
          <AddOrder setShowForm={setComp} address={address} />
        ) : null}
        <div className="mainShortcuts">
          <div className="blocks">
            <Link to="add-customer" onClick={() => setComp(1)}>
              <div className="block">
                <div className="imgDiv">
                  <img src={Emp} alt="Emp" />
                </div>
                <p className="p3">Add Customer</p>
              </div>
            </Link>
            <Link to="add-employee" onClick={() => setComp(2)}>
              <div className="block">
                <div className="imgDiv">
                  <img src={Emp} alt="Emp" />
                </div>
                <p className="p3">Add Employee</p>
              </div>
            </Link>
            <Link to='leave-request'onClick={()=>setComp(3)}>
            
            <div className="block">
              <div className="imgDiv">
                <img src={Leave} alt="leave" />
              </div>
              <p className="p3">Leave Requests</p>
            </div>
            </Link>
            <div className="block">
              <div className="imgDiv">
                <img src={NewStock} alt="Add New Stock" />
              </div>
              <p className="p3">Add New Stock</p>
            </div>
          </div>
          <div className="blocks" style={{ marginTop: "30px" }}>
            <div className="block">
              <div className="imgDiv">
                <img src={Receipt} alt="receipt" />
              </div>
              <p className="p3">Add Receipt</p>
            </div>
            <Link to='add-test' onClick={()=>setComp(4)}>
            
            <div className="block">
              <div className="imgDiv">
                <img src={Complain} alt="complain" />
              </div>
              <p className="p3">Add Test</p>
            </div>
            </Link>
            <div className="block">
              <div className="imgDiv">
                <img src={PayBill} alt="Pay Bill" />
              </div>
              <p className="p3">Pay Bill</p>
            </div>
            <div className="block">
              <div className="imgDiv">
                <img src={RunPay} alt="Run payroll" />
              </div>
              <p className="p3">Run Payroll</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingThingDone;
