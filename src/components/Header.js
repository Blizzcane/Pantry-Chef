import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <Navbar className="fixed-top  " bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={require("../images/PantryChefSm.png")}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Pantry Chef
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
          <Nav.Link as={Link} to="/recipes" >Recipes</Nav.Link>
          <Nav.Link as={Link} to="/inventory" >My Inventory</Nav.Link>
        </Nav>
        <Button variant="outline-success">Sign up</Button>
      </Container>
    </Navbar>
  );
};

export default Header;
