import React from 'react';
import '../Movie/Movie.css';
import '../Movie/Mobile.css';

const Movie = ({ image, title, rating, year, imdbid }) => {
  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className="movie-card">
      <img src={image} alt={image} />
      <div className="movie-card-info">
        <div className="movie-card-title-rating-year">
          <span className="movie-card-title">{title}</span>
          <span className="movie-card-rating">Rating: {rating}</span>
          <span className="movie-card-year">{year} Year</span>
        </div>
        <button
          className="movie-card-button"
          onClick={() => openInNewTab(`https://www.imdb.com/title/${imdbid}`)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Movie;
