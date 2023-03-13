import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { NavbarMobile } from "./components/NavbarMobile/NavbarMobile";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Topbar } from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container className="p-0 m-0">
          <Row>
            <Col md={3} className="p-0">
              <NavbarMobile />
              <Sidebar />
            </Col>
            <Col>
              <Topbar />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
