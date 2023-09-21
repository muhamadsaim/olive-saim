import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Style.scss";
import Theme from "../../../Theme/Theme";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setSelectedStockData,
  openEditStock,
  openEditOilStock,
} from "../../../Redux/slice/stockEdit";
import DeletePopUp from "../DeletePopUp";
import EditStock from "../../../Pages/warehouseManagement/EditStock";

const WarehouseOilTable = ({ searchVal, data, address }) => {
  const lightTheme = Theme();
  const dispatch = useDispatch();
  const [rows, setRows] = useState(data);
  const [filterData, setFilterData] = useState(data);

  useEffect(() => {
    searchFilter();
  }, [searchVal]);

  const tableHeaders = Object.keys(data[0] || {});

  const searchFilter = () => {
    if (!searchVal) {
      setFilterData(rows);
    } else {
      const filter = rows.filter((order) => {
        return tableHeaders.some((header) =>
          order[header].toLowerCase().includes(searchVal)
        );
      });
      setFilterData(filter);
    }
  };

  const handleData = (data) => {
    dispatch(setSelectedStockData(data));
    dispatch(openEditStock());
    dispatch(openEditOilStock());
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableCell
                key={index}
                style={{
                  borderTopLeftRadius: index === 0 ? "10px" : "0px",
                  borderBottomLeftRadius: index === 0 ? "10px" : "0px",
                  borderTopRightRadius:
                    index === tableHeaders.length ? "10px" : "0px",
                  borderBottomRightRadius:
                    index === tableHeaders.length ? "10px" : "0px",
                }}
              >
                {header}
              </TableCell>
            ))}
            <TableCell
              align="right"
              style={{
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterData.map((row, index) => (
            <TableRow
              key={row.index}
              style={{
                borderRadius: "10px", // Border radius for odd rows
              }}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Object.values(row).map((cellValue, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  align="right"
                  style={{
                    borderTopLeftRadius: cellIndex === 0 ? "10px" : "0px",
                    borderBottomLeftRadius: cellIndex === 0 ? "10px" : "0px",
                  }}
                >
                  {cellValue}
                </TableCell>
              ))}
              <TableCell
                align="right"
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <div className="mainActionsW">
                    
                  <div onClick={() => handleData(row)}>
                  <EditStock
                    address={address}
                  />
                  </div>

                  <DeletePopUp circleIcon={false} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WarehouseOilTable;
