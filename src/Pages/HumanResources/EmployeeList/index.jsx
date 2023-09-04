import React, { useState } from "react";
import "./Style.scss";
import { EmployeeData } from "./constant";
import Profile from '../../../assets/icons/profile.jpg'

const EmployeeList = () => {
  const [employees, setEmployees] = useState(EmployeeData);
  return (
    <div className="employeeMain">
      <div className="insideMainEmp">
      <p className="employee">Employees</p>
      <div className="employeeList">
        {employees &&
          EmployeeData.map((data, index) => {
            return <div key={index} className="employeeInfo">
              <div className="imgDiv">
                <img src={Profile} alt="profile" />
                <div className="bioDiv">
                  <p>{data.name}</p>
                  <p className="gp">{data.post}</p>
                </div>
              </div>
              <div className="expDiv">
                <p className="gp">{data.period}</p>
                <p >{data.date}</p>
              </div>
            </div>
          })}
      </div>
      </div>
    </div>
  );
};

export default EmployeeList;
