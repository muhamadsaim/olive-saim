import React,{useState} from 'react'
import './Style.scss'
import ReactApexChart from 'react-apexcharts'
import Theme from '../../../Theme/Theme'

const OrderProductionGraph = () => {
    const lightTheme = Theme();
    const [graph1, setGraph1] = useState({
        series: [{
            data: ['20','523','3993','2131','12322','444','109']
        }],
        
        options: {
            colors: [`${lightTheme.greenDark}`],
            chart: {
            //   height: 380,
              type: "area",
              stacked: false,
              toolbar: {
                show: false,
              },
            },
            stroke: {
              curve: "straight",
            },
            xaxis: {
              categories:['S','M','T','W','T','F','S'],
              labels: {
                style: {
                //   colors:`${lightTheme.graphAxis}`,
                },
                fontSize: "32px",
              },
            },
            yaxis: {
                show:false
              // min: 0,
              // max: 2500,
            //   tickAmount:0,
            //   labels: {
            //     style: {
            //       colors: `${lightTheme.graphAxis}`,
            //     },
            //   },
            },
            grid: {
            //   borderColor: `${lightTheme.graphGridLinesColor}`,
              xaxis: {
                lines: {
                  show: false,
                },
              },
              yaxis: {
                lines: {
                  show: true,
                },
              },
            },
            tooltip: {
              followCursor: false,
            },
            dataLabels: {
              enabled: false,
            },
            fill: {
              opacity: 1,
            },
          },
    
    })
  return (
      <div className='mainProGraph'>
          <div className='proGraph'>
              <p> Production Graph Quick View(Tons)</p>              
          <ReactApexChart options={graph1.options} series={graph1.series} type="area" height={300} />
          </div>
    </div>
  )
}

export default OrderProductionGraph