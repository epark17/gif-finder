import React from 'react';

const SearchCategories = ({
  onSortByDate,
  onFilteredByRating,
  onClearFilter,
}) => (
  // <div className="col-xs-3">
  <div className="text-center mb-4">
    <button
      type="button"
      className="btn btn-info"
      id="sort-btn"
      onClick={onSortByDate}
      style={{ margin: '5px' }}
    >
      Newest to Oldest
    </button>
    <button
      type="button"
      className="btn btn-info"
      id="rated-g-btn"
      onClick={() => onFilteredByRating('g')}
      style={{ margin: '5px' }}
    >
      Rated G
    </button>
    <button
      type="button"
      className="btn btn-info"
      id="rated-pg-btn"
      onClick={() => onFilteredByRating('pg')}
      style={{ margin: '5px' }}
    >
      Rated PG
    </button>
    <button
      type="button"
      className="btn btn-info"
      id="rated-r-btn"
      onClick={() => onFilteredByRating('r')}
      style={{ margin: '5px' }}
    >
      Rated R
    </button>
    <button
      type="button"
      className="btn btn-info"
      id="clear-btn"
      onClick={onClearFilter}
      style={{ margin: '5px' }}
    >
      Clear
    </button>
  </div>
);

export default SearchCategories;
