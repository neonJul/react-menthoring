import React from 'react';
import renderer from 'react-test-renderer';

import MainTitle from './index';

it('renders correctly', () => {
  const tree = renderer.create(<MainTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});