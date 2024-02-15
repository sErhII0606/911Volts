import React from "react";
import { Card } from "react-bootstrap";

const SingleItemOrderComponent = ({ item }) => {
  return (
    <>
      <Card.Text>{`${item.product.name} quantity:${item.quantity}`}</Card.Text>
    </>
  );
};

export default SingleItemOrderComponent;
