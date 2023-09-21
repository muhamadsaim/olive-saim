import React, { useState } from "react";
import "./Style.scss";
import ProductionGraph from "../../Components/Common/ProductionGraphsTwo";
import Search from "../../assets/icons/search.png";
import WarehouseOilTable from "../../Components/Common/WarehouseOilTable";
import { Link } from "react-router-dom";
import CanBottle from "./CanAndBottle";
import SpareParts from "./SpareParts";
import CustomSearchInput from "../../Components/Common/customSearch";
import { Helmet } from "react-helmet-async";
import { WarehouseOilTableData } from "../../Components/Common/Table/constant";
import DeletePopup from "../../Components/Common/DeletePopUp";
import TransactionForm from "./addStock";
import EditStock from "./EditStock";
import { useSelector } from "react-redux";

const WareHouse = () => {
  const [searchBar, setSearchBar] = useState();
  const [showForm, setShowForm] = useState(false);
  const [sparePart, setSparePart] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showStock, setShowStock] = useState(false);
  const isEditStockOpen = useSelector(
    (state) => state.selectedStock.isEditStockOpen
  );
  const address='/warehouse-management'
 
  return (
    <div>
      <Helmet>
        <title>Warehouse Management</title>
        <meta
          name="Warehouse Management"
          content="This is a Warehouse Management page"
        />
      </Helmet>
      <div className="wareHouseMain">
        <div className="bottleAndSpare">
          
          <CanBottle/>
          <SpareParts/>
        </div>
        <div className="graphs">
          <ProductionGraph />
        </div>
        <div className="inStockDiv">
          <p className="p1">In Stock</p>
          <div className="stockBtn">
            <button>Adjusment</button>
            <TransactionForm/>
            <CustomSearchInput
              placeholder="search"
              onSearchChange={setSearchBar}
              iconShow={true}
            />
            
            
          </div>
        </div>
        <div className="tableDiv">
          <div className="mainTable">
            
            <WarehouseOilTable
              searchVal={searchBar}
              data={WarehouseOilTableData}
              setShowDelete={setShowDelete}
              address={address}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WareHouse;
