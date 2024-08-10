import { Card, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { authenticateUser } from "@/lib/authenticate";
import { useRouter } from "next/router";

export default function Home(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await authenticateUser(user, password);
      router.push("/summary");
    } catch (err) {
      setWarning(err.message);
    }
  }

  async function handleRegister() {
    router.push("/register");
  }
  return (
    <>
      <Card bg="light">
        <Card.Body>
          <h2>Login</h2>Enter your login information below:
        </Card.Body>
      </Card>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>User:</Form.Label>
          <Form.Control
            type="text"
            value={user}
            id="userName"
            name="userName"
            onChange={(e) => setUser(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />
        <Button variant="primary" className="pull-right" type="submit">
          Login
        </Button>
        <Button variant="primary" className="px-6" onClick={handleRegister}>
          Register
        </Button>
      </Form>
      {warning && (
        <>
          <br />
          <Alert variant="danger">{warning}</Alert>
        </>
      )}
    </>
  );
}
