import { Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HeadingNewsList } from "./HeadingNewsList";
import "./news.scss";

export const NewsHomePage = () => {
  return (
    <>
      <div className="mt-3">
        <Row className="d-flex">
          <p className="titleTasks">Headlines news</p>
        </Row>
      </div>

      <div>
        <HeadingNewsList />
      </div>
    </>
  );
};
