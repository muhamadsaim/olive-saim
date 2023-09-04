import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Style.scss'
import Machine from '../../../assets/icons/machine.png'

const Slider = () => {
  return (
    <Carousel
    showArrows={true}
    showThumbs={false}
    showStatus={false}
    infiniteLoop={true}
    width="600px"
    // autoPlay={true} // Add autoPlay if needed
    // interval={3000} // Set the interval for autoPlay
    // stopOnHover={true} // Stop autoPlay on hover
    showIndicators={false} // Hide indicators
          emulateTouch={true} // Enable swipe on touch devices
          
    >
      <div className='sliderDiv'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nostrum. Porro sed fugiat libero ex, consequatur provident quia soluta placeat molestiae illo quam maxime. Eius.</p>
        <img src={Machine} alt="machine" />
      </div>
      <div className='sliderDiv'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, nostrum. Porro sed fugiat libero ex, consequatur provident quia soluta placeat molestiae illo quam maxime. Eius.</p>
        <img src={Machine} alt="machine" />
      </div>
      {/* Add more carousel items here */}
    </Carousel>
  );
};

export default Slider;
