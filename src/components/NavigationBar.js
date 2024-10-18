import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className="fw-bolder" href="/">
          <span className="mainTextColor">Opinions</span>
          <span className="subTextColor">Book</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <NavLink
                className="fw-bolder nav-link-custom"
                activeClassName="active"
                to="/"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="fw-bolder nav-link-custom"
                activeClassName="active"
                to="/login"
              >
                Login
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="fw-bolder nav-link-custom"
                activeClassName="active"
                to="/register"
              >
                Register
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
