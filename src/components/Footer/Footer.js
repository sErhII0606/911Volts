import React from "react";
import Wrapper from "../../wrappers/Footer";
import FooterContactInfo from "./FooterContactInfo";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <div className="row">
          <FooterContactInfo />
          <FooterInfo />
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
