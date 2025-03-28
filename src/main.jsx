import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './components/Counter/Counter.jsx'
import SearchForm from './components/SearchForm/SearchForm.jsx'
import GenreSelect from './components/GenreSelect/GenreSelect.jsx'

function handleSearch(query) {
  console.log('Search query:', query);
}

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const selectedGenre = 'Comedy';
function handleGenreSelect(genre) {
  console.log('Selected genre:', genre);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Counter initialValue={5} />
    <SearchForm initialSearchQuery="Shrek" onSearch={handleSearch} />
    <GenreSelect
      genres={genres}
      selectedGenre={selectedGenre}
      onSelect={handleGenreSelect}
    />
  </StrictMode>,
)
