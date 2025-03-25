import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GenreSelect from './GenreSelect';

describe('GenreSelect Component', () => {
  const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

  it('should render all genres passed in props', () => {
    render(<GenreSelect genres={genres} />);
    genres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it('should highlight a selected genre passed in props', () => {
    render(<GenreSelect genres={genres} selectedGenre="Comedy" />);
    expect(screen.getByText('Comedy')).toHaveClass('selected');
  });

  it('should call the onSelect callback with the correct genre argument after a genre button click event', () => {
    const onSelectMock = jest.fn();
    render(<GenreSelect genres={genres} onSelect={onSelectMock} />);

    fireEvent.click(screen.getByText('Horror'));
    expect(onSelectMock).toHaveBeenCalledWith('Horror');
  });

});