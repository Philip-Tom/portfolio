import React from "react";
import { Container, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import avatarImage from "../assets/images/my.webp";

const AboutMe = () => {
  return (
    <Container className="mt-4 text-center about-me">
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="heading-underline"
      >
        About Me
      </motion.h3>{" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Image
          src={avatarImage}
          roundedCircle
          fluid
          style={{ height: "200px",width:"auto" }}
          className="mt-4"
        />
        <p
          className="mt-4"
          style={{ fontWeight: "lighter", textAlign: "justify" }}
        >
          Highly motivated and detail-oriented Full Stack Developer seeking an
          entry-level position to utilize my skills in front-end and back-end
          development, along with my passion for creating innovative and
          user-friendly web applications.
        </p>
      </motion.div>
    </Container>
  );
};

export default AboutMe;
