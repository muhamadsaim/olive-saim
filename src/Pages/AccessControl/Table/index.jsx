import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Style.scss";
import Theme from "../../../Theme/Theme";
import Close from "../../../assets/icons/circleClose.png";
import Edit from "../../../assets/icons/editGreen.png";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSelectedRowData, openEditUser } from '../../../Redux/slice/accessControlEditUser';

const TableCom = ({ searchVal, data,setShowDelete }) => {
  const lightTheme = Theme(); // Assuming you have a Theme function defined
  const [rows, setRows] = useState(data);
  const [filterData, setFilterData] = useState(data);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();

  const handleData = (row) => {
    dispatch(setSelectedRowData(row))
    dispatch(openEditUser())
  }

  useEffect(() => {
    searchFilter();
  }, [searchVal]);

  const tableHeaders = Object.keys(data[0] || {});

  const searchFilter = () => {
    if (!searchVal) {
      setFilterData(rows);
    } else {
      const filter = rows.filter((order) => {
        return tableHeaders.some((header) =>
          order[header].toLowerCase().includes(searchVal)
        );
      });
      setFilterData(filter);
    }
  };

  const toggleRow = (row) => {
    const updatedSelectedRows = selectedRows.includes(row)
      ? selectedRows.filter((selectedRow) => selectedRow !== row)
      : [...selectedRows, row];
    setSelectedRows(updatedSelectedRows);
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows([...filterData]);
    }
    setSelectAll(!selectAll);
  };

  return (
    <TableContainer className="accessTable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="borHead">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={toggleSelectAll}
              />
            </TableCell>
            {tableHeaders.map((header, index) => (
              <TableCell
                key={index}
                style={{
                  borderTopRightRadius:
                    index === tableHeaders.length ? "10px" : "0px",
                  borderBottomRightRadius:
                    index === tableHeaders.length ? "10px" : "0px",
                }}
              >
                {header}
              </TableCell>
            ))}
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
                  className="bor"
                  style={{
                    borderRight:
                      cellIndex === 3 ? "1px solid rgba(0, 0, 0, 0.34) " : null,
                  }}
                >
                  {cellValue}
                </TableCell>
              ))}
              <TableCell
                align="right"
                style={{
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                  borderLeft: "1px solid black!important",
                }}
              >
                {selectAll || selectedRows.includes(row) ? ( // Conditionally render actions
                  <div className="mainActions">
                    <Tooltip title="Edit" placement="top">
                      <div className="circle" onClick={()=>handleData(row)
                        
                      }>
                        <Link to="edit-user">
                          <img src={Edit} alt="Edit" height={20} />
                        </Link>
                      </div>
                    </Tooltip>
                    <Tooltip title="Delete" placement="top">
                      <div className="circle" onClick={()=>setShowDelete(true)}>
                        <img src={Close} alt="close" height={20} />
                      </div>
                    </Tooltip>
                  </div>
                ) : null}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCom;
