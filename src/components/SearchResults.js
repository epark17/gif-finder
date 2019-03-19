import React from 'react';

import SearchCategories from './SearchCategories';
import SearchCard from './SearchCard';
import { getFilteredByRating, getSortedByDate } from '../utils/filters';

// work on styling: want 4 cards / columns aligned in center equally spread out
// deploy on heroku and travis CI
// write testings
const SearchResult = props => {
  const {
    gifs,
    searchMessage,
    dataSort,
    onSortByDate,
    // filterType,
    // onFilterByRatings,
    // onClearFilter,
  } = props;

  console.log('gifs', gifs);

  return (
    <React.Fragment>
      <p className="searchMessage">{searchMessage}</p>
      <SearchCategories
        onSortByDate={onSortByDate}
        // onFilterByRatings={onFilterByRatings}
        // onClearFilter={onClearFilter}
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

export default SearchResult;
