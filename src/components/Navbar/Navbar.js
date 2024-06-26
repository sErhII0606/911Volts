import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  resetNumberOfPages,
} from "../../features/AllProducts/allProductsSlice";
import { setSearchProduct } from "../../features/search/searchSlice";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { gettingUser, logout } from "../../features/user/userSlice";
import {
  handleShow,
  toggleSidebarTest,
} from "../../features/sidebar/sidebarSlice";
import UserNavbar from "./UserNavbar";
import Wrapper from "../../wrappers/Navbar";
import SearchForm from "./SearchForm";
import BigNavbar from "./BigNavbar";
import useDeviceSize from "../../utils/useDeviceSize";
import { limit } from "../../data";
const NavbarN = () => {
  const { searchProduct } = useSelector((store) => store.search);
  const { user, isLoading } = useSelector((store) => store.user);
  const { isProductsLoading } = useSelector((store) => store.allProducts);
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
          name: searchProduct,
        })
      );
      dispatcher(setSearchProduct(""));
    } else {
      navigate("/products");
      dispatcher(getAllProducts(searchProduct));

      // dispatcher(setSearchProduct(""));
    }
  };
  useEffect(() => {
    dispatcher(calculateTotal());
  }, [cart]);

  return (
    <Wrapper>
      <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
        <Container>
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
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltipUser(user)}
                >
                  <div className="login">
                    {user ? (
                      <SlLogout
                        className="icon user-icon"
                        disabled
                        onClick={() => {
                          dispatcher(
                            logout({ AccessToken: user.AccessToken, isLoading })
                          );
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
              </div>{" "}
              <div className="search">
                <SearchForm
                  name="search"
                  value={searchProduct}
                  inputClassName="me-2"
                  formClassName="d-flex"
                  handleClick={handleSearch}
                  handleChange={(e) => {
                    dispatcher(setSearchProduct(e.target.value));
                  }}
                  inputPlaceholder="Search"
                  buttonVariant="outline-success"
                  buttonPlaceholder="Search"
                  buttonDisabled={isProductsLoading}
                />
              </div>
            </>
          )}{" "}
        </Container>
      </Navbar>

      {user && <UserNavbar user={user} isLoading={isLoading} />}
    </Wrapper>
  );
};

export default NavbarN;
