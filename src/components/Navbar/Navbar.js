import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SlLogin, SlLogout } from "react-icons/sl";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { calculateTotal } from "../../features/cart/cartSlice";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { renderTooltipCart, renderTooltipUser } from "./Tooltips";
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
import UserNavbar from "./UserNavbar";
import Wrapper from "../../wrappers/Navbar";
import SearchForm from "./SearchForm";
const NavbarN = () => {
  const { search } = useSelector((store) => store.search);
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const { cart, total } = useSelector((store) => store.cart);
  const handleSearch = () => {
    if (window.location.href.includes("/categories/")) {
      const arr = window.location.href.split("/");
      navigate(`/categories/${arr[arr.length - 1]}`);
      dispatcher(
        searchByCategory({
          category: arr[arr.length - 1],
          name: search,
        })
      );
      dispatcher(setSearch(""));
    } else {
      navigate("/products");
      dispatcher(getAllProducts(search));
    }
  };
  useEffect(() => {
    dispatcher(calculateTotal());
  }, [cart]);

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
            overlay={renderTooltipCart(cart, total)}
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
            overlay={renderTooltipUser(user)}
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

          <SearchForm
            name="search"
            value={search}
            inputClassName="me-2"
            formClassName="d-flex"
            handleClick={handleSearch}
            handleChange={(e) => {
              dispatcher(setSearch(e.target.value));
            }}
            inputPlaceholder="Search"
            buttonVariant="outline-success"
            buttonPlaceholder="Search"
          />
        </Container>
      </Navbar>

      {user && <UserNavbar user={user} />}
    </Wrapper>
  );
};

export default NavbarN;
