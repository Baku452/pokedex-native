/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const DetailedCard = ({pokemon}) => {
  const sprites = [
    pokemon.sprites.front_default,
    pokemon.sprites.back_default,
    pokemon.sprites.front_shiny,
    pokemon.sprites.back_shiny,
  ];
  const moves = pokemon.moves.slice(0, 5);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      padding: 20,
      backgroundColor: '#96a8dd',
      margin: 5,
      borderRadius: 10,
    },
    image: {
      width: 200,
      height: 200,
      margin: 'auto',
      alignSelf: 'center',
      resizeMode: 'contain',
    },

    containerTitle: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    spriteImage: {
      width: '25%',
      padding: 25,
      height: 100,
    },
    containerSprites: {
      flex: 1,
      flexDirection: 'row',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 10,
    },
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          resizeMode={'contain'}
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
          }}
        />
        <View style={styles.containerTitle}>
          <Text style={{fontWeight: 'bold'}}># {pokemon.id}</Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              textTransform: 'uppercase',
            }}>
            {pokemon.name}
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Types</Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {pokemon.types.map(typePokemon => (
              <Text key={typePokemon.type.name}>{typePokemon.type.name}</Text>
            ))}
          </View>
          <View>
            <Text style={styles.title}>Peso</Text>
            <Text>{pokemon.weight}</Text>
          </View>
          <View>
            <Text style={styles.title}>Sprites</Text>
            <View style={styles.containerSprites}>
              {sprites.map((value, index) => (
                <Image
                  key={index}
                  style={styles.spriteImage}
                  source={{uri: value}}
                />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.title}>Moves</Text>

            {moves.map(moveObj => (
              <Text key={moveObj.move.name}>{moveObj.move.name}</Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailedCard;
