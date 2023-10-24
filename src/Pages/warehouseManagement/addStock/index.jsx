import React, { useEffect, useState } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";

import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Fade, Tooltip } from "@mui/material";
import Theme from "../../../Theme/Theme";
import {
  openStockForm,
  closeStockForm,
} from "../../../Redux/slice/handleshortcuts";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, SuccessMessage } from "../../../Helper/Message";
import apiService from "../../../Services/apiService";
import { ReloadOrderBill } from "../../../Redux/slice/authSlice";

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

export default function TransactionForm() {
  const lightTheme = Theme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authorized = localStorage.getItem("userName");
  const open = useSelector((state) => state.shortcuts.isOpenS);
  const reloadOrderBill = useSelector((state) => state.auth.reloadOrderBill);
  const [formData, setFormData] = useState({
    cans: "",
    orderId: "New Inventory",
    payment: "",
    authorized: authorized,
    inOut: "In",
  });
  const [formDataError, setFormDataError] = useState({
    cans: "",
    // orderId: "",
    payment: "",
  });

  const handleSelectPayment = (selectedOption) => {
    setFormData({
      ...formData,
      payment: selectedOption.value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const alphabetRegex = /^[A-Za-z]+$/;
    const numericRegex = /^[0-9-]+$/;
    const updateFormErrors = (fieldName, regex, error) => {
      if (!regex.test(value)) {
        setFormDataError({
          ...formDataError,
          [fieldName]: error,
        });
      } else {
        setFormDataError({ ...formDataError, [fieldName]: "" });
      }
    };

    switch (name) {
      case "cans":
        updateFormErrors(
          "cans",
          numericRegex,
          "It should contain only numbers"
        );
        break;

      // case "orderId":
      //   updateFormErrors(
      //     "orderId",
      //     numericRegex,
      //     "It should contain only numbers"
      //   );
      //   break;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    dispatch(closeStockForm());
    emptyForm();
    navigate("/warehouse-management/can-and-bottles", { replace: true });
  };
  const handleOpenForm = () => {
    dispatch(openStockForm());
  };

  const emptyForm = () => {
    setFormData({
      cans: "",
      orderId: "New Inventory",
      payment: "",
      inOut: 'In',
      authorized:authorized
    });
    setFormDataError({
      cans: "",
      // orderId: "",
      payment: "",
    });
  };
  useEffect(() => {}, [formDataError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authToken = localStorage.getItem("authToken");
    try {
      const requiredFields = ["cans", "payment"];
      const fieldError = {};
      requiredFields.forEach((field) => {
        if (!formData[field]) {
          fieldError[field] = `${field} is required`;
        }
      });
      if (Object.keys(fieldError).length > 0) {
        setFormDataError((prev) => ({
          ...prev,
          ...fieldError,
        }));
        return;
      }
      const response = await apiService(
        "POST",
        "/stock/add-stock",
        { "x-usertoken": authToken },
        formData
      );
      if (response.success) {
        SuccessMessage(response.message);
        handleCancel();
        dispatch(ReloadOrderBill(!reloadOrderBill));
      } else {
        ErrorMessage(response.message);
        handleCancel();
      }
    } catch (error) {
      console.log("Api Error", error);
      ErrorMessage(`Api Error ${error}`);
    }
  };

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
                  <div className="textAndError">
                    <p className="p5">Number of Cans</p>
                    {formDataError.cans && (
                      <span className="error">{formDataError.cans}</span>
                    )}
                  </div>
                  <div className="inputDiv1">
                    <div className="nameDiv1">
                      <input
                        type="text"
                        name="cans"
                        placeholder="4"
                        value={formData.cans}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="nameDiv1">
                  <div className="textAndError">
                    <p className="p5">Payment Methods</p>
                    {formDataError.payment && (
                      <span className="error">{formDataError.payment}</span>
                    )}
                  </div>
                  <div className="inputDiv1">
                    <div className="nameDiv1">
                      <Select
                        value={paymentOptions.find(
                          (option) => option.value === formData.payment
                        )}
                        onChange={handleSelectPayment}
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
                <p
                  className="btnCreate1"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Save
                </p>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
