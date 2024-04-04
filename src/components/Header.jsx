// Header.js
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="navbar-bg" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand
          style={{ fontWeight: "bold"}}
          as={Link}
          to="/"
          className="py-2"
        >
          {"Philip Tombe".toUpperCase()}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Navigation />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
