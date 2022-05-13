import { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://imdarasday43task.herokuapp.com/signup",
      user
    );
    setMessage(res.data);
    setShow(true);
  };

  const okHandler = () => {
    if (message === "User signed up successfully") {
      setShow(false);
      navigate("/");
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
      <Form onSubmit={submitHandler} id="signup">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
        </Form.Group>
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
          Signup
        </Button>
        <p>
          Already have an account?
          <Link className="link" to="/">
            Signin
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Signup;
