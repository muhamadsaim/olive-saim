import React, { useState } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";

import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Fade, Tooltip } from "@mui/material";
import Theme from "../../../Theme/Theme";
import { openStockForm,closeStockForm } from "../../../Redux/slice/handleshortcuts";
import { useDispatch, useSelector } from "react-redux";



const paymentOptions = [
  { label: 'By Cash', value: 'By Cash' },
  {label:'By Card',value:'By Card'}
]


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

export default function TransactionForm() {
  const lightTheme = Theme();
  const dispatch = useDispatch();
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const open=useSelector((state)=>state.shortcuts.isOpenS)

  const [payment,setPayment]=useState(null)

  const handleCancel = () => {
    dispatch(closeStockForm())
    navigate("/warehouse-management", { replace: true });
  };
  const handleOpenForm = () => {
    dispatch(openStockForm())
  }
  return (
    <div>
      <Tooltip title="Add New" position="top">
      <Link to="add-stock" onClick={() => handleOpenForm()}>
              + Add New
            </Link>
      </Tooltip>

      <Modal open={open} onClose={handleCancel} closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
          <div className="transactionForm">
      <div className="formDiv1">
        <p className="p1">Add New</p>
        <IoMdClose
          color="black"
          size={20}
          onClick={handleCancel}
          className="icon"
        />
      </div>
      <div className="toggleDiv1">
        <div className="nameDiv1">
          <p className="p5">Transaction id</p>
          <div className="inputDiv1">
            <div className="nameDiv1">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="nameDiv1">
          <p className="p5">In/Out</p>
          <div className="inputDiv1">
            <div className="nameDiv1">
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="toggleDiv1">
        <div className="nameDiv1">
          <p className="p5">Amount</p>
          <div className="inputDiv1">
            <div className="nameDiv1">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="nameDiv1">
          <p className="p5">Authorize By</p>
          <div className="inputDiv1">
            <div className="nameDiv1">
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="toggleDiv1">
        <div className="nameDiv1">
          <p className="p5">Linked Orders</p>
          <div className="inputDiv1">
            <div className="nameDiv1">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="nameDiv1">
          <p className="p5">Payment Methods</p>
          <div className="inputDiv1">
            <div className="nameDiv1">
              <Select
                value={payment}
                onChange={setPayment}
                options={paymentOptions}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="buttons1">
        <p className="btnClose1" onClick={handleCancel}>
          Close
        </p>
        <p className="btnCreate1">Save</p>
      </div>
    </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
