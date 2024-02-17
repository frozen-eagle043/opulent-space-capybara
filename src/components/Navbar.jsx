import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarComponent.css"; // Assuming your custom CSS is here

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="custom-navbar">
      <Navbar.Brand href="#home" className="mx-auto">
        <span className="logo-text">INSPECT</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="nav-item-custom">
            Home
          </Nav.Link>
          <Nav.Link href="#call-for-papers" className="nav-item-custom">
            Call for papers
          </Nav.Link>
          <NavDropdown
            title="Guidelines"
            id="guideline-dropdown"
            className="nav-item-custom"
          >
            <NavDropdown.Item href="#author-guidelines">
              Author guidelines
            </NavDropdown.Item>
            <NavDropdown.Item href="#camera-ready-submission">
              Camera ready submission
            </NavDropdown.Item>
            <NavDropdown.Item href="#presentation-guidelines">
              Presentation guidelines
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#important-details" className="nav-item-custom">
            Important details
          </Nav.Link>
          <Nav.Link href="#regulations" className="nav-item-custom">
            Regulations
          </Nav.Link>
          <Nav.Link href="#awards" className="nav-item-custom">
            Awards
          </Nav.Link>
          <NavDropdown
            title="Committee"
            id="committee-dropdown"
            className="nav-item-custom"
          >
            <NavDropdown.Item href="#administrator-committee">
              Administrator committee
            </NavDropdown.Item>
            <NavDropdown.Item href="#organizing-committee">
              Organizing Committee
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
