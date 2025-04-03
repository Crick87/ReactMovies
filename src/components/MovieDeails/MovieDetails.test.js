import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
  it('should render movie details when movie prop is provided', () => {
    const movie = {
      poster_path: 'URL_DE_LA_IMAGEN_DE_LA_PELICULA',
      title: 'Pulp Fiction',
      release_date: '1994',
      genres: ['Action', 'Adventure'],
      vote_average: 8.9,
      runtime: 134,
      overview:
        'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents. - Soumitra',
    };

    render(<MovieDetails movie={movie} />);

    expect(screen.getByAltText(movie.title)).toBeInTheDocument(); // Image Alt
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText('1994 | Action, Adventure | 134')).toBeInTheDocument();
    expect(screen.getByText(movie.vote_average)).toBeInTheDocument();
    expect(screen.getByText(movie.overview)).toBeInTheDocument();
  });

  it('should render "No movie selected" when movie prop is not provided', () => {
    render(<MovieDetails />);

    expect(screen.getByText('No movie selected')).toBeInTheDocument();
  });
});