import React, { useState } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const AddOrder = ({ setShow }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/lab-service", { replace: true });
    setShow(false);
  };
  return (
    <div className="addOrderMain">
      <div className="iconDiv">
        <IoMdClose
          size={20}
          color="rgba(144, 166, 123, 1)"
          className="icon"
          onClick={handleClose}
        />
      </div>
      <div className="formDiv">
        <div className="nameDiv">
          <div className="inputDiv">
            <div className="nameDiv">
              <p className="p5">Order Id*</p>
              <input type="text" placeholder="123456789" />
            </div>
            <div className="nameDivv">
              <p className="p5">Test Type*</p>
              <input type="mail" placeholder="Test-02" />
            </div>
          </div>
        </div>
        <div className="nameDiv">
          <div className="inputDiv">
            <div className="nameDiv">
              <p className="p5">Test Status*</p>
              <input type="text" placeholder="Negative" />
            </div>
            <div className="nameDivv">
              <p className="p5">Private</p>
              <input type="text" placeholder="False" />
            </div>
          </div>
        </div>
        <div className="nameDiv">
          <div className="inputDiv">
            <div className="nameDiv">
              <p className="p5">Bill*</p>
              <input type="password" placeholder="290" />
            </div>
            <div className="nameDivv">
              <p className="p5">Customer*</p>
              <input type="password" placeholder="Ali Raza" />
            </div>
          </div>
        </div>
        <div className="saveBtn">
          <button onClick={handleClose}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
