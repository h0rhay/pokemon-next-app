'use client';
import { Grid } from '@/components/grid';
import { useEffect } from 'react';
import { usePokemon } from './context/PokemonProvider';
import { getPokemonList, getPokemon } from '@/lib/pokemonAPI';
import { Banner } from '@/components/banner';

// write grid props interface here
// add it to the type error at bottom of this file
interface PokemonList {
  name: string;
  url: string;
}

interface PokemonData {
  name: string;
  url: string;
  image: string;
  types: {
    type: {
      name: string;
    };
  }[];
}

async function getAppData() {
  const pokemonList = await getPokemonList();
  const pokemonData = await Promise.all(
    pokemonList.map(async (pokemon) => {
      const data = await getPokemon(pokemon.name);
      const { name, sprites, types } = data;
      const image = sprites.other['official-artwork'].front_default;
      return { name, url: '', image, types };
    })
  );
  return {
    props: {
      pokemonList,
      pokemonData,
    },
  };
}

export default function Home() {
  const { pokemonData, setPokemonData } = usePokemon();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAppData();
      if (result.props.pokemonData) {
        setPokemonData(result.props.pokemonData);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Banner />
      <Grid pokemonData={pokemonData} />
    </>
  );
}
