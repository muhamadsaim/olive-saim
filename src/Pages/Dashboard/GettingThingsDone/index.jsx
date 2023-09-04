import React from 'react'
import './Style.scss'
import Emp from '../../../assets/icons/user.png'
import Leave from '../../../assets/icons/leave.png'
import RecPay from '../../../assets/icons/recpay.png'
import Receipt from '../../../assets/icons/receipt.png'
import Complain from '../../../assets/icons/complain.png'
import PayBill from '../../../assets/icons/paybill.png'
import RunPay from '../../../assets/icons/runpay.png'

const  GettingThingDone = () => {
  return (
    <div className='mainContainerGTD'>
      <span className='p1'>Getting Things Done</span>
      <div className='shortcuts'>
        <p className='p2'>shortcuts</p>
        <div className='mainShortcuts'>
          <div className='blocks'>
            <div className='block'>
              <div className='imgDiv'>
                <img src={Emp} alt="Emp" />
              </div>
              <p className='p3'>Add Customer</p>
            </div>
            <div className='block'>
              <div className='imgDiv'>
              <img src={Emp} alt="Emp" />

              </div>
              <p className='p3'>Add Employee</p>
            </div>
            <div className='block'>
              <div className='imgDiv'>
                <img src={Leave} alt="leave" />
              </div>
              <p className='p3'>Leave Requests</p>
            </div>
            <div className='block'>
              <div className='imgDiv'>
                <img src={RecPay} alt="Receive Payment" />
              </div>
              <p className='p3'>Receive payments</p>
            </div>
          </div>
          <div className='blocks' style={{marginTop:'30px'}}>
            <div className='block'>
              <div className='imgDiv'>
              <img src={Receipt} alt="receipt" />
              </div>
              <p className='p3'>Add Receipt</p>
            </div>
            <div className='block'>
              <div className='imgDiv'>
              <img src={Complain} alt="complain" />

              </div>
              <p className='p3'>Add Complaint</p>
            </div>
            <div className='block'>
              <div className='imgDiv'>
              <img src={PayBill} alt="Pay Bill" />
              </div>
              <p className='p3'>Pay Bill</p>
            </div>
            <div className='block'>
              <div className='imgDiv'>
                <img src={RunPay} alt="Run payroll" />
              </div>
              <p className='p3'>Run Payroll</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default  GettingThingDone