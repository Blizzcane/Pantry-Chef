import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const loggedinNavs = (
    <>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/dashboard">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/recipes">
          Recipes
        </Nav.Link>
        <Nav.Link as={Link} to="/inventory">
          My Inventory
        </Nav.Link>
      </Nav>
      <LogoutButton />
    </>
  );

  return (
    <Navbar className="fixed-top  " bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/dashboard">
            <img
              alt="logo"
              src={require("../images/PantryChefSm.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Link>
          Pantry Chef
        </Navbar.Brand>
        {isAuthenticated ? loggedinNavs : <LoginButton />}
      </Container>
    </Navbar>
  );
};

export default Header;
