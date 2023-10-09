const POKEMON_API: string = 'https://pokeapi.co/api/v2/';

interface Pokemon {
  name: string;
  url: string;
  types: {
    type: {
      name: string;
    };
  }[];
}

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export async function getPokemonList(): Promise<Pokemon[]> {
  const response = await fetch(`${POKEMON_API}pokemon?limit=151&offset=0`);
  const data: PokemonListResponse = await response.json();
  return data.results;
}

export async function getPokemon(name: string) {
  const response = await fetch(`${POKEMON_API}pokemon/${name}`);
  const data = await response.json();
  return data;
}
