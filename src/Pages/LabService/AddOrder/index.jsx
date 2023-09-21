import React, { useState } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Fade, Tooltip } from "@mui/material";
import Theme from "../../../Theme/Theme";
import { openLabForm,closeLabForm } from "../../../Redux/slice/handleshortcuts";
import { useDispatch, useSelector } from "react-redux";

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

export default function AddOrder({address}) {
  const lightTheme = Theme();
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const open=useSelector((state)=>state.shortcuts.isOpenT)

  const handleCancel = () => {
    dispatch(closeLabForm())
    navigate(`${address}`, { replace: true });
    
  };
  const handleOpen = () => {
    dispatch(openLabForm())
  }
  return (
    <div>
      <Tooltip title="New Entry" position="top">
      <Link to="new-order" onClick={() => handleOpen()}>
            + Add New
          </Link>
      </Tooltip>

      <Modal open={open} onClose={handleCancel} closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
          <div className="addOrderMain">
      <div className="iconDiv">
        <IoMdClose
          size={20}
          color="rgba(144, 166, 123, 1)"
          className="icon"
          onClick={handleCancel}
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
        <div className="saveBtnLab">
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

