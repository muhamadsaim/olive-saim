import React, { useState } from "react";
import "./Style.scss";
import Search from "../../../assets/icons/search.png";
import TableCom from "../Table/Table";
import CustomSearchInput from "../customSearch";
import { tableData } from "../Table/constant";
import DeletePopup from "../DeletePopUp";

const Order = ({ qrcode }) => {
  const [filterVal, setFilterval] = useState("All");
  const [searchBar, setSearchBar] = useState();
  const [qrcodeVal, setQrcode] = useState(qrcode);
  const [showDelete, setShowDelete] = useState(false);
  return (
    <div className="mainContainerO">
      <p className="activeT">Active Orders</p>
      <div className="mainTabs">
        <div className="tabs">
          <button
            className={filterVal === "All" ? "SelectedTab" : "NotSelectedTab"}
            onClick={() => setFilterval("All")}
          >
            All
          </button>
          <button
            className={filterVal === "New" ? "SelectedTab" : "NotSelectedTab"}
            onClick={() => setFilterval("New")}
          >
            New
          </button>
          <button
            className={
              filterVal === "Processing" ? "SelectedTab" : "NotSelectedTab"
            }
            onClick={() => setFilterval("Processing")}
          >
            In process
          </button>
          <button
            className={
              filterVal === "Canceled" ? "SelectedTab" : "NotSelectedTab"
            }
            onClick={() => setFilterval("Canceled")}
          >
            Canceled
          </button>
          <button
            className={
              filterVal === "Completed" ? "SelectedTab" : "NotSelectedTab"
            }
            onClick={() => setFilterval("Completed")}
          >
            Completed
          </button>
        </div>

        <CustomSearchInput
          placeholder="Search"
          onSearchChange={setSearchBar}
          iconShow={true}
        />
      </div>
      <div className="mainTable">
        
        <TableCom
          tabVal={filterVal}
          searchVal={searchBar}
          qrcode={qrcodeVal}
          data={tableData}
          setShowDelete={setShowDelete}
        />
      </div>
    </div>
  );
};

export default Order;
