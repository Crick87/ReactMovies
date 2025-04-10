import React from 'react';
import './GenreSelect.css';

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {

  return (
    <div className="genre-select-container">
      <div className="genre-select">
        {genres?.map((genre) => (
          <button
            key={genre}
            onClick={() => onSelect(genre)}
            className={`genre-button ${genre === selectedGenre ? 'selected' : ''}`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreSelect;