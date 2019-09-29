import React from 'react';

const SearchForm = ({ query, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search all the GIFs"
          value={query}
          onChange={onChange}
        />
        <div className="input-group-btn">
          <button
            className="btn btn-primary btn-lg btn-block mb-5"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
