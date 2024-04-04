import React from "react";
import { Card } from "react-bootstrap";

const Proficiency = ({title,icon}) => {
  return (
    <Card className="proficiency-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {icon}
      </Card.Body>
    </Card>
  );
};

export default Proficiency;
