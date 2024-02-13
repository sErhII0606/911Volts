import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Wrapper from "../wrappers/SharedLayout";
import SidebarTest from "../components/Sidebar/SidebarTest";
import Sidebar from "../components/Sidebar/Sidebar";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SidebarTest />
        <Sidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />{" "}
          </div>
          <Footer />{" "}
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
