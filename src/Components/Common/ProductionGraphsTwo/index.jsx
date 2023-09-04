import React, { useState } from "react";
import "./Style.scss";
import Theme from "../../../Theme/Theme";
import ReactApexChart from "react-apexcharts";
import { useTranslation } from "react-i18next";

const ProductionGraph = () => {
  const lightTheme = Theme();
  const { t } = useTranslation();
  const [graph1, setGraph1] = useState({
    series: [
      {
        data: ["10", "22222", "-399", "2131", "12", "444", "909"],
      },
    ],

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
        categories: ["S", "M", "T", "W", "T", "F", "S"],
        labels: {
          style: {},
          fontSize: "32px",
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
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
  });
  const [graph2, setGraph2] = useState({
    series: [
      {
        data: ["10", "22222", "-399", "2131", "12", "444", "22222"],
      },
    ],
    options: {
      colors: [`${lightTheme.darkRed}`],
      chart: {
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
        categories: ["S", "M", "T", "W", "T", "F", "S"],
        labels: {
          style: {},
          fontSize: "32px",
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
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
  });
  const [graph3, setGraph3] = useState({
    series: [
      {
        data: ["10", "22", "-399", "2131", "22222", "444", "909"],
      },
    ],
    options: {
      colors: [`${lightTheme.greenIcon}`],
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
        categories: ["S", "M", "T", "W", "T", "F", "S"],
        labels: {
          style: {},
          fontSize: "32px",
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
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
  });

  return (
    <div className="mainContainerPT">
      <div className="proGraph">
        <p>{t("graph.production")}</p>
        <ReactApexChart
          options={graph1.options}
          series={graph1.series}
          type="area"
          height={150}
        />
      </div>
      <div className="proGraph">
        <p>{t("graph.production")}</p>
        <ReactApexChart
          options={graph2.options}
          series={graph2.series}
          type="area"
          height={150}
        />
      </div>
      <div className="proGraph">
        <p>{t("graph.production")}</p>
        <ReactApexChart
          options={graph3.options}
          series={graph3.series}
          type="area"
          height={150}
        />
      </div>
    </div>
  );
};

export default ProductionGraph;
