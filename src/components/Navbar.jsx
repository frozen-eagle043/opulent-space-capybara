import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3">
      <Container fluid>
        <Navbar.Brand href="#" className="me-auto fw-bold">
          CVIP 2023
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#" className="px-2">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="px-2">
            Submission
          </Nav.Link>
          {/* Updated Challenges Link to include sub-links */}
          <NavDropdown
            title="Challenges"
            id="navbarScrollingDropdown"
            className="px-2"
          >
            <NavDropdown.Item href="#action3">A Challenge</NavDropdown.Item>
            <NavDropdown.Item href="#action4">B Challenge</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" className="px-2">
            Committee
          </Nav.Link>
          <Nav.Link href="#" className="px-2">
            Programme
          </Nav.Link>
          <Nav.Link href="#" className="px-2">
            Registration
          </Nav.Link>
          <Nav.Link href="#" className="px-2">
            Accommodation
          </Nav.Link>
          <Nav.Link href="#" className="px-2">
            Award
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
