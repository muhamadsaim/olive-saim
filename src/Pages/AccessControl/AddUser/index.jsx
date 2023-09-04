import React, { useState } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const roleOptions = [
  { label: "Manager", value: "Manager" },
  { label: "Admin", value: "Admin" },
  { label: "Auditor", value: "Auditor" },
  { label: "Employee", value: "Employee" },
];
const AddUser = ({ setShow }) => {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  const handleClose = () => {
    navigate("/access-control", { replace: true });
    setShow(false);
  };
  return (
    <div className="newUserMain">
      <div className="iconDiv">
        <IoMdClose
          size={20}
          color="rgba(144, 166, 123, 1)"
          className="icon"
          onClick={handleClose}
        />
      </div>
      <p className="p1">Add New User</p>
      <div className="formDiv">
        <div className="nameDiv">
          <div className="inputDiv">
            <div className="nameDiv">
              <p className="p5">Username*</p>
              <input type="text" placeholder="Name" />
            </div>
            <div className="nameDivv">
              <p className="p5">Email*</p>
              <input type="mail" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="nameDiv">
          <div className="inputDiv">
            <div className="nameDiv">
              <p className="p5">First Name</p>
              <input type="text" placeholder="first name" />
            </div>
            <div className="nameDivv">
              <p className="p5">Last Name</p>
              <input type="text" placeholder="last name" />
            </div>
          </div>
        </div>
        <div className="nameDiv">
          <div className="inputDiv">
            <div className="nameDiv">
              <p className="p5">Password*</p>
              <input type="password" placeholder="password" />
            </div>
            <div className="nameDivv">
              <p className="p5">Repeat Password*</p>
              <input type="password" placeholder="repeat password" />
            </div>
          </div>
        </div>
        <div className="sendPassword">
          <p className="p1">Send Password?</p>
          <div className="checkBoxDiv">
            <input type="checkBox" />
            <p className="p1">Send this password to the user’s email</p>
          </div>
        </div>
        <div className="roleDiv">
          <p>Role</p>
          <Select value={role} onChange={setRole} options={roleOptions} />
        </div>
        <div className="saveBtn">
          <button onClick={handleClose}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
