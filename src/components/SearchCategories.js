import React from 'react';

const SearchCategories = props => (
  <div className="col-xs-3">
    <button
      type="button"
      className="btn btn-info"
      onClick={props.onSort}
      style={{ margin: '5px' }}
    >
      Newest to Oldest
    </button>
    <button
      type="button"
      className="btn btn-info"
      onClick={() => props.onFilter('g')}
      style={{ margin: '5px' }}
    >
      Rated G
    </button>
    <button
      type="button"
      className="btn btn-info"
      onClick={props.onClearFilter}
      style={{ margin: '5px' }}
    >
      Clear Filter
    </button>
  </div>
);

export default SearchCategories;
