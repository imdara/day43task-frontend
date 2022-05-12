import { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";
import axios from "axios";

const Forgotpassword = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({ email: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://imdarasday43task.herokuapp.com/forgotpassword",
      user
    );
    setMessage(res.data);
    setShow(true);
  };

  const okHandler = () => {
    if (message === "Mail sent successfully") {
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
      <Form onSubmit={submitHandler} id="forgotpassword">
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </Form.Group>
        <Button type="submit" variant="light">
          Send reset link
        </Button>
      </Form>
    </Container>
  );
};

export default Forgotpassword;
