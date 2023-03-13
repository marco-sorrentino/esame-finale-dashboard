import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Container className="p-0 m-0">
        <Row>
          <Col md={3} className="p-0">
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
