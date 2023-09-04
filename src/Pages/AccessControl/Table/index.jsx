import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Style.scss";
import Theme from "../../../Theme/Theme";
import Close from '../../../assets/icons/circleClose.png'
import Reload from '../../../assets/icons/circleReload.png'
import { accessControlTable } from "../../../Components/Common/Table/constant";
import { Tooltip } from "@mui/material";



const TableCom = ({ searchVal, activeBtn }) => {
  const lightTheme = Theme(); // Assuming you have a Theme function defined
  const [rows, setRows] = useState(accessControlTable);
  const [filterData, setFilterData] = useState(accessControlTable);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

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
          order.role.toLowerCase().includes(searchVal) ||
          order.access.toLowerCase().includes(searchVal) ||
          order.status.toLowerCase().includes(searchVal)
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
    <TableContainer>
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
            <TableCell align="right" className="bor">
              Name
            </TableCell>
            <TableCell align="right" className="bor">
              User Role
            </TableCell>
            <TableCell align="right" className="bor">
              Access Control
            </TableCell>
            <TableCell align="right" className="bor">
              Status
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
                borderRadius: '10px', // Border radius for odd rows
              }}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                style={{
                  borderTopLeftRadius: '10px',
                  borderBottomLeftRadius: '10px',
                }}
              >
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => toggleRow(row)}
                />
              </TableCell>
              <TableCell align="right" className="bor">
                {row.name}
              </TableCell>
              <TableCell align="right" className="bor">
                {row.role}
              </TableCell>
              <TableCell align="right" className="bor">
                {row.access}
              </TableCell>
              <TableCell align="right" className="bor">
                {row.status}
              </TableCell>
              <TableCell align="right" className="lastCell">
                {selectAll || selectedRows.includes(row) ? ( // Conditionally render actions
                  <div className="mainActions">
                    <Tooltip title="Reload" placement="top">
                      <div className="circle">
                        <img src={Reload} alt="reload" height={20} />
                      </div>
                    </Tooltip>
                    <Tooltip title="Delete" placement="top">
                      <div className="circle">
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
