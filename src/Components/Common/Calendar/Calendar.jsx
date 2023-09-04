import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Theme from "../../../Theme/Theme";
import "./Style.scss";
import CalendarImg from "../../../assets/icons/calendarD.png";
import { IoMdClose } from "react-icons/io";

const CalendarCom = ({ styleCheck,setShow,showDate,setCurDate }) => {
  const lightTheme = Theme();

  const [date, setDate] = useState(new Date());

  const getDate = (date) => {
    setDate(date);
    setCurDate(date.toDateString());
  };
  const dateDiv = {
    backgroundColor: `${lightTheme.currentDateDiv}`,
    border: `1px solid ${lightTheme.dateBorderColor}`,
  };

  return (
    <div
      className={styleCheck ? "calendarMain" : "calendarMain1"}
      style={{ backgroundColor: `${lightTheme.componentBackground}` }}
    >
      <div className="calendarDiv">
        {

       showDate&&<div className="dateDiv" style={dateDiv}>
          <img src={CalendarImg} alt="calendar" height={17} />
          <p
            className="currentDate"
            style={{ color: `${lightTheme.textColor}` }}
          >
            {" "}
            {date.toDateString()}
          </p>
        </div>
        }
        {!styleCheck && <div className="close"><IoMdClose size={20} color="rgba(0, 0, 0, 0.34)" onClick={()=>setShow(false)}/></div>}

        <Calendar
          onChange={getDate}
          value={date}
          prev2Label={null}
          next2Label={null}
          className="calendarDashboard"
        />
      </div>
    </div>
  );
};

export default CalendarCom;
