import React from "react";
import "./Style.scss";
import Search from "../../../assets/icons/search.png";
import Report from "../../../assets/AuthImages/R.png";

const Reports = () => {
  return (
    <div className="mainContainerR">
      <p className="p3">Reports</p>
      <div className="searchDiv">
        <img src={Search} alt="search" height={20} />
        <input type="text" placeholder="search" />
      </div>
      <div className="reportMain">
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <div className="Report" key={index}>
            <div className="imgDiv">
              <img src={Report} alt="Report" />
              <div className="reportTitle">
                <p className="p2">Lorem Ipsum</p>
                <p className="p1">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <p className="date">15/08/2023</p>
          </div>
        );
      })}
     </div>
      <div className="generetaReport">
          <button>Generate Report</button>
      </div>
    </div>
  );
};

export default Reports;
