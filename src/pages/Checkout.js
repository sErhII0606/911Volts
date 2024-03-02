import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Wrapper from "../wrappers/Checkout";
import { createOrder } from "../features/cart/cartSlice";

import { priceStringToNumber } from "../utils/priceTransformer";
import FormRow from "../components/FormRow";
import { updateAmount } from "../features/singleProduct/singleProductSlice";
import { toast } from "react-toastify";
import LoginModal from "../components/Checkout/LoginModal";
import CartComponent from "../components/Checkout/CartComponent";
const Checkout = () => {
  const dispatcher = useDispatch();
  const { cart, total } = useSelector((store) => store.cart);
  const { user, isOrderLoading } = useSelector((store) => store.user);
  const initialInfo = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };
  const [values, setValues] = useState(initialInfo);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  if (cart.length === 0) {
    return (
      <>
        <h1>No items to checkout</h1>
        <Link className="btn btn-outline-secondary" to="/products">
          products
        </Link>
      </>
    );
  }
  if (!user) {
    return <LoginModal />;
  }
  return (
    <Wrapper>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form>
              <div className="container-row">
                <div className="div-col-50">
                  <h3>Billing Address</h3>
                  <FormRow
                    type="text"
                    name="name"
                    labelText="Full Name"
                    value={values.name}
                    handleChange={handleChange}
                    placeholder="John M. Doe"
                  />
                  <FormRow
                    type="text"
                    name="email"
                    labelText="Email"
                    value={values.email}
                    handleChange={handleChange}
                    placeholder="john@example.com"
                  />
                  <FormRow
                    type="text"
                    name="phoneNumber"
                    labelText="Phone Number"
                    value={values.phoneNumber}
                    handleChange={handleChange}
                    placeholder="+12345678900"
                  />
                  <FormRow
                    type="text"
                    name="address"
                    labelText="Address"
                    value={values.address}
                    handleChange={handleChange}
                    placeholder="542 W. 15th Street"
                  />
                  <FormRow
                    type="text"
                    name="city"
                    labelText="City"
                    value={values.city}
                    handleChange={handleChange}
                    placeholder="New York"
                  />

                  <div className="row">
                    <div className="col-50">
                      <FormRow
                        type="text"
                        name="state"
                        labelText="State"
                        value={values.state}
                        handleChange={handleChange}
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50">
                      <FormRow
                        type="text"
                        name="zip"
                        value={values.zip}
                        handleChange={handleChange}
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>

                <div className="div-col-50">
                  <h3>Payment</h3>
                  <p>
                    Currently receive payments by phone only! Our sales manager
                    will contact you shortly
                  </p>
                  {/* 
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa"></i>
                    <i className="fa fa-cc-amex"></i>
                    <i className="fa fa-cc-mastercard"></i>
                    <i className="fa fa-cc-discover"></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  ></input>
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  ></input>
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  ></input>
                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                      ></input>
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      ></input>
                    </div>
                  </div>*/}
                </div>
              </div>
              {/* <label>
                <input type="checkbox" checked="checked" name="sameadr" />{" "}
                Shipping address same as billing
              </label> */}
              <button
                className="btn"
                disabled={isOrderLoading ? true : false}
                onClick={(e) => {
                  e.preventDefault();
                  if (
                    !values.name ||
                    !values.email ||
                    !values.phoneNumber ||
                    !values.address ||
                    !values.city ||
                    !values.state ||
                    !values.zip
                  ) {
                    toast.warn("Please fill out all fields");
                    return;
                  }
                  dispatcher(
                    createOrder({
                      id: Date.now().toString(),
                      date: new Date().toDateString(),
                      userId: user.userId,
                      items: cart,

                      address:
                        values.address +
                        "," +
                        values.city +
                        "," +
                        values.state +
                        "," +
                        values.zip,
                      total: total,
                    })
                  );
                  cart.map((cartItem) => {
                    dispatcher(
                      updateAmount({
                        productId: cartItem.product.productId,
                        amount: cartItem.product.amount - cartItem.quantity,
                      })
                    );
                  });
                }}
              >
                Place the order
              </button>
            </form>
          </div>
        </div>
        <div className="col-25 ">
          <CartComponent />
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;
