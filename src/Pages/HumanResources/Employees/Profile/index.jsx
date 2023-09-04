import React, { useState,useMemo } from "react";
import "./Style.scss";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import ProfileImg from "../../../../assets/icons/profileN.png";
import Calendar from "../../../../assets/icons/calendar.png";
import CalendarCom from "../../../../Components/Common/Calendar/Calendar";
import Select from "react-select";
import countryList from 'react-select-country-list'


const Profile = ({ setShow }) => {
    const navigate = useNavigate();
    const options = useMemo(() => countryList().getData(), [])
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [curDate, setCurDate] = useState();
  const handleCancle = () => {
    setShow(true);
    navigate("/human-resources/employees", { replace: true });
  };

  return (
    <div className="profileMain">
      <div className="backDiv">
        <BsFillArrowLeftSquareFill
          size={22}
          className="icon"
          onClick={handleCancle}
        />
        <p>Employee detail</p>
      </div>
      <div className="bioInfo">
        <div className="infoDiv">
          <p className="p1">Basic Information</p>
          <div className="inputFields">
            <div className="fields">
              <div className="name">
                <p>First Name</p>
                <input type="text" placeholder="First Name" />
              </div>
              <div className="name">
                <p>Last Name</p>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="fields">
              <div className="name">
                <p>Employee Id</p>
                <input type="text" placeholder="xxxxxxx" />
              </div>
              <div className="name">
                <p>Email</p>
                <input type="text" placeholder="sample@gmail.com" />
              </div>
            </div>
          </div>
        </div>
        <div className="imgDiv">
          <img src={ProfileImg} alt="profile" />
        </div>
      </div>
      {showCalendar && (
        <CalendarCom
          setCurDate={setCurDate}
          setShow={setShowCalendar}
          showDate={true}
        />
      )}
      <div className="bioInfo">
        <div className="infoDiv">
          <p className="p1">Personal Details</p>
          <div className="inputFields">
            <div className="fields">
              <div className="name">
                <p>Address</p>
                <input type="text" placeholder="Address" />
              </div>
              <div className="name">
                <p>Mobile Number</p>
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>
            <div className="fields">
              <div className="birth">
                <p>Date Of Birth</p>
                <div className="birthMain">
                  <p>{curDate ? `${curDate}` : "dd/mm/yyyy"}</p>
                  <img
                    src={Calendar}
                    alt="calendar"
                    height={20}
                    onClick={() => setShowCalendar(true)}
                  />
                </div>
              </div>
              <div className="name">
                <p>Nationality</p>
                <Select
                  value={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  className="select"
                  placeholder="Country"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Detail">
          <div className="insideDetail">
            <p>Abu Huraira</p>
            <ul>
              <li>Employee</li>
              <li>sample@gmail.com</li>
              <li>+92 983893432</li>
              <li>street no 123,california</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
