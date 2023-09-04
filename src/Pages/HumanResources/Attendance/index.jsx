import React, { useState } from "react";
import "./Style.scss";
import Arrow from "../../../assets/icons/downArrow.png";
import AttendanceTable from "./Table";
import html2pdf from 'html2pdf.js';
import CalendarCom from "../../../Components/Common/Calendar/Calendar";

const Attendance = () => {
  const[show,setShow]=useState(false)
  const [curDate, setCurDate] = useState()
  const nowDate = new Date().toDateString()
  
  const generatePDF = () => {
    const content = document.querySelector('.attendanceTable'); // The element you want to capture
    const options = {
      filename: 'Attendance Report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(content).set(options).save();

    // html2pdf().from(content).save('Attendance Report.pdf');
  };
  return (
    <div className="attendanceMain">
      <div className="attendanceInside">
        <p className="p1">Attendance</p>
        <div className="attendanceBtn">
          <div className="dateMain">
            <p className="p2">Time Period</p>
            <div className="dateDiv" onClick={()=>setShow(true)}>
              <p>{curDate?curDate:nowDate}</p>
              <img src={Arrow} alt="Arrow" height={8} />
            </div>
          </div>
          <div className="downloadReport" onClick={generatePDF}>
            <p>Download a report</p>
          </div>
        </div>
      </div>
      {
        show && <CalendarCom setShow={setShow} showDate={true} setCurDate={setCurDate} />
      }
      <div className="attendanceTable">
        <AttendanceTable/>
      </div>
    </div>
  );
};

export default Attendance;
