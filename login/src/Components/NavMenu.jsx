import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Logo from './Images/Logo1.png';

function NavMenu() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <img src={Logo} alt="countyLogo" style={{padding: 5}}/>
                    <Navbar.Brand href="/">Monterey County Portal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/DigCard">Government Vaccine Link</Nav.Link>
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
