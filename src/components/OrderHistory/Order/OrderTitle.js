import React from "react";

const OrderTitle = ({ date, orderId }) => {
  return (
    <h4>
      Order from{" "}
      <span className="order-info">
        {date} ,#{orderId}
      </span>
    </h4>
  );
};

export default OrderTitle;
