import React from "react";
import "./Style.scss";
import Search from "../../assets/icons/search.png";
import CustomSearchInput from "../../Components/Common/customSearch";
import { useState } from "react";
import TableCom from "./Table";
import { Link } from "react-router-dom";
import AddUser from "./AddUser";
import { Helmet } from "react-helmet-async";
import { accessControlTable } from "../../Components/Common/Table/constant";


const AccessControl = () => {
  const [searchBar, setSearchBar] = useState();
  const [show, setShow] = useState(false);
  return (
    <div className="mainDivAccess">
      <Helmet>
        <title>Access Control</title>
        <meta name="Access Control" content="This is a Access Control page" />
      </Helmet>
      <div className="div1">
        <p className="p1">Access Control</p>
        <div className="btnsDiv">
          <Link to="new-user" onClick={() => setShow(true)}>
            + Add User
          </Link>
          <CustomSearchInput
            placeholder="search "
            onSearchChange={setSearchBar}
            iconShow={true}
          />
        </div>
        {show && <AddUser setShow={setShow} />}
      </div>
      <TableCom searchVal={searchBar} data={accessControlTable} />
    </div>
  );
};

export default AccessControl;
