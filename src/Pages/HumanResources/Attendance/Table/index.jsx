import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Style.scss";
import File from "../../../../assets/icons/file.png";
import Tick from "../../../../assets/icons/Tick1.png";
import View from "../../../../assets/icons/TableEye.png";
import Theme from "../../../../Theme/Theme";
import { AttendanceTableData } from "../../../../Components/Common/Table/constant";
import Tooltip from "@mui/material/Tooltip";

const AttendanceTable = () => {
  const lightTheme = Theme();
  const [rows, setRows] = useState(AttendanceTableData);

  return (
    <TableContainer className="AttendanceTable">
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
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">WorkingHours</TableCell>
            <TableCell align="right">AttendanceMark</TableCell>
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
          {rows.map((row, index) => (
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
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.designation}</TableCell>
              <TableCell align="right">{row.workingHours}</TableCell>
              <TableCell align="right">
                <div className="checkBoxMain">
                  {row.attendance === "present" ? (
                    <div className="check">
                      <img src={Tick} alt="tick" height={13} />
                    </div>
                  ) : (
                    <div className="notCheck"></div>
                  )}
                </div>
              </TableCell>
              <TableCell
                align="right"
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <div className="mainActionsAtt">
                  <Tooltip title="View" placement="top">
                    <div
                      className="circle"
                      style={{ backgroundColor: `${lightTheme.yellowIcon}` }}
                    >
                      <img src={View} alt="view" height={20} />
                    </div>
                  </Tooltip>
                  <Tooltip title="File" placement="top">
                    <div
                      className="circle"
                      style={{ backgroundColor: `${lightTheme.yellowIcon}` }}
                    >
                      <img src={File} alt="file" height={20} className="img2" />
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

export default AttendanceTable;
