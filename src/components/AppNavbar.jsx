import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

export default function AppNavbar() {
  return (
    <Navbar expand="sm" className="scrapbook-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="scrapbook-brand">
          Scrapbook
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/weekly">Weekly Spread</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}