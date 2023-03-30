import { Badge, Button, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const FilterMenu = () => {
  const goBusiness = useNavigate();
  const goTecnology = useNavigate();
  const goSport = useNavigate();
  const readLater = useNavigate();
  const seeRead = useSelector((state) => state.dashboard.readLaterNews);

  return (
    <div>
      <Row className="mt-2 d-flex">
        <div>
          <Button
            onClick={() => {
              goBusiness("/business-news");
            }}
            className="ctaBudget filter"
          >
            Business
          </Button>

          <Button
            onClick={() => {
              goTecnology("/technology-news");
            }}
            className="ctaBudget filter ms-3"
          >
            Technology
          </Button>
          <Button
            onClick={() => {
              goSport("/sport-news");
            }}
            className="ctaBudget filter ms-3"
          >
            Sports
          </Button>
          <Button
            onClick={() => {
              readLater("/read-later-news");
            }}
            className="ctaBudget filter ms-3"
          >
            Read later{" "}
            <Badge className="myYellowBg text-dark ">{seeRead.length}</Badge>
          </Button>
        </div>
      </Row>
    </div>
  );
};
