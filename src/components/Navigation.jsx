// Navigation.js
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Nav>
      <Nav.Link as={Link} to="/">
        About Me
      </Nav.Link>
      <Nav.Link as={Link} to="/portfolio">
        Portfolio
      </Nav.Link>
      <Nav.Link as={Link} to="/contact">
        Contact
      </Nav.Link>
      <Nav.Link as={Link} to="/resume">
        Resume
      </Nav.Link>
    </Nav>
  );
};

export default Navigation;
