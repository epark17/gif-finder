import React from 'react';

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
