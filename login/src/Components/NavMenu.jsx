import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavMenu() {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Monterey County Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/SelfCheck">COVID-19 Self Check In </Nav.Link>
                            <Nav.Link href="/CountySites">Monterey County Recources</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavMenu;
