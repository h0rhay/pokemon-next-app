import { Heading } from '@/components/heading';
import { Img } from '@/components/image';
import { getPokemon, getPokemonList } from '@/lib/pokemonAPI';
import { capitalizedString } from '@/lib/utils/capitalizedString';

interface PokemonSprites {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

interface PokemonObject {
  sprites: PokemonSprites;
  types: {
    type: {
      name: string;
    };
  }[];
}

export default async function PokemonPage({
  params,
}: {
  params: { pokemon: string };
}) {
  const { pokemon } = params;
  const pokemonObject: PokemonObject = await getPokemon(pokemon);
  return (
    <main className="mx-auto lg:max-w-3xl text-center pb-20 h-screen">
      <article className="mt-12 rounded-lg border border-neutral-50 dark:border-gray-500 px-5 py-12">
        <Heading className="text-4xl text-bold pt-4" size={1} primary={false}>
          {capitalizedString(pokemon)}
        </Heading>
        <div className="relative w-80 h-80 m-4 mx-auto">
          <Img
            image={
              pokemonObject.sprites.other['official-artwork'].front_default
            }
            name={pokemon}
            className="hover:animate-shake"
          />
        </div>
        <h2 className="text-2xl font-bold">Types:</h2>
        <ul className="list-disc list-inside ">
          {pokemonObject.types &&
            pokemonObject.types.map((type: { type: { name: string } }) => {
              return (
                <li key={type.type.name} className="">
                  {type.type.name}
                </li>
              );
            })}
        </ul>
      </article>
    </main>
  );
}

// This function can statically allow nextjs to find all the pokemon from the list, and statically generate them
export async function generateStaticParams() {
  const pokemonPages = await getPokemonList();
  return pokemonPages.map((pokemon) => ({
    pokemon: pokemon.name,
  }));
}
