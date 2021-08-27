import React from "react";
import { Nav } from 'react-bootstrap';
import './Footer.css'


const Footer = () => {
    return (
        <div className="FooterLinks">
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home">Potral Home </Nav.Link>
                    <Nav.Link href="/home">Digital Vaccine</Nav.Link>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1">Digtial Vaccine</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2">Resources</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};
export default Footer;