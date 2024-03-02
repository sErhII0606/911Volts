import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  ImSad,
  ImSad2,
  ImHappy,
  ImHappy2,
  ImNeutral,
  ImNeutral2,
  ImSmile,
  ImSmile2,
} from "react-icons/im";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postReview } from "../../features/singleProduct/singleProductSlice";
import { toast } from "react-toastify";
function ReviewForm({ product }) {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const reviewInitial = {
    reviewDate: new Date().toDateString(),
    reviewId: Date.now(),
    reviewUserExperience: "",
    reviewEmail: user?.email,
    reviewName: user?.userName || "",
    reviewCompany: user?.company || "",
    reviewReview: "",
    author: user,
  };
  const [review, setReview] = useState(reviewInitial);
  const [happy, setHappy] = useState(false);
  const [neutral, setNeutral] = useState(false);
  const [angry, setAngry] = useState(false);

  const [happyVariant, setHappyVariant] = useState("outline-success");
  const [neutralVariant, setNeutralVariant] = useState("outline-warning");
  const [angryVariant, setAngryVariant] = useState("outline-danger");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReview({ ...review, [name]: value });
  };
  const handleSubmit = (e) => {
    if (
      !review.reviewEmail ||
      !review.reviewName ||
      !review.reviewReview ||
      !review.reviewUserExperience
    ) {
      toast.warn("Please fill all requested fields");
      return;
    }
    let reviewsArray = product.reviews
      ? [review, ...product.reviews]
      : [review];
    setReview(reviewInitial);
    dispatch(
      postReview({ productId: product.productId, reviews: reviewsArray })
    );
    e.target.form.reset();
    setHappyVariant("outline-success");
    setNeutralVariant("outline-warning");
    setAngryVariant("outline-danger");
  };
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="1">
            <Form.Label>Email address *</Form.Label>
            <Form.Control
              name="reviewEmail"
              type="email"
              onChange={handleChange}
              value={review?.reviewEmail}
              placeholder="name@example.com"
            />
          </Form.Group>{" "}
        </Col>
        <Col>
          <Form.Label>Your experience *</Form.Label>
          <div className="customer-experience-btn-container">
            <Button
              className="customer-experience-btn"
              variant={happyVariant}
              onMouseEnter={() => setHappy(true)}
              onMouseLeave={() => setHappy(false)}
              onClick={() => {
                setHappyVariant("success");
                setReview({ ...review, reviewUserExperience: "success" });
                setNeutralVariant("outline-warning");
                setAngryVariant("outline-danger");
              }}
            >
              {happy ? <ImSmile /> : <ImSmile2 />}
              {/*<ImHappy /> : <ImHappy2 /> */}
            </Button>

            <Button
              variant={neutralVariant}
              className="customer-experience-btn "
              onMouseEnter={() => setNeutral(true)}
              onMouseLeave={() => setNeutral(false)}
              onClick={() => {
                setHappyVariant("outline-success");
                setNeutralVariant("warning");
                setReview({ ...review, reviewUserExperience: "warning" });
                setAngryVariant("outline-danger");
              }}
            >
              {neutral ? <ImNeutral /> : <ImNeutral2 />}
            </Button>
            <Button
              variant={angryVariant}
              className="customer-experience-btn "
              onMouseEnter={() => setAngry(true)}
              onMouseLeave={() => setAngry(false)}
              onClick={() => {
                setHappyVariant("outline-success");
                setNeutralVariant("outline-warning");
                setAngryVariant("danger");
                setReview({ ...review, reviewUserExperience: "danger" });
              }}
            >
              {angry ? <ImSad /> : <ImSad2 />}
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="2">
            <Form.Label>Your Name *</Form.Label>
            <Form.Control
              name="reviewName"
              type="text"
              onChange={handleChange}
              value={review?.reviewName}
              placeholder="First name Last name"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="3">
            <Form.Label>Company</Form.Label>
            <Form.Control
              name="reviewCompany"
              type="text"
              onChange={handleChange}
              value={review?.reviewCompany}
              placeholder="Company Name"
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="4">
        <Form.Label>Your Review: *</Form.Label>
        <Form.Control
          as="textarea"
          name="reviewReview"
          onChange={handleChange}
          placeholder="Great service!!! Best price in town!!! Highly recommended!!!"
          rows={3}
        />
      </Form.Group>
      <Button
        type="button"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Submit Review
      </Button>
    </Form>
  );
}

export default ReviewForm;
