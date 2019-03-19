import React from 'react';

import SearchCard from './SearchCard';

// work on styling
const SearchResult = props => {
  const { gifs } = props;
  console.log('gifs', gifs);

  return (
    <React.Fragment>
      {gifs &&
        gifs.map(gif => (
          <div key={gif.id} className="row" style={{ marginBottom: '2rem' }}>
            <SearchCard gif={gif} />
          </div>
        ))}
    </React.Fragment>
  );
};

export default SearchResult;
