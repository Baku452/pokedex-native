import React from 'react';
import renderer from 'react-test-renderer';
import Pokedex from '../src/components/pokeCard/pokecard.component';

test('renders correctly', () => {
  const tree = renderer.create(<Pokedex />).toJSON();
  expect(tree).toMatchSnapshot();
});
