import React from 'react';
import './Home.css';
import {Button } from 'react-bootstrap';
import Logo from '../Components/Images/Logo1.png';

function Home() {
  return (
    <div className="homeBody">
      <img src={Logo} alt="countyLogo"/>
      <h1 className="homeTitle"> WELCOME TO THE MONTEREY COUNTY HOMEPAGE </h1>
      <p> Use the link below to access your offical government Covid Vaccine Card.</p>
      <Button href="https://myvaccinerecord.cdph.ca.gov/" variant="dark">Click Here To Access Your Offical Digtal Vaccine Card</Button>
    </div>
  );
}

export default Home;