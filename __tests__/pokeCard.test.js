import React from 'react';
import renderer from 'react-test-renderer';
import PokeCard from '../src/components/pokeCard/pokecard.component';

test('renders correctly', () => {
  const tree = renderer.create(<PokeCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
