import React, { useState } from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import Dialog from '../components/Dialog/Dialog';

function handleSearch(query) {
  console.log('Search query:', query);
}

function MainHeader() {

  const [showDialog, setShowDialog] = useState(false);

  return (
    <section className='main-header'>
      <div>
        <button onClick={() => setShowDialog(true)}>+ ADD MOVIE</button>
        {showDialog && (
          <Dialog
            title="Add movie"
            onClose={() => setShowDialog(false)}
          >
            <h3>My add form WIP</h3>
            <input type="text"/>
            <input type="text"/>
          </Dialog>
        )}
      </div>
      <h2>FIND YOUR MOVIE</h2>
      <SearchForm initialSearchQuery="Shrek" onSearch={handleSearch} />
    </section>
  );
}

export default MainHeader;