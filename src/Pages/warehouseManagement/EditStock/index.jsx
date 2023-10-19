import Select from "react-select";
import {
  closeEditStock,
  closeEditOilStock,
} from "../../../Redux/slice/stockEdit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Edit from "../../../assets/icons/editGreen.png"
import React, { useState } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Fade, Tooltip } from "@mui/material";
import Theme from "../../../Theme/Theme";
import { ErrorMessage } from "../../../Helper/Message";
import apiService from "../../../Services/apiService";

const paymentOptions = [
  { label: "By Cash", value: "By Cash" },
  { label: "By Card", value: "By Card" },
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

export default function EditStock({ address,reload }) {
  const lightTheme = Theme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedStock = useSelector((state) => state.selectedStock.data);
  const [id, setId] = useState();
  const [amount, setAmount] = useState();
  const [auth, setAuth] = useState();
  const [linkedOrder, setLinkedOrder] = useState();
  const [inOut, setInOut] = useState();
  const [payment, setPayment] = useState(null);



  const deleteBill =async () => {
    try {
      const response=await apiService('DELETE','/order/delete-bill')
    } catch (error) {
      ErrorMessage('Api Error',error)
    }
  }



  useEffect(() => {
    if (selectedStock) {
      setId(selectedStock.TransactionId);
      setAmount(selectedStock.RawMaterial);
      setAuth(selectedStock.AuthorizedBy);
      setLinkedOrder(selectedStock.LinkedOrder);
      setInOut(selectedStock.InOut);
      setPayment(
        paymentOptions.find(
          (option) => option.value === selectedStock.Payment
        )
      );
    }
  }, [selectedStock]);

  const handleCancel = () => {
    dispatch(closeEditStock());
    dispatch(closeEditOilStock());
    handleClose()
    navigate(`${address}`, { replace: true });
  };
  return (
    <div>
      <Tooltip title="Edit" placement="top">
        <Link to="edit-stock" onClick={() => handleOpen()}>
          <div className="circle">
            <img src={Edit} alt="Edit" height={20} />
          </div>
        </Link>
      </Tooltip>

      <Modal open={open} onClose={handleCancel} closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
            <div className="transectionForm">
              <div className="formDiv1">
                <p className="p1">Edit Stock</p>
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
                      <input type="text" value={id} />
                    </div>
                  </div>
                </div>
                <div className="nameDiv1">
                  <p className="p5">In/Out</p>
                  <div className="inputDiv1">
                    <div className="nameDiv1">
                      <input type="text" value={inOut} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="toggleDiv1">
                <div className="nameDiv1">
                  <p className="p5">Amount</p>
                  <div className="inputDiv1">
                    <div className="nameDiv1">
                      <input type="text" value={amount} />
                    </div>
                  </div>
                </div>
                <div className="nameDiv1">
                  <p className="p5">Autherize By</p>
                  <div className="inputDiv1">
                    <div className="nameDiv1">
                      <input type="text" value={auth} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="toggleDiv1">
                <div className="nameDiv1">
                  <p className="p5">Linked Orders</p>
                  <div className="inputDiv1">
                    <div className="nameDiv1">
                      <input type="text" value={linkedOrder} />
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
                <p className="btnCreate1">Update</p>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
