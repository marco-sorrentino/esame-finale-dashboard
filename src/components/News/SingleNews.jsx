import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./news.scss";

export const SingleNews = (props) => {
  return (
    <Col xs={12} md={3} lg={4} className="mt-3">
      <div className="bgAllDiv newsCard">
        <img
          id="imgNews"
          src={
            props.img === null
              ? "https://upload.wikimedia.org/wikipedia/commons/e/ea/BBC_World_News_2022_%28Boxed%29.svg"
              : props.img
          }
          alt=""
        />
        <div className="d-flex flex-column justify-content-between">
          <div className="pt-3 px-2">
            <p className="text-truncate fw-bold">{props.title}</p>
            <p className="">
              {props.description === null ? (
                <p>Lorem ipsum dolor sit amet consectetur</p>
              ) : (
                props.description.substring(0, 60) + " ..."
              )}
            </p>
          </div>
          <div className="px-2 pt-2 py-3 d-flex align-items-center justify-content-between">
            <Button className="ctaBudget">
              <Link className="linktonews" to={props.url}>
                Read More
              </Link>
            </Button>
            <p className="date">{props.publishedAt.slice(0, -10)}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};
