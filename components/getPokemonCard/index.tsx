'use client';
import { useState, useEffect } from 'react';
import { Card } from '../card';
import { getPokemon } from '@/lib/pokemonAPI';

interface PokemonObject {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export function GetPokemonCard({ name }: { name: string }) {
  const [pokemonData, setPokemonData] = useState<PokemonObject | null>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const data = await getPokemon(name);
      setPokemonData(data);
    };

    fetchPokemonData();
  }, [name]);

  return (
    <Card
      name={name}
      image={pokemonData?.sprites?.front_default ?? ''}
      types={pokemonData?.types ?? []}
    />
  );
}
