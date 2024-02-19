import React from "react";
import Logo from "../Logo";
import Nav from "react-bootstrap/Nav";
import { Link, useNavigate } from "react-router-dom";
const BigNavbar = () => {
  const navigate = useNavigate();
  return (
    <Nav className="me-auto">
      <Link className="navbar-brand  logo" to="/">
        <Logo />
      </Link>
      <Nav.Link
        className="navbar-brand nav-link "
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </Nav.Link>
      <Nav.Link
        className="navbar-brand nav-link "
        onClick={() => {
          navigate("/products");
        }}
      >
        Products
      </Nav.Link>
    </Nav>
  );
};

export default BigNavbar;
