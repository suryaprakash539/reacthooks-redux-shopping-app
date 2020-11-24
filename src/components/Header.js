import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../media/logo.png";
import { Navbar, Nav } from "react-bootstrap";
const Header = () => {
  const padding = { marginLeft: "2rem", marginRight: "2rem" };

  return (
    <div>
      <Navbar bg="danger" variant="dark">
        <Container fluid>
          <Row>
            <Col>
              <Navbar.Brand>BADA BAZAR</Navbar.Brand>
            </Col>
            <Col xs={6}>
              <Nav className="mr-auto">
                <Nav.Link style={padding} href="/">
                  Home
                </Nav.Link>
                <Navbar.Brand style={padding}>Shop</Navbar.Brand>
                <Navbar.Brand style={padding}>Journal</Navbar.Brand>
                <Navbar.Brand style={padding}>More</Navbar.Brand>
              </Nav>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
