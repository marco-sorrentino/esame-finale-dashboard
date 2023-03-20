import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTechnologyAction } from "../redux/action";
import { FilterMenu } from "./FilterMenu";
import { SingleNews } from "./SingleNews";

export const TechnologyNewsList = () => {
  const dispatch = useDispatch();
  const seeTecnology = useSelector((state) => state.dashboard.technologyNews);

  useEffect(() => {
    dispatch(getTechnologyAction());
  }, []);

  console.log(seeTecnology);

  return (
    <>
      <div className="mt-3">
        <Row className="d-flex">
          <p className="titleTasks">Technology news</p>
        </Row>
      </div>
      <FilterMenu />
      <div>
        <Row>
          {seeTecnology &&
            seeTecnology.map((el, i) => {
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
