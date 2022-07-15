import React from 'react';

import DetailedCard from '../components/detailedCard/detailedCard.component';

const PokemonDetailScreen = ({route}) => {
  const {pokemon} = route.params;

  return (
    <>
      <DetailedCard pokemon={pokemon} />
    </>
  );
};

export default PokemonDetailScreen;
