import React from "react";
import Wrapper from "../../wrappers/FooterInfo";
import { Link } from "react-router-dom";

const FooterInfo = () => {
  return (
    <Wrapper>
      <div className="link-container">
        <h3>Information</h3>
        <p>
          <Link to="/ShippingPolicy">Shipping Policy</Link>
        </p>{" "}
        <p>
          <Link to="/RefundPolicy">Refund Policy</Link>
        </p>
        <p>
          <Link to="/contactUs">Contact us</Link>
        </p>
        <p>
          <Link to="/about">About us</Link>
        </p>
      </div>
    </Wrapper>
  );
};

export default FooterInfo;
