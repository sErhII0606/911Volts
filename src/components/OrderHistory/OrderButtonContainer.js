import React from "react";
import { useDispatch } from "react-redux";
import { Button, Image, Spinner } from "react-bootstrap";
import { toggleUpdateDelAddr } from "../../features/user/userSlice";
const OrderButtonContainer = ({ shipped }) => {
  const dispatch = useDispatch();
  return (
    <div className="btn-container">
      {/*  <Button
        variant="primary"
        // disabled={!shipped}
        onClick={!shipped ? () => console.log("dd") : () => console.log("ss")}
      >
        Add more items to the order
      </Button> */}
      <Button
        variant="primary"
        // disabled={!shipped}
        onClick={
          !shipped
            ? () => dispatch(toggleUpdateDelAddr())
            : () => console.log("ss")
        }
      >
        Update Delivery Address
      </Button>

      <Button variant="danger">Cancel the order</Button>
    </div>
  );
};

export default OrderButtonContainer;
