import React from 'react';
import renderer from 'react-test-renderer';
import DetailedCard from '../src/components/detailedCard/detailedCard.component';

test('renders correctly', () => {
  const tree = renderer.create(<DetailedCard />).toJSON();
  expect(tree).toMatchSnapshot();
});
