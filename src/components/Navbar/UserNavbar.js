import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";

const Wrapper = styled.section`
  .user-navbar {
    background-color: bisque;
    margin-top: 10px;
  }
`;

const UserNavbar = ({ user, isLoading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Nav variant="tabs" defaultActiveKey="/" className="user-navbar">
        <NavDropdown
          title={`hi, ${user.FirstName} ${user.LastName[0]}.`}
          id="collapsible-nav-dropdown"
        >
          <NavDropdown.Item
            onClick={() => {
              navigate("user/order_history");
            }}
          >
            Order History
          </NavDropdown.Item>
          <NavDropdown.Item>Contact us</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            onClick={() =>
              dispatch(logout({ AccessToken: user.AccessToken, isLoading }))
            }
          >
            logout
          </NavDropdown.Item>
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
