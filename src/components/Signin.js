import { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://imdarasday43task.herokuapp.com/login",
      user
    );
    setMessage(res.data);
    setShow(true);
  };

  const okHandler = () => {
    if (message === "User logged in successfully") {
      setLoggedIn(true);
      setShow(false);
    } else setShow(false);
  };
  return (
    <Container>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>Day 43 task</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={okHandler}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      {loggedIn ? (
        <>
          <h2>Woohoo! You're logged in.</h2>
          <Button
            id="logoutbtn"
            variant="light"
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </Button>
        </>
      ) : (
        <Form onSubmit={submitHandler} id="signin">
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </Form.Group>
          <Button variant="light" type="submit">
            Signin
          </Button>
          <p>
            <Link className="link" to="/forgotpassword">
              Forgot Password?
            </Link>
          </p>
          <p>
            Dont have an account?
            <Link className="link" to="/signup">
              Signup
            </Link>
          </p>
        </Form>
      )}
    </Container>
  );
};

export default Signin;
