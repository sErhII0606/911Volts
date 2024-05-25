import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { banners } from "../data";
import Wrapper from "../wrappers/About";
import { useSelector, useDispatch } from "react-redux";
import { setIsOrderCreated } from "../features/cart/cartSlice";
const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsOrderCreated(false));
  }, []);
  return (
    <Wrapper>
      <Carousel data-bs-theme="dark">
        {banners.map((banner, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100 img"
                src={banner.img}
                alt="banner"
              />
              {/*   <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Wrapper>
  );
};

export default About;
