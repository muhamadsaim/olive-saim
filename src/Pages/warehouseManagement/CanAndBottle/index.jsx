import React, { useState } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";

const options = [
  { value: "Regular", label: "Regular" },
  { value: "Medium", label: "Medium" },
  { value: "Large", label: "Large" },
];
const quantity = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

const CanBottle = ({ setShowForm }) => {
  const navigate = useNavigate();

  const defaultValue = options[0];
  const [selectedOption, setSelectedOption] = useState(null);
  const defaultValueGallon = options[0];
  const [selectedOptionGallon, setSelectedOptionGallon] = useState(null);
  const defaultValueQuantity = options[0];
  const [selectedOptionQuantity, setSelectedOptionQuantity] = useState(null);
  const handleCancle = () => {
    setShowForm(false);
    navigate("/warehouse-management", { replace: true });
  };
  const handleSave = () => {
    setShowForm(false);
    navigate("/warehouse-management", { replace: true });
  };
  return (
    <div className="canBottle">
      <IoMdClose
        color="black"
        size={20}
        onClick={handleCancle}
        className="icon"
      />
      <div className="form">
        <div className="selectDiv">
          <p className="p1">Select Can Type</p>
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
          <p className="p1">Select Gallon Type</p>
          <Select
            value={selectedOptionGallon}
            onChange={setSelectedOptionGallon}
            options={options}
            className="select"
            defaultValue={defaultValueGallon}
            placeholder="Select Gallon Type"
          />
        </div>
        <div className="selectDiv">
          <p className="p1">Select Quantity</p>
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
  );
};

export default CanBottle;
