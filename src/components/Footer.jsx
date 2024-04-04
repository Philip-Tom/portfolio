import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-1">
      <Container>
        <Row className="align-items-baseline mb-1">
          {" "}
          <Col className="d-flex justify-content-start align-items-center">
            <p className="mb-0" style={{fontWeight:"lighter", fontSize:'0.8rem'}}>Philip Tom © 2024</p>{" "}
          </Col>
          <Col className="d-flex justify-content-end align-items-center">
            <a
              href="https://github.com/yourgithubusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3 social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yourlinkedinprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light social-icon"
            >
              <FaLinkedin />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
