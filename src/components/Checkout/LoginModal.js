import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { loginUser } from "../../features/user/userSlice";

import { useDispatch, useSelector } from "react-redux";
import FormRow from "../FormRow";
const LoginModal = () => {
  const dispatcher = useDispatch();
  const { isLoading } = useSelector((store) => store.user);
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Please Login First</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row ">
          <FormRow
            className="form-control"
            type="email"
            handleChange={(e) => setEmail(e.target.value)}
            name="email"
            labelText="Email"
            value={email}
            placeholder="johnsmith@gmail.com"
          />
          <FormRow
            className="form-control"
            type="password"
            handleChange={(e) => setPassword(e.target.value)}
            name="password"
            labelText="Password"
            value={password}
            placeholder=""
          />
        </div>
        <div>
          <p> Not a member yet, Please signup</p>
          <p>Continue as guest</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => dispatcher(loginUser({ email, password }))}
          disabled={isLoading ? true : false}
        >
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
