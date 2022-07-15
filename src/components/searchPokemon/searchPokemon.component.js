import React from 'react';

import {TextInput, StyleSheet} from 'react-native';

const SearchBar = ({pokemonFilter, setPokemonFilter}) => {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
  });

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={setPokemonFilter}
        value={pokemonFilter}
        placeholder="Name of pokemon"
        keyboardType="text"
      />
    </>
  );
};

export default SearchBar;
