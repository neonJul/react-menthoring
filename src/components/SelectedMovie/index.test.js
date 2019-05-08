import React from 'react';
import renderer from 'react-test-renderer';

import SelectedMovie from './index';

it('renders correctly', () => {
  const tree = renderer.create(<SelectedMovie />).toJSON();
  expect(tree).toMatchSnapshot();
});