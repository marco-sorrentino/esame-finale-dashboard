import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSportAction } from "../redux/action";
import { FilterMenu } from "./FilterMenu";
import { SingleNews } from "./SingleNews";

export const SportNewsList = () => {
  const dispatch = useDispatch();
  const seeSport = useSelector((state) => state.dashboard.sportNews);
  useEffect(() => {
    dispatch(getSportAction());
  }, []);

  return (
    <>
      <div className="mt-3">
        <Row className="d-flex">
          <p className="titleTasks">Sport news</p>
        </Row>
      </div>
      <FilterMenu />
      <div>
        <Row>
          {seeSport &&
            seeSport.map((el, i) => {
              return (
                <SingleNews
                  key={i}
                  img={el.urlToImage}
                  author={el.author}
                  title={el.title}
                  description={el.description}
                  url={el.url}
                  content={el.content}
                  publishedAt={el.publishedAt}
                  obj={el}
                />
              );
            })}
        </Row>
      </div>
    </>
  );
};
