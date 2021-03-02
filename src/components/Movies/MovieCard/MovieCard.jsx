import React from "react";
import PropTypes from "prop-types";
import noImg from "assets/images/no-image.jpg";
import "./MovieCard.scss";

const MovieCard = (props) => {
  const {
    data: { title, releaseDate, genres },
  } = props;

  return (
    <li className="movie">
      <img className="movie-poster" src={noImg} alt={title} />
      <div className="movie-info">
        <span className="title">{title}</span>
        <span className="date">{releaseDate}</span>
      </div>
      <div className="movie-genres">{genres.join(" & ")}</div>
    </li>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export { MovieCard };
