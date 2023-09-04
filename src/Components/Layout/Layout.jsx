import React, { Suspense } from "react";
import SideBar from "../SideBar/sideBar";
import { Outlet } from "react-router-dom";
import Theme from '../../Theme/Theme'
import NavBar from "../NavBar/navBar";
import Loading from '../Common/Loading/index'

const Layout = () => {
    const lightTheme=Theme()
  return (
    <div>
      <div style={{ display: "flex", height: "100%" }}>
        <SideBar style={{ height: "100%" }} />
        {/* <div style={{ display: "flex"}}>
        </div> */}
        <div style={{backgroundColor:`${lightTheme.pageBackground}`,flex:'1' }}>
          <NavBar />
          {/* <Suspense fallback={<Loading/>}>
          </Suspense> */}
          <Outlet />
          {/* {children} */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
