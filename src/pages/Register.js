import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Notyf } from "notyf";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notyf = new Notyf();
  const navigate = useNavigate();

  function register(e) {
    e.preventDefault();

    fetch("http://localhost:4000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "User registered successfully") {
          console.log(data);
          setUserName("");
          setEmail("");
          setPassword("");
          navigate("/login");
          notyf.success("Registration successful");
        } else {
          notyf.error("Something went wrong. Please check your credentials.");
        }
      });
  }

  return (
    <Container className="auth-container text-center">
      <h2 className="auth-header mainTextColor">Register</h2>
      <Form onSubmit={register} className="auth-form">
        <Form.Group controlId="formUsername" className="mt-3">
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit" className="fw-bolder mt-3">
          Register
        </Button>
      </Form>
      <p className="auth-switch">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </Container>
  );
}
