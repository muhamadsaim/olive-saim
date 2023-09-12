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
import {EmployeeData} from './Table/Constant'

const Employees = () => {
  const [searchBar, setSearchBar] = useState();
  const [addEmp, setAddEmp] = useState(0);
  const [leaveForm, setLeaveForm] = useState(0);
  const [show, setShow] = useState(true);
  const address='/human-resources/employees'
  return (
    <div className="employeesMain">
      {show ? (
        <>
          <div className="employeeBtn">
            <p className="p1">Employees</p>
            <div className="btns">
              <Link to="leave-request" onClick={() => {
                setLeaveForm(1)
                setAddEmp(0)
              }}>
                Leave Request
              </Link>
              <Link to="add-employee" onClick={() => {
                setLeaveForm(0)
                setAddEmp(1)
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
          {(addEmp===1) && <AddEmployee setShowForm={setAddEmp} address={address}/>}
          {(leaveForm===1) && <LeaveForm setShowForm={setLeaveForm} address={address}/>}
          <div className="empTable">
            <EmployeeTable searchVal={searchBar} setShow={setShow} data={EmployeeData} />
          </div>
        </>
      ) : (
        <Profile setShow={setShow} />
      )}
    </div>
  );
};

export default Employees;
