import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CalendarHome } from "./components/CalendarHomepage/CalendarHome";
import { ExpanseTrackerHome } from "./components/ExpanseTracker/ExpanseTrackerHome";
import { NavbarMobile } from "./components/NavbarMobile/NavbarMobile";
import { BusinessNewsList } from "./components/News/BusinessNewsList";
import { NewsHomePage } from "./components/News/NewsHomePage";
import { ReadLaterNews } from "./components/News/ReadLaterNews";
import { SportNewsList } from "./components/News/SportNewsList";
import { TechnologyNewsList } from "./components/News/TechnologyNewsList";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { TasksHome } from "./components/Tasks/TasksHome";
import { Topbar } from "./components/Topbar/Topbar";
import { WeatherHome } from "./components/Weather/WeatherHome";

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
                <Route
                  path="/technology-news"
                  element={<TechnologyNewsList />}
                />
                <Route path="/sport-news" element={<SportNewsList />} />
                <Route path="/read-later-news" element={<ReadLaterNews />} />
                <Route path="/weather" element={<WeatherHome />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
