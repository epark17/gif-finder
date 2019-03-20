import React from 'react';

const SearchCategories = props => (
  <div className="col-xs-3">
    <button
      type="button"
      className="btn btn-info"
      id="sort-btn"
      onClick={props.onSortByDate} // so when user clicks this dataSort becomes true
      style={{ margin: '5px' }}
    >
      Newest to Oldest
    </button>
    {/* <button
      type="button"
      className="btn btn-info"
      id="rating-btn"
      onClick={() => props.onFilterByRatings('r')} //have to fix this
      style={{ margin: '5px' }}
    >
      Rated R
    </button> */}
    {/* <button
      type="button"
      className="btn btn-info"
      id="clear-btn"
      onClick={props.onClearFilter}
      style={{ margin: '5px' }}
    >
      Clear
    </button> */}
  </div>
);

export default SearchCategories;
