import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter/Counter.jsx'
import MainHeader from './pages/MainHeader.jsx'
import FilterBar from './pages/FilterBar.jsx'
import MovieList from './pages/MovieList.jsx'
import MovieDetails from './components/MovieDeails/MovieDetails.jsx'

const movie = {
  imageUrl: 'https://s3-alpha-sig.figma.com/img/89fa/22b0/9af0f226591250d0c0dc45e952d8c0a6?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ptfOU3KSjHL-8X6HDFIJpKQd9MWVzcwjvsRJTglbwJ4zSoL4HD-Bd85DEGjmP7dQhO8IARPZXCWLbFlhF~lOnG0~9DlDsQovfWkI-f0mpLi4I38~xZRerzNt83AW1VnIg1JKYMPPVwWN1nIKHnswZR0fMoAGQHUt3Dbsy~LAm5MfkTDeGjuip5Bb7feZmQMZt3SF~DHJ0r--2i2C8mnLnordajJW594Akp1D4VcCPN8~1tfV19rupWsc2WbS-kGeDZJ82VOH~-vvyMb~akXGFaMgO4ux11d6vZwDloMJJKfeS47IKLy8eOSPL-mDEj3DOJF0O4rgJxfwQbFzf5wdSw__',
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
    <Counter initialValue={5} />
    <MainHeader/>
    <MovieDetails movie={movie} />
    <FilterBar/>
    <MovieList/>
  </StrictMode>,
)
