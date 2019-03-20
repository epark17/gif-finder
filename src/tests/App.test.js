import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

// Enzyme setup file
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// jest.mock('../App.js')

// describe('<App />', () => {
//   it('fetches gifs on search', (done) => {
//     const wrapper = shallow(<App />)
//     setTimeout(() => {
//       wrapper.update();

//       const state = wrapper.instance().state;
//       expect(state.isLoading).toEqual(true);
//       expect(state.query).toEqual('');
//       expect(state.results.length).toEqual(3);

//       expect(wrapper.find('Trending').length).toEqual(1);
//       expect(wrapper.find('searchResults').length).toEqual(0);

//       done();
//     });
//   })
// })
