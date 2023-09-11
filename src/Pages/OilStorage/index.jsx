import React,{useState} from "react";
import "./Style.scss";
import { Helmet } from "react-helmet-async";
import ProductionGraph from "../../Components/Common/ProductionGraphsTwo";
import Search from "../../assets/icons/search.png";
import WarehouseOilTable from "../../Components/Common/WarehouseOilTable";
import CustomSearchInput from "../../Components/Common/customSearch";
import { WarehouseOilTableData } from "../../Components/Common/Table/constant";

const OilStorage = () => {
  const [searchBar, setSearchBar] = useState();
  return (
    <div>
      <Helmet>
        <title>Oil Storage</title>
        <meta
          name="Oil Storage"
          content="This is a Oil Storage page"
        />
      </Helmet>
      <div className="oilStorage">
        <div className="oil">
          <button>Oil Storage</button>
        </div>
        <div className="graphs">
          <ProductionGraph />
        </div>
        <div className="inStockDiv">
          <p className="p1">In Stock</p>
          <div className="stockBtn">
            <button>Edit</button>
            
            <CustomSearchInput placeholder="search" onSearchChange={setSearchBar} iconShow={true}/>

          </div>
        </div>
        <div className="tableDiv">
          <div className="mainTable">
            <WarehouseOilTable searchVal={searchBar} data={WarehouseOilTableData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilStorage;
