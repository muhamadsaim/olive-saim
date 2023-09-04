import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Style.scss";
import File from "../../../../assets/icons/file.png";
import View from "../../../../assets/icons/TableEye.png";
import Theme from "../../../../Theme/Theme";
import { PayTableData } from "../../../../Components/Common/Table/constant";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const PayrollTable = ({setShow}) => {
  const lightTheme = Theme();
  const [rows, setRows] = useState(PayTableData);

  return (
    <TableContainer className="payrollTable">
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
            <TableCell align="right">JobTitle</TableCell>
            <TableCell align="right">BasePay</TableCell>
            <TableCell align="right">Bonus</TableCell>
            <TableCell align="right">NetPay</TableCell>
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
              <TableCell align="right">{row.jobTitle}</TableCell>
              <TableCell align="right">{row.basePay}</TableCell>
              <TableCell align="right">{row.bonus}</TableCell>
              <TableCell align="right">{row.netPay}</TableCell>
              <TableCell
                align="right"
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <div className="mainActionsPay">
                  <Tooltip title="View" placement="top">
                    <div
                      className="circle"
                      style={{ backgroundColor: `${lightTheme.yellowIcon}` }}
                    >
                      <Link to="pay-detail" onClick={()=>setShow(true)}>
                        <img src={View} alt="view" height={20} />
                      </Link>
                    </div>
                  </Tooltip>
                  <Tooltip title="File" placement="top">
                    <div
                      className="circle"
                      style={{ backgroundColor: `${lightTheme.yellowIcon}` }}
                    >
                      <img src={File} alt="file" height={18} className="img2" />
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

export default PayrollTable;
