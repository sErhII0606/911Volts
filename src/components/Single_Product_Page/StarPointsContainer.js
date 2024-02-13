import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { IoMdStarOutline, IoMdStarHalf, IoMdStar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateAverage,
  postStarView,
  setPoint,
  setStarView,
} from "../../features/singleProduct/singleProductSlice";
const StarPointsContainer = ({ product }) => {
  const dispatch = useDispatch();
  const { stars, point, starView, average } = useSelector(
    (state) => state.product
  );
  const { user } = useSelector((state) => state.user);
  const handleMouseEnter = (star) => {
    if (!star) {
      return;
    }
    dispatch(setPoint(star));
  };
  const handleMouseLeave = (average) => {
    if (average === "NaN") {
      dispatch(setPoint(0));
      return;
    }
    dispatch(setPoint(Math.trunc(+average)));
  };
  const handleClick = (point) => {
    if (!point) {
      return;
    }
    if (!user) {
      toast.warn("Please login first");
      return;
    }
    let starViewObj = {
      userId: user.userId,
      stars: point,
    };
    //Guard for a uniq vote
    /* if (
      product.starView &&
      product.starView.find((star) => star.userId === user.email)
    ) {
      toast.warn("You've voted");
      return;
    } */

    dispatch(setStarView(point));
    let starViewArray = product.starView
      ? [starViewObj, ...product.starView]
      : [starViewObj];
    dispatch(
      postStarView({ productId: product.productId, starView: starViewArray })
    );
  };
  useEffect(() => {
    dispatch(setStarView(0));
    if (average === "NaN") {
      dispatch(setPoint(0));
      return;
    }
    dispatch(setPoint(Math.trunc(+average)));
  }, []);
  return (
    <>
      <div className="star-container">
        {stars.map((star, i) => {
          return (
            <IoMdStarOutline
              className={point > star ? "star-hidden" : "star"}
              key={star}
              onMouseEnter={() => handleMouseEnter(star)}
              onMouseLeave={() => handleMouseLeave(average)}
              onClick={() => handleClick(point)}
            />
          );
        })}
      </div>
      <div className="star-container">
        {stars.map((star, i) => {
          if (point < star) {
            return;
          }
          return (
            <IoMdStar
              className="star gold"
              key={i}
              onMouseEnter={() => handleMouseEnter(star)}
              onMouseLeave={() => handleMouseLeave(average)}
              onClick={() => handleClick(star)}
            />
          );
        })}
      </div>
    </>
  );
};

export default StarPointsContainer;
