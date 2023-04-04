import { Row } from "react-bootstrap";
import { SingleNews } from "./SingleNews";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getHeadingNewsAction } from "../redux/action";
import { FilterMenu } from "./FilterMenu";
import headingNews from "./headingNews.json";

export const HeadingNewsList = (props) => {
  console.log(headingNews);

  return (
    <>
      <FilterMenu />
      <div className="prova">
        <Row>
          {headingNews.articles.map((el, i) => {
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
