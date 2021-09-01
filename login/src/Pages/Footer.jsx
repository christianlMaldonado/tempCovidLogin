import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Footer.css'
import Logo from '../Components/Images/Logo1.png'


const Footer = () => {
  return (
    <div className="FooterLinks">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav fill justify className="me-auto">
            <img
              src={Logo}

              alt="countyLogo"
            />   
            <Nav.Link href="/">Montery County Portal</Nav.Link>
            <Nav.Link href="/DigCard">Digital Vaccine Card</Nav.Link>
            <Nav.Link href="/selfcheck">Self Check In</Nav.Link>
            <Nav.Link href="/countysites">Monterey County Recources</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  );
};
export default Footer;