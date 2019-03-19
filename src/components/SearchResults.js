import React from 'react';

import SearchCard from './SearchCard';

// work on styling: want 4 cards / columns aligned in center equally spread out
// must add sort
// must add filters: minimum 2
// deploy on heroku and travis CI
// write testings
const SearchResult = props => {
  const { gifs, message } = props;
  console.log('gifs', gifs);

  return (
    <React.Fragment>
      <p className="message">{message}</p>
      <button>BUTTON FOr now</button>
      <br />
      <div className="results card-deck flex-wrap d-flex justify-content-around">
        {gifs &&
          gifs.map(gif => (
            <div className="m-1 card bg-transparent" key={gif.id}>
              <div className="align-content-between align-items-center card-body d-flex flex-column">
                <SearchCard gif={gif} />
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

export default SearchResult;
