import { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Resetpassword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({ newPassword: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `https://imdarasday43task.herokuapp.com/reset?id=${id}`,
      user
    );
    setMessage(res.data);
    setShow(true);
  };

  const okHandler = () => {
    if (message === "Password reset successful") {
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
      <Form onSubmit={submitHandler} id="resetpassword">
        <Form.Group className="mb-3">
          <Form.Label>New password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            onChange={(e) => setUser({ ...user, newPassword: e.target.value })}
            required
          />
        </Form.Group>
        <Button type="submit" variant="light">
          Reset Password
        </Button>
      </Form>
    </Container>
  );
};

export default Resetpassword;
