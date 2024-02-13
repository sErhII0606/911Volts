import { Outlet } from "react-router-dom";
import NavbarCategories from "../../components/Navbar/NavbarCategories";
const SharedCategories = () => {
  return (
    <>
      <NavbarCategories />
      <Outlet />
    </>
  );
};

export default SharedCategories;
