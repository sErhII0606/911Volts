import { useState } from "react";
import { orderStatus } from "../../../utils/orderStatus";
import { Navigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Image, Spinner } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import UpdateAddress from "./UpdateAddress";
const OrderInfo = ({
  paid,
  shipped,
  delivered,
  total,
  address,
  items,
  orderId,
}) => {
  const [street, city, state, zipCode] = address.split(",");
  const { isOrderLoading, updateUserDeliveryAddress } = useSelector(
    (store) => store.user
  );
  // console.log(street, state, city, zipCode);
  const initState = {
    street,
    city,
    state,
    zipCode,
  };
  const [values, setValues] = useState(initState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  return (
    <div>
      {" "}
      <h5>
        Order status:
        <span className="order-info">
          {" "}
          {orderStatus(paid, shipped, delivered).status}.
        </span>{" "}
        Total:<span className="order-info"> ${Math.trunc(total)}.</span>
      </h5>
      <h5>
        Delivery address: <span className="order-info">{address}.</span>
      </h5>
      {updateUserDeliveryAddress && (
        <UpdateAddress
          orderId={orderId}
          handleChange={handleChange}
          values={values}
          address={address}
        />
      )}
      <div className="items-container">
        <h4>Items:</h4>
        {items.map((item, i) => {
          return (
            <div className="item" key={i}>
              <h5>
                {i + 1}.<span className="order-info">{item.product.name}</span>
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
    </div>
  );
};

export default OrderInfo;
