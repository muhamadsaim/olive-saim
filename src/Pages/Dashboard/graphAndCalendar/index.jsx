import React from 'react'
import ProductionGraph from '../../../Components/Common/ProductionGraphs'
import CalendarCom from '../../../Components/Common/Calendar/Calendar'

const GraphCalendar = () => {
  return (
      <div style={{width:'70%'}}> 
          <ProductionGraph />
          <CalendarCom styleCheck={true}/>
    </div>
  )
}

export default GraphCalendar