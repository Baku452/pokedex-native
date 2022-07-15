/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  View,
  ActivityIndicator,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

const PokeCard = ({pokemon, navigation}) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      backgroundColor: '#272a33',
      width: 150,
      margin: 5,
      borderRadius: 10,
    },
    image: {
      margin: 'auto',
      width: 66,
      height: 58,
    },
  });
  return (
    <>
      {pokemon ? (
        <TouchableHighlight
          onPress={() => navigation.navigate('Pokemon', {pokemon})}>
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: pokemon.sprites.front_default}}
            />
            <Text style={{color: '#fff'}}># {pokemon.id}</Text>
            <Text style={{color: '#fff'}}>{pokemon.name}</Text>
          </View>
        </TouchableHighlight>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </>
  );
};

export default PokeCard;
