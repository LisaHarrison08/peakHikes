import React from 'react';
import './Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Peak Hikes</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#destinations">Destinations</Nav.Link>
                        <Nav.Link href="#experiences">Experiences</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;