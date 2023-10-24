import React, { useState } from "react";
import "./Style.scss";
import Logo from "../../../assets/icons/logo.png";
import { SuccessMessage, ErrorMessage } from "../../../Helper/Message";
import { useNavigate } from "react-router-dom";
import apiService from "../../../Services/apiService";
import { setPhoneNumber } from "../../../Redux/slice/authSlice";
import { useDispatch } from "react-redux";

const Forget = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    phone: "",
  });
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

  const gotoVerification = () => {
    navigate("/code-verification", { replace: true });
  };

  const validatePhoneNumber = (inputPhoneNumber) => {
    const phonePattern = /^[0-9]{7,15}$/;

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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneValue = credentials.phone;

    if (!isPhoneNumberValid) {
      ErrorMessage("Please enter a valid phone number.");
      return;
    }

    try {
      const response = await apiService(
        "POST",
        "/auth/forget-password",
        {},
        { phone: phoneValue }
      );

      if (response.success) {
        dispatch(setPhoneNumber(phoneValue))
        gotoVerification();
        SuccessMessage(response.message);
        setCredentials({
          phone: "",
        });
      } else {
        ErrorMessage(response.message);
      }
    } catch (error) {
      ErrorMessage(`API Error: ${error.message}`);
    }
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
                  value={credentials.phone}
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
