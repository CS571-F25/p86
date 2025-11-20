import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Scrapbook</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/weekly">Weekly Spread</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
