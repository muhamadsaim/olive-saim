import React,{useState} from "react";
import "./Style.scss";
import { Helmet } from "react-helmet-async";
import Theme from "../../Theme/Theme";
import Arrow from "../../assets/icons/downArrow.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Cards from "../../Components/Common/TopCards/Cards";
import Reports from "../Dashboard/GenerateReport";
import GraphAndLines from "./graphAndLines";
import GraphCalendar from "../Dashboard/graphAndCalendar";
import CalendarCom from "../../Components/Common/Calendar/Calendar";

const Analytics = () => {
  const lightTheme = Theme();
  const { t } = useTranslation();
  const[show,setShow]=useState(false)
  return (
    <div>
      <Helmet>
        <title>Analytics</title>
        <meta name="Analytics" content="This is a Analytics page" />
      </Helmet>
      <div className="analyticMain">
        <div className="dateDiv">
          <p className="p1" style={{ color: `${lightTheme.blackText}` }}>
            {t("Mills.1")}
          </p>
          <div  className="p2" onClick={()=>setShow(!show)}>
            <p className="date"> Mar 1 - Mar 30 2023 </p>
            <img src={Arrow} alt="arrow" height={10} />
          </div>
        </div>
        {
          show && <CalendarCom styleCheck={false} setShow={setShow} />
        }
        <Cards />
        <div className="graphAndReport">
          <GraphAndLines />
          <Reports />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
