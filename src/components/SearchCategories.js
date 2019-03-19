import React from 'react';

//sortbyratings

const SearchCategories = props => (
  <div className="col-xs-3">
    <button
      type="button"
      className="btn btn-info"
      onClick={props.onSortByDate} // so when user clicks this dataSort becomes true
      style={{ margin: '5px' }}
    >
      Newest to Oldest
    </button>
    {/* <button
      type="button"
      className="btn btn-info"
      onClick={() => props.onFilterByRatings('r')} //have to fix this
      style={{ margin: '5px' }}
    >
      Rated R
    </button> */}
    {/* <button
      type="button"
      className="btn btn-info"
      onClick={props.onClear}
      style={{ margin: '5px' }}
    >
      Clear
    </button> */}
  </div>
);

export default SearchCategories;
