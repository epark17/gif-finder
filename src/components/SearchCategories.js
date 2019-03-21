import React from 'react';

// Rated Y, Rated G, Rated PG, Rated PG-13, Rated R
const SearchCategories = props => (
  <div className="col-xs-3">
    <button
      type="button"
      className="btn btn-info"
      id="sort-btn"
      onClick={props.onSortByDate} // so when user clicks this isDataSorting becomes true
      style={{ margin: '5px' }}
    >
      Newest to Oldest
    </button>
    {/* <button
      type="button"
      className="btn btn-info"
      id="rated-g-btn"
      onClick={() => props.onSortByRating('g')}
      style={{ margin: '5px' }}
    >
      Rated G
    </button> */}
    <button
      type="button"
      className="btn btn-info"
      id="rated-pg-btn"
      onClick={() => props.onSortByRating('pg')}
      style={{ margin: '5px' }}
    >
      Rated PG
    </button>
    <button
      type="button"
      className="btn btn-info"
      id="rated-r-btn"
      onClick={() => props.onSortByRating('r')}
      style={{ margin: '5px' }}
    >
      Rated R
    </button>
    <button
      type="button"
      className="btn btn-info"
      id="clear-btn"
      onClick={props.onClearFilter} // so when user clicks this isDataSorting becomes false
      style={{ margin: '5px' }}
    >
      Clear
    </button>
  </div>
);

export default SearchCategories;
