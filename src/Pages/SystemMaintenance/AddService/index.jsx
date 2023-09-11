import React from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AddService = ({setShow}) => {
    const navigate = useNavigate();

    const handleClose = () => {
      navigate("/system-maintenance", { replace: true });
      setShow(false);
    };
    return (
      <div className="addServiceMain">
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
                <p className="p5">Service Id*</p>
                <input type="text" placeholder="123456789" />
              </div>
              <div className="nameDivv">
                <p className="p5">Service Name*</p>
                <input type="mail" placeholder="Malaxar" />
              </div>
            </div>
          </div>
          <div className="nameDiv">
            <div className="inputDiv">
              <div className="nameDiv">
                <p className="p5">Assignned Person*</p>
                <input type="text" placeholder="Production/IC" />
              </div>
              <div className="nameDivv">
                <p className="p5">Status</p>
                <input type="text" placeholder="In Processing" />
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

export default AddService