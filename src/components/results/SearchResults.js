import React from 'react';

import SearchCategories from './SearchCategories';
import SearchCard from './SearchCard';
// import Spinner from '../layout/Spinner';
import { getFilteredByRating, getSortedByDate } from '../../utils/filters';

const SearchResult = ({
  gifs,
  searchMessage,
  ratingType,
  isDataSorting,
  onSortByDate,
  onSortByRating,
  onClearFilter,
}) => {
  const renderedGifs = gifs.slice(); // make copy of gifs from state and then sort this GIFs array!

  return (
    <React.Fragment>
      <h3 className="searchMessage text-center mb-4">{searchMessage}</h3>
      <SearchCategories
        onSortByDate={onSortByDate}
        onSortByRating={onSortByRating}
        onClearFilter={onClearFilter}
      />
      <br />

      {
        // if (gifs === undefined || !gifs.length) {
        //   return <Spinner />
        // } else {
        //   // the code below - the gif results
        // }
      }

      <div className="row justify-content-between">
        {(isDataSorting &&
          getSortedByDate(renderedGifs).map(gif => (
            <div className="col-md-3">
              <div className="m-2 card bg-transparent" key={gif.id}>
                <SearchCard gif={gif} />
              </div>
            </div>
          ))) ||
          (ratingType &&
            (getFilteredByRating(ratingType, renderedGifs).length !== 0 ? (
              getFilteredByRating(ratingType, renderedGifs).map(gif => (
                <div className="col-md-3">
                  <div className="m-2 card bg-transparent" key={gif.id}>
                    <SearchCard gif={gif} />
                  </div>
                </div>
              ))
            ) : (
              <p className="searchNotFound">
                Oops! None of the search results match this rating.
              </p>
            ))) ||
          gifs.map(gif => (
            // col-3  col-lg-3
            <div className="col-md-3">
              <div className="m-2 card bg-transparent" key={gif.id}>
                <SearchCard gif={gif} />
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default SearchResult;
