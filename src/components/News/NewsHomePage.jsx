import { Row } from "react-bootstrap";
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
      <div className="boh">
        <HeadingNewsList />
      </div>
    </>
  );
};
