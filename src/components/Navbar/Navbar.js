import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SlLogin, SlLogout } from "react-icons/sl";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { calculateTotal } from "../../features/cart/cartSlice";
import { MdShoppingCartCheckout } from "react-icons/md";
import gettingToken from "../../utils/gettingToken";
import { useSelector, useDispatch } from "react-redux";

import {
  getAllProducts,
  searchByCategory,
} from "../../features/AllProducts/allProductsSlice";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { gettingUser, logout } from "../../features/user/userSlice";
import { setSearch } from "../../features/search/searchSlice";
import {
  handleShow,
  toggleSidebarTest,
} from "../../features/sidebar/sidebarSlice";
import styled from "styled-components";
import { jwtDecode } from "jwt-decode";
import { Image } from "react-bootstrap";
import UserNavbar from "./UserNavbar";
const Wrapper = styled.section`
  .openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: #111;
    color: white;
    padding: 10px 15px;
    border: none;
  }

  .openbtn:hover {
    background-color: #444;
  }
  .cart-container {
    padding: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .login {
    padding: 10px;
    display: flex;
    align-items: center;
  }
  .user-icon:hover {
    color: blue;
  }
  .icon {
    width: 27px;
    height: 30px;
  }
  .cart-container:hover {
    color: blue;
  }
`;
const NavbarN = () => {
  const { search } = useSelector((store) => store.search);
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const { cart, total } = useSelector((store) => store.cart);
  const renderTooltipUser = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user ? "logout" : "login"}
    </Tooltip>
  );
  useEffect(() => {
    dispatcher(calculateTotal());
  }, [cart]);
  const renderTooltipCart = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <Card>
        <ListGroup variant="flush">
          {cart[0] ? (
            <>
              {cart.map((cartItem, i) => {
                return (
                  <ListGroup.Item key={i}>
                    <Image
                      src={cartItem.product.img[0].imgLink}
                      style={{ width: "25px" }}
                      rounded
                    />
                    {cartItem.product.name.substring(0, 15)}
                    {" qua: "}
                    {cartItem.quantity}
                  </ListGroup.Item>
                );
              })}

              <ListGroup.Item>{`Total: $${Math.trunc(total)}`}</ListGroup.Item>
            </>
          ) : (
            "Your cart is empty!"
          )}
        </ListGroup>
      </Card>
    </Tooltip>
  );
  return (
    <Wrapper>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Button
            variant="primary"
            onClick={() => {
              dispatcher(handleShow());
            }}
          >
            Launch
          </Button>
          <div>
            <button
              className="openbtn"
              onClick={() => {
                dispatcher(toggleSidebarTest());
              }}
            >
              &#9776; Open SidebarTest
            </button>
          </div>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">
              <span>911 Volts</span>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link>
              <span
                className="navbar-brand nav-link "
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navbar-brand nav-link "
                onClick={() => {
                  navigate("/products");
                }}
              >
                products
              </span>
            </Nav.Link>
          </Nav>

          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltipCart}
          >
            <div
              className="cart-container"
              onClick={() => {
                navigate("/cart");
              }}
            >
              <MdShoppingCartCheckout className="icon cart-icon" />
              <span>{`$${Math.trunc(total)}`}</span>
            </div>
          </OverlayTrigger>

          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltipUser}
          >
            {user ? (
              <span className="login">
                <SlLogout
                  className="icon user-icon"
                  onClick={() => {
                    dispatcher(logout("bye"));
                  }}
                />
              </span>
            ) : (
              <a
                className="login"
                onClick={() => {
                  navigate("/login");
                }}
                //    href="https://911volts.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=79v7pq5fkdfa21sukhsknh4asj&redirect_uri=http://localhost:3000"
              >
                <SlLogin className="icon user-icon" />
              </a>
            )}
          </OverlayTrigger>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                dispatcher(setSearch(e.target.value));
              }}
            />
            <Button
              variant="outline-success"
              onClick={() => {
                if (window.location.href.includes("/categories/")) {
                  const arr = window.location.href.split("/");
                  navigate(`/categories/${arr[arr.length - 1]}`);
                  dispatcher(
                    searchByCategory({
                      category: arr[arr.length - 1],
                      name: search,
                    })
                  );
                } else {
                  navigate("/products");
                  dispatcher(getAllProducts(search));
                }
              }}
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>

      {user && <UserNavbar user={user} />}
    </Wrapper>
  );
};

export default NavbarN;
