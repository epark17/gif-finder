import React from 'react';

// fix size of search input field and make it rounder?
const SearchForm = props => {
  const { onSubmit, onChange, query } = props;
  return (
    <form className="container" onSubmit={onSubmit}>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          value={query}
          onChange={onChange}
          placeholder="Search for Gifs..."
        />
        <div className="input-group-btn">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
