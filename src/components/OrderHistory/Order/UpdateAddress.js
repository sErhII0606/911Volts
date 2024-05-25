import { useState } from "react";
import { orderStatus } from "../../../utils/orderStatus";
import { Navigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Image, Spinner } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { updateUserOrder } from "../../../features/user/userSlice";

const UpdateAddress = ({ handleChange, values, address, orderId }) => {
  const { isOrderLoading, updateUserDeliveryAddress } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>Delivery address:</InputGroup.Text>
      <Form.Control
        aria-label="street"
        name="street"
        value={values.street}
        onChange={(e) => handleChange(e)}
      />
      <Form.Control
        aria-label="city"
        name="city"
        value={values.city}
        onChange={(e) => handleChange(e)}
      />
      <Form.Control
        aria-label="state"
        name="state"
        value={values.state}
        onChange={(e) => handleChange(e)}
      />
      <Form.Control
        aria-label="zipCode"
        name="zipCode"
        value={values.zipCode}
        onChange={(e) => handleChange(e)}
      />
      <Button
        variant="primary"
        disabled={isOrderLoading}
        onClick={() => {
          if (
            `${values.street},${values.city},${values.state},${values.zipCode}` ===
            address
          ) {
            return;
          }
          dispatch(
            updateUserOrder({
              order: {
                address: `${values.street},${values.city},${values.state},${values.zipCode}`,
              },
              orderId,
            })
          );
        }}
      >
        Update Address
      </Button>
    </InputGroup>
  );
};

export default UpdateAddress;
