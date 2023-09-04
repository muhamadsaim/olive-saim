import React from "react";
import "./Style.scss";
import Search from "../../assets/icons/search.png";
import CustomSearchInput from "../../Components/Common/customSearch";
import { useState } from "react";
import TableCom from "./Table";
import {Link} from 'react-router-dom'
import AddUser from "./AddUser";

const AccessControl = () => {
    const [searchBar, setSearchBar] = useState();
    const [show,setShow]=useState(false)
  return (
    <div className="mainDivAccess">
      <div className="div1">
        <p className="p1">Access Control</p>
        <div className="btnsDiv">
          <Link to='new-user' onClick={()=>setShow(true)}>+ Add User</Link>
          <CustomSearchInput
            placeholder="search "
            onSearchChange={setSearchBar}
            iconShow={true}
                  />
                  
              </div>
              {
                  show&&<AddUser setShow={setShow}/>
              }
          </div>
          <TableCom searchVal={searchBar}/>
    </div>
  );
};

export default AccessControl;
