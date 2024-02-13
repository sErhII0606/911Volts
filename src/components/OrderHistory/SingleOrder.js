import React from "react";
import SingleItemOrderComponent from "./SingleItemOrderComponent";

const SingleOrder = ({ order }) => {
  console.log(order);
  return (
    <div>
      <span>---</span>
      {order.items.map((item, index) => {
        return <SingleItemOrderComponent item={item} key={index} />;
      })}
    </div>
  );
};

export default SingleOrder;
