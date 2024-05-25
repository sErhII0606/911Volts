import React from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/user/userSlice";
const CustomToggle = ({
  children,
  eventKey,
  category,
  categories,
  login,
  isUser,
  cart,
  home,
  products,
  order,
}) => {
  const decoratedOnClick = useAccordionButton(eventKey);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);
  return (
    <button
      type="button"
      style={{ backgroundColor: "white" }}
      onClick={() => {
        decoratedOnClick();
        if (category) navigate(`/categories/${category}`);
        if (login) navigate(`/login`);
        if (categories) navigate(`/categories`);
        if (isUser)
          dispatch(logout({ AccessToken: user.AccessToken, isLoading }));
        if (cart) navigate(`/cart`);
        if (home) navigate(`/`);
        if (products) navigate(`/products`);
        //  if (order) navigate(`/guest_order`);
      }}
    >
      {children}
    </button>
  );
};

export default CustomToggle;
