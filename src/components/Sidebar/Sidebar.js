import React from "react";
import Wrapper from "../../wrappers/Sidebar";

import {
  getAllProducts,
  searchByCategory,
} from "../../features/AllProducts/allProductsSlice";
import { setSearch } from "../../features/search/searchSlice";
import { categories } from "../../data";
import { useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { handleClose } from "../../features/sidebar/sidebarSlice";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
import SearchForm from "../Navbar/SearchForm";
import useDeviceSize from "../../utils/useDeviceSize";
const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.sidebar);
  const { search } = useSelector((store) => store.search);
  const navigate = useNavigate();
  const dispatcher = useDispatch();
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
  return (
    <Wrapper>
      <Offcanvas
        show={isSidebarOpen}
        onHide={() => {
          dispatcher(handleClose());
        }}
        scroll={true}
        backdrop={true}
        backdropClassName="Enable both scrolling & backdrop"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
            <SidebarHeader />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {width <= 995 && (
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
          )}
          <SidebarBody />
        </Offcanvas.Body>
      </Offcanvas>
    </Wrapper>
  );
};

export default Sidebar;
