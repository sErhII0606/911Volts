import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavDropdown from "react-bootstrap/NavDropdown";

const Wrapper = styled.section`
  .user-navbar {
    background-color: bisque;
    margin-top: 10px;
  }
`;

const UserNavbar = ({ user }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Nav variant="tabs" defaultActiveKey="/" className="user-navbar">
        <NavDropdown
          title={`hi, ${user.userName}`}
          id="collapsible-nav-dropdown"
        >
          <NavDropdown.Item
            onClick={() => {
              navigate("user/order_history");
            }}
          >
            Order History
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              navigate("/user");
            }}
          >
            dashboard
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Wrapper>
  );
};

export default UserNavbar;
