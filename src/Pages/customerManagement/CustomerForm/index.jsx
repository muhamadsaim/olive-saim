import React, { useState, useRef } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import Tick from "../../../assets/icons/Tick.png";
import Select from "react-select";
import Camera from "../../../assets/icons/camera.png";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "Gold", label: "Gold" },
  { value: "Silver", label: "Silver" },
  { value: "Platinum", label: "Platinum" },
];

const CustomerForm = ({ setShowForm }) => {
  const defaultValue = options[0];
  const [selectedOption, setSelectedOption] = useState(null);
  const [register, setRegister] = useState(false);
  const [profile, setProfile] = useState();
  const [value, setValue] = useState();
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const profileImg = useRef(null);


  const handleProfileClick = () => {
    profileImg.current.click();
  };

  const handleProfileImage = (event) => {
    const selectedImg = event.target.files[0];
    if (selectedImg) {
      setProfile(selectedImg.name);
      console.log(selectedImg);
    }
  };
  const handleCancle = () => {
    setShowForm(false);
    navigate("/customer-management", { replace: true });
  };
  return (
    <div className="customerForm">
     
      <div className="formDiv1">
        <p className="p1">Create New Customer</p>
        <IoMdClose
          color="black"
          size={20}
          onClick={handleCancle}
          className="icon"
        />
      </div>
      <div className="toggleDiv">
        <div className="nameDiv">
          <p className="p5">Your Name(required)*</p>
          <div className="inputDiv">
            <div className="nameDiv">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="nameDivv">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="cnic">
            <p className="p5">National ID(optional)</p>
            <input type="text" placeholder="xxxxx-xxxxxx-x" />
          </div>
          <div className="picAndphone">
            <div className="picDiv">
              <p className="p6">Upload Your Picture*</p>
              <div className="imgDiv">
                <p>{profile}</p>
                <img src={Camera} alt="camera" onClick={handleProfileClick} />
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleProfileImage}
                  ref={profileImg}
                  accept="image/*"
                />
              </div>
            </div>
            <div className="phoneDiv">
              <p className="p6"> Phone Number(required)*</p>
              <div className="phoneIn">
                <PhoneInput
                  defaultCountry="SA"
                  placeholder="phone number"
                  value={value}
                  onChange={setValue}
                />
              </div>
            </div>
          </div>
          <div className="address">
            <p className="p5">Your Address</p>
            <input type="text" placeholder="Address" />
          </div>
          <div className="customerType">
            <p className="p5">Customer's Type*</p>
            <input type="text" placeholder="Farmers" />
          </div>
          <div className="selectDiv">
            <p className="p3">Loyalty Program*</p>
            <Select
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              className="select"
              defaultValue={defaultValue}
            />
          </div>
        </div>
      </div>

      <div className="buttons">
        <button onClick={handleCancle}>Cancle</button>
        <button>Create</button>
      </div>
    </div>
  );
};

export default CustomerForm;
