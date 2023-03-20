import { Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const FilterMenu = () => {
  const goBusiness = useNavigate();
  const goTecnology = useNavigate();
  const goSport = useNavigate();
  return (
    <div>
      <Row className="mt-2">
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
        </div>
      </Row>
    </div>
  );
};
