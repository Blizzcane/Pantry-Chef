import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Pantry Chef
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Recipes</Nav.Link>
          <Nav.Link href="#pricing">Inventory</Nav.Link>
        </Nav>
        <Button variant="outline-success">Sign up</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
