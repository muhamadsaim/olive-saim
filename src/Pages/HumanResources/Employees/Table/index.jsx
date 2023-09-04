import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Style.scss";
import Edit from "../../../../assets/icons/edit.png";
import Theme from "../../../../Theme/Theme";
import { EmployeeData } from "./Constant";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const EmployeeTable = ({ searchVal,setShow }) => {
  const lightTheme = Theme();
  const [rows, setRows] = useState(EmployeeData);
  const [filterData, setFilterData] = useState(EmployeeData);

  useEffect(() => {
    searchFilter();
  }, [searchVal]);

  const searchFilter = () => {
    if (!searchVal) {
      setFilterData(rows);
    } else {
      const filter = rows.filter((order) => {
        return (
          order.name.toLowerCase().includes(searchVal.trim()) ||
          order.id.toLowerCase().includes(searchVal.trim()) ||
          order.hire.toLowerCase().includes(searchVal.trim()) ||
          order.designation.toLowerCase().includes(searchVal.trim()) ||
          order.age.includes(searchVal.trim()) ||
          order.totalDays.includes(searchVal.trim()) ||
          order.attendance.toLowerCase().includes(searchVal.trim())
        );
      });

      setFilterData(filter);
    }
  };
  return (
    <TableContainer className="employeeTable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              EmployeeName
            </TableCell>
            <TableCell align="right">EmployeeID</TableCell>
            <TableCell align="right">HireDate</TableCell>
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">TotalDays</TableCell>
            <TableCell align="right">Attendance</TableCell>
            <TableCell
              align="right"
              style={{
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              Edit
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
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.hire}</TableCell>
              <TableCell align="right">{row.designation}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.totalDays}</TableCell>
              <TableCell align="right">{row.attendance}</TableCell>
              <TableCell
                align="right"
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <div className="mainActionsE">
                  <Tooltip title="Edit" placement="top">
                    <div
                    //   className="circle"
                    //   style={{ backgroundColor: `${lightTheme.yellowIcon}` }}
                    >
                      <Link to='profile' onClick={()=>setShow(false)}>
                      
                      <img src={Edit} alt="edit" height={20} />
                      </Link>
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

export default EmployeeTable;
