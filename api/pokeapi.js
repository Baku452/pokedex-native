export const getPokemons = async ({url}) => {
  try {
    // const url = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getPokemon = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
};
