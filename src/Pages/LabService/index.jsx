import React, { useState } from "react";
import "./Style.scss";
import Cards from "../../Components/Common/TopCards/Cards";
import CustomSearchInput from "../../Components/Common/customSearch";
import { Link } from "react-router-dom";
import LabAndSystemTable from "../../Components/Common/LabAndSystemTable";
import { labServiceTable } from "../../Components/Common/Table/constant";
import { Helmet } from "react-helmet-async";
import AddOrder from "./AddOrder";

const LabService = () => {
  const [searchBar, setSearchBar] = useState();
  const [show, setShow] = useState(false);
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
          <Link to='new-order' onClick={() => setShow(true)}>+ Add New</Link>
          <CustomSearchInput
            placeholder="search "
            onSearchChange={setSearchBar}
            iconShow={true}
          />
        </div>
        {
                  show&&<AddOrder setShow={setShow}/>
              }
          </div>
          <div className="tableDiv">
              <LabAndSystemTable data={labServiceTable} searchVal={searchBar}/>
          </div>
    </div>
  );
};

export default LabService;
