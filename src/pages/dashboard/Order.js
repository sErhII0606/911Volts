import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Image, Spinner } from "react-bootstrap";
import { getUserOrder } from "../../features/user/userSlice";
import Wrapper from "../../wrappers/Order";
import { setIsOrderCreated } from "../../features/cart/cartSlice";

import LoginModal from "../../components/Checkout/LoginModal";
import OrderButtonContainer from "../../components/OrderHistory/OrderButtonContainer";
import OrderTitle from "../../components/OrderHistory/Order/OrderTitle";
import OrderInfo from "../../components/OrderHistory/Order/OrderInfo";
import OrderProgressBar from "../../components/OrderHistory/Order/OrderProgressBar";
const Order = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrder(orderId));

    dispatch(setIsOrderCreated(false));
  }, [orderId]);
  const { order, isOrderLoading, user } = useSelector((store) => store.user);
  console.log(order);
  const [login, setLogin] = useState(false);

  if (isOrderLoading) {
    return <Spinner />;
  }
  if (!order) {
    return <h4>{"Order Not Found:("}</h4>;
  }
  const { date, paid, shipped, delivered, total, address, items, userId } =
    order;
  if (userId !== "guest" && !user) {
    return (
      <div>
        <h4>
          Please{" "}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => setLogin(!login)}
          >
            Login
          </span>{" "}
          to view authorized order
        </h4>
        {login && <LoginModal />}
      </div>
    );
  }
  return (
    <Wrapper>
      <div>
        <OrderTitle date={date} orderId={orderId} />
        <OrderProgressBar paid={paid} shipped={shipped} delivered={delivered} />
        <OrderInfo
          paid={paid}
          shipped={shipped}
          delivered={delivered}
          total={total}
          address={address}
          items={items}
          orderId={orderId}
        />
        {user && <OrderButtonContainer shipped={shipped} />}
      </div>
    </Wrapper>
  );
};

export default Order;
