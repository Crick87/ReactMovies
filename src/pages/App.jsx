import React, { useState } from 'react';
import Counter from '../components/Counter/Counter.jsx'
import MainHeader from './MainHeader.jsx'
import FilterBar from './FilterBar.jsx'
import MovieList from './MovieList.jsx'
import MovieDetails from '../components/MovieDeails/MovieDetails.jsx'

import imageMovie1 from '../assets/movie-1.png';
import imageMovie2 from '../assets/movie-2.png';

function App() {
  const [movies, setMovies] = useState([
    {
      id: '1',
      imageUrl: imageMovie1,
      title: 'Bohemian Rhapsody',
      year: 2003,
      genres: ['Drama', 'Biography', 'Music'],
      rating: 10,
      duration: '2h 38min',
      description: 'Esta chida',
    },
    {
      id: '2',
      imageUrl: imageMovie2,
      title: 'Pulp Fiction',
      year: 1994,
      genres: ['Action', 'Adventure'],
      rating: 8.9,
      duration: '2h 34min',
      description:
        'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents. - Soumitra',
    },
  ]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div>
      <MainHeader />
      <MovieDetails movie={selectedMovie} />
      <FilterBar />
      <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
      <Counter initialValue={5} />
    </div>
  );
}

export default App;