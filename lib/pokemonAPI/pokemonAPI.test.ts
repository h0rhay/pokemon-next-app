import { getPokemonList, getPokemon } from '.';

jest.mock('./index.ts', () => ({
  getPokemonList: jest.fn(),
  getPokemon: jest.fn(),
}));

describe('getPokemonList', () => {
  it('should return an array of 151 Pokemon', async () => {
    const pokemonList = Array.from({ length: 151 }, (_, index) => ({
      name: `pokemon${index + 1}`,
      url: `https://pokeapi.co/api/v2/pokemon/${index + 1}/`,
    }));
    (getPokemonList as jest.Mock).mockResolvedValue(pokemonList);
    expect(await getPokemonList()).toEqual(pokemonList);
  });

  it('should return Pokemon with name and url properties', async () => {
    const pokemonList = Array.from({ length: 151 }, (_, index) => ({
      name: `pokemon${index + 1}`,
      url: `https://pokeapi.co/api/v2/pokemon/${index + 1}/`,
    }));
    (getPokemonList as jest.Mock).mockResolvedValue(pokemonList);
    expect(await getPokemonList()).toContainEqual(
      expect.objectContaining({
        name: 'pokemon1',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      })
    );
  });
});

describe('getPokemon', () => {
  it('should return Pokemon data for a given name', async () => {
    const pokemon = {
      name: 'bulbasaur',
      id: 1,
      types: [],
      sprites: {},
    };
    (getPokemon as jest.Mock).mockResolvedValue(pokemon);
    expect(await getPokemon('bulbasaur')).toEqual(pokemon);
  });
});
