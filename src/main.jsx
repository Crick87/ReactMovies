import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter/Counter.jsx'
import MainHeader from './pages/MainHeader.jsx'
import FilterBar from './pages/FilterBar.jsx'
import MovieList from './pages/MovieList.jsx'
import MovieDetails from './components/MovieDeails/MovieDetails.jsx'

import imageMovie2 from './assets/movie-2.png';

const movie = {
  imageUrl: imageMovie2,
  title: 'Pulp Fiction',
  year: 1994,
  genres: ['Action', 'Adventure'],
  rating: 8.9,
  duration: '2h 34min',
  description:
    'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents. - Soumitra',
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainHeader/>
    <MovieDetails movie={movie} />
    <FilterBar/>
    <MovieList/>
    <Counter initialValue={5} />
  </StrictMode>,
)
