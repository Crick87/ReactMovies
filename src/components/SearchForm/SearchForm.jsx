import React, {useState} from 'react';
import './SearchForm.css';

const SearchForm = ({ searchQuery = '', onSearch }) => {

  const [internalQuery, setInternalQuery] = useState(searchQuery)

  const handleInputChange = (event) => {
    setInternalQuery(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(internalQuery);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="search-form">
        <input
          type="text"
          value={internalQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;