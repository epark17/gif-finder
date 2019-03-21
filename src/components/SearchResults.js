import React from 'react';

import SearchCategories from './SearchCategories';
import SearchCard from './SearchCard';
import { getFilteredByRating, getSortedByDate } from '../utils/filters'; //getFilteredByRating

const SearchResult = props => {
  const {
    gifs,
    searchMessage,
    ratingType,
    isDataSorting,
    onSortByDate,
    onClearFilter,
    onSortByRating,
  } = props;

  const renderedGifs = gifs.slice(); // make of copy of gifs from state and then sort this GIFs array!
  // console.log(gifs);

  return (
    <React.Fragment>
      <p className="searchMessage">{searchMessage}</p>
      <SearchCategories
        onSortByDate={onSortByDate}
        onClearFilter={onClearFilter}
        onSortByRating={onSortByRating}
      />
      <br />
      <div className="container">
        <div className="results card-deck justify-content-around">
          {/* if isDataSorting is true (only true if user clicked onSortByDate button) */}
          {/* {isDataSorting
            ? getSortedByDate(renderedGifs).map(gif => (
                <div className="m-1 card bg-transparent" key={gif.id}>
                  <div className="align-content-between align-items-center card-body">
                    <SearchCard gif={gif} />
                  </div>
                </div>
              ))
            : gifs.map(gif => (
                <div className="m-1 card bg-transparent" key={gif.id}>
                  <div className="align-content-between align-items-center card-body">
                    <SearchCard gif={gif} />
                  </div>
                </div>
              ))} */}
          {ratingType ? (
            getFilteredByRating(ratingType, renderedGifs).length !== 0 ? (
              getFilteredByRating(ratingType, renderedGifs).map(gif => (
                <div className="m-1 card bg-transparent" key={gif.id}>
                  <div className="align-content-between align-items-center card-body">
                    <SearchCard gif={gif} />
                  </div>
                </div>
              ))
            ) : (
              <p>Oops! None of the gifs match this rating.</p>
            )
          ) : (
            gifs.map(gif => (
              <div className="m-1 card bg-transparent" key={gif.id}>
                <div className="align-content-between align-items-center card-body">
                  <SearchCard gif={gif} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchResult;

/*
const SearchResult = (props) => {
  const {
    gifs,
    searchMessage,
    ratingType,
    isDataSorting,
    onSortByDate,
    onClearFilter,
    onSortByRating,
  } = props;

  const renderedGifs = isDataSorting ? getSortedByDate(gifs.slice()) : gifs;

  return (
    <React.Frament>
      <p className="searchMessage">{searchMessage}</p>
      <SearchCategories
        onSortByDate={onSortByDate}
        onClearFilter={onClearFilter}
        onSortByRating={onSortByRating}
      />
      <br />
      <div className="container">
        <div className="results card-deck justify-content-around">
          {ratingType ? (
            getFilteredByRating(ratingType, renderedGifs).length !== 0 ? (
              getFilteredByRating(ratingType, renderedGifs).map(gif => (
                <div className="m-1 card bg-transparent" key={gif.id}>
                  <div className="align-content-between align-items-center card-body">
                    <SearchCard gif={gif} />
                  </div>
                </div>
              ))
            ) : (
              <p>Sorry! There is no gif matching your rating.</p>
            )
          ) : (
            renderedGifs.map(gif => (
              <div className="m-1 card bg-transparent" key={gif.id}>
                <div className="align-content-between align-items-center card-body">
                  <SearchCard gif={gif} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </React.Frament>
  );
*/
