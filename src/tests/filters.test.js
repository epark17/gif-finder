import { getFilteredByRating, getSortedByDate } from '../utils/filters';

const fakeData = [
  {
    id: 'feqkVgjJpYtjy',
    rating: 'r',
    import_datetime: '2013-03-21 04:03:08',
    images: {
      fixed_height: {
        url: 'http://media0.giphy.com/media/feqkVgjJpYtjy/200.gif',
      },
      title: 'Shocked Eyes GIF',
    },
  },
  {
    id: 'FiGiRei2ICzzG',
    rating: 'g',
    import_datetime: '2014-01-18 09:14:20',
    images: {
      fixed_height: {
        url: 'http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif',
      },
    },
    title: 'Funny Cat GIF',
  },
];

describe('function getSortedByDate', () => {
  it('sorts the data from newest to oldest import date', () => {
    const sortedData = getSortedByDate(fakeData);
    expect(sortedData).toBeInstanceOf(Array);
    expect(sortedData[0].id).toEqual('FiGiRei2ICzzG');
    expect(sortedData[1].id).toEqual('feqkVgjJpYtjy');
  });
});

describe('function getFilteredByRating', () => {
  it('filters the data based on rating', () => {
    const filteredDataByGRating = getFilteredByRating('g', fakeData);
    expect(filteredDataByGRating).toBeInstanceOf(Array);
    expect(filteredDataByGRating).toHaveLength(1);
  });
});
