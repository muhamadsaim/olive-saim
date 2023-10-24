import React, { useState } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Fade, Tooltip } from "@mui/material";
import Theme from "../../../Theme/Theme";
import Select from "react-select";

const roleOptions = [
  { label: "Manager", value: "Manager" },
  { label: "Admin", value: "Admin" },
  { label: "Auditor", value: "Auditor" },
  { label: "Employee", value: "Employee" },
  { label: "Dispatcher", value: "Dispatcher" },
  { label: "Basic User", value: "Basic User" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxHeight: "80vh",
  borderRadius: " 10px",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.52)",
  padding: "15px 0",
  overflowY: "scroll",
  scrollbarWidth: "none" /* Firefox */,
  msOverflowStyle: "none" /* IE/Edge */,
  "&::-webkit-scrollbar": {
    width: "0px",
    background: "transparent" /* Hide scrollbar in Chrome/Safari/Webkit */,
  },
};

export default function AddUser() {
  const lightTheme = Theme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  const handleCancel = () => {
    navigate("/access-control", { replace: true });
    handleClose();
  };
  return (
    <div>
      <Tooltip title="Add User" position="top">
        <Link to="new-user" onClick={() => handleOpen()}>
          + Add User
        </Link>
      </Tooltip>

      <Modal open={open} onClose={handleCancel} closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
            <div className="newUserMain">
              <div className="iconDiv">
                <IoMdClose
                  size={20}
                  color="rgba(144, 166, 123, 1)"
                  className="icon"
                  onClick={handleCancel}
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
                  <Select
                    value={role}
                    onChange={setRole}
                    options={roleOptions}
                  />
                </div>
                <div className="saveBtn">
                  <button onClick={handleCancel}>Save</button>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
