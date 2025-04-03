import React, { useState } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import Dialog from '../components/Dialog/Dialog';
import MovieForm from '../components/MovieForm/MovieForm';

function handleSearch(query) {
  console.log('Search query:', query);
}

function MainHeader() {

  const [showDialog, setShowDialog] = useState(false);

  return (
    <section className='main-header'>
      <div className='topbar'>
        <span className='logo'><strong>netflix</strong>roulette</span>
        <div>
          <button onClick={() => setShowDialog(true)}>+ ADD MOVIE</button>
          {showDialog && (
            <Dialog
              title="Add movie"
              onClose={() => setShowDialog(false)}
            >
              <MovieForm />
            </Dialog>
          )}
        </div>
      </div>
      <h2>FIND YOUR MOVIE</h2>
      <SearchForm initialSearchQuery="Shrek" onSearch={handleSearch} />
    </section>
  );
}

export default MainHeader;