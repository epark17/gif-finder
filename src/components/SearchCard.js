import React from 'react';

const SearchCard = props => {
  // console.log(props);
  const title = props.gif.title;
  const fixedHeightImageURL = props.gif.images.fixed_height.url;

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <div className="card">
        <h5 className="card-header">{title}</h5>
        <img src={fixedHeightImageURL} alt={title} />
      </div>
    </div>
  );
};

export default SearchCard;
