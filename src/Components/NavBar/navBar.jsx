import React, { useEffect, useState } from "react";
import "./Style.scss";
import Avatar from "@mui/material/Avatar";
import Bars from "../../assets/icons/bars.png";
import Home from "../../assets/icons/home.png";
import Setting from "../../assets/icons/setting.png";
import Power from "../../assets/icons/power.png";
import Admin from "../../assets/AuthImages/admin.jpg";
import Theme from '../../Theme/Theme'
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();
  const lightTheme = Theme();
  const sidebarValue = useSelector((state) => state.value.value);
  const [a, setA] = useState();

  // useEffect(() => {
  // const index=localStorage.getItem('selectedItemIndex')
  //   setA(Number(index))
  // }, [sidebarValue])

  return (
    <nav  className="MainContainer">
      <div className="comName">
        <img src={Bars} alt="bars" height={20} width={26} />
        <h1 style={{ color: `${lightTheme.blackText}` }}>{t(`sidebar.${sidebarValue+1}`)}</h1>
      </div>
      <div className="tabsMain">

      <div className="avatarDiv">
        <div className="adminName">
            <h3 style={{ color: `${lightTheme.blackText}` }}>{t('NavbarText.name')}</h3>
            <p style={{ color: `${lightTheme.darkGray}` }}>{t('NavbarText.admin')}</p>
        </div>
        <Avatar alt="Remy Sharp" src={Admin} sx={{ width: 56, height: 56 }} />
      </div>
      <div className="tabs">
        <div className="tab"  style={{backgroundColor:`${lightTheme.greenDark}`}}>
          <img src={Home} alt="Home" height={30}/>
      </div>
        <div className="tab" style={{backgroundColor:`${lightTheme.greenDark}`}}>
          <img src={Setting} alt="Setting" height={30}/>
      </div>
        <div className="tab" style={{backgroundColor:`${lightTheme.lightRed}`}}>
          <img src={Power} alt="Power" height={30}/>
      </div>
        </div>
      </div>
        
    </nav>
  );``
};

export default NavBar;
