
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, [category]);

  return (
    <div className="container bg-dark-subtle rounded my-3">
      <h2 className="text-center my-4">
        Latest <span className="badge text-bg-primary">News</span>
      </h2>
      <div className="row">
        {articles.map((news, index) => (
          <div className="col-md-4 mb-4 d-flex align-items-stretch" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

NewsBoard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default NewsBoard;