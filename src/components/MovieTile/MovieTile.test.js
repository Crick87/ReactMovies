import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MovieTile from './MovieTile';

describe('MovieTile', () => {
  const movie = {
    imageUrl: 'url_de_la_imagen',
    title: 'Bohemian Rhapsody',
    year: 2003,
    genres: ['Drama', 'Biography', 'Music'],
  };

  const onClick = jest.fn();
  const onEdit = jest.fn();
  const onDelete = jest.fn();

  it('should render movie information correctly', () => {
    render(
      <MovieTile movie={movie} onClick={onClick} onEdit={onEdit} onDelete={onDelete} />
    );

    expect(screen.getByAltText('Bohemian Rhapsody')).toBeInTheDocument();
    expect(screen.getByText('Bohemian Rhapsody')).toBeInTheDocument();
    expect(screen.getByText('2003')).toBeInTheDocument();
    expect(screen.getByText('Drama')).toBeInTheDocument();
    expect(screen.getByText('Biography')).toBeInTheDocument();
    expect(screen.getByText('Music')).toBeInTheDocument();
  });

  it('should call onClick when the card is clicked', () => {
    render(
      <MovieTile movie={movie} onClick={onClick} onEdit={onEdit} onDelete={onDelete} />
    );

    fireEvent.click(screen.getByAltText('Bohemian Rhapsody'));
    expect(onClick).toHaveBeenCalledWith(movie);
  });

  it('should display the context menu when the menu button is clicked', () => {
    render(
      <MovieTile movie={movie} onClick={onClick} onEdit={onEdit} onDelete={onDelete} />
    );

    fireEvent.click(screen.getByText('...'));
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('should call onEdit when the "Edit" menu item is clicked', () => {
    render(
      <MovieTile movie={movie} onClick={onClick} onEdit={onEdit} onDelete={onDelete} />
    );

    fireEvent.click(screen.getByText('...'));
    fireEvent.click(screen.getByText('Edit'));
    expect(onEdit).toHaveBeenCalledWith(movie);
  });

  it('should call onDelete when the "Delete" menu item is clicked', () => {
    render(
      <MovieTile movie={movie} onClick={onClick} onEdit={onEdit} onDelete={onDelete} />
    );

    fireEvent.click(screen.getByText('...'));
    fireEvent.click(screen.getByText('Delete'));
    expect(onDelete).toHaveBeenCalledWith(movie);
  });

  it('should hide the context menu when clicked outside the menu', () => {
    render(
      <MovieTile movie={movie} onClick={onClick} onEdit={onEdit} onDelete={onDelete} />
    );

    fireEvent.click(screen.getByText('...'));
    expect(screen.getByText('Edit')).toBeInTheDocument();

    fireEvent.mouseDown(document);
    expect(screen.queryByText('Edit')).toBeNull();
  });
});