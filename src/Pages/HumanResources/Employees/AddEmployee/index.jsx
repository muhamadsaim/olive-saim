import React, { useState,useRef } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AttachementImg from "../../../../assets/icons/attachment.png";
import Calendar from "../../../../assets/icons/calendar.png";
import CalendarCom from "../../../../Components/Common/Calendar/Calendar";

const AddEmployee = ({ setShowForm }) => {
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setCurDate] = useState();
  const [attach, setAttach] = useState();
  const Attachement = useRef(null);
  const handleClick = () => {
    Attachement.current.click();
  };

  const handleAttachement = (event) => {
    const selectedImg = event.target.files[0];
    if (selectedImg) {
      setAttach(selectedImg.name);
    }
  };
  const handleCancle = () => {
    setShowForm(false);
    navigate("/human-resources/employees", { replace: true });
  };
  return (
    <div className="addEmployee">
      <div className="insideEmp">
        <div className="formDiv1">
          <p className="p1">Add Employee*</p>
          <IoMdClose
            color="#90A67B"
            size={20}
            onClick={handleCancle}
            className="icon"
          />
        </div>
        <div className="toggleDiv">
          <div className="nameDiv">
            <p className="p5">Name*</p>
            <div className="inputDiv">
              <div className="nameDiv">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="nameDivv">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
          </div>
          <div className="nameDiv">
            <div className="inputDiv">
              <div className="nameDiv">
                <p className="p5">Department*</p>
                <input type="text" placeholder="Department" />
              </div>
              <div className="nameDivv">
                <p className="p5">Designation*</p>
                <input type="text" placeholder="Designation" />
              </div>
            </div>
          </div>
          <div className="nameDiv">
            <div className="inputDiv">
              <div className="nameDiv">
                <p className="p5">Date</p>
                <div className="calendarDiv">
                  <p>{date && date}</p>
                  <img
                    src={Calendar}
                    alt="calendar"
                    height={30}
                    onClick={() => setShowCalendar(!showCalendar)}
                  />
                </div>
              </div>

              <div className="nameDivv">
                <p className="p5">Role*</p>
                <input type="text" placeholder="Role" />
              </div>
            </div>
          </div>
          <div className="nameDiv">
            <div className="inputDiv">
              <div className="nameDiv">
                <p className="p5">Salary Type*</p>
                <input type="text" placeholder="Fixed Salary" />
              </div>
              <div className="nameDivv">
                <p className="p5">Amount*</p>
                <input type="text" placeholder="155050.00" />
              </div>
            </div>
          </div>
          <div className="holiday">
            <p className="p5">Allowed Holiday*</p>
            <input type="text" placeholder="Allowed Holiday" />
          </div>
          <div className="attachement" onClick={handleClick}>
            <img src={AttachementImg} alt="attch" />
            <p>{attach? `${attach}`:"Attachement"}</p>
            <input type="file"   style={{ display: "none" }}
                  onChange={handleAttachement}
                  ref={Attachement}
                  accept="image/*"/>
          </div>
          {showCalendar && (
            <div>
              <CalendarCom
                showDate={false}
                setShow={setShowCalendar}
                setCurDate={setCurDate}
              />
            </div>
          )}
          <div className="saveBtnAE" onClick={handleCancle}>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
