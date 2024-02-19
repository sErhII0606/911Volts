import React from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useNavigate } from "react-router-dom";
const CustomToggle = ({ children, eventKey, category, login, cart }) => {
  const decoratedOnClick = useAccordionButton(eventKey);
  const navigate = useNavigate();
  return (
    <button
      type="button"
      style={{ backgroundColor: "white" }}
      onClick={() => {
        decoratedOnClick();
        if (category) navigate(`/categories/${category}`);
        if (login) navigate(`/login`);
        if (cart) navigate(`/cart`);
      }}
    >
      {children}
    </button>
  );
};

export default CustomToggle;
