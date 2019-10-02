import React from 'react';

// Enzyme setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchCategories from '../components/results/SearchCategories';

configure({ adapter: new Adapter() });

describe('<SearchCategories />', () => {
  it('renders one button', () => {
    const buttons = shallow(<SearchCategories />);
    expect(buttons.find('button').length).toEqual(5);
  });

  it('each button invokes its respective onClick fn passed down as props', () => {
    const mockCallbackSortByDate = jest.fn();
    const mockCallbackSortByRatings = jest.fn();
    const mockCallbackClearFilter = jest.fn();

    const buttons = shallow(
      <SearchCategories
        onSortByDate={mockCallbackSortByDate}
        onSortByRating={mockCallbackSortByRatings}
        onClearFilter={mockCallbackClearFilter}
      >
        FakeButtons
      </SearchCategories>
    );

    buttons.find('#sort-btn').simulate('click');
    expect(mockCallbackSortByDate.mock.calls.length).toEqual(1);

    buttons.find('#rated-g-btn').simulate('click');
    expect(mockCallbackSortByRatings.mock.calls.length).toEqual(1);

    // buttons.find('#rated-pg-btn').simulate('click');
    // expect(mockCallbackSortByRatings.mock.calls.length).toEqual(2);

    // buttons.find('#rated-r-btn').simulate('click');
    // expect(mockCallbackSortByRatings.mock.calls.length).toEqual(3);

    buttons.find('#clear-btn').simulate('click');
    expect(mockCallbackClearFilter.mock.calls.length).toEqual(1);
  });
});
