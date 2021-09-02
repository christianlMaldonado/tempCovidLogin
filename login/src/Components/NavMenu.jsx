import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from './Images/Logo1.png';

function NavMenu() {

    return (
        <>
            <Navbar  className="Navigation" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            width="50"
                            height="50"
                            alt="countyLogo"
                             />    
                        <h7> Monterey County Portal </h7> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav justify className="me-auto">
                                <Nav.Link href="/DigCard">Digital Vaccine Link</Nav.Link>
                                <Nav.Link href="/SelfCheck">COVID-19 Self Check In </Nav.Link>
                                <Nav.Link href="/CountySites">Monterey County Resources</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavMenu;
