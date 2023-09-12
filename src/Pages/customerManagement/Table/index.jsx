import React from 'react'
import './Style.scss'
import TableData from './Table'
import { customerTableData } from "../../../Components/Common/Table/constant";

const CustomerTable = ({ searchBar,setShowDelete }) => {
  console.log('call customer',searchBar)
  
  return (
    <div className='mainCustomerT'>
      <div className='customerT'>
        <TableData searchVal={searchBar} data={customerTableData} setShowDelete={setShowDelete} />
      </div>
    </div>
  )
}

export default CustomerTable