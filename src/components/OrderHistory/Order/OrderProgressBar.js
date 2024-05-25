import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { orderStatus } from "../../../utils/orderStatus";
const OrderProgressBar = ({ paid, shipped, delivered }) => {
  console.log({ paid, shipped, delivered });
  return (
    <div>
      {" "}
      <ProgressBar>
        <ProgressBar
          striped
          variant="success"
          now={orderStatus(paid, shipped, delivered).progress}
          key={1}
          label={`${orderStatus(paid, shipped, delivered).status}`}
        />
        <ProgressBar
          striped
          variant="warning"
          now={100 - orderStatus(paid, shipped, delivered).progress}
          key={4}
        />
      </ProgressBar>
    </div>
  );
};

export default OrderProgressBar;
