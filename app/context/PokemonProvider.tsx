'use client';
import { createContext, useContext, useState } from 'react';

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

interface PokemonContextValue {
  pokemonData: PokemonData[];
  setPokemonData: (data: PokemonData[]) => void;
}

const PokemonContext = createContext<PokemonContextValue>({
  pokemonData: [],
  setPokemonData: () => {},
});

interface PokemonProviderProps {
  children: React.ReactNode;
}

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);

  return (
    <PokemonContext.Provider value={{ pokemonData, setPokemonData }}>
      {children}
    </PokemonContext.Provider>
  );
}

export const usePokemon = () => useContext(PokemonContext);
