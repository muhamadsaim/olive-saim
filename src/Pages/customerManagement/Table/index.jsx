import React, { useEffect, useState } from "react";
import "./Style.scss";
import TableData from "./Table";
import { customerTableData } from "../../../Components/Common/Table/constant";

const CustomerTable = ({ searchBar, setShowDelete }) => {
  return (
    <div className="mainCustomerT">
      <div className="customerT">
        <TableData searchVal={searchBar} setShowDelete={setShowDelete} />
      </div>
    </div>
  );
};

export default CustomerTable;
