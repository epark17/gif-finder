import React from 'react';

// next time call this component AllGIFs
const SearchResult = props => {
  console.log('props', props.gifs);
  return (
    <div className="container">
      <div className="row">
        {props.gifs &&
          props.gifs.map(gif => (
            <div
              key={gif.id}
              className="col-md-4"
              style={{ marginBottom: '2rem' }}
            >
              <div className="gifs_box">
                <h1>hello for now</h1>
              </div>
            </div>
          ))}
        <h1>huh</h1>
      </div>
    </div>
  );
};

export default SearchResult;
