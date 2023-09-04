import React, { useState } from "react";
import "./Style.scss";
import { Absents } from "./constant";
import Profile from "../../../assets/icons/profile.jpg";

const Absenties = () => {
  const [absents, setAbsents] = useState(Absents);
  return (
    <div className="absentiesMain">
      <p className="p1">Absent Memebers</p>
      <div className="allAbsent">
        {absents &&
          absents.map((data, index) => {
            return (
              <div className="mainAbsents">
                <div className="absent">
                  <div className="imgDiv">
                    <img src={Profile} alt="Profile" />
                    <div className="name">
                      <p>{data.name}</p>
                      <p>{data.date}</p>
                    </div>
                  </div>
                  <div className="statusDiv">
                    <p
                      className={
                        data.status === "Approved" ? "approved" : "pending"
                      }
                    ></p>
                    <p className="sp">{data.status}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Absenties;
