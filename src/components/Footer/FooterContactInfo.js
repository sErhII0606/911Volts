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
          <h2>911 Volts</h2>
        </div>

        <div className="line">
          <CiLocationOn className="icon" />
          <a href="https://www.google.com/maps/place/911+Volts/@42.0054609,-87.9389541,17z/data=!3m1!4b1!4m6!3m5!1s0x880fb131612df8b3:0x4c7bfb414972b17!8m2!3d42.0054569!4d-87.9363792!16s%2Fg%2F11cjjsj6md?entry=ttu">
            2901 Old Higgins Rd, Elk Grove Village, IL 60007
          </a>
        </div>
        <div className="line">
          <FaRegEnvelope className="icon" />
          <span>sales@911volts.com</span>
        </div>
        <div className="line">
          <FiPhone className="icon" />
          <span>(847)-877-7200</span>
        </div>
        <div className="link-container line">
          <a href="https://www.facebook.com/911Volts/">
            <PiFacebookLogoBold className="icon-link" />
          </a>
          <a href="https://www.instagram.com/911_volts/">
            <IoLogoInstagram className="icon-link" />
          </a>
        </div>
      </section>
    </Wrapper>
  );
};

export default FooterContactInfo;
