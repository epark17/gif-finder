import React from 'react';

const SearchCard = ({ gif }) => {
  const title = gif.title;
  const fixedHeightImageURL = gif.images.fixed_height.url;

  return (
    <React.Fragment>
      <div className="card-body">
        {/* might get ride of card title */}
        {/* <h5 className="card-title">{title}</h5> */}
        <img
          className="card-img-top img-fluid"
          src={fixedHeightImageURL}
          alt={title}
        />
      </div>
    </React.Fragment>
  );
};

export default SearchCard;
