import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTheme } from '../context/ThemeContext';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/index.scss'; // Import global styles

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar className={`bg-body-tertiary ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'} navbar navbar-expand-xxl vw-100`} sticky="top">
      <Container className="container-fluid">
          <div className="heartbeat-icon justify-content-center me-1">
            <span className="ak-heartbeat-btn justify-content-center"><img className="logo" src="/src/assets/images/logo2.png" alt="Dr. T logo"/></span>
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto justify-content-center d-flex nav-tabs">
            <Nav.Link href="#home" className="fw-semibold fs-4">Home</Nav.Link>
            <Nav.Link href="#services" className="fw-semibold fs-4">Services</Nav.Link>
          {/*  <Nav.Link href="#services" className="fw-semibold fs-4">Services</Nav.Link>*/}
            <Nav.Link href="#about" className="fw-semibold fs-4">About</Nav.Link>
            <Nav.Link href="#contact" className="fw-semibold fs-4">Contact</Nav.Link>
          </Nav>
          <Nav className="me-1 py-2 align-items-center phone-contact">
            <div>
              <span className="phone-span me-2"><i className="bi bi-telephone me-2 ps-2"></i></span>
            </div>
            <a href="tel:803-486-9063" className="phone-number fs-5 me-4">803.486.9063</a>
          </Nav>
          <Container className="d-flex flex-row align-items-center end-0 position-absolute">
            <span>
              {theme === 'dark' ? (
                <i className="bi bi-sun fs-5 me-1"></i>
              ) : (
                <i className="bi bi-moon-stars fs-5 me-1"></i>
              )}  
            </span>
            <NavDropdown className="ms-1 fs-5">
              <ListGroup className="theme-switch">
                <ListGroup.Item onClick={() => toggleTheme('dark')}>
                  <i className="bi bi-sun me-2 text-secondary body-bg-color"></i>
                  Light Mode
                </ListGroup.Item>
                <ListGroup.Item onClick={() => toggleTheme('light')}>
                  <i className="bi bi-moon-stars me-2 text-secondary body-bg-color"></i>
                  Dark Mode
                </ListGroup.Item>
              </ListGroup>
            </NavDropdown>
          </Container>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;