import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Project from "../components/Project";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project6 from "../assets/images/project-6.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Just Another Text Editor (JATE)",
      description:
        "Just Another Text Editor (JATE) is a sleek and minimalist web application that allows you to create and save notes or code snippets effortlessly",
      imageUrl: project1,
      deployedUrl: "https://just-another-text-editor-jate-1.onrender.com/",
    },
    {
      id: 2,
      title: "Tale Spin",
      description:
        "Tale Spin is a collaborative web application, serving as a fan-fiction forum, that allows users to sign up and sign in to the platform",
      imageUrl: project2,
      deployedUrl: "https://tale-spin-7c174798f8bd.herokuapp.com/",
    },
    {
      id: 3,
      title: "Tech Blog",
      description:
        "Tech Blog is a CMS-style blog site where developers can publish articles, blog posts, and engage with other developers' content by commenting on posts.",
      imageUrl: project3,
      deployedUrl: "https://tech-bog-2324057bbada.herokuapp.com/",
    },
    {
      id: 4,
      title: "Professional README Generator",
      description:
        "The Professional README Generator simplifies this process by providing a command-line application that uses the Inquirer package to dynamically generate a professional README.md file based on user input",
      imageUrl: "https://github.com/Philip-Tom/9-NodeJS/raw/main/assets/preview.png",
      deployedUrl: "https://github.com/Philip-Tom/9-NodeJS",
    },
    {
      id: 5,
      title: "Employee Tracker Application",
      description:
        "This command-line application allows business owners to efficiently manage their company's employee database.",
      imageUrl: project4,
      deployedUrl: "https://github.com/Philip-Tom/Challenge-12",
    },
    {
      id: 6,
      title: "Social Network API",
      description:
        "This API application is designed to power your social networking platform with lightning-fast performance and unmatched flexibility.",
      imageUrl: project6,
      deployedUrl: "https://github.com/Philip-Tom/Social-Media-API",
    },
  ];
  return (
    <Container className="mt-4 portfolio">
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="heading-underline  text-center"
      >
        Portfolio
      </motion.h3>{" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <Row className="justify-content-center my-3">
          {projects.map((project, index) => (
            <Col md={6} lg={4} xs={12} className="my-3" key={index}>
              <Project project={project} />
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default Portfolio;
