import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Style.scss";
import Theme from "../../../../Theme/Theme";

const LedgerTable = ({ data,searchValue }) => {
  const lightTheme = Theme();
  const [filterData, setFilterData] = useState(data);
  const tableHeaders = Object.keys(data[0] || {});

  useEffect(() => {
    searchFilter();
  }, [searchValue]);

  const searchFilter = () => {
    if (!searchValue) {
      setFilterData(data);
    } else {
      const filter = data.filter((order) => {
        return tableHeaders.some((header) =>
          order[header].toLowerCase().includes(searchValue)
        );
      });
      setFilterData(filter);
    }
  };

  return (
    <div className="ledgerTable">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="mainHeading">
              <TableCell />
              <TableCell />
              <TableCell align="right" colSpan={2} className="transaction">
                <strong>Transactions</strong>
              </TableCell>
              <TableCell align="right" colSpan={2} className="balance">
                <strong>Balance</strong>
              </TableCell>
            </TableRow>
            <TableRow className="secondHead">
              {tableHeaders.map((header, index) => (
                <TableCell
                  key={index}
                  style={{
                    borderTopLeftRadius: index === 0 ? "10px" : "0px",
                    borderBottomLeftRadius: index === 0 ? "10px" : "0px",
                    borderTopRightRadius:
                      index === tableHeaders.length - 1 ? "10px" : "0px",
                    borderBottomRightRadius:
                      index === tableHeaders.length - 1 ? "10px" : "0px",
                  }}
                >
                  {header}
                </TableCell>
              ))}
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
                {Object.values(row).map((cellValue, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    align="right"
                    className={cellIndex===0? "firstCell":'bor'}
                    style={{
                      borderTopLeftRadius: cellIndex === 0 ? "10px" : "0px",
                      borderBottomLeftRadius: cellIndex === 0 ? "10px" : "0px",
                      borderTopRightRadius:
                        cellIndex === tableHeaders.length - 1 ? "10px" : "0px",
                      borderBottomRightRadius:
                        cellIndex === tableHeaders.length - 1 ? "10px" : "0px",
                    }}
                  >
                    {cellValue}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default LedgerTable;
