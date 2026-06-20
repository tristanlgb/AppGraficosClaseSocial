import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarApp() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React Vite App</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-menu" />

        <Navbar.Collapse id="navbar-menu">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;