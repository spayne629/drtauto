import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import MyOffcanvas from './MyOffcanvas';
import MyNavsNTabs from './MyNavsNTabs';
import MyBrand from './MyBrand';
import MyDropdown from './MyDropdown';
import MyThemeSwitcher from './MyThemeSwitcher';

const MyHeader1 = () => {
  return (
    <>
      <Navbar expand="md">
        <Container className="justify-content-around" fluid>
          <MyOffcanvas />
          <MyThemeSwitcher />
          <MyNavsNTabs />
          <MyDropdown />
          <MyBrand />
        </Container>
      </Navbar>
    </>
  );
};

export default MyHeader1;
