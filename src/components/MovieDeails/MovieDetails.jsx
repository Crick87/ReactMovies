import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <div className="container"><p>No movie selected</p></div>;
  }

  const { poster_path, title, release_date, genres, vote_average, runtime, overview } = movie;

  return (
    <div className="movie-details container">
      <div className="row">
        <div className="col-md-4">
          <img src={poster_path} alt={title} className="img-fluid movie-poster" />
        </div>
        <div className="col-md-8">
          <h2>{title}</h2>
          <p className='primary-color'>
            {release_date} | {genres.join(', ')} | {runtime}
          </p>
          <div className="rating">
            <strong>Rating:</strong> {vote_average}
          </div>
          <p className="description">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;