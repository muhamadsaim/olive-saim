import React, { useState } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Search from "../../../../assets/icons/GreenSearch.png";
import Medical from "../../../../assets/icons/medical.png";
import Unpaid from "../../../../assets/icons/unpaid.png";
import Calendar from "../../../../assets/icons/calendar.png";
import CalendarCom from "../../../../Components/Common/Calendar/Calendar";

const LeaveForm = ({ setLeaveForm }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState();
  const [returnDate, setReturnDate] = useState();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleCancle = () => {
    setLeaveForm(false);
    navigate("/human-resources/employees", { replace: true });
  };
  return (
    <div className="leaveMain">
      <div className="leaveInside">
        <p className="p1">New Leave Request</p>
        <IoMdClose
          color="#90A67B"
          size={20}
          onClick={handleCancle}
          className="icon"
        />
      </div>

      <div className="leaveForm">
        <div className="leaveFields">
          <div className="searchDiv">
            <p>Select Employee*</p>
            <div className="search">
              <img src={Search} alt="search" height={20} />
              <input type="text" placeholder="Search For Employee" />
            </div>
          </div>

          <div className="leaveType">
            <p className="p1">Leave Type*</p>
            <div className="types">
              <div className="type">
                <div className="imgDiv">
                  <img src={Medical} alt="Medical" height={22} />
                </div>
                <div className="leaveText">
                  <p className="p1">Medical Leave</p>
                  <p className="p2">
                    Workers can stay home to address their health needs without
                    losing pay.
                  </p>
                </div>
              </div>
              <div className="type">
                <div className="imgDiv">
                  <img src={Unpaid} alt="Unpaid" height={27} />
                </div>
                <div className="leaveText">
                  <p className="p1">Unpaid Leave</p>
                  <p className="p2">
                    Workers can receive time off from work but does not receive
                    a pay.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="leaveDateDiv">
            <div className="leaveDate">
              <p className="p1">Leave Date*</p>
              <div className="CalendarDiv">
                <p>{startDate ? `${startDate}` : "dd/mm/yyyy"}</p>
                <img
                  src={Calendar}
                  alt="Calendar"
                  height={20}
                  onClick={() => {
                    setShow1(false);
                    setShow(true);
                  }}
                />
              </div>
            </div>
            <div className="leaveDate">
              <p className="p1">Return Date*</p>
              <div className="CalendarDiv">
                <p>{returnDate ? `${returnDate}` : "dd/mm/yyyy"}</p>
                <img
                  src={Calendar}
                  alt="Calendar"
                  height={20}
                  onClick={() => {
                    setShow1(true);
                    setShow(false);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="reason">
                      <p className="p1">Reason*</p>
                      <div className="reasonBox">
                          <textarea rows="5"  className="textArea"/>
                      </div>
                  </div>
          {show && <CalendarCom setShow={setShow} setCurDate={setStartDate} />}
          {show1 && (
            <CalendarCom setShow={setShow1} setCurDate={setReturnDate} />
          )}
        </div>
          </div>
          <div className="leaveBtn">
              <button className="cancle">Cancle</button>
              <button className="confirm">Confirm</button>
          </div>
    </div>
  );
};

export default LeaveForm;
