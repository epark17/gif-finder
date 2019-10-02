import React from 'react';

const SearchCard = ({ gif }) => {
  const title = gif.title;
  const fixedHeightImageURL = gif.images.fixed_height.url;

  return (
    <React.Fragment>
      <div className="card-body">
        <div className="wrapper">
          <img
            className="card-img-top img-fluid"
            src={fixedHeightImageURL}
            alt={title}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchCard;
