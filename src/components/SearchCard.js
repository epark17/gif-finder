import React from 'react';

const SearchCard = props => {
  const title = props.gif.title;
  const fixedHeightImageURL = props.gif.images.fixed_height.url;

  //might change div to React.Fragment once I figure grid out...
  return (
    <React.Fragment>
      <h5 className="card-title">{title}</h5>
      <img
        className="mx-auto card-img-top"
        src={fixedHeightImageURL}
        alt={title}
      />
    </React.Fragment>
  );
};

export default SearchCard;
