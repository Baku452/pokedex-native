import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../src/components/pokeCard/pokecard.component';

test('renders correctly', () => {
  const tree = renderer.create(<SearchBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
