import React from 'react';
import { mount } from 'enzyme';

import SearchBar from '../SearchBar';

let wrapped;

beforeEach(() => {
//   const initialState = {
//     value: ''
//   };

  wrapped = mount(
      <SearchBar />
  );
});

it('renders without crashing', () => {
  expect(wrapped.render().text()).toContain("");
});

// it('shows the text for each comment', () => {
//   expect(wrapped.render().text()).toContain('Comment 1');
//   expect(wrapped.render().text()).toContain('Comment 1');
// });

