import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle login logic here
  //     console.log(formData);
  //   };

  return (
    <Container className="auth-container text-center">
      <h2 className="auth-header mainTextColor">Login</h2>
      <Form
        //   onSubmit={handleSubmit}
        className="auth-form"
      >
        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            // value={formData.password}
            // onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit" className="fw-bolder mt-3">
          Login
        </Button>
      </Form>
      <p className="auth-switch">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </Container>
  );
}
