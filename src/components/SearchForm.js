import React from 'react';

// work on styling later
const SearchForm = props => {
  const { onSubmit, onChange, query } = props;
  return (
    <form
      className="container"
      onSubmit={onSubmit}
      style={{ marginBottom: '2rem' }}
    >
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          value={query}
          onChange={onChange}
          placeholder="Search for Gifs..."
        />
        <div className="input-group-btn">
          <button
            className="btn btn-primary"
            type="submit"
            id="searchBtn"
            disabled={!query}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
