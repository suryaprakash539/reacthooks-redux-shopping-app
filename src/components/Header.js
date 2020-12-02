import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Navbar, Nav } from "react-bootstrap";
const Header = () => {
  const padding = { marginLeft: "2rem", marginRight: "2rem" };

  return (
    <div>
      <Navbar bg="danger" variant="dark" width="100">
        <Navbar.Brand>BADA BAZAR</Navbar.Brand>

        <Nav className="mr-auto">
          <Navbar.Brand style={padding}>Home</Navbar.Brand>
          <Navbar.Brand style={padding}>Shop</Navbar.Brand>
          <Navbar.Brand style={padding}>Journal</Navbar.Brand>
          <Navbar.Brand style={padding}>More</Navbar.Brand>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
