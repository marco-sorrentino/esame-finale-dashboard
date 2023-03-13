import "./navbarmobile.scss";
import { Container, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/LOGO.svg";

export const NavbarMobile = () => {
  return (
    <Container fluid>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="d-lg-none"
      >
        <Container>
          <Navbar.Brand className="logoText" href="#home">
            <img src={logo} alt="" className="me-2" />
            DashBoard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Calendar</Nav.Link>
              <Nav.Link href="#pricing">Tasks</Nav.Link>
              <Nav.Link href="#pricing">Expanse Tracker</Nav.Link>
              <Nav.Link href="#pricing">Finance</Nav.Link>
              <Nav.Link href="#pricing">News</Nav.Link>
              <Nav.Link href="#pricing">Weather</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};
