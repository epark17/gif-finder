import React from 'react';

import SearchCategories from './SearchCategories';
import SearchCard from './SearchCard';

//sorts the results from newest import date to oldest import date
const getSorted = array => {
  return array.sort((a, b) => {
    var c = new Date(a.import_datetime);
    var d = new Date(b.import_datetime);
    return d - c;
  });
};

//filters the results based on rating
const getFiltered = (filterType, array) => {
  return filterType !== null
    ? array.filter(gif => gif.rating === filterType)
    : array;
};

// work on styling: want 4 cards / columns aligned in center equally spread out
// must add sort
// must add filters: minimum 2
// deploy on heroku and travis CI
// write testings
const SearchResult = props => {
  const {
    message,
    sortData,
    filterType,
    onSort,
    onFilter,
    onClearFilter,
  } = props;
  const gifs = sortData ? getSorted(props.gifs) : props.gifs;
  console.log(props.gifs);
  return (
    <React.Fragment>
      <p className="message">{message}</p>
      <SearchCategories
        onSort={onSort}
        onFilter={onFilter}
        onClearFilter={onClearFilter}
      />
      <br />
      <div className="results card-deck justify-content-around">
        {filterType ? (
          getFiltered(filterType, gifs) === 0 ? (
            getFiltered(filterType, gifs).map(gif => (
              <div className="m-1 card bg-transparent" key={gif.id}>
                <div className="align-content-between align-items-center card-body">
                  <SearchCard gif={gif} />
                </div>
              </div>
            ))
          ) : (
            <p>Sorry! None of the gifs fall into the selected category.</p>
          )
        ) : (
          gifs.map(gif => (
            <div className="m-1 card bg-transparent" key={gif.id}>
              <div className="align-content-between align-items-center card-body">
                <SearchCard gif={gif} />
              </div>
            </div>
          ))
        )}
        {/* {gifs &&
          gifs.map(gif => (
            <div className="m-1 card bg-transparent" key={gif.id}>
              <div className="align-content-between align-items-center card-body">
                <SearchCard gif={gif} />
              </div>
            </div>
          ))} */}
      </div>
    </React.Fragment>

    // <React.Fragment>
    //   <p className="message">{message}</p>
    //   <button>BUTTON FOr now</button>
    //   <br />
    //   <div className="results card-deck flex-wrap d-flex justify-content-around">
    //     {gifs &&
    //       gifs.map(gif => (
    //         <div className="m-1 card bg-transparent" key={gif.id}>
    //           <div className="align-content-between align-items-center card-body d-flex flex-column">
    //             <SearchCard gif={gif} />
    //           </div>
    //         </div>
    //       ))}
    //   </div>
    // </React.Fragment>
  );
};

export default SearchResult;
