import React from 'react';

const SearchCategories = props => (
  <div className="col-xs-3">
    <button
      type="button"
      className="btn btn-info"
      id="sort-btn"
      onClick={props.onSortByDate}
      style={{ margin: '5px' }}
    >
      Newest to Oldest
    </button>
    <button
      type="button"
      className="btn btn-info"
      id="rated-g-btn"
      onClick={() => props.onSortByRating('g')}
      style={{ margin: '5px' }}
    >
      Rated G
    </button>
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
      onClick={props.onClearFilter}
      style={{ margin: '5px' }}
    >
      Clear
    </button>
  </div>
);

export default SearchCategories;
