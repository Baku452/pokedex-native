import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {getPokemon, getPokemons} from '../../api/pokeapi';
import Pokedex from '../components/pokedex/pokedex.component';

const PokedexScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState(null);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const pokemonsData = await getPokemons();
        const promisesPokemon = pokemonsData.results.map(async pokemon => {
          return await getPokemon(pokemon.url);
        });

        const pokemonData = await Promise.all(promisesPokemon);
        setPokemons(pokemonData);
        setLoading(false);
      } catch (error) {}
    };
    fetchPokemons();
  }, []);
  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <Text>Loading Pokemons</Text>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <Pokedex navigation={navigation} pokemons={pokemons} />
      )}
    </>
  );
};

export default PokedexScreen;
