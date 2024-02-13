import React from "react";
import Wrapper from "../../wrappers/Sidebar";

import { categories } from "../../data";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { handleClose } from "../../features/sidebar/sidebarSlice";
import SidebarCard from "./SidebarCard";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";
const Sidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.sidebar);

  const dispatcher = useDispatch();
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
          <SidebarBody />
        </Offcanvas.Body>
      </Offcanvas>
    </Wrapper>
  );
};

export default Sidebar;
