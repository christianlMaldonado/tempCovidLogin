import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Footer.css'


const Footer = () => {
  return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav justify className="flex-column">  
          
              <Nav.Link href="/">Portal Home</Nav.Link>
              <Nav.Link href="/DigCard">Digital Vaccine Card</Nav.Link>
              <Nav.Link href="/selfcheck">Self Check In</Nav.Link>
              <Nav.Link href="/countysites">Resources</Nav.Link>
            
          
            <Nav.Link href="/">Portal Home</Nav.Link>
              <Nav.Link href="/DigCard">Digital Vaccine Card</Nav.Link>
              <Nav.Link href="/selfcheck">Self Check In</Nav.Link>
              <Nav.Link href="/countysites">Resources</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
      
    </div>
  );
};
export default Footer;