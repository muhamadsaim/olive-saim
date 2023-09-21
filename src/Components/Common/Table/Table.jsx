import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Style.scss";
import Tick from "../../../assets/icons/tick1.png";
import Delete from "../../../assets/icons/delete.png";
import Watch from "../../../assets/icons/Watch.png";
import Theme from "../../../Theme/Theme";
import { tableData } from "./constant";
import QrModal from "../../../Pages/orderManagement/QRmodal/QrModal";
import Stations from "./Station";
import Tooltip from "@mui/material/Tooltip";
import DeletePopup from "../DeletePopUp";

const TableCom = ({ tabVal, searchVal, qrcode, data,setShowDelete }) => {
  const lightTheme = Theme();
  const [rows, setRows] = useState(data);
  const [filterData, setFilterData] = useState(data);
  // const [showDelete,setShowDelete]=useState(false)

  useEffect(() => {
    filterTable();
  }, [tabVal]);

  const filterTable = () => {
    if (tabVal === "All") {
      setFilterData(rows); // Show all data
    } else {
      const filter = rows.filter((order) => order.status === tabVal);
      setFilterData(filter);
    }
  };

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
                borderRadius: "10px",
              }}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Object.entries(row).map(([key, cellValue], cellIndex) => (
                <TableCell
                  key={cellIndex}
                  align="right"
                  style={{
                    borderTopLeftRadius: cellIndex === 0 ? "10px" : "0px",
                    borderBottomLeftRadius: cellIndex === 0 ? "10px" : "0px",
                  }}
                >
                  {key === "status" ? (
                    <Stations status={cellValue} />
                  ) : (
                    cellValue
                  )}
                </TableCell>
              ))}
              <TableCell
                align="right"
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <div className="mainActions">
                  <Tooltip title="Pending" placement="top">
                    <div
                      className="circle"
                      style={{ backgroundColor: `${lightTheme.yellowIcon}` }}
                    >
                      <img src={Watch} alt="watch" height={17} />
                    </div>
                  </Tooltip>
                  <Tooltip title="Approved" placement="top">
                    <div
                      className="circle"
                      style={{ backgroundColor: `${lightTheme.greenIcon}` }}
                    >
                      <img src={Tick} alt="tick" height={15} />
                    </div>
                  </Tooltip>
                  
                  <DeletePopup circleIcon={true}/>
                  {qrcode && (
                    <Tooltip title="QR Code" placement="top">
                      <div>
                        <QrModal orderData={row} />
                      </div>
                    </Tooltip>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* {
        showDelete && <DeletePopup show={setShowDelete} />
      } */}
    </TableContainer>
  );
};

export default TableCom;
