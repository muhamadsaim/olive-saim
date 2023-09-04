import React, { useState,useEffect } from "react";
import "./Style.scss";
import { Helmet } from "react-helmet-async";
import SalaryStatistic from "./SalaryStatistic";
import EmployeeList from "./EmployeeList";
import Absenties from "./Absenties";
import { Link, Outlet } from "react-router-dom";

const HumanResource = () => {
  const [toggleBtn, setToggleBtn] = useState(0);
  const handleButtonClick = (index) => {
    setToggleBtn(index);
  };

  return (
    <div>
      <Helmet>
        <title>Human Resources</title>
        <meta name="Human Resources" content="This is a Human Resources page" />
      </Helmet>
      <div className="hrMain">
        <div className="buttonDiv">
          <Link to='overview'
            className={
              toggleBtn == 0 ? "selectedBtn firstSelected" : "notSelected"
            }
            onClick={() => handleButtonClick(0)}

          >
            Overview
          </Link>
          <Link to='employees'
            className={toggleBtn == 1 ? "selectedBtn" : "notSelected"}
            onClick={() => handleButtonClick(1)}
          >
            Employees
          </Link>
          <Link
            to='attendance'
            className={toggleBtn == 2 ? "selectedBtn" : "notSelected"}
            onClick={() => handleButtonClick(2)}
          >
            Attendance
          </Link>
          <Link
            to='payroll'
            className={toggleBtn == 3 ? "selectedBtn" : "notSelected"}
            onClick={() => handleButtonClick(3)}
          >
            Payroll
          </Link>
        </div>
        
        <Outlet/>
      </div>
    </div>
  );
};

export default HumanResource;
