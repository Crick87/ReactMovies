import React, { useState } from 'react';
import MainHeader from '../layout/MainHeader.jsx'
import FilterBar from '../layout/FilterBar.jsx'
import MovieList from '../layout/MovieList.jsx'
import MovieDetails from '../components/MovieDeails/MovieDetails.jsx'

import imageMovie1 from '../assets/movie-1.png';
import imageMovie2 from '../assets/movie-2.png';

function MovieListPage() {
  const [movies, setMovies] = useState([
    {
      id: '1',
      title: 'Bohemian Rhapsody',
      vote_average: 10,
      release_date: 2003,
      poster_path: imageMovie1,
      overview: 'Esta chida',
      runtime: 159,
      genres: ['Drama', 'Biography', 'Music'],
    },
    {
      id: '2',
      title: 'Pulp Fiction',
      vote_average: 8.9,
      release_date: 1994,
      poster_path: imageMovie2,
      overview: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents. - Soumitra',
      runtime: 135,
      genres: ['Action', 'Adventure'],
    },
    {
      id: '3',
      title: 'La La Land',
      tagline: 'Here\'s to the fools who dream.',
      vote_average: 7.9,
      vote_count: 6782,
      release_date: '2016-12-29',
      poster_path: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_FMjpg_UX1000_.jpg',
      overview: 'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
      budget: 30000000,
      revenue: 445435700,
      runtime: 128,
      genres: [ 'Comedy', 'Drama', 'Romance' ]
    },
  ]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <MainHeader />
      <MovieDetails movie={selectedMovie} />
      <FilterBar />
      <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
    </>
  );
}

export default MovieListPage;