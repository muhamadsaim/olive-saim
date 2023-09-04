import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Style.scss";
import Theme from "../../../../Theme/Theme";
import Arrow from "../../../../assets/icons/filldarrow.png";
import { accountTableData } from "../../../../Components/Common/Table/constant";

const TableCom = ({ searchVal, activeBtn }) => {
  const lightTheme = Theme();
  const [rows, setRows] = useState(accountTableData);
    const [filterData, setFilterData] = useState(accountTableData);
    const [selectedRows, setSelectedRows] = useState([]);
    const [selectAll, setSelectAll] = useState(false)

  useEffect(() => {
    searchFilter();
  }, [searchVal]);

  const searchFilter = () => {
    if (!searchVal) {
      setFilterData(rows);
    } else {
      const filter = rows.filter((order) => {
        return order.name.toLowerCase().includes(searchVal);
      });
      setFilterData(filter);
    }
    };
    
    ;
  
    const toggleRow = (row) => {
      const updatedSelectedRows = selectedRows.includes(row) 
        ? selectedRows.filter(selectedRow => selectedRow !== row)
        : [...selectedRows, row];
        setSelectedRows(updatedSelectedRows);
        activeBtn(false)
    };
  
    const toggleSelectAll = () => {
      if (selectAll) {
        setSelectedRows([]);
        activeBtn(true)
      } else {
        setSelectedRows([...filterData]);
        activeBtn(false)
      }
        setSelectAll(!selectAll);
    };
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="borHead">
              <input type="checkBox" checked={selectAll}
              onChange={toggleSelectAll}/>
            </TableCell>
            <TableCell align="right" className="bor">
              Name
            </TableCell>
            <TableCell align="right" className="bor">
              Type
            </TableCell>
            <TableCell align="right" className="bor">
              Detail Type
            </TableCell>
            <TableCell align="right" className="bor">
              Amount
            </TableCell>
            <TableCell align="right" className="borHead1">
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
                <input type="checkBox"  checked={selectedRows.includes(row)}
                onChange={() => toggleRow(row)}/>
              </TableCell>
              <TableCell align="right" className="bor">
                {row.name}
              </TableCell>
              <TableCell align="right" className="bor">
                {row.type}
              </TableCell>
              <TableCell align="right" className="bor">
                {row.dType}
              </TableCell>
              <TableCell align="right" className="bor">
                {row.amount}
              </TableCell>
              <TableCell  align="right" className="lastCell">
                <img src={Arrow} alt="arrow" height={6} />
                {row.action}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCom;
