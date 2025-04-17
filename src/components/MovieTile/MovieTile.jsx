import React, { useState, useRef, useEffect } from 'react';
import './MovieTile.css';

import fallbackPosterImage from '../../assets/movie-poster.jpg';

const MovieTile = ({ movie, onClick, onEdit, onDelete }) => {

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    if (onClick) {
      onClick(movie);
    }
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setShowMenu(false);
    if (onEdit) {
      onEdit(movie);
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    setShowMenu(false);
    if (onDelete) {
      onDelete(movie);
    }
  };

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = fallbackPosterImage;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="movie-tile" onClick={handleClick}>
      <div className="movie-image-container">
        <img src={movie.poster_path} alt={movie.title}
          className="movie-image" onError={handleImageError} />
        <button className="menu-button" onClick={toggleMenu}>
          ...
        </button>
        {showMenu && (
          <div className="menu" ref={menuRef}>
            <button className="menu-item" onClick={handleEdit}>
              Edit
            </button>
            <button className="menu-item" onClick={handleDelete}>
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="movie-tile-details">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{movie.release_date}</p>
        <div className="movie-genres">
          {movie.genres.map((genre) => (
            <span key={genre} className="movie-genre">
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieTile;