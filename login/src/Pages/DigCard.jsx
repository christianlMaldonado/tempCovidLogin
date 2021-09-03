import React from 'react';
import "./DigCard.css"
import { Button } from 'react-bootstrap';
import Logo from '../Components/Images/Logo1.png';

function DigCard() {
  return (
    <div className="DigCardBody">
      <img src={Logo} alt="countyLogo"/>
      <h1> Your Official Digital Vaccine Card </h1>
      <p> Use The Link Below To Access A Digital Copy Of Your Offical California Government Covid Vaccine Card.</p>
      <Button href="https://myvaccinerecord.cdph.ca.gov/" variant="dark">Click Here To Access Your Offical Digtal Vaccine Card</Button>
    </div>
  );
}

export default DigCard;