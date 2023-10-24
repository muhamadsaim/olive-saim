import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Style.scss";
import Machine from "../../../assets/icons/machine.png";
import { sliderData } from './sliderData'

const Slider = ({selectedStation}) => {
  return (
    
    <Carousel
  showArrows={true}
  showThumbs={false}
  showStatus={false}
  infiniteLoop={true}
  width="600px"
  showIndicators={false}
      emulateTouch={true}
  onChange={(index)=>selectedStation(sliderData[index].station)}
>
  {sliderData.map((slide, index) => (
    <div className="sliderDiv" key={index}>
      <p>{slide.text}</p>
      <div className="stationDiv">
        <h3>{slide.station}</h3>
        <p>{slide.time}</p>
      </div>
      <img src={slide.image} alt="machine" />
    </div>
  ))}
</Carousel>

  );
};

export default Slider;
