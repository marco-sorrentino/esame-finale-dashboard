import "./navbarmobile.scss";
import { Container, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/LOGO.svg";
import { Link } from "react-router-dom";

export const NavbarMobile = () => {
  return (
    <Container fluid>
      <Navbar collapseOnSelect expand="lg" className="d-lg-none bgAllDiv mt-2">
        <Container>
          <Navbar.Brand className="logoText" href="#home">
            <img src={logo} alt="" className="me-2" />
            DashBoard
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"}>Home</Link>
              <Link to={"/calendar"}>Calendar</Link>
              <Link to={"/tasks"}>Tasks</Link>
              <Link to={"/expanse-tracker"}>Expense Tracker</Link>
              <Link to={"/finance"}>Finance</Link>
              <Link to={"/heading-news"}>News</Link>
              <Link to={"/weather"}>Weather</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};
