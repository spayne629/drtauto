import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTheme } from '../context/ThemeContext';
import '../custom.scss';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar collapseOnSelect expand="md" className={`bg-body-tertiary w-100 ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <Container fluid>
        <Navbar.Brand href="#home">
          <div className="heartbeat-icon justify-content-center me-1">
            <span className="ak-heartbeat-btn justify-content-center"><img className="logo" src="/src/assets/images/logo2.png" alt="Dr. T logo"/></span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-1">
            <NavDropdown id="collapsible-nav-dropdown" title={theme === 'dark' ? (
                    <i className="bi bi-sun fs-5 me-1"></i>
                  ) : (
                    <i className="bi bi-moon-stars fs-5 me-1"></i>
                  )}>
                <Dropdown.Item onClick={() => toggleTheme('light')}>
                  <i className="bi bi-sun me-2 text-primary body-bg-color fs-5"></i>
                  Light Mode
                </Dropdown.Item>
                <br />
                <Dropdown.Item onClick={() => toggleTheme('dark')}>
                  <i className="bi bi-moon-stars me-2 text-primary body-bg-color fs-5"></i>
                  Dark Mode
                </Dropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-center">
          <Nav>
            <Nav.Item>
              <Nav.Link href="#" className="h4 fw-medium fs-4">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#services" className="h4 fw-medium fs-4">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="About" className="h4 fw-medium fs-4">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact" className="h4 fw-medium fs-4">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end align-items-center">
          <Nav className="py-2 phone-contact">
            <span className="phone-span me-2">
            <i className="bi bi-telephone me-2 ps-2 text-secondary"></i>
            </span>
            <a href="tel:803-486-9063" className="phone-number fs-5 me-3 h6 text-secondary pt-1">803.486.9063</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;