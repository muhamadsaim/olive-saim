import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Style.scss";
import Watch from "../../../assets/icons/TableEye.png";
import Theme from "../../../Theme/Theme";
import { WarehouseOilTableData } from "../Table/constant";
import Tooltip from "@mui/material/Tooltip";

const WarehouseOilTable = ({ searchVal }) => {
  const lightTheme = Theme();
  const [rows, setRows] = useState(WarehouseOilTableData);
  const [filterData, setFilterData] = useState(WarehouseOilTableData);

  useEffect(() => {
    searchFilter();
  }, [searchVal]);

  const searchFilter = () => {
    if (!searchVal) {
      setFilterData(rows);
    } else {
      const filter = rows.filter((order) => {
        return (
          order.transactionId.toLowerCase().includes(searchVal) ||
          order.inOut.toLowerCase().includes(searchVal) ||
          order.amount.toLowerCase().includes(searchVal) ||
          order.authorized.toLowerCase().includes(searchVal) ||
          order.linkedOrder.toLowerCase().includes(searchVal) ||
          order.paymentMethod.toLowerCase().includes(searchVal) 
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
              Tansaction ID
            </TableCell>
            <TableCell align="right">In/Out</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Authorized By</TableCell>
            <TableCell align="right">linked Order</TableCell>
            <TableCell align="right">Payment Method</TableCell>
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
              <TableCell
                component="th"
                scope="row"
                style={{
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                {row.transactionId}
              </TableCell>
              <TableCell align="right">{row.inOut}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.authorized}</TableCell>
              <TableCell align="right">{row.linkedOrder}</TableCell>
              <TableCell align="right">{row.paymentMethod}</TableCell>
              <TableCell
                align="right"
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <div className="mainActionsW">
                  <Tooltip title="View" placement="top">
                    <div
                      className="circle"
                      style={{ backgroundColor: `${lightTheme.yellowIcon}` }}
                    >
                      <img src={Watch} alt="watch" height={20} />
                    </div>
                  </Tooltip>
                 
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
