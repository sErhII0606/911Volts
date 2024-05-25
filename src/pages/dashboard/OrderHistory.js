import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderHistory } from "../../features/user/userSlice";
import { Spinner } from "react-bootstrap";
import SingleItemOrderComponent from "../../components/OrderHistory/SingleItemOrderComponent";
import SingleOrder from "../../components/OrderHistory/SingleOrder";
import Wrapper from "../../wrappers/OrderHistory";
import { setIsOrderCreated } from "../../features/cart/cartSlice";
import OrderHistoryPagination from "../../components/OrderHistory/OrderHistoryPagination";
const OrderHistory = () => {
  const {
    user,
    isOrderHistoryLoading,
    numOfOrdersShown,
    isOrderHistoryLoadingPagination,
    count,
  } = useSelector((store) => store.user);
  const { userOrderHistory } = user;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getUserOrderHistory({
        userId: user.userId,
      }) //, createdAt: "1710123768649"
    );

    dispatch(setIsOrderCreated(false));
  }, []);
  if (isOrderHistoryLoading) {
    return <Spinner />;
  }
  if (count === 0) {
    return (
      <Wrapper>
        <h2>No Orders Yet!</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        {userOrderHistory.map((order, i) => {
          return <SingleOrder order={order} key={i} />;
        })}
      </div>
      <div>
        {isOrderHistoryLoadingPagination ? (
          <Spinner />
        ) : (
          <OrderHistoryPagination
            isOrderHistoryLoadingPagination={isOrderHistoryLoadingPagination}
            userId={user.userId}
            firstIndex={numOfOrdersShown}
            count={count}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default OrderHistory;
