import { Badge, Col, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { REMOVE_READ } from "../redux/action";
import { FilterMenu } from "./FilterMenu";

export const ReadLaterNews = () => {
  const seeNewsToRead = useSelector((state) => state.dashboard.readLaterNews);
  const remove = useDispatch();

  return (
    <>
      <div className="mt-3">
        <Row className="d-flex">
          <p className="titleTasks">News saved</p>
        </Row>
        <FilterMenu />
      </div>
      <div>
        <Row>
          {seeNewsToRead &&
            seeNewsToRead.map((el, i) => {
              return (
                <Col key={i} xs={12}>
                  <div className="d-flex mobileNews bgAllDiv mt-3">
                    <div>
                      <img id="imgSavedNews" src={el?.urlToImage} alt="" />
                    </div>
                    <div className="d-flex flex-column justify-content-evenly p-4 p2-5 ps-md-3 pe-md-5">
                      <div>
                        <p className="fw-bold">{el?.title}</p>
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
                  </div>
                </Col>
              );
            })}
        </Row>
      </div>
    </>
  );
};
