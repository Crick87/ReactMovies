import React, { useState } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import Dialog from '../components/Dialog/Dialog';
import MovieForm from '../components/MovieForm/MovieForm';

function handleOnSubmit(movie) {
  console.log('Submit:', movie);
}

function MainHeader({searchQuery, setSearchQuery}) {

  const [showDialog, setShowDialog] = useState(false);

  return (
    <section className='main-header'>
      <div className='container'>
        <div className='topbar'>
          <span className='logo'><strong>netflix</strong>roulette</span>
          <div>
            <button onClick={() => setShowDialog(true)}>+ ADD MOVIE</button>
            {showDialog && (
              <Dialog
                title="Add movie"
                onClose={() => setShowDialog(false)}
              >
                <MovieForm onSubmit={handleOnSubmit} />
              </Dialog>
            )}
          </div>
        </div>
        <h2>FIND YOUR MOVIE</h2>
        <SearchForm searchQuery={searchQuery} onSearch={setSearchQuery} />
      </div>
    </section>
  );
}

export default MainHeader;