import React, { useState } from "react";
import "./Style.scss";
import { IoMdClose } from "react-icons/io";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

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

const SpareParts = ({ setSparePart }) => {
  const navigate = useNavigate();

  const defaultValue = options[0];
  const [selectedOption, setSelectedOption] = useState(null);
  const defaultValueQuantity = options[0];
  const [selectedOptionQuantity, setSelectedOptionQuantity] = useState(null);
  const handleCancle = () => {
    setSparePart(false);
    navigate("/warehouse-management", { replace: true });
  };
  const handleSave = () => {
    setSparePart(false);
    navigate("/warehouse-management", { replace: true });
  };
  return (
    <div className="sparePart">
      <IoMdClose
        color="black"
        size={20}
        onClick={handleCancle}
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
  );
};

export default SpareParts;
