import { Button, Row } from "react-bootstrap";
import { SingleNews } from "./SingleNews";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getHeadingNewsAction } from "../redux/action";
import { FilterMenu } from "./FilterMenu";

export const HeadingNewsList = (props) => {
  const dispatch = useDispatch();
  const seeHeadingNews = useSelector((state) => state.dashboard.headingNews);
  console.log(seeHeadingNews);

  useEffect(() => {
    dispatch(getHeadingNewsAction());
  }, []);

  return (
    <>
      <FilterMenu />
      <div className="prova">
        <Row>
          {seeHeadingNews &&
            seeHeadingNews.map((el, i) => {
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
