import React from "react";
import Wrapper from "../../wrappers/FooterContactInfo";
import { CiLocationOn } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { PiFacebookLogoBold } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import Logo from "../Logo";

const FooterContactInfo = () => {
  return (
    <Wrapper>
      <section className="container">
        <div>
          <Logo />
        </div>

        <div className="fw-bold text-secondary line">
          <h2>SL</h2>
        </div>

        <div className="line">
          <CiLocationOn className="icon" />
          <a href="https://www.google.com/maps">my address, city, state, zip</a>
        </div>
        <div className="line">
          <FaRegEnvelope className="icon" />
          <span>sales@serhiilysko.com</span>
        </div>
        <div className="line">
          <FiPhone className="icon" />
          <span>(123)-456-7890</span>
        </div>
        <div className="link-container line">
          <a href="https://www.facebook.com">
            <PiFacebookLogoBold className="icon-link" />
          </a>
          <a href="https://www.instagram.com">
            <IoLogoInstagram className="icon-link" />
          </a>
        </div>
      </section>
    </Wrapper>
  );
};

export default FooterContactInfo;
