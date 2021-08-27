import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import Logo from '../Components/Images/Logo1.png';
import slide1 from '../Components/Images/slide1.jpg';
import slide2 from '../Components/Images/slide2.jpg';
import slide3 from '../Components/Images/slide3.jpg';

function Home() {
  return (
    <div className="homeBody">
      <img src={Logo} alt="countyLogo" />
      <h2 className="homeTitle"> WELCOME TO THE MONTEREY COUNTY PORTAL </h2>
      
      <Carousel>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First Slide"
          />
          <Carousel.Caption>
            <h3> Access Your Digital Vaccine</h3>
            <p> / </p>
          </Carousel.Caption>
        </Carousel.Item>
    
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second Slide"
          />
          <Carousel.Caption>
            <h3 className="CarouselColor">Self Check In</h3>
            <p className="CarouselColor"> / </p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third Slide"
          />
          <Carousel.Caption>
            <h3 className="CarouselColor">Monterey County Recources</h3>
            <p className="CarouselColor">/</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    
    </div>
  );
}

export default Home;