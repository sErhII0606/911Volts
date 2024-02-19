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
import BigNavbar from "./BigNavbar";
import useDeviceSize from "../../utils/useDeviceSize";
const NavbarN = () => {
  const { search } = useSelector((store) => store.search);
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const { cart, total } = useSelector((store) => store.cart);
  const [width, height] = useDeviceSize();
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
      <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
        <div className="sidebar-btn">
          <Button
            variant="primary"
            onClick={() => {
              dispatcher(handleShow());
            }}
          >
            &#9776;
          </Button>
        </div>
        <Container>
          {/* 
          <div>
            <button
              className="openbtn"
              onClick={() => {
                dispatcher(toggleSidebarTest());
              }}
            >
              &#9776; Open SidebarTest
            </button>
          </div> */}
          {width >= 995 && (
            <>
              <div className="navbar-links">
                {" "}
                <BigNavbar />{" "}
              </div>

              <div className="icons">
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
                  <div className="login">
                    {user ? (
                      <SlLogout
                        className="icon user-icon"
                        onClick={() => {
                          dispatcher(logout("bye"));
                        }}
                      />
                    ) : (
                      <SlLogin
                        className="icon user-icon"
                        onClick={() => {
                          navigate("/login");
                        }}
                      />
                    )}
                  </div>
                </OverlayTrigger>
              </div>
            </>
          )}{" "}
          <div className="search">
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
          </div>
        </Container>
      </Navbar>

      {user && <UserNavbar user={user} />}
    </Wrapper>
  );
};

export default NavbarN;
