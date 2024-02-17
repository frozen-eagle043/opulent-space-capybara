import React, { useState } from "react";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar
      style={{
        // background: "rgb(229,0,66)",
        // background:
        //   "linear-gradient(90deg, rgba(229,0,66,1) 0%, rgba(114,155,228,1) 100%, rgba(236,50,50,0.6475840336134453) 100%)",
        background: "rgb(229,0,66)",
        background:
          "linear-gradient(90deg, rgba(229,0,66,1) 0%, rgba(245,111,201,1) 0%, rgba(114,155,228,1) 100%, rgba(236,50,50,0.6475840336134453) 100%)",
      }}
      bg="light"
      expand="lg"
      className="py-3"
    >
      <Container fluid>
        <Navbar.Brand href="#" className="me-auto fw-bold">
          INSPECT 2024
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/" className="px-2">
            Home
          </Nav.Link>
          <Nav.Link href="/submission" className="px-2">
            Submission
          </Nav.Link>
          <Nav.Link href="/dates" className="px-2">
            Important Details
          </Nav.Link>
          <Nav.Link href="/call-for-paper" className="px-2">
            Call For Paper
          </Nav.Link>
          {/* Updated Committee Link to include sub-links */}
          <NavDropdown
            title="Committee"
            id="navbarScrollingDropdown"
            className="px-2"
          >
            <NavDropdown.Item href="/speaker1">
              Organizing Committee
            </NavDropdown.Item>
            <NavDropdown.Item href="/speaker2">
              Advisory Committee
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/registration" className="px-2">
            Registration
          </Nav.Link>

          <Nav.Link href="/award" className="px-2">
            Award
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
