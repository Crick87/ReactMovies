import React from 'react';
import GenreSelect from '../components/GenreSelect/GenreSelect';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const selectedGenre = 'Comedy';
function handleGenreSelect(genre) {
  console.log('Selected genre:', genre);
}

function FilterBar() {
  return (
    <section className='filter-bar'>
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />
    </section>
  );
}

export default FilterBar;