import React from 'react'
import './Style.scss'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Tick from '../../../../assets/icons/tick1.png'
import Print from '../../../../assets/icons/greenPrinter.png'

const FinalBill = ({ setShow }) => {
    const Navigate=useNavigate()
    const handleCancle = () => {
        setShow(false);
        Navigate('/human-resources/payroll/pay-detail',{replace:true})
    }
  return (
      <div className='finalBill'>
          <div className='close'>
          <IoMdClose
            color="#90A67B"
            size={20}
            onClick={handleCancle}
            className="icon"
          />
          </div>
          <div className='dataDiv'>
              <p className='p1'>Final Bill and Termination</p>
              <div className='received'>
                  <div className='tick'>
                      <img src={Tick} alt="tick" />
                  </div>
                  <div className='textDiv'>
                      <p className='p1'>Received all Remaining Salaries</p>
                      <p className='p2'>Acknowledgement</p>
                  </div>
              </div>
              <div className='printDiv'>
                  <img src={Print} alt="print" />
                  <p>Print out from System</p>
              </div>
              <div className='endService'>
                  <p>End Of Service</p>
              </div>
              <div className='acknowledge'>
                  <p>Select Acknowledgement Type</p>
                  <div className='btns'>
                      <button>Digital Signature</button>
                      <button>Physical Signature</button>
                      <button>No Signature</button>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default FinalBill