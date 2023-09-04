import React, { useState } from "react";
import "./Style.scss";
import { Link } from "react-router-dom";
import Search from "../../../assets/icons/search.png";
import EmployeeTable from "./Table";
import AddEmployee from "./AddEmployee";
import LeaveForm from "./Leave";
import { FaLessThanEqual } from "react-icons/fa";
import Profile from "./Profile";
import CustomSearchInput from "../../../Components/Common/customSearch";

const Employees = () => {
  const [searchBar, setSearchBar] = useState();
  const [addEmp, setAddEmp] = useState(false);
  const [leaveForm, setLeaveForm] = useState(false);
  const [show, setShow] = useState(true);
  return (
    <div className="employeesMain">
      {show ? (
        <>
          <div className="employeeBtn">
            <p className="p1">Employees</p>
            <div className="btns">
              <Link to="leave-request" onClick={() => {
                setLeaveForm(true)
                setAddEmp(false)
              }}>
                Leave Request
              </Link>
              <Link to="add-employee" onClick={() => {
                setLeaveForm(false)
                setAddEmp(true)
              }}>
                + Add New
              </Link>
              {/* <div className="searchDiv">
                <img src={Search} alt="search" height={20} />
                <input
                  type="text"
                  placeholder="search"
                  onChange={(e) => setSearchBar(e.target.value)}
                />
              </div> */}
            <CustomSearchInput placeholder="search" onSearchChange={setSearchBar} iconShow={true}/>
            </div>
          </div>
          {addEmp && <AddEmployee setShowForm={setAddEmp} />}
          {leaveForm && <LeaveForm setLeaveForm={setLeaveForm} />}
          <div className="empTable">
            <EmployeeTable searchVal={searchBar} setShow={setShow} />
          </div>
        </>
      ) : (
        <Profile setShow={setShow} />
      )}
    </div>
  );
};

export default Employees;
