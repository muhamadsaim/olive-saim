import React, { useState } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Fade, Tooltip } from "@mui/material";
import Theme from "../../../Theme/Theme";

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

export default function AddService() {
  const lightTheme = Theme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/system-maintenance", { replace: true });
    handleClose;
  };
  return (
    <div>
      <Tooltip title="New Entry" position="top">
        <Link to="new-service" onClick={() => handleOpen()}>
          + Add New
        </Link>
      </Tooltip>

      <Modal open={open} onClose={handleCancel} closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
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
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
