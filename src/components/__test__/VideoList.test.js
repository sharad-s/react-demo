import React from 'react';
import { mount } from 'enzyme';

import VideoList from '../VideoList';

let wrapped;

beforeEach(() => {
  const initialState = {
    videos: []
  };


  wrapped = mount(
      <VideoList videos={initialState.videos}/>
  );
});

it('renders without crashing', () => {
  expect(wrapped.render().text()).toContain("VideoList");
});

// it('shows the text for each comment', () => {
//   expect(wrapped.render().text()).toContain('Comment 1');
//   expect(wrapped.render().text()).toContain('Comment 1');
// });

