import React from 'react';
import './GenreSelect.css';

class GenreSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: props.selectedGenre || null,
    };
    this.handleGenreClick = this.handleGenreClick.bind(this);
  }

  handleGenreClick(genre) {
    this.setState({ selectedGenre: genre });
    if (this.props.onSelect) {
      this.props.onSelect(genre);
    }
  }

  render() {
    const { genres } = this.props;
    const { selectedGenre } = this.state;

    return (
      <div className="genre-select-container">
        <h2>Genre Select</h2>
        <div className="genre-select">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => this.handleGenreClick(genre)}
              className={`genre-button ${genre === selectedGenre ? 'selected' : ''}`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default GenreSelect;