import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';

const DrTNavsNTabs = () => {
  return (
    <>
      <Nav className="justify-content-end">
        <NavItem>
          <NavLink className="link-opacity-25-hover" href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="link-opacity-25-hover" href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="link-opacity-25-hover" href="#">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="link-opacity-25-hover" href="#">Contact</NavLink>
        </NavItem>
      </Nav>
    </>
  );
};

export default DrTNavsNTabs;