import React, { useState } from "react";
import "./Style.scss";
import Cards from "../../Components/Common/TopCards/Cards";
import CustomSearchInput from "../../Components/Common/customSearch";
import { Link } from "react-router-dom";
import LabAndSystemTable from "../../Components/Common/LabAndSystemTable";
import {maintenanceTable } from "../../Components/Common/Table/constant";
import { Helmet } from "react-helmet-async";
import AddService from "./AddService";
import DeletePopup from "../../Components/Common/DeletePopUp";

const SystemMaintenance = () => {
  const [searchBar, setSearchBar] = useState();
  const [show, setShow] = useState(false);
  const [showDelete,setShowDelete]=useState(false)
  return (
    <div>
      <Helmet>
        <title>System Maintenance</title>
        <meta
          name="System Maintenance"
          content="This is a System Maintenance page"
        />
      </Helmet>
          <div className="SystemMaintenance">
              <p className="p1">Arabella Mills</p>
              <Cards />
              <div className="div1">
        <p className="p2">Maintenance Schedule & Log</p>
        <div className="btnsDiv">
<AddService/>
            <CustomSearchInput
            placeholder="search "
            onSearchChange={setSearchBar}
            iconShow={true}
          />
        </div>
          </div>
        <div className="tableDiv">
          <LabAndSystemTable data={maintenanceTable} searchVal={searchBar} setShowDelete={setShowDelete} />
          </div>
      </div>
    </div>
  );
};

export default SystemMaintenance;
