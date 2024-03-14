import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Image, Spinner } from "react-bootstrap";
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
        <h4>
          Order from <span className="order-info">{order.date}</span>
        </h4>
        <h5>
          Order status:
          <span className="order-info">
            {" "}
            ${orderStatus(order.paid, order.shipped, order.delivered)}.
          </span>{" "}
          Total:<span className="order-info"> ${Math.trunc(order.total)}.</span>
        </h5>
        <h5>
          Delivery address: <span className="order-info">{order.address}.</span>
        </h5>
        <div className="items-container">
          <h4>Items:</h4>
          {order.items.map((item, i) => {
            return (
              <div className="item" key={i}>
                <h5>
                  {i + 1}.
                  <span className="order-info">{item.product.name}</span>
                </h5>
                <Image
                  rounded
                  className="product-img"
                  src={item.product.img[0].imgLink}
                />
              </div>
            );
          })}
        </div>

        <div className="btn-container">
          {!order.shipped && (
            <Button variant="primary">Add more items to the order</Button>
          )}
          <Button variant="danger">Cancel the order</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Order;
