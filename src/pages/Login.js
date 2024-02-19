import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  registerUser,
  setIsMember,
} from "../features/user/userSlice";
import Wrapper from "../wrappers/Login";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Register from "../components/LoginAndRegister/Register";
import FormRow from "../components/FormRow";
const initialState = {
  FirstName: "",
  LastName: "",
  Company: "",
  phoneNumber: "",
  email: "",
  password: "",
};
const Login = () => {
  const [values, setValues] = React.useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const { user, isLoading, isMember } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  React.useEffect(() => {
    if (user) {
      navigate("/user");
    }
  }, [user]);
  if (!isMember) {
    return (
      <Wrapper>
        <Register />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="container">
        <form>
          <h3 className="center-text">Login</h3>
          <div className="row ">
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
          </div>
          <div className="btn-container">
            <Button
              variant="primary"
              disabled={isLoading ? true : false}
              onClick={(e) => {
                e.preventDefault();
                dispatcher(
                  loginUser({ email: values.email, password: values.password })
                );
              }}
            >
              Login
            </Button>
          </div>
          <div className="center-text">
            <p>
              Not a member yet?
              <Button
                variant="link"
                onClick={() => dispatcher(setIsMember(false))}
              >
                {" "}
                Signup?
              </Button>
            </p>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
