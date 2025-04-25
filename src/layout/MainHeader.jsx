import React from 'react';
import { useOutletContext } from 'react-router-dom';

import SearchForm from '../components/SearchForm/SearchForm';
import AddMovie from '../components/AddMovie/AddMovie';

function MainHeader() {

  const { searchQuery, setSearchQuery } = useOutletContext();

  return (
    <section className='main-header'>
      <div className='container'>
        <div className='topbar'>
          <span className='logo'><strong>netflix</strong>roulette</span>
          <AddMovie />
        </div>
        <h2>FIND YOUR MOVIE</h2>
        <SearchForm searchQuery={searchQuery} onSearch={setSearchQuery} />
      </div>
    </section>
  );
}

export default MainHeader;