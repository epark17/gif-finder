import React from 'react';

const SearchCard = ({ gif }) => {
  const title = gif.title;
  const fixedHeightImageURL = gif.images.fixed_height.url;

  return (
    // col-md-3  col-lg-3
    <div className="col-3">
      <div className="m-2 card bg-transparent" key={gif.id}>
        <div className="card-body">
          <div className="wrapper">
            <img
              className="card-img-top img-fluid"
              src={fixedHeightImageURL}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
