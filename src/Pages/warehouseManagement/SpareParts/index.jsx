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

const options = [
  { value: "Press", label: "Press" },
  { value: "Filter", label: "Filter" },
  { value: "Extractor", label: "Extractor" },
];
const quantity = [
  { value: "Part 1", label: "Part 1" },
  { value: "Part 2", label: "Part 2" },
  { value: "Part 3", label: "Part 3" },
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

export default function SpareParts() {
  const lightTheme = Theme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const defaultValue = options[0];
  const [selectedOption, setSelectedOption] = useState(null);
  const defaultValueQuantity = options[0];
  const [selectedOptionQuantity, setSelectedOptionQuantity] = useState(null);
  const handleCancel = () => {
    handleClose()
    navigate("/warehouse-management", { replace: true });
  };
  const handleSave = () => {
    handleClose()
    navigate("/warehouse-management", { replace: true });
  };
  return (
    <div>
      <Tooltip title="Add New" position="top">
        <Link to="spare-parts" onClick={() => handleOpen()}>
          Spare Parts
        </Link>
      </Tooltip>

      <Modal open={open} onClose={handleCancel} closeAfterTransition>
        <Fade in={open}>
          <Box sx={style}>
          <div className="sparePart">
      <IoMdClose
        color="black"
        size={20}
        onClick={handleCancel}
        className="icon"
      />
      <div className="form">
        <div className="selectDiv">
          <p className="p1">Machine Type</p>
          <Select
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="select"
            defaultValue={defaultValue}
            placeholder="Select Can Type"
          />
        </div>
        
        <div className="selectDiv">
          <p className="p1">Available Spare Parts</p>
          <Select
            value={selectedOptionQuantity}
            onChange={setSelectedOptionQuantity}
            options={quantity}
            className="select"
            defaultValue={defaultValueQuantity}
            placeholder="Select Quantity"
          />
        </div>
          </div>
          <div className="saveBtn" onClick={()=>handleSave()}>
              <p>Save</p>
          </div>
    </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
