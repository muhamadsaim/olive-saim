import React, { useState } from "react";
import "./Style.scss";
import { useNavigate } from "react-router-dom";
import { setValue } from "../../../Redux/slice/NavbarValues";
import { useDispatch } from "react-redux";

import { shortcuts } from "./shortcuts";

const GettingThingDone = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [comp, setComp] = useState(0);
  const address = "/dashboard/getting-things-don";

  const handleNavigation = (path, selectedIndex, actions) => {
    navigate(path, { replace: true });
    localStorage.removeItem("selectedItemIndex");
    localStorage.setItem("selectedItemIndex", selectedIndex);
    dispatch(setValue(selectedIndex));
    actions.forEach((action) => dispatch(action));
  };
  return (
    <div className="mainContainerGTD">
      <span className="pGTD">Getting Things Done</span>
      <div className="shortcuts">
        <p className="p2">shortcuts</p>
        <div className="mainShortcuts">
          <div className="blocks">
            {shortcuts &&
              shortcuts.map((shortcut, index) => (
                <div
                  className="block"
                  key={index}
                  onClick={() =>
                    handleNavigation(
                      shortcut.path,
                      shortcut.sideBar,
                      shortcut.actions
                    )
                  }
                >
                  <div className="imgDiv">
                    <img src={shortcut.img} alt={shortcut.label} />
                  </div>
                  <p className="p3">{shortcut.label}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingThingDone;
