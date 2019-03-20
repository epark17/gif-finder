import React from 'react';

import SearchCategories from './SearchCategories';
import SearchCard from './SearchCard';
import { getSortedByDate } from '../utils/filters'; //getFilteredByRating

// work on styling: want 4 cards / columns aligned in center equally spread out
const SearchResult = props => {
  const {
    gifs,
    searchMessage,
    dataSort,
    onSortByDate,
    // ratingType,
    // onFilterByRatings,
  } = props;

  // console.log('gifs', gifs);
  return (
    <React.Fragment>
      <p className="searchMessage">{searchMessage}</p>
      <SearchCategories
        onSortByDate={onSortByDate}
        // onFilterByRatings={onFilterByRatings}
      />
      <br />
      <div className="results card-deck justify-content-around">
        {/* if dataSort is true (only true if user clicked onSortByDate button) */}
        {dataSort
          ? getSortedByDate(gifs).map(gif => (
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
            ))}
      </div>
    </React.Fragment>
  );
};

/*
const isSortedData = dataSort ? getSortedByDate(gifs) : gifs;
{ratingType ? (
  getFilteredByRating(ratingType, isSortedData).length !== 0 ? (
    getFilteredByRating(ratingType, isSortedData).map(gif => (
      <div className="m-1 card bg-transparent" key={gif.id}>
        <div className="align-content-between align-items-center card-body">
          <SearchCard gif={gif} />
        </div>
      </div>
    ))
  ) : (
    <p>Sorry! There's no gif matching this rating.</p>
  )
) : (
  isSortedData.map(gif => (
    <div className="m-1 card bg-transparent" key={gif.id}>
      <div className="align-content-between align-items-center card-body">
        <SearchCard gif={gif} />
      </div>
    </div>
  ))
)}
*/
export default SearchResult;
