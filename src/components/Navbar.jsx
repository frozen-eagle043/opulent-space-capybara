import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavbarComponent.css";
import logo from "../assets/images/home_page/inspect_logo.png";

//
const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="ml-2 logo">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          INSPECT 2024
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" id="navbar-nav">
            <Nav.Link href="/" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link href="/submission" className="nav-item">
              Submission
            </Nav.Link>
            <Nav.Link href="/dates" className="nav-item">
              Important Dates
            </Nav.Link>
            <Nav.Link href="/call-for-paper" className="nav-item">
              Call For Papers
            </Nav.Link>
            <Nav.Link href="/committee" className="nav-item">
              Committee
            </Nav.Link>
            {/* <NavDropdown
              title="Committee"
              id="committee-dropdown"
              className="nav-item"
            >
              <NavDropdown.Item href="/speaker1">
                Organizing Committee
              </NavDropdown.Item>
              <NavDropdown.Item href="/speaker2">
                Advisory Committee
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/registration" className="nav-item">
              Registration
            </Nav.Link>
            <Nav.Link href="/student-grant" className="nav-item">
              Student Grant
            </Nav.Link>

            <Nav.Link href="/award" className="nav-item">
              Awards
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
