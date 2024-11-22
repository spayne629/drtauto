import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo2.png';

function Nav() {
    return (
        <Navbar expand="xxl" sticky="top">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} width="54" height="54" className="d-inline-block align-top"
                    alt="Dr. T logo" />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Nav;