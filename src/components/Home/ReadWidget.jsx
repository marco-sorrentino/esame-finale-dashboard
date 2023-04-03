import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./homeWidget.scss";

export const ReadWidget = () => {
  const seeNewsToRead = useSelector((state) => state.dashboard.readLaterNews);

  return (
    <div>
      <Row>
        {seeNewsToRead &&
          seeNewsToRead.map((el, i) => {
            return (
              <Col key={i} xs={12} md={4}>
                {/*                 <div className="d-flex newsWidget  bgAllDiv mt-3">
                  <div>
                    <img className="imgWidget" src={el?.urlToImage} alt="" />
                  </div>
                  <div className="d-flex flex-column justify-content-evenly p-4 p2-5 ps-md-3 pe-md-5">
                    <div className="">
                      <p className="fw-bold ">{el?.title}</p>
                    </div>
                    <div>
                      <p>{el?.description}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="date">{el?.publishedAt.slice(0, -10)}</p>
                      <p className="date ms-2">{el?.author}</p>
                      <Badge
                        onClick={() =>
                          remove({
                            type: REMOVE_READ,
                            payload: el,
                          })
                        }
                        style={{ cursor: "pointer" }}
                        className="ms-2 bg-danger"
                      >
                        Remove
                      </Badge>
                    </div>
                  </div>
                </div> */}
                <div className="bgAllDiv mb-3 d-flex justify-content-between">
                  <div>
                    <img className="imgWidget" src={el?.urlToImage} alt="" />
                  </div>
                  <div className="p-3">
                    <p className="text-truncate fw-bold titleNewsWidget">
                      {el?.title.substring(0, 20) + "..."}
                    </p>
                    <p className=" titleNewsWidget">
                      {el?.description.substring(0, 40) + "..."}
                    </p>
                  </div>
                  <div className="d-flex align-items-center pe-3">
                    <Link to={el?.url}>
                      <Button className="myBluBg  border-0">Go</Button>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
