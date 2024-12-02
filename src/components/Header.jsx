import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeSwitcher from './ThemeSwitcher';
import '../custom.scss';

const Header = () => {
  return (
    <>
      <Container fluid>
        <Nav href="#home" className="justify-content-between align-items-center">
          <div className="heartbeat-icon justify-content-center me-1">
            <span className="ak-heartbeat-btn justify-content-center"><img className="logo" src="/src/assets/images/logo2.png" alt="Dr. T logo"/></span>
          </div>
          <ThemeSwitcher />
        </Nav>
        <Container>
          <Navbar className="justify-content-center" id="middle-nav">
            <Nav.Item className="px-3">
              <Nav.Link href="#" className="h4 fw-medium fs-4">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-3">
              <Nav.Link href="#services" className="h4 fw-medium fs-4">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-3">
              <Nav.Link href="About" className="h4 fw-medium fs-4">About</Nav.Link>
            </Nav.Item>
            <Nav.Item className="px-3">
              <Nav.Link href="#contact" className="h4 fw-medium fs-4">Contact</Nav.Link>
            </Nav.Item>
          </Navbar>
        </Container>
        <Navbar.Collapse className="justify-content-end align-items-center">
          <Nav className="py-2 phone-contact">
            <span className="phone-span me-2">
            <i className="bi bi-telephone me-2 ps-2 text-secondary"></i>
            </span>
            <a href="tel:803-486-9063" className="phone-number fs-5 me-3 h6 text-secondary pt-1">803.486.9063</a>
          </Nav>      
        </Navbar.Collapse>
      </Container>
    </>
  );
};

export default Header;