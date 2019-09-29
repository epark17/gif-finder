import React from 'react';

const SearchCard = ({ gif }) => {
  const title = gif.title;
  const fixedHeightImageURL = gif.images.fixed_height.url;

  return (
    <React.Fragment>
      <div className="card-body">
        <img
          className="card-img-top img-fluid"
          src={fixedHeightImageURL}
          alt={title}
        />
        {/* <h5 class="card-title">Special title treatment</h5> */}
        {/* <p className="card-text">{title}</p> */}
      </div>
    </React.Fragment>
  );
};

export default SearchCard;
