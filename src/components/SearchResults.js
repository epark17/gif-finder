import React from 'react';

import SearchCategories from './SearchCategories';
import SearchCard from './searchResults/SearchCard';
import { getFilteredByRating, getSortedByDate } from '../utils/filters';

const SearchResult = props => {
  const {
    gifs,
    searchMessage,
    ratingType,
    isDataSorting,
    onSortByDate,
    onSortByRating,
    onClearFilter,
  } = props;

  const renderedGifs = gifs.slice(); // make copy of gifs from state and then sort this GIFs array!
  // console.log(gifs);

  return (
    <React.Fragment>
      <p className="searchMessage">{searchMessage}</p>
      <SearchCategories
        onSortByDate={onSortByDate}
        onSortByRating={onSortByRating}
        onClearFilter={onClearFilter}
      />
      <br />
      <div className="container">
        <div className="results card-deck justify-content-around">
          {(isDataSorting &&
            getSortedByDate(renderedGifs).map(gif => (
              <div className="m-1 card bg-transparent" key={gif.id}>
                <div className="align-content-between align-items-center card-body">
                  <SearchCard gif={gif} />
                </div>
              </div>
            ))) ||
            (ratingType &&
              (getFilteredByRating(ratingType, renderedGifs).length !== 0 ? (
                getFilteredByRating(ratingType, renderedGifs).map(gif => (
                  <div className="m-1 card bg-transparent" key={gif.id}>
                    <div className="align-content-between align-items-center card-body">
                      <SearchCard gif={gif} />
                    </div>
                  </div>
                ))
              ) : (
                <p>Oops! None of the search results match this rating.</p>
              ))) ||
            gifs.map(gif => (
              <div className="m-1 card bg-transparent" key={gif.id}>
                <div className="align-content-between align-items-center card-body">
                  <SearchCard gif={gif} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchResult;
