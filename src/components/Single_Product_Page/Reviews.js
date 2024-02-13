import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ImHappy, ImConfused, ImCrying } from "react-icons/im";
const Reviews = ({ product, isReviewLoading }) => {
  const [viewMore, setViewMore] = useState(false);
  if (!product.reviews) {
    return <h4>No Reviews yet. Please be The First...</h4>;
  }
  if (isReviewLoading) {
    return <Spinner />;
  }
  return (
    <div className="reviews-container">
      {product.reviews.map((review, i) => {
        let stars = "";
        switch (review.reviewUserExperience) {
          case "success":
            stars = (
              <>
                We're happy to hear that <ImHappy />
              </>
            );
            break;
          case "warning":
            stars = (
              <>
                We're sorry to hear that <ImConfused />
              </>
            );
            break;
          case "danger":
            stars = (
              <>
                We're sad to hear that <ImCrying />
              </>
            );
            break;
        }
        return (
          <Card border={review.reviewUserExperience} key={i}>
            <Card.Header>{stars}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {viewMore
                    ? review.reviewReview
                    : review.reviewReview.substring(0, 100)}
                  {review.reviewReview.length > 100 && (
                    <Button
                      variant="link"
                      onClick={() => {
                        setViewMore(!viewMore);
                      }}
                    >
                      {viewMore ? " view less..." : "view more..."}
                    </Button>
                  )}
                </p>
                <footer className="blockquote-footer">
                  Posted by: <cite>{review.reviewName}</cite> at:{" "}
                  <cite>{review.reviewDate}</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Reviews;
