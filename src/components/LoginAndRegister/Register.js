import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../features/user/userSlice";
import FormRow from "../FormRow";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const initialState = {
  FirstName: "",
  LastName: "",
  Company: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const initialAddress = {
  street: "",
  city: "",
  state: "",
  zipCode: "",
};
const Register = ({ setMember }) => {
  const [values, setValues] = React.useState(initialState);
  const [address, setAddress] = React.useState(initialAddress);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleChangeAddress = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddress({ ...address, [name]: value });
  };
  console.log(values);
  const { isLoading } = useSelector((store) => store.user);
  const dispatcher = useDispatch();
  return (
    <div className="container">
      <form>
        <h3 className="center-text">Signup</h3>
        <div className="row">
          <div className="col-50">
            <FormRow
              className="form-control"
              type="email"
              handleChange={handleChange}
              name="email"
              labelText="Email"
              value={values.email}
              placeholder="johnsmith@gmail.com"
            />
            <FormRow
              className="form-control"
              type="password"
              handleChange={handleChange}
              name="password"
              labelText="Password"
              value={values.password}
              placeholder=""
            />
            <FormRow
              className="form-control"
              type="password"
              handleChange={handleChange}
              name="confirmPassword"
              labelText="Confirm Password"
              value={values.confirmPassword}
              placeholder=""
            />

            <FormRow
              className="form-control"
              type="text"
              handleChange={handleChange}
              name="FirstName"
              labelText="First Name"
              value={values.FirstName}
              placeholder="John"
            />
            <FormRow
              name="LastName"
              type="text"
              labelText="Last Name"
              handleChange={handleChange}
              value={values.LastName}
              placeholder="Smith"
              className="form-control"
            />
            <FormRow
              className="form-control"
              type="text"
              handleChange={handleChange}
              name="Company"
              value={values.Company}
              placeholder="Chi Tracking inc."
            />
            <FormRow
              className="form-control"
              type="text"
              handleChange={handleChange}
              name="phoneNumber"
              labelText="Phone Number"
              value={values.phoneNumber}
              placeholder="+13121234567"
            />
          </div>
          <div className="col-50">
            <FormRow
              className="form-control"
              type="text"
              handleChange={handleChangeAddress}
              name="street"
              labelText="Address"
              value={address.street}
              placeholder="478 e River rd"
            />
            <FormRow
              className="form-control"
              type="text"
              handleChange={handleChangeAddress}
              name="city"
              labelText="City"
              value={address.city}
              placeholder="Elk Groove Village"
            />
            <FormRow
              className="form-control"
              type="text"
              handleChange={handleChangeAddress}
              name="state"
              labelText="State"
              value={address.state}
              placeholder="IL"
            />
            <FormRow
              className="form-control"
              type="text"
              handleChange={handleChangeAddress}
              name="zipCode"
              labelText="Zip Code"
              value={address.zipCode}
              placeholder="60007"
            />
          </div>
        </div>
        <div className="btn-container">
          <Button
            variant="primary"
            disabled={isLoading ? true : false}
            onClick={(e) => {
              e.preventDefault();
              if (values.password !== values.confirmPassword) {
                toast.error("Please confirm your password");
                return;
              }
              values.address = `${address.street},${address.city},${address.state},${address.zipCode}`;
              dispatcher(registerUser(values));
              setMember(true);
              setAddress(initialAddress);
              setValues(initialState);
            }}
          >
            Signup
          </Button>
        </div>

        <div className="center-text">
          <p>
            Already a member?
            <Button variant="link" onClick={() => setMember(true)}>
              {" "}
              login?
            </Button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
