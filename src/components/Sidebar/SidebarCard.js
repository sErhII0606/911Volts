import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CustomToggle from "./CustomToggle";

const SidebarCard = ({
  eventKey,
  title,
  category,
  body = "random text or another card here",
}) => {
  return (
    <Card>
      <Card.Header>
        <CustomToggle eventKey={eventKey} category={category ? category : null}>
          {title || "Click me!"}
        </CustomToggle>
      </Card.Header>
      {body && (
        <Accordion.Collapse eventKey={eventKey}>
          <Card.Body>{body}</Card.Body>
        </Accordion.Collapse>
      )}
    </Card>
  );
};

export default SidebarCard;
