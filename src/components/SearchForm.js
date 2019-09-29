import React from 'react';

const SearchForm = props => {
  const { query, onSubmit, onChange } = props;
  return (
    <form className="container" onSubmit={onSubmit}>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          value={query}
          onChange={onChange}
          placeholder="Search all the GIFS"
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
