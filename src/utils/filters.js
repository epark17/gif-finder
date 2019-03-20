//sorts the results from newest import date to oldest import date
export const getSortedByDate = gifsArr => {
  return gifsArr.sort((a, b) => {
    const dateA = new Date(a.import_datetime);
    const dateB = new Date(b.import_datetime);
    return dateB - dateA;
  });
};

//filters the results based on rating
export const getFilteredByRating = (filterType, gifsArr) => {
  return filterType !== null
    ? gifsArr.filter(gif => gif.rating === filterType)
    : gifsArr;
};

/*
const isSortedData = isDataSorting ? getSortedByDate(gifs) : gifs;
{ratingType ? (
  getFilteredByRating(ratingType, isSortedData).length !== 0 ? (
    getFilteredByRating(ratingType, isSortedData).map(gif => (
      <div className="m-1 card bg-transparent" key={gif.id}>
        <div className="align-content-between align-items-center card-body">
          <SearchCard gif={gif} />
        </div>
      </div>
    ))
  ) : (
    <p>Sorry! There's no gif matching this rating.</p>
  )
) : (
  isSortedData.map(gif => (
    <div className="m-1 card bg-transparent" key={gif.id}>
      <div className="align-content-between align-items-center card-body">
        <SearchCard gif={gif} />
      </div>
    </div>
  ))
)}
*/
