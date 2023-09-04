import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import Theme from '../../../Theme/Theme'
import './Style.scss'
import { useTranslation } from 'react-i18next'

const ProductionGraph = () => {
  const lightTheme = Theme()
  const { t } = useTranslation();
    const [graph1, setGraph1] = useState({
        series: [{
            data: ['10','22222','-399','2131','12','444','909']
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
    const [graph2, setGraph2] = useState({
        series: [{
            data: ['10','22222','-399','2131','12','444','909']
        }],
        // options: {
        //     chart: {
        //         type: 'area',
        //         height: 350,
        //         zoom: {
        //             enabled: false
        //         }
        //     },
        //     dataLabels: {
        //         enabled: false
        //     },
        //     stroke: {
        //         curve: 'straight'
        //     },
        //     // labels: ['2','2','2','2','2','2','2'],
        //     xaxis: {
        //         type: 'datetime',
        //     },
        //     yaxis: {
        //         opposite: true
        //     },
        //     legend: {
        //         horizontalAlign: 'left'
        //     }
        // },
        options: {
            colors: [`${lightTheme.darkRed}`],
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
      <div className='mainContainerP'>
          <div className='proGraph'>
        <p>{t('graph.production')}</p>              
          <ReactApexChart options={graph1.options} series={graph1.series} type="area" height={150} />
          </div>
          <div className='proGraph'>
          <p>{t('graph.production')}</p>              
        <ReactApexChart options={graph2.options} series={graph2.series} type="area" height={150} />
      </div>
      </div>
  )
}

export default ProductionGraph