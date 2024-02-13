import React from "react";

const SingleItemOrderComponent = ({ item }) => {
  return (
    <>
      <p>{`${item.product.name} quantity:${item.quantity}`}</p>
    </>
  );
};

export default SingleItemOrderComponent;
