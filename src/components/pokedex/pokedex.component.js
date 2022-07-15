import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  VirtualizedList,
  SafeAreaView,
  FlatList,
} from 'react-native';
import PokeCard from '../pokeCard/pokecard.component';
import SearchBar from '../searchPokemon/searchPokemon.component';

const Pokedex = ({navigation, pokemons}) => {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 5,
      flexGrow: 1,
      width: '100%',
      margin: 'auto',
      justifyContent: 'center',
      backgroundColor: '#0a0521',
    },
  });

  return (
    <>
      <SearchBar
        pokemonFilter={selectedPokemon}
        setPokemonFilter={setSelectedPokemon}
      />
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id}
          data={pokemons}
          contentContainerStyle={{
            alignItems: 'center',
            margin: 'auto',
          }}
          renderItem={({item}) =>
            item.name.includes(selectedPokemon) && (
              <PokeCard pokemon={item} navigation={navigation} />
            )
          }
        />
      </View>
    </>
  );
};

export default Pokedex;
