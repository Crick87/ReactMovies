import React from 'react';
import GenreSelect from '../components/GenreSelect/GenreSelect';
import SortControl from '../components/SortControl/SortControl';

function FilterBar({sortCriteria, setSortCriteria, selectedGenre, setActiveGenre, genres}) {

  return (
    <section className='filter-bar container'>
      <div className="row">
        <div className="col-auto mr-auto">
          <GenreSelect
            genres={genres}
            selectedGenre={selectedGenre}
            onSelect={setActiveGenre}
          />
        </div>
        <div className="col-auto">
          <SortControl selectedOption={sortCriteria} onSortChange={setSortCriteria} />
        </div>
      </div>
    </section>
  );
}

export default FilterBar;
