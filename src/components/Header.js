import React from 'react';
import Slider from 'react-slick';
import KitchenIcon from './icons/kitchen.svg';
import Pic1 from '../images/pic1.jpg'
import Pic2 from '../images/pic2.jpg'
import Pic3 from '../images/pic3.jpg'
import Pic4 from '../images/pic4.jpg'


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <header className="header">
      <div className="container">
          <nav className="logo-wrapper">
            <div className="logo">
              <img src={KitchenIcon} alt="Kitchen" className="brand" />
              <span className="text">CookMate</span>
            </div>
          </nav>
        </div>
      <div className="carousel-container">
        <div className='carousel'>
          <Slider {...settings}>
            <div>
              <img
                src={Pic1}
                alt="Slide 1"
                className="carousel-image"
              />
              <p className='parallex-quote'>A recipe has no soul. You, as the cook, must bring soul to the recipe</p>
            </div>
            <div>
              <img
                src={Pic2}
                alt="Slide 2"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src={Pic3}
                alt="Slide 3"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src={Pic4}
                alt="Slide 4"
                className="carousel-image"
              />
            </div>
          </Slider>
          </div>
        </div>
 
    </header>
  );
};

export default Header;
