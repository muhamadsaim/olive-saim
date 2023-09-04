import React, { useState } from "react";
import "./Style.scss";
import Search from "../../../assets/icons/search.png";
import TableCom from "../Table/Table";
import CustomSearchInput from "../customSearch";

const Order = ({qrcode}) => {
  const [filterVal, setFilterval] = useState("All");
  const [searchBar, setSearchBar] = useState();
  const [qrcodeVal,setQrcode]=useState(qrcode)
  return (
    <div className="mainContainerO">
      <p className="activeT">Active Orders</p>
      <div className="mainTabs">
        <div className="tabs">
          <button onClick={() => setFilterval("All")}>All</button>
          <button onClick={() => setFilterval("New")}>New</button>
          <button onClick={() => setFilterval("Processing")}>In process</button>
          <button onClick={() => setFilterval("Canceled")}>Canceled</button>
          <button onClick={() => setFilterval("Completed")}>Completed</button>
        </div>
        
          <CustomSearchInput placeholder="Search" onSearchChange={setSearchBar} iconShow={true}/>
      </div>
      <div className="mainTable">
        <TableCom tabVal={filterVal} searchVal={searchBar} qrcode={qrcodeVal} />
      </div>
    </div>
  );
};

export default Order;
