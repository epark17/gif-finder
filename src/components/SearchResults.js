import React from 'react';

const SearchResult = props => {
  // console.log('props', props.gifs);
  const { gifs } = props;

  return (
    <div className="container">
      <div className="row">
        {gifs &&
          gifs.map(gif => (
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
        {/* <h1>huh</h1> */}
      </div>
    </div>
  );
};

export default SearchResult;
