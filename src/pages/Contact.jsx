import React from "react";
import ContactForm from "../components/ContactForm";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Container className="mt-4">
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="heading-underline  text-center"
      >
        Contact
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="mb-5"
      >
        <ContactForm />
      </motion.div>
    </Container>
  );
};

export default Contact;
