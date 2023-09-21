import React, { useState } from "react";
import "./Style.scss";
import Calendar from "../../../assets/icons/calendar.png";
import CalendarCom from "../../../Components/Common/Calendar/Calendar";
import LedgerTable from "./Table";
import { ledgerTableData } from "../../../Components/Common/Table/constant";
import CustomSearchInput from "../../../Components/Common/customSearch";

const Ledger = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState();
  return (
    <div className="ledgerMain">
      <p className="p1">Ledger</p>
      <div className="mainDiv">
        <div className="searchDiv1">
          <CustomSearchInput placeholder="Search" iconShow={true} onSearchChange={setSearchValue}/>
        </div>
        <div className="tableDiv">
          <LedgerTable data={ledgerTableData} searchValue={searchValue} />
        </div>
      </div>
    </div>
  );
};

export default Ledger;
