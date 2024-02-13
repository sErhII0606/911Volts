import React from "react";
import { toggleSidebarTest } from "../../features/sidebar/sidebarSlice";
import { useSelector, useDispatch } from "react-redux";
import SidebarHeader from "./SidebarHeader";
import SidebarBody from "./SidebarBody";

const SidebarTest = () => {
  const { isSidebarTestOpen } = useSelector((store) => store.sidebar);
  const dispatcher = useDispatch();
  return (
    <div
      id="mySidebar"
      className={isSidebarTestOpen ? "sidebar-on" : "sidebar"}
    >
      <SidebarHeader />
      <SidebarBody />
    </div>
  );
};

export default SidebarTest;
