import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Theme from "../../Theme/Theme";
import Logo from "../../assets/icons/logo.png";
import "./sideBar.css";
import { option } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../Redux/slice/NavbarValues";
import { useTranslation } from "react-i18next";
import GettingThings from "./popover/GettingThingsPopover";

const lightTheme = Theme();

const mainSideBar = {
  display: "flex",
  // width:'100%'
};

const sideBar = {
  backgroundColor: `${lightTheme.componentBackground}`,
  width: "300px",
  height: "100%",
  boxShadow: `0 4px 20px 0 ${lightTheme.boxShadow}`,
  position: "sticky",
  minHeight: "100vh",
};
const logoSection = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const navlinkStyle = {
  display: "flex",
  alignItems: "center",
  margin: "10px 15px",
  padding: "10px",
  textDecoration: "none",
  color: `${lightTheme.blackText}`,
};

const SideBar = () => {
  const [options, setOptions] = useState(option);
  const [showArrow, setShowArrow] = useState(true);
  const sidebarValue = useSelector((state) => state.value.value);
  const dispatch = useDispatch();

  const handleItemLink = (name) => {
    dispatch(setValue(name));
  };

  const [selectedItem, setSelectedItem] = useState(0);

  // useEffect(() => {
  //   const storedIndex = localStorage.getItem("selectedItemIndex");
  //   if (storedIndex !== null) {
  //     setSelectedItem(parseInt(storedIndex));
  //   }
  // }, []);

  // const handleSelectedItem = (index) => {
  //   setSelectedItem(index);
  //   localStorage.setItem("selectedItemIndex", index);
  // };

  const handleSelectedItem = (index) => {
    if (selectedItem === index) {
      setSelectedItem(-1);
    } else {
      setSelectedItem(index);
    }
    localStorage.setItem(
      "selectedItemIndex",
      selectedItem === index ? -1 : index
    );
  };

  // useEffect(() => {
  //   setSelectedItem(-1);
  //   localStorage.removeItem("selectedItemIndex");
  // }, []);

  useEffect(() => {
    const storedIndex = localStorage.getItem("selectedItemIndex");

    if (storedIndex !== null) {
      setSelectedItem(parseInt(storedIndex));
    } else {
      setSelectedItem(-1);
      // setSelectedItem(parseInt(storedIndex));
      localStorage.setItem("selectedItemIndex", 0);
    }

    return () => {
      localStorage.removeItem("selectedItemIndex");
    };
  }, []);

  const { t } = useTranslation();

  return (
    <div style={mainSideBar}>
      <div style={sideBar}>
        <div style={logoSection}>
          <img src={Logo} alt="logo" height={140} width={140} />
        </div>
        <div style={{ paddingTop: "40px" }}>
          {options.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={index}
                // className="linkStyle"
                className={`linkStyle ${
                  selectedItem === index ? "active" : ""
                }`}
                style={navlinkStyle}
                onClick={() => {
                  handleSelectedItem(index);
                  handleItemLink(index);
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="sidebarImages"
                  height={30}
                  width={30}
                  style={{ marginRight: "10px" }}
                />
                <div
                  className="link-text"
                  style={{
                    fontWeight: "500",
                  }}
                >
                  {item.name === "Dashboard & Analytics" ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {t(`sidebar.${index + 1}`)}
                      <div style={{ marginTop: "8px", marginLeft: "5px" }}>
                        <GettingThings />
                      </div>
                    </div>
                  ) : (
                    t(`sidebar.${index + 1}`)
                  )}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
