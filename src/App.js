import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CalendarHome } from "./components/CalendarHomepage/CalendarHome";
import { ExpanseTrackerHome } from "./components/ExpanseTracker/ExpanseTrackerHome";
import { NavbarMobile } from "./components/NavbarMobile/NavbarMobile";
import { BusinessNewsList } from "./components/News/BusinessNewsList";
import { NewsHomePage } from "./components/News/NewsHomePage";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { TasksHome } from "./components/Tasks/TasksHome";
import { Topbar } from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col md={3} className="p-0">
              <NavbarMobile />
              <Sidebar />
            </Col>
            <Col md={9}>
              <Topbar />
              <Routes>
                <Route path="/tasks" element={<TasksHome />} />
                <Route
                  path="/expanse-tracker"
                  element={<ExpanseTrackerHome />}
                />
                <Route path="/calendar" element={<CalendarHome />} />
                <Route path="/heading-news" element={<NewsHomePage />} />
                <Route path="/business-news" element={<BusinessNewsList />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
