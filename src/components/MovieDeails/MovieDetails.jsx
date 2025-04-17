import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './MovieDetails.css';

import fallbackPosterImage from '../../assets/movie-poster.jpg';

const MovieDetails = () => {
  const { movie, onCloseDetails, isLoadingDetails, errorDetails } = useOutletContext();

  if (isLoadingDetails) {
    return <div className="movie-details text-container"><p>Loading details...</p></div>;
  }

  if (errorDetails) {
    return (
      <div className="movie-details text-container">
        <p className="movies-error-message">{errorDetails}</p>
        <button className='btn secondary btn-close' onClick={onCloseDetails}>
          Back
        </button>
      </div>
    );
  }

  if (!movie) {
    return <div className="container"><p>No movie selected</p></div>;
  }

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = fallbackPosterImage;
  };

  const { poster_path, title, release_date, genres, vote_average, runtime, overview } = movie;

  return (
    <div className="movie-details container">
      <div className="d-flex justify-content-end">
        { onCloseDetails && (
          <button type="button" className="btn secondary btn-close" onClick={onCloseDetails}>
            Back
          </button>
        )}
      </div>
      <div className="row">
        <div className="col-md-4">
          <img src={poster_path} alt={title}
            className="img-fluid movie-poster" onError={handleImageError} />
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