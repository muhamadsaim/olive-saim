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

const TableCom = ({ searchVal, activeBtn, data }) => {
  const lightTheme = Theme();
  const [rows, setRows] = useState(data);
  const [filterData, setFilterData] = useState(data);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    searchFilter();
  }, [searchVal]);

  const tableHeaders = Object.keys(data[0] || {});

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

  const toggleRow = (row) => {
    const updatedSelectedRows = selectedRows.includes(row)
      ? selectedRows.filter((selectedRow) => selectedRow !== row)
      : [...selectedRows, row];
    setSelectedRows(updatedSelectedRows);
    activeBtn(false);
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
      activeBtn(true);
    } else {
      setSelectedRows([...filterData]);
      activeBtn(false);
    }
    setSelectAll(!selectAll);
  };
  return (
    <TableContainer className="accountTable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="borHead">
              <input
                type="checkBox"
                checked={selectAll}
                onChange={toggleSelectAll}
              />
            </TableCell>
         
            {tableHeaders.map((header, index) => (
              <TableCell
                key={index}
                style={{
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
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => toggleRow(row)}
                />
              </TableCell>
              {Object.values(row).map((cellValue, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  align="right"
                  // style={{
                  //   borderTopRightRadius:
                  //   cellIndex === tableHeaders.length-1? "10px" : "0px",
                  //   borderBottomRightRadius:
                  //   cellIndex === tableHeaders.length-1? "10px" : "0px",
                  // }}
                  className={cellIndex === 4 ? "lastCell" : "bor"}
                >
                  {cellIndex === 4 ? (
                    <>
                      
                    <img src={Arrow} alt="arrow" height={6} />
                      {cellValue}
                    </>
                  ) : (
                    cellValue
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCom;
