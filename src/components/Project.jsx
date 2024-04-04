import React from "react";
import { Card } from "react-bootstrap";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = ({ project }) => {
  return (
    <Card className="project-card">
      <Card.Img
        variant="top"
        src={project.imageUrl}
        className="project-image"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-auto" >{project.title}</Card.Title>
        <Card.Text style={{fontWeight:"lighter",marginTop:"1rem",textAlign:"justify"}}>{project.description}</Card.Text>
        <a
          href={project.deployedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-link stretched-link text-decoration-none mt-auto view-link"
        >
          View Project <FaExternalLinkAlt className="ms-1" />
        </a>
      </Card.Body>
    </Card>
  );
};

export default Project;
