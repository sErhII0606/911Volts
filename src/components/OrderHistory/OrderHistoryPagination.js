import React from "react";
import { useDispatch } from "react-redux";
import { getUserOrderHistoryPagination } from "../../features/user/userSlice";

const OrderHistoryPagination = ({
  isOrderHistoryLoadingPagination,
  userId,
  firstIndex,
  count,
}) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      disabled={isOrderHistoryLoadingPagination}
      className="order-history-pagination-btn"
      onClick={() =>
        dispatch(getUserOrderHistoryPagination({ userId, firstIndex }))
      }
    >
      Show More
    </button>
  );
};

export default OrderHistoryPagination;
