import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Image, Spinner } from "react-bootstrap";
import Wrapper from "../../wrappers/Order";

const Order = () => {
  const { order, isOrderLoading } = useSelector((store) => store.user);
  console.log(order);
  const orderStatus = (paid, shipped, delivered) => {
    if (!paid && !shipped) {
      return "Awaiting payment";
    }
    if (paid && !shipped) {
      return "Awaiting shipment";
    }
    if (shipped && !delivered) {
      return "Shipped";
    }
    if (delivered) {
      return "Delivered";
    }
  };
  if (isOrderLoading) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      <div>
        <h4>Order from {order.date}</h4>
        <h5>{`Order status: ${orderStatus(
          order.paid,
          order.shipped,
          order.delivered
        )}. Total: $${Math.trunc(order.total)}.`}</h5>
        <h5>{`Delivery  address: ${order.address}.`}</h5>
        <div className="items-container">
          <h4>Items:</h4>
          {order.items.map((item, i) => {
            return (
              <div className="item" key={i}>
                <h5>{`${i + 1}.${item.product.name}`}</h5>
                <Image
                  rounded
                  className="product-img"
                  src={item.product.img[0].imgLink}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Order;
