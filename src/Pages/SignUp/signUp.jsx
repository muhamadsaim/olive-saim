import React, { useState } from "react";
import "./Style.scss";
import Logo from "../../assets/icons/logo.png";
import Eye from "../../assets/icons/eye.png";
import { Link } from "react-router-dom";
import { SuccessMessage, ErrorMessage } from "../../Helper/Message";
import { useTranslation } from "react-i18next";
import apiService from "../../Services/apiService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    phone: "",
    name: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [strength, setStrength] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);

  const validateName = (inputName) => {
    const namePattern = /^[A-Za-z\s\-']+$/; // Only letters, spaces, hyphens, and apostrophes
    return namePattern.test(inputName);
  };

  const validatePhoneNumber = (inputPhoneNumber) => {
    const phonePattern = /^[0-9]{7,15}$/; // Example pattern for a 10-digit phone number

    return phonePattern.test(inputPhoneNumber);
  };

  const checkPasswordStrength = (inputPassword) => {
    const lengthScore = inputPassword.length >= 8 ? 1 : 0;
    const uppercaseScore = /[A-Z]/.test(inputPassword) ? 1 : 0;
    const lowercaseScore = /[a-z]/.test(inputPassword) ? 1 : 0;
    const numberScore = /[0-9]/.test(inputPassword) ? 1 : 0;
    const specialCharScore = /[^A-Za-z0-9]/.test(inputPassword) ? 1 : 0;

    const totalScore =
      lengthScore +
      uppercaseScore +
      lowercaseScore +
      numberScore +
      specialCharScore;

    if (totalScore <= 2) {
      return "poor";
    } else if (totalScore <= 4) {
      return "good";
    } else {
      return "strong";
    }
  };
  const getColor = (strengthLevel) => {
    switch (strengthLevel) {
      case "poor":
        return "red";
      case "good":
        return "orange";
      case "strong":
        return "green";
      default:
        return "rgba(144, 166, 123, 1)";
    }
  };
  const gotoLogin = () => {
    navigate("/login", { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      isNameValid &&
      isPhoneNumberValid &&
      (strength === "strong" || strength === "good")
    ) {
      try {
        const response = await apiService(
          "POST",
          "/auth/signup",
          {},
          credentials
        );
        setCredentials({
          name: "",
          phone: "",
          password: "",
        });
        setStrength("");

        gotoLogin();
        SuccessMessage(response.message);
      } catch (error) {
        ErrorMessage(error);
        console.error("API Error:", error);
      }
    } else {
      console.error("Form is not valid. Please check your inputs.");
    }
  };

  const handleName = (e) => {
    const nameValue = e.target.value;
    setCredentials({
      ...credentials,
      name: nameValue,
    });
    setIsNameValid(validateName(nameValue));
  };
  const handlePhone = (e) => {
    const phoneValue = e.target.value;
    setCredentials({
      ...credentials,
      phone: phoneValue,
    });
    setIsPhoneNumberValid(validatePhoneNumber(phoneValue));
  };
  const handlePassword = (e) => {
    const passValue = e.target.value;
    setCredentials({
      ...credentials,
      password: passValue,
    });
    setStrength(checkPasswordStrength(passValue));
  };

  return (
    <div className="mainContainer">
      <div className="signup">
        <div className="form">
          <div className="logoDiv">
            <img src={Logo} alt="logo" />
          </div>
          <div className="inputFields">
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputDiv">
                <div className="labelAnderror">
                  <label htmlFor="phone">Phone</label>
                  {!isPhoneNumberValid && (
                    <p style={{ color: "red" }}>please enter valid phone</p>
                  )}
                </div>
                <input
                  type="text"
                  value={credentials.phone}
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
              <div className="inputDiv">
                <div className="labelAnderror">
                  <label htmlFor="name">Name</label>
                  {!isNameValid && (
                    <p style={{ color: "red" }}>please enter valid name</p>
                  )}
                </div>
                <input
                  type="text"
                  value={credentials.name}
                  id="name"
                  placeholder="Enter your Name"
                  onChange={(e) => handleName(e)}
                  style={{
                    border: isNameValid
                      ? "1px solid rgba(144, 166, 123, 1)"
                      : "1px solid red",
                  }}
                />
              </div>
              <div className="inputDiv">
                <div className="labelAnderror">
                  <label htmlFor="password">Password</label>
                  <p style={{ color: getColor(strength) }}>{strength}</p>
                </div>
                <div
                  className="passwordDiv"
                  style={{ border: `1px solid ${getColor(strength)}` }}
                >
                  <input
                    type={showPass ? "text" : "password"}
                    value={credentials.password}
                    id="password"
                    placeholder="Enter your password"
                    onChange={(e) => handlePassword(e)}
                  />
                  <img
                    src={Eye}
                    alt="passwordShow"
                    onClick={() => setShowPass(!showPass)}
                  />
                </div>
              </div>
              <p>
                By signing up, you are agree to our{" "}
                <span>Terms and Conditions</span> and{" "}
                <span>Privacy Policy</span>
              </p>
              <input type="submit" value="Continue" className="submit" />
            </form>
            <p>
              join us before? <Link to="/login">Login</Link>
            </p>
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

export default SignUp;
