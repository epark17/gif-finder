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
    const mockCallBackSortByDate = jest.fn();
    // const mockCallBackFilterByRatings = jest.fn();
    const mockCallBackClearFilter = jest.fn();

    const buttons = shallow(
      <SearchCategories
        onSortByDate={mockCallBackSortByDate}
        // onFilterByRatings={mockCallBackFilterByRatings}
        onClearFilter={mockCallBackClearFilter}
      >
        FakeButtons
      </SearchCategories>
    );

    buttons.find('#sort-btn').simulate('click');
    expect(mockCallBackSortByDate.mock.calls.length).toEqual(1);

    // buttons.find('#rating-btn').simulate('click');
    // buttons.find('#rated-g-btn').simulate('click');
    // expect(mockCallBackFilterByRatings.mock.calls.length).toEqual(2);

    buttons.find('#clear-btn').simulate('click');
    expect(mockCallBackClearFilter.mock.calls.length).toEqual(1);
  });
});
