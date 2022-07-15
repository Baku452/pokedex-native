/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {getPokemon, getPokemons} from '../../api/pokeapi';
import Pokedex from '../components/pokedex/pokedex.component';

const PokedexScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    'https://pokeapi.co/api/v2/pokemon',
  );
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const loadMorePokemons = () => {
    console.log('a');
    console.log(nextPage);
    setCurrentPage(nextPage);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerButtons: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    button: {
      backgroundColor: '#202020',
      width: '50%',
      padding: 20,
      flex: 1,
      alignItems: 'center',
      flexGrow: 0,
      flexShrink: 1,
      flexBasis: 200,
    },
  });
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const pokemonsData = await getPokemons({url: currentPage});
        const promisesPokemon = pokemonsData.results.map(async pokemon => {
          return await getPokemon(pokemon.url);
        });

        const pokemonData = await Promise.all(promisesPokemon);
        setPokemons(pokemonData);
        setNextPage(pokemonsData.next);
        setPrevPage(pokemonsData.previous);
        setLoading(false);
      } catch (error) {}
    };

    fetchPokemons();
  }, [currentPage]);
  useEffect;
  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <Text>Loading Pokemons</Text>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <Pokedex navigation={navigation} pokemons={pokemons} />
          <View style={styles.containerButtons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setCurrentPage(prevPage)}
              title="Prev"
              color="#841584"
              accessibilityLabel="Learn more about this purple button">
              <Text style={{color: '#fff'}}>Previous Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setCurrentPage(nextPage)}
              title="Next"
              color="#841584"
              accessibilityLabel="Learn more about this purple button">
              <Text style={{color: '#fff'}}>Next Page</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export default PokedexScreen;
