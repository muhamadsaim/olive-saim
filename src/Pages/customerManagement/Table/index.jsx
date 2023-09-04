import React from 'react'
import './Style.scss'
import TableData from './Table'

const CustomerTable = ({ searchBar }) => {
  console.log('call customer',searchBar)
  
  return (
    <div className='mainCustomerT'>
      <div className='customerT'>
        <TableData searchVal={searchBar} />
      </div>
    </div>
  )
}

export default CustomerTable