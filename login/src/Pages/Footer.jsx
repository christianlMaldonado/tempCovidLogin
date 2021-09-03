import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Footer.css'
import { BsStop } from "react-icons/bs";


const Footer = () => {
  return (
    <div>
      <Navbar  bg="dark" variant="dark">
        <Container >
          <Nav className="flex-column">  
          
              <Nav.Link href="/"><BsStop/> Portal Home</Nav.Link>
              <Nav.Link href="/DigCard"><BsStop/> Digital Vaccine Card</Nav.Link>
              <Nav.Link href="/selfcheck"><BsStop/> Self Check In</Nav.Link>
              <Nav.Link href="/countysites"><BsStop/> Site Resources</Nav.Link>

          </Nav>
          <Nav className="flex-column">
            <Nav.Link href="https://www.co.monterey.ca.us/home"><BsStop/> Monterey County Homepage</Nav.Link>
            <Nav.Link href="https://www.co.monterey.ca.us/residents/alerts-notifications/county-social-media"><BsStop/> Follow Us</Nav.Link>  
            <Nav.Link href="https://www.co.monterey.ca.us/government/departments-a-h/health/diseases/2019-novel-coronavirus-covid-19"><BsStop/> COVID-19 Resources</Nav.Link> 
            <Nav.Link href="https://www.co.monterey.ca.us/how-do-i/find/news-information"><BsStop/> Stay Up to Date</Nav.Link> 
          </Nav> 


        </Container>
      </Navbar>   
    </div>
  );
};
export default Footer;