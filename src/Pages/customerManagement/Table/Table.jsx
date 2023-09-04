import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Table.scss";
import Tick from "../../../assets/icons/tick1.png";
import Delete from "../../../assets/icons/delete.png";
import Watch from "../../../assets/icons/Watch.png";
import Theme from "../../../Theme/Theme";
import Tooltip from '@mui/material/Tooltip';
import { customerTableData } from "../../../Components/Common/Table/constant";

const TableData = ({ searchVal }) => {
  const lightTheme = Theme();
  const [rows, setRows] = useState(customerTableData);
    const [filterData, setFilterData] = useState(customerTableData);
    console.log('call table',searchVal)

  useEffect(() => {
    searchFilter();
  }, [searchVal]);

  const searchFilter = () => {
    if (!searchVal) {
      setFilterData(rows);
    } else {
      const filter = rows.filter((order) => {
        return (
          order.name.toLowerCase().includes(searchVal) ||
          order.orderId.toLowerCase().includes(searchVal) ||
          order.phone.toLowerCase().includes(searchVal) ||
          order.loyalty.toLowerCase().includes(searchVal) ||
          order.city.toLowerCase().includes(searchVal) ||
          order.date.toLowerCase().includes(searchVal) ||
          order.time.toLowerCase().includes(searchVal) ||
          order.OilProcessed.toLowerCase().includes(searchVal)
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
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Loyalty</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Oil Processed</TableCell>
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
                {row.orderId}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.loyalty}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.OilProcessed}</TableCell>
              <TableCell
                align="right"
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <div className="mainActions">
                  {/* <div
                    className="circleC"
                    style={{ backgroundColor: `${lightTheme.yellowIcon}` }}
                  >
                    <img src={Watch} alt="watch" height={15} />
                  </div>
                  <div
                    className="circleC"
                    style={{ backgroundColor: `${lightTheme.greenIcon}` }}
                  >
                    <img src={Tick} alt="tick" height={15} />
                  </div> */}
                          <Tooltip title="Delete"placement="top">
                              
                  <div
                    className="circleC"
                    style={{ backgroundColor: `${lightTheme.darkRed}` }}
                    >
                    <img src={Delete} alt="delete" height={15} />
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

export default TableData;
