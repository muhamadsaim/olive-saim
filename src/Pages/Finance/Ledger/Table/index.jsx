import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Style.scss";
import Theme from "../../../../Theme/Theme";
import { ledgerTableData } from "../../../../Components/Common/Table/constant";

const LedgerTable = () => {
  const lightTheme = Theme();
  const [filterData, setFilterData] = useState(ledgerTableData);

  return (
    <div className="ledgerTable">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {/* Add a new row for headings */}
            <TableRow className="mainHeading">
              <TableCell  />
              <TableCell />
              <TableCell align="right" colSpan={2} className="transaction">
                <strong>Transactions</strong>
              </TableCell>
              <TableCell align="right" colSpan={2} className="balance">
                <strong>Balance</strong>
              </TableCell>
            </TableRow>
            <TableRow className="secondHead">
              <TableCell className="firstCell">Date</TableCell>
              <TableCell align="right" className="bor">Description</TableCell>
              <TableCell align="right" className="bor">Debit</TableCell>
              <TableCell align="right" className="bor">Credit</TableCell>
              <TableCell align="right" className="bor">TotalDebit</TableCell>
              <TableCell align="right" className="lastCell">
                TotalCredit
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
                <TableCell component="th" scope="row" className="firstCell">
                  {row.date}
                </TableCell>
                <TableCell align="right" className="bor">{row.description}</TableCell>
                <TableCell align="right" className="bor">{row.debit}</TableCell>
                <TableCell align="right" className="bor">{row.credit}</TableCell>
                <TableCell align="right" className="bor">{row.totalCredit}</TableCell>
                <TableCell align="right" className="lastCell">
                  {row.totalDebit}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LedgerTable;
