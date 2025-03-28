import React, { useState } from 'react';
import GenreSelect from '../components/GenreSelect/GenreSelect';
import SortControl from '../components/SortControl/SortControl';

function FilterBar() {

  const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const selectedGenre = 'Comedy';
  function handleGenreSelect(genre) {
    console.log('Selected genre:', genre);
  }

  const [selectedSort, setSelectedSort] = useState('Release Date');
  const handleSortChange = (newSort) => {
    setSelectedSort(newSort);
    console.log('Sort by:', newSort);
  };

  return (
    <section className='filter-bar container'>
      <div className="row">
        <div className="col-auto mr-auto">
          <GenreSelect
            genres={genres}
            selectedGenre={selectedGenre}
            onSelect={handleGenreSelect}
          />
        </div>
        <div className="col-auto">
          <SortControl selectedOption={selectedSort} onSortChange={handleSortChange} />
        </div>
      </div>
    </section>
  );
}

export default FilterBar;