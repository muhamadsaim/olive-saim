import React, { useState,useRef } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import AttachementImg from "../../../../assets/icons/attachment.png";
import CalendarCom from "../../../../Components/Common/Calendar/Calendar";
import Calendar from "../../../../assets/icons/calendar.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Fade, Tooltip } from "@mui/material";
import Theme from "../../../../Theme/Theme";
import { openEmployeeForm,closeEmployeeForm } from "../../../../Redux/slice/handleshortcuts";
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

export default function AddEmployee({address}) {
  const lightTheme = Theme();
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setCurDate] = useState();
  const [attach, setAttach] = useState();
  const Attachement = useRef(null);
  const handleClick = () => {
    Attachement.current.click();
  };

  const open=useSelector((state)=>state.shortcuts.isOpenE)

  const handleAttachement = (event) => {
    const selectedImg = event.target.files[0];
    if (selectedImg) {
      setAttach(selectedImg.name);
    }
  };
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(closeEmployeeForm())
    navigate(`${address}`, { replace: true });
  };
  const handleOpenForm = () => {
    dispatch(openEmployeeForm())
  }
  return (
    <div>
      <Tooltip title="New Employee" position="top">
      <Link to="add-employee" onClick={() =>handleOpenForm()}>
                + Add New
              </Link>
      </Tooltip>

      <Modal open={open} onClose={handleCancel} closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
          <div className="addEmployee">
      <div className="insideEmp">
        <div className="formDiv1">
          <p className="p1">Add Employee*</p>
          <IoMdClose
            color="#90A67B"
            size={20}
            onClick={handleCancel}
            className="icon"
          />
        </div>
        <div className="toggleDiv">
          <div className="nameDiv">
            <p className="p5">Name*</p>
            <div className="inputDiv">
              <div className="nameDiv">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="nameDivv">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
          </div>
          <div className="nameDiv">
            <div className="inputDiv">
              <div className="nameDiv">
                <p className="p5">Department*</p>
                <input type="text" placeholder="Department" />
              </div>
              <div className="nameDivv">
                <p className="p5">Designation*</p>
                <input type="text" placeholder="Designation" />
              </div>
            </div>
          </div>
          <div className="nameDiv">
            <div className="inputDiv">
              <div className="nameDiv">
                <p className="p5">Date</p>
                <div className="calendarDiv">
                  <p>{date && date}</p>
                  <img
                    src={Calendar}
                    alt="calendar"
                    height={30}
                    onClick={() => setShowCalendar(!showCalendar)}
                  />
                </div>
              </div>

              <div className="nameDivv">
                <p className="p5">Role*</p>
                <input type="text" placeholder="Role" />
              </div>
            </div>
          </div>
          <div className="nameDiv">
            <div className="inputDiv">
              <div className="nameDiv">
                <p className="p5">Salary Type*</p>
                <input type="text" placeholder="Fixed Salary" />
              </div>
              <div className="nameDivv">
                <p className="p5">Amount*</p>
                <input type="text" placeholder="155050.00" />
              </div>
            </div>
          </div>
          <div className="holiday">
            <p className="p5">Allowed Holiday*</p>
            <input type="text" placeholder="Allowed Holiday" />
          </div>
          <div className="attachement" onClick={handleClick}>
            <img src={AttachementImg} alt="attch" />
            <p>{attach? `${attach}`:"Attachement"}</p>
            <input type="file"   style={{ display: "none" }}
                  onChange={handleAttachement}
                  ref={Attachement}
                  accept="image/*"/>
          </div>
          {showCalendar && (
            <div>
              <CalendarCom
                showDate={false}
                setShow={setShowCalendar}
                setCurDate={setCurDate}
              />
            </div>
          )}
          <div className="saveBtnAE" onClick={handleCancel}>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
