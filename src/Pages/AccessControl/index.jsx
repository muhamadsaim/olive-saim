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
import EditUser from "./EditUser";
import { useSelector } from "react-redux";
import DeletePopup from "../../Components/Common/DeletePopUp";

const AccessControl = () => {
  const [searchBar, setSearchBar] = useState();
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [showDelete,setShowDelete]=useState(false)
  const isEditUserOpen = useSelector(
    (state) => state.selectedRow.isEditUserOpen
  );
  return (
    <div className="mainDivAccess">
      <Helmet>
        <title>Access Control</title>
        <meta name="Access Control" content="This is a Access Control page" />
      </Helmet>
      <div className="div1">
        <p className="p1">Access Control</p>
        <div className="btnsDiv">
          <AddUser/>
          <CustomSearchInput
            placeholder="search "
            onSearchChange={setSearchBar}
            iconShow={true}
          />
        </div>
      </div>
      <div className="accessTable">
        {
          showDelete && <DeletePopup show={setShowDelete} />
}
        <TableCom searchVal={searchBar} data={accessControlTable} setShowDelete={setShowDelete} />
      </div>
    </div>
  );
};

export default AccessControl;
