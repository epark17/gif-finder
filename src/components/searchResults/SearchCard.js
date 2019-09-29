import React from 'react';

const SearchCard = props => {
  const title = props.gif.title;
  const fixedHeightImageURL = props.gif.images.fixed_height.url;

  return (
    <React.Fragment>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
      <img
        className="card-img-top img-fluid"
        src={fixedHeightImageURL}
        alt={title}
      />
    </React.Fragment>
  );
};

export default SearchCard;
