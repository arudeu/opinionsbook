import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Container className="error-page-container text-center">
      <h1 className="error-code mainTextColor">404</h1>
      <h2 className="error-message subTextColor">Page Not Found</h2>
      <p className="error-description">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/">
        <Button variant="outline-dark" className="fw-bolder">
          Go Home
        </Button>
      </Link>
    </Container>
  );
}
