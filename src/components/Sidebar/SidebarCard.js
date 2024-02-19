import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CustomToggle from "./CustomToggle";

const SidebarCard = ({
  eventKey,
  title,
  category,
  login,
  cart,
  body,
  handleClick,
}) => {
  return (
    <Card>
      <Card.Header>
        <CustomToggle
          eventKey={eventKey}
          category={category}
          login={login}
          cart={cart}
        >
          <span onClick={handleClick}>{title}</span>
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
