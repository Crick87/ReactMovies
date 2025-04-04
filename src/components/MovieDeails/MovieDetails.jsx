import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <p>No movie selected</p>;
  }

  const { imageUrl, title, year, genres, rating, duration, description } = movie;

  return (
    <div className="movie-details container">
      <div className="row">
        <div className="col-md-4">
          <img src={imageUrl} alt={title} className="img-fluid movie-poster" />
        </div>
        <div className="col-md-8">
          <h2>{title}</h2>
          <p className='primary-color'>
            {year} | {genres.join(', ')} | {duration}
          </p>
          <div className="rating">
            <strong>Rating:</strong> {rating}
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;