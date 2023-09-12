import React, { useState } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { closeEditUser } from "../../../Redux/slice/accessControlEditUser";
import { useDispatch, useSelector } from "react-redux";
import { use } from "i18next";
import { useEffect } from "react";

const roleOptions = [
  { label: "Manager", value: "Manager" },
  { label: "Admin", value: "Admin" },
  { label: "Auditor", value: "Auditor" },
  { label: "Employee", value: "Employee" },
  { label: "Dispatcher", value: "Dispatcher" },
  { label: "Basic User", value: "Basic User" },
  { label: "CEO", value: "CEO" },
];

const statusOptions = [
  { label: "active", value: "Active" },
  { label: "In Active", value: "In Active" },
  { label: "Not Logged In", value: "Not Logged in" },
];

const accessOptions = [
  { label: "full Access", value: "Full Access" },
  { label: "Standard Access", value: "Standard Access" },
  { label: "Hr Access", value: "Hr Access" },
  { label: "Lab Access", value: "Lab Access" },
];
const EditUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [role, setRole] = useState(null);
  const [status, setStatus] = useState(null);
  const [access, setAccess] = useState(null);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.selectedRow.data);
  console.log(userData);
  useEffect(() => {
    if (userData) {
      setName(userData.name);
      setRole(roleOptions.find((role) => role.value === userData.role));
      setAccess(
        accessOptions.find((access) => access.value === userData.access)
      );
      setStatus(
        statusOptions.find((status) => status.value === userData.status)
      );
    }
  }, [userData]);

  const handleClose = () => {
    navigate("/access-control", { replace: true });
    dispatch(closeEditUser());
  };
  return (
    <div className="mainEditUser">
      <div className="iconDiv">
        <IoMdClose
          size={20}
          color="rgba(144, 166, 123, 1)"
          className="icon"
          onClick={handleClose}
        />
      </div>
      <p className="p1">Edit User</p>
      <form>
        <div className="inputDiv">
          <div className="nameDiv">
            <p>Name *</p>
            <input type="text" placeholder="Name" value={name} />
          </div>
          <div className="roleDiv">
            <p>User Role*</p>
            <Select value={role} onChange={setRole} options={roleOptions} />
          </div>
        </div>
        <div className="inputDiv">
          <div className="roleDiv">
            <p>Access Control*</p>
            <Select
              value={access}
              onChange={setAccess}
              options={accessOptions}
            />
          </div>
          <div className="roleDiv">
            <p>Status*</p>
            <Select
              value={status}
              onChange={setStatus}
              options={statusOptions}
            />
          </div>
        </div>
        <div className="updateBtn">
          <button onClick={() => handleClose()}>Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
