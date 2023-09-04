import React from 'react'
import './Style.scss'
import SalaryStatistic from '../SalaryStatistic'
import EmployeeList from '../EmployeeList'
import Absenties from '../Absenties'

const Overview = () => {
  return (
    <div><div className="static">
    <p className="p1">Static</p>
    <div className="mainStatic">
      <div className="leftSide">
        <SalaryStatistic />
      </div>
      <div className="rightSide">
        <EmployeeList />
      </div>
    </div>
  </div>
  <div className="Absenties">
    <Absenties/>
  </div></div>
  )
}

export default Overview