import React from 'react';
import './Navigation.css';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

function Navigation() {
    return (
        <Navbar dark sticky="top">
            <div className="container">
                <NavbarBrand href="/">Peak Hikes</NavbarBrand>
            </div>
        </Navbar>
    )
}

export default Navigation;