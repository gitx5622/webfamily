import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import gravity1 from '../assets/grafity1.jpeg';
import gravity2 from '../assets/grafity2.jpeg';
import gravity3 from '../assets/grafity3.jpeg';

class CarouselG extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
    return (
    <Slider {...settings}>
          <div>
            <img src={gravity1} alt="grafity1" width="110%" height="500px"/>
            <h3>Need a Graffity Drawing</h3>
          </div>
          <div>
          <img src={gravity2} alt="grafity1" width="110%" height="500px"/>
          </div>
          <div>
          <img src={gravity3} alt="grafity1" width="110%" height="500px"/>
          </div>
        </Slider>
        );
    }

}
export default CarouselG