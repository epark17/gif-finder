// sorts the results from newest import date to oldest import date
export const getSortedByDate = gifs => {
  return gifs.sort((a, b) => {
    const dateA = new Date(a.import_datetime);
    const dateB = new Date(b.import_datetime);
    return dateB - dateA;
  });
};

// filters the results based on rating
export const getFilteredByRating = (ratingType, gifs) => {
  return ratingType !== null
    ? gifs.filter(gif => gif.rating === ratingType)
    : gifs;
};
