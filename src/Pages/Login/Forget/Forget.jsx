import React, { useState } from "react";
import "./Style.scss";
import Logo from "../../../assets/icons/logo.png";
import { SuccessMessage } from '../../../Helper/Message'
import {useNavigate} from 'react-router-dom'

const Forget = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    phone: "",
  });
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    SuccessMessage(`verification code is sent on ${credentials.phone}`);
    navigate('/code-verification',{replace:true})
  };
  const validatePhoneNumber = (inputPhoneNumber) => {
    const phonePattern = /^[0-9]{7,15}$/; // Example pattern for a 10-digit phone number

    return phonePattern.test(inputPhoneNumber);
  };
  const handlePhone = (e) => {
    const phoneValue = e.target.value;
    setCredentials({
      ...credentials,
      phone: phoneValue,
    });
    setIsPhoneNumberValid(validatePhoneNumber(phoneValue));
  };
  return (
    <div className="mainContainer">
      <div className="forget">
        <div className="form">
          <div className="logoDiv">
            <img src={Logo} alt="logo" />
          </div>
          <div className="inputFields">
            <h2>Forget Password?</h2>
            <p> No worries, we’ll send your reset instructions.</p>
            <form onSubmit={handleSubmit}>
              <div className="inputDiv">
                <div className="labelAnderror">
                  <label htmlFor="phone">Phone</label>
                  {!isPhoneNumberValid && (
                    <p
                      style={{
                        color: "red",
                        fontSize: "12px",
                        fontWeight: "normal",
                      }}
                    >
                      please enter valid phone
                    </p>
                  )}
                </div>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your Phone Number"
                  onChange={(e) => handlePhone(e)}
                  style={{
                    border: isPhoneNumberValid
                      ? "1px solid rgba(144, 166, 123, 1)"
                      : "1px solid red",
                  }}
                />
              </div>
              <input type="submit" value="Next" className="submit" />
            </form>
          </div>
        </div>
        <div className="imgDiv">
          <div className="textDiv">
            <h2>ARABELLA MILLS</h2>
            <p>
              Olive oil is a liquid fat obtained by pressing whole olives, the
              fruit of Olea europaea, a traditional tree crop of the
              Mediterranean Basin, and extracting the oil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
