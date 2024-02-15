import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderHistory } from "../../features/user/userSlice";
import { Spinner } from "react-bootstrap";
import SingleItemOrderComponent from "../../components/OrderHistory/SingleItemOrderComponent";
import SingleOrder from "../../components/OrderHistory/SingleOrder";
import Wrapper from "../../wrappers/OrderHistory";
const OrderHistory = () => {
  const { user, isOrderHistoryLoading } = useSelector((store) => store.user);
  const { userOrderHistory } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrderHistory(user.userId));
  }, []);
  if (isOrderHistoryLoading) {
    return <Spinner />;
  }
  if (!userOrderHistory[0]) {
    return (
      <Wrapper>
        <h2>No Orders Yet!</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        {user.userOrderHistory.map((order, i) => {
          return <SingleOrder order={order} key={i} />;
        })}
      </div>
    </Wrapper>
  );
};

export default OrderHistory;
