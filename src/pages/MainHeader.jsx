import React from 'react';
import SearchForm from '../components/SearchForm/SearchForm';

function handleSearch(query) {
    console.log('Search query:', query);
}

function MainHeader() {
  return (
    <section className='main-header'>
      <h2>FIND YOUR MOVIE</h2>
      <SearchForm initialSearchQuery="Shrek" onSearch={handleSearch} />
    </section>
  );
}

export default MainHeader;