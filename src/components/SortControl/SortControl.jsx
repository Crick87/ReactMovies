import React from 'react';
import './SortControl.css';

function SortControl({ selectedOption, onSortChange }) {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="sort-control">
      <span className="sort-label">Sort by</span>
      <select className="sort-select" value={selectedOption} onChange={handleChange}>
        <option value="release_date">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortControl;