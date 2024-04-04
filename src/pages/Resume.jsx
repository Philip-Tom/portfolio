import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaFileDownload,
} from "react-icons/fa";
import Proficiency from "../components/Proficiency";

const Resume = () => {
  const proficiencyData = [
    { title: "HTML", icon: <FaHtml5 className="proficiency-icon" /> },
    { title: "CSS", icon: <FaCss3Alt className="proficiency-icon" /> },
    { title: "JavaScript", icon: <FaJs className="proficiency-icon" /> },
    { title: "MongoDB", icon: <FaDatabase className="proficiency-icon" /> },
    { title: "SQL", icon: <FaDatabase className="proficiency-icon" /> },
    { title: "React", icon: <FaReact className="proficiency-icon" /> },
    { title: "Express", icon: <FaNodeJs className="proficiency-icon" /> },
    { title: "Git", icon: <FaGitAlt className="proficiency-icon" /> },
  ];

  return (
    <Container className="mt-4 text-center">
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="heading-underline mb-5"
      >
        Resume
      </motion.h3>{" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <Row className="download-resume mb-4">
          <a href="./cv.pdf" download className="btn btn-download">
            <FaFileDownload className="download-icon" /> Download Resume
          </a>
        </Row>
        <Row className="justify-content-center mb-4">
          {proficiencyData.map((proficiency, index) => (
            <Col md={4} key={index} className="mb-4">
              <Proficiency title={proficiency.title} icon={proficiency.icon} />
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default Resume;
