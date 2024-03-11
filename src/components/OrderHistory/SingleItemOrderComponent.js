import React from "react";
import { Card, Image } from "react-bootstrap";
import NameTooltip from "../Checkout/NameTooltip";
import { useNavigate } from "react-router-dom";

const SingleItemOrderComponent = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="single-item">
      <NameTooltip id={item.product.name} title={item.product.name}>
        <Image
          className="single-item-img"
          src={item.product.img[0].imgLink}
          roundedCircle
          onClick={() => navigate(`/products/${item.product.productId}`)}
        ></Image>
      </NameTooltip>

      <Card.Text className="quantity-text">{`x:${item.quantity}`}</Card.Text>
    </div>
  );
};

export default SingleItemOrderComponent;
