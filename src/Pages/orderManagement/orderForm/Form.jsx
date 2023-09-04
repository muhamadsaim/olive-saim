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
  { value: "Organic", label: "Organic" },
  { value: "In Organic", label: "In Organic" },
];

const Form = ({ setShowForm }) => {
  const defaultValue = options[0];
  const [selectedOption, setSelectedOption] = useState(null);
  const [register, setRegister] = useState(false);
  const [profile, setProfile] = useState();
  const [value, setValue] = useState();
  const fileInputRef = useRef(null);
  const profileImg = useRef(null);
  const navigate = useNavigate();

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleProfileClick = () => {
    profileImg.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Handle the selected file as needed (e.g., upload it)
      console.log(selectedFile);
    }
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
    navigate("/order-management", { replace: true });
  };
  return (
    <div className="formMain">
      <div className="formDiv1">
        <div className="insideFormDiv1">
          <div className="cusInp">
            <label htmlFor="cusID">Customer ID</label>
            <input
              type="text"
              placeholder="Please Enter your ID"
              id="cusID"
              disabled={register}
            />
          </div>
          <div className="checkDiv">
            <div className="checkBox" onClick={() => setRegister(!register)}>
              {register && <img src={Tick} alt="tick" height={25} />}
            </div>
            <p className="p1">Not Register?</p>
          </div>
        </div>
        <IoMdClose
          color="black"
          size={20}
          onClick={handleCancle}
          className="icon"
        />
      </div>
      {register && (
        <div className="toggleDiv">
          <div className="nameDiv">
            <p className="p5">Your name(required)*</p>
            <div className="inputDiv">
              <div className="nameDiv">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="nameDivv">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="cnic">
            <p className="p5">National ID(required)</p>
              <input type="text" placeholder="xxxxx-xxxxxx-x" />
            </div>
            <div className="picAndphone">
              <div className="picDiv">
                <p className="p6">Upload your picture*</p>
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
                <p className="p6"> Phone number(required)*</p>
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
            <p className="p5">Your Address(required)</p>
              <input type="text" placeholder="Address" />
            </div>
          </div>
        </div>
      )}
      <div className="formDiv2">
        <p className="p2">Order Detail</p>
        <div className="mainFormDiv2">
          <div className="selectDiv">
            <p className="p3">Type of olive fruits*</p>
            <Select
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              className="select"
              defaultValue={defaultValue}
              //   placeholder="Organic"
            />
          </div>
          <div className="picDiv">
            <p className="p4">Weight and picture*</p>
            <div className="wandp">
              <input type="text" placeholder="weight" />
              <img src={Camera} alt="camera" onClick={handleFileClick} />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
                ref={fileInputRef}
              />
            </div>
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

export default Form;
