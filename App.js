import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokedexScreen from './src/screens/pokedex.screen';
import PokemonDetailScreen from './src/screens/pokemonDetail.screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={PokedexScreen}
            optons={{title: 'Pokedex'}}
          />
          <Stack.Screen
            name="Pokemon"
            component={PokemonDetailScreen}
            optons={{title: 'Pokemon'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
