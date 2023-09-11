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


const WareHouse = () => {
  const [searchBar, setSearchBar] = useState();
  const [showForm, setShowForm] = useState(false);
  const [sparePart, setSparePart] = useState(false);
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
          <Link
            to="can-bottle"
            onClick={() => {
              setShowForm(true);
              setSparePart(false);
            }}
          >
            Can and Bottle
          </Link>
          <Link
            to="spare-parts"
            onClick={() => {
              setShowForm(false);
              setSparePart(true);
            }}
          >
            Spare Parts
          </Link>
        </div>
        {showForm && <CanBottle setShowForm={setShowForm} />}
        {sparePart && <SpareParts setSparePart={setSparePart} />}
        <div className="graphs">
          <ProductionGraph />
        </div>
        <div className="inStockDiv">
          <p className="p1">In Stock</p>
          <div className="stockBtn">
            <button>Adjusment</button>
            <button>+ Add New</button>
            <CustomSearchInput
              placeholder="search"
              onSearchChange={setSearchBar}
              iconShow={true}
            />
          </div>
        </div>
        <div className="tableDiv">
          <div className="mainTable">
            <WarehouseOilTable searchVal={searchBar} data={WarehouseOilTableData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WareHouse;
