import '../app/globals.css';
import { Banner } from '@/components/banner';
import { Grid } from '@/components/grid';
import { getPokemonList } from '@/lib/pokemonAPI';

interface PokemonData {
  name: string;
  url: string;
  types: {
    type: {
      name: string;
    };
  }[];
}

export default async function Home() {
  const pokemonList: PokemonData[] = await getPokemonList();
  return (
    <>
      <Banner />
      <Grid pokemonList={pokemonList} />
    </>
  );
}
