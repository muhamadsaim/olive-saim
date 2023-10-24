import React, { useState } from "react";
import "./Style.scss";
import Cards from "../../Components/Common/TopCards/Cards";
import CustomSearchInput from "../../Components/Common/customSearch";
import { Link } from "react-router-dom";
import LabAndSystemTable from "../../Components/Common/LabAndSystemTable";
import { labServiceTable } from "../../Components/Common/Table/constant";
import { Helmet } from "react-helmet-async";
import AddOrder from "./AddOrder";
import DeletePopup from "../../Components/Common/DeletePopUp";

const LabService = () => {
  const [searchBar, setSearchBar] = useState();
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const address = "/lab-service";
  return (
    <div className="labMain">
      <Helmet>
        <title>Lab service</title>
        <meta name="Lab service" content="This is a Lab service page" />
      </Helmet>
      <Cards />
      <div className="div1">
        <p className="p1">Tests List</p>
        <div className="btnsDiv">
         <AddOrder address={address}/>
          <CustomSearchInput
            placeholder="search "
            onSearchChange={setSearchBar}
            iconShow={true}
          />
        </div>
      </div>
      <div className="tableDiv">
        <LabAndSystemTable data={labServiceTable} searchVal={searchBar} setShowDelete={setShowDelete} />
      </div>
    </div>
  );
};

export default LabService;
