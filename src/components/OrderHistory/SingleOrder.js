import React from "react";
import SingleItemOrderComponent from "./SingleItemOrderComponent";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { getUserOrder } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const SingleOrder = ({ order }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderStatus = (paid, shipped, delivered) => {
    if (!paid && !shipped) {
      return "awaiting payment";
    }
    if (paid && !shipped) {
      return "awaiting shipment";
    }
    if (shipped && !delivered) {
      return "shipped";
    }
    if (delivered) {
      return "delivered";
    }
  };
  return (
    <div>
      <Card name={order.orderId}>
        <Card.Header>{`Ordered: ${order.date}`}</Card.Header>
        <Card.Body>
          <Card.Title>{`Order status: ${orderStatus(
            order.paid,
            order.shipped,
            order.delivered
          )}. Total: $${Math.trunc(order.total)}.`}</Card.Title>
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
                  e.target.offsetParent.attributes,
                  e.target.offsetParent.attributes.name.value
                );

                dispatch(
                  getUserOrder(e.target.offsetParent.attributes.name.value)
                );
                navigate("/user/order");
              }}
            >
              View Details
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleOrder;
