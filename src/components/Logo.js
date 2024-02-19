import React from "react";
import Wrapper from "../wrappers/Logo";
import logo from "../logo/logo.png";

const Logo = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" className="logo" />
    </Wrapper>
  );
};

export default Logo;
