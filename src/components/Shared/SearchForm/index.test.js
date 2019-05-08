import React from 'react';
import renderer from 'react-test-renderer';

import SearchForm from './index';

it('renders correctly', () => {
  const tree = renderer.create(<SearchForm />).toJSON();
  expect(tree).toMatchSnapshot();
});