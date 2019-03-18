import React from 'react';

// const SearchForm = props => {
//   console.log('SearchForm.js is this working?');
//   return (
//     <form onSubmit={props.getResults} style={{ marginBottom: '2rem' }}>
//       <input className="form-input" type="text" name="search_input" />
//       <button className="form-button">Search</button>
//     </form>
//   );
// };

const SearchForm = props => {
  return (
    <form className="container" onSubmit={this.handleSubmit}>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Search for Gifs..."
          value={query}
          onChange={this.handleChange}
        />
        <div className="input-group-btn">
          <button
            className="btn btn-primary"
            id="searchBtn"
            type="submit"
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
