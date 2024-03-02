import React from "react";
import SingleItemOrderComponent from "./SingleItemOrderComponent";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleOrder = ({ order }) => {
  const orderStatus = (paid, shipped) => {
    if (!paid && !shipped) {
      return "awaiting payment";
    }
    if (paid && !shipped) {
      return "awaiting shipment";
    }
    if (shipped) {
      return "shipped";
    }
  };
  return (
    <div>
      <Card name={order.orderId}>
        <Card.Header>{`Ordered: ${order.date}`}</Card.Header>
        <Card.Body>
          <Card.Title>{`Order status: ${orderStatus(
            order.paid,
            order.shipped
          )}. Total: $${Math.trunc(order.total)}. Shipped to: ${
            order.address
          }.`}</Card.Title>
          <div className="single-order-container">
            {" "}
            {order.items.map((item, index) => {
              return <SingleItemOrderComponent item={item} key={index} />;
            })}{" "}
          </div>
          {!order.paid && (
            <Button
              variant="primary"
              onClick={(e) => {
                console.log(
                  e.target.offsetParent,
                  e.target.offsetParent.attributes.name.nodeValue
                );
              }}
            >
              Add more items to the order
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleOrder;
