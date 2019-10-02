import React from 'react';

import SearchCategories from './SearchCategories';
import SearchCard from './SearchCard';
import Spinner from '../Spinner';
import { getFilteredByRating, getSortedByDate } from '../../utils/filters';

const SearchResult = ({
  gifs,
  searchMessage,
  ratingType,
  isDataSorting,
  onSortByDate,
  onFilteredByRating,
  onClearFilter,
}) => {
  const renderedGifs = gifs.slice(); // make copy of gifs from state and then sort this GIFs array!

  return (
    <React.Fragment>
      <h3 className="searchMessage text-center mb-4">{searchMessage}</h3>
      <SearchCategories
        onSortByDate={onSortByDate}
        onFilteredByRating={onFilteredByRating}
        onClearFilter={onClearFilter}
      />
      <br />

      {gifs === undefined || !gifs.length ? (
        <Spinner />
      ) : (
        <div className="row justify-content-between">
          {(isDataSorting &&
            getSortedByDate(renderedGifs).map(gif => (
              <SearchCard gif={gif} />
            ))) ||
            (ratingType &&
              (getFilteredByRating(ratingType, renderedGifs).length !== 0 ? (
                getFilteredByRating(ratingType, renderedGifs).map(gif => (
                  <SearchCard gif={gif} />
                ))
              ) : (
                <p className="searchNotFound">
                  Oops! None of the search results match this rating.
                </p>
              ))) ||
            gifs.map(gif => <SearchCard gif={gif} />)}
        </div>
      )}
    </React.Fragment>
  );
};

export default SearchResult;
