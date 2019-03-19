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
