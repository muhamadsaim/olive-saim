import React from "react";
import "./Style.scss";
import Logo from "../../../../../../assets/icons/logo.png";
import { GiPartyPopper } from "react-icons/gi";

const Congratulations = () => {
  return (
    <div className="mainContainer">
      <div className="congratulation">
        <div className="form">
          <div className="logoDiv">
            <img src={Logo} alt="logo" />
          </div>
          <div className="inputFields">
            <GiPartyPopper size={60} color=" rgba(144, 166, 123, 1)" />

            <h2>Congralutions!!!</h2>
            <p> You have successfully reset your password!</p>
            <input type="submit" value="Continue" className="submit" />
          </div>
        </div>
        <div className="imgDiv">
          <div className="textDiv">
            <h2>ARABELLA MILLS</h2>
            <p>
              Olive oil is a liquid fat obtained by pressing whole olives, the
              fruit of Olea europaea, a traditional tree crop of the
              Mediterranean Basin, and extracting the oil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations;
