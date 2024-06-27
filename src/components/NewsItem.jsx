
import PropTypes from "prop-types";
import image from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-4" style={{ height: "100%" }}>
      <img src={src ? src : image} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News Description"}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">Read More</a>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default NewsItem;

