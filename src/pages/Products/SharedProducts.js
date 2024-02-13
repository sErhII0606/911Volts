import React from "react";
import { Outlet } from "react-router-dom";

const SharedProducts = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default SharedProducts;
