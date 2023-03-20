import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getBusinessNewsAction } from "../redux/action";
import { FilterMenu } from "./FilterMenu";
import { SingleNews } from "./SingleNews";

export const BusinessNewsList = () => {
  const dispatch = useDispatch();
  const seeBusiness = useSelector((state) => state.dashboard.businessNews);

  console.log(seeBusiness);

  useEffect(() => {
    dispatch(getBusinessNewsAction());
  }, []);

  return (
    <>
      <div className="mt-3">
        <Row className="d-flex">
          <p className="titleTasks">Business news</p>
        </Row>
      </div>
      <FilterMenu />
      <div>
        <Row>
          {seeBusiness &&
            seeBusiness.map((el, i) => {
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
                />
              );
            })}
        </Row>
      </div>
    </>
  );
};
