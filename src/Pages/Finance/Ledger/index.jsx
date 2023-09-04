import React, { useState } from 'react'
import './Style.scss'
import Calendar from '../../../assets/icons/calendar.png'
import CalendarCom from '../../../Components/Common/Calendar/Calendar'
import LedgerTable from './Table'


const Ledger = () => {
  const [show, setShow] = useState(false)
  const [curDate,setCurDate]=useState()
  return (
    <div className='ledgerMain'>
      <p className='p1'>Ledger</p>
      <div className='mainDiv'>
        <div className='div1'>
          <div className='inputDiv1'>
            <p className='p1'>Account Name</p>
            <input type="text" placeholder='enter your name'/>
          </div>
          <div className='inputDiv2'>
            <p className='p1'>Month Ending</p>
            <div className='calendarDiv'>
              <p className='date'>{curDate&&curDate}</p>
              <img src={Calendar} href="calendar" height={18} onClick={()=>setShow(true)}/>
            </div>
          </div>
          {
            show&&<CalendarCom setShow={setShow} setCurDate={setCurDate}/>
          }
        </div>
        <div className='div2'>
        <div className='inputDiv1'>
            <p className='p1'>Account Number</p>
            <input type="text" placeholder='enter your account number'/>
          </div>
        </div>
        <div className='tableDiv'>
          
        <LedgerTable/>
        </div>
      </div>
    </div>
  )
}

export default Ledger