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

const TableCom = ({ tabVal, searchVal, qrcode }) => {
  const lightTheme = Theme();
  const [rows, setRows] = useState(tableData);
  const [filterData, setFilterData] = useState(tableData);

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

  const searchFilter = () => {
    if (!searchVal) {
      setFilterData(rows);
    } else {
      const filter = rows.filter((order) => {
        return (
          order.farmer.toLowerCase().includes(searchVal) ||
          order.orderId.toLowerCase().includes(searchVal) ||
          order.phone.toLowerCase().includes(searchVal) ||
          order.weight.toLowerCase().includes(searchVal) ||
          order.city.toLowerCase().includes(searchVal) ||
          order.town.toLowerCase().includes(searchVal) ||
          order.line.toLowerCase().includes(searchVal) ||
          order.status.toLowerCase().includes(searchVal)
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
            <TableCell
              style={{
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              Order ID
            </TableCell>
            <TableCell align="right">Farmer</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Town</TableCell>
            <TableCell align="right">Line</TableCell>
            <TableCell align="right">Status</TableCell>
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
                // background: index % 2 === 0 ? 'lightcoral' : 'red', // Alternate row background color
                borderRadius: "10px", // Border radius for odd rows
              }}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                {row.orderId}
              </TableCell>
              <TableCell align="right">{row.farmer}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.town}</TableCell>
              <TableCell align="right">{row.line}</TableCell>
              <TableCell align="right">
                <Stations status={row.status} />
              </TableCell>
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
                      <img src={Watch} alt="watch" height={15} />
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
                  <Tooltip title="Delete" placement="top">
                    <div
                      className="circle"
                      style={{ backgroundColor: `${lightTheme.darkRed}` }}
                    >
                      <img src={Delete} alt="delete" height={15} />
                    </div>
                  </Tooltip>
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
    </TableContainer>
  );
};

export default TableCom;
