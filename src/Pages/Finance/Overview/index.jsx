import React, { useState } from "react";
import "./Style.scss";
import ReactApexChart from "react-apexcharts";
import {IoIosArrowDown} from 'react-icons/io' 
import Select from "react-select";



const options = [
  { value: "last 7 days", label: "last 7 days" },
  { value: "last 30 days", label: "last 30 days" },
];

const Overview = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionPie, setSelectedOptionPie] = useState(null);
  const [salaryGraph, setGraph] = useState({
    series: [
      {
        name: "Money In",
        data: [30000, 35000, 50000, 70000, 70000, 75000],
      },
      {
        name: "Money Out",
        data: [60000, 60000, 80000, 80000, 80000, 90000],
      },
    ],
    options: {
      chart: {
        type: "area",

        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      xaxis: {
        categories: ["June", "July", "Aug", "Sep", "Oct", "Nov"],
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  const [plGraph, setPlGraph] = useState({
    series: [
      {
        name: "Net Income",
        data: [44],
      },
      {
        name: "Expenses",
        data: [76],
      },
    ],
    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Feb"],
        labels: {
          show: false,
        },
      },

      fill: {
        opacity: 1,
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });
  const[pieGraph,setPieGtaph]=useState({
          
    series: [44],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: [''], // Set an empty array to remove labels
  colors: ['rgba(57, 181, 74, 1)'],
  dataLabels: {
    enabled: false, // Disable data labels (percentage display)
      },
      markers: {
        size: 0, // Set the size to 0 to remove the circle markers
      },
      colors: ['rgba(57, 181, 74, 1)'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  
  
  })
  const [saleGraph, setSaleGraph] = useState({
    series: [
      {
        data: [300, 350, 500, 700, 750],
      },
    ],
    options: {
      chart: {
        type: "area",

        toolbar: {
          show: false,
        },
      },
      colors:['rgba(144, 166, 123, 1)'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      xaxis: {
        categories: ["May 15", "May 18", "May 25", "May 27", "May 28"],
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return "$" + value;
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  const[toggle,setToggle]=useState(false)
  return (

    <div className="overviewMain">
      <p className="p1">Overview</p>
      <div className="cashFlow">
        <p className="p1">Cash Flow Forcast</p>
        <div className="graph">
          <ReactApexChart
            options={salaryGraph.options}
            series={salaryGraph.series}
            type="area"
            height={250}
          />
        </div>
      </div>
      <div className="charts">
        <div className="chart">
          <p className="p1">Bank Accounts</p>
          <p className="p2">Main</p>
          <div className="mainBAC">
            <div className="balance">
              <p className="p1">In Arabella Mills</p>
              <p className="p2">$3,000.00</p>
            </div>
            <div className="connect">
              <p className="p1">Connect accounts</p>
              <p className="p2" onClick={()=>setToggle(!toggle)}>Go To Register<IoIosArrowDown size={15}/></p>
            </div>
           

          </div>
            {
              toggle&& <div className="mainToggle">
              <p>Main</p>
            </div>
            }
        </div>
        <div className="profitLoss">
          <div className="profitlossMain">
            <p className="p1">Profit And Loss</p>
            {/* <p className="p2">Last 30 days</p> */}
            <Select
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
              className="select"
              // defaultValue={defaultValue}
                placeholder="last 30 days"
            />
          </div>
          <p className="p1">-$150</p>
          <p className="p2">Net Income for last 30 days</p>
          <div className="graphDiv">
            <ReactApexChart
              options={plGraph.options}
              series={plGraph.series}
              type="bar"
              height={250}
            />
          </div>
        </div>
        <div className="Expenses">
          <div className="expenseMain">
            <div className="expense">
              <p className="p1">Expenses</p>
              <p className="p2">data updated a few seconds ago</p>
            </div>
            <Select
              value={selectedOptionPie}
              onChange={setSelectedOptionPie}
              options={options}
              className="select"
              // defaultValue={defaultValue}
                placeholder="last 30 days"
            />
          </div>
          <p className="p1">-$150.00</p>
          <div className="commission">
            <div className="circleDiv">
            <span></span>
              <p className="p1">-$150.00</p>
            </div>
            <div className="textDiv">
              <p className="p2">Comission and fees</p>
            </div>
          </div>
          <div className="graphDiv">
          <ReactApexChart options={pieGraph.options} series={pieGraph.series} type="pie" width={250} />
          </div>
        </div>
        </div>
        <div className="charts1">
        <div className="invoices">
          <div className="invoiceMain">
              <p className="p1">Invoices</p>
            <div className="invoice">
              <p className="p2">$0 Unpaid</p>
            <Select
              value={selectedOptionPie}
              onChange={setSelectedOptionPie}
              options={options}
              className="select"
              // defaultValue={defaultValue}
              placeholder="last 30 days"
              />
              </div>
          </div>
          <div className="due">
            <div className="dueDate">
              <p className="p1">Due Date</p>
              <div className="p2"></div>
            </div>
            <div className="notDue">
            <p className="p1">Not Due Date</p>
            <div className="p2"></div>
            </div>
         </div>
          <div className="invoiceMain">
            <div className="invoice">
              <p className="p2">$0 Unpaid</p>
            <Select
              value={selectedOptionPie}
              onChange={setSelectedOptionPie}
              options={options}
              className="select"
              // defaultValue={defaultValue}
              placeholder="last 30 days"
              />
              </div>
          </div>
          <div className="deposit">
            <div className="okay">
              <p className="p1">Not Deposited</p>
              <div className="p2"></div>
            </div>
            <div className="notOkay">
            <p className="p1">Deposited</p>
            <div className="p2"></div>
            </div>
          </div>
          <p className="p3">Create Invoices</p>
        </div>
        <div className="sales">
          <div className="saleMain">
            <div className="sale">
              <p className="p1">Sales</p>
              <p className="p2">data updated a few seconds ago</p>
            </div>
            <Select
              value={selectedOptionPie}
              onChange={setSelectedOptionPie}
              options={options}
              className="select"
              // defaultValue={defaultValue}
                placeholder="last 30 days"
            />
          </div>
          <p className="p1">-$150.00</p>
          <p className="p2">Total Sales</p>
          <div className="graphDiv">
          <ReactApexChart
            options={saleGraph.options}
            series={saleGraph.series}
            type="area"
            height={200}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
