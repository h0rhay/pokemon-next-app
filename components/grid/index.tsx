'use client';

import { useState, useEffect } from 'react';
import { getPokemon } from '@/lib/pokemonAPI';
import { Filter } from '../filter';
import { SearchBar } from '../searchBar';
import { GetPokemonCard } from '../getPokemonCard';
import { Pagination } from '../pagination';

interface Pokemon {
  name: string;
  url: string;
  types: {
    type: {
      name: string;
    };
  }[];
}

interface GridProps {
  pokemonList: Pokemon[];
}

export function Grid({ pokemonList }: GridProps) {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);
  const [filterType, setFilterType] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredPokemonList.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredPokemonList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const filteredList = pokemonList.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filterType) {
      const fetchPokemonTypes = async () => {
        const pokemonTypes = await Promise.all(
          filteredList.map(async (pokemon: Pokemon) => {
            const data = await getPokemon(pokemon.name);
            return data.types.map(
              (type: { type: { name: string } }) => type.type.name
            );
          })
        );
        setFilteredPokemonList(
          filteredList.filter((pokemon: Pokemon, index) =>
            pokemonTypes[index].includes(filterType)
          )
        );
      };
      fetchPokemonTypes();
    } else {
      setFilteredPokemonList(filteredList);
    }
  }, [searchText, pokemonList, filterType]);

  return (
    <>
      <section className="mx-auto lg:max-w-5xl">
        <h3 className={`text-2xl pb-2 text-center`}>Name search:</h3>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </section>
      <section className="mx-auto lg:max-w-4xl">
        <h3 className="text-2xl pt-12 pb-4 text-center">Pokemon types:</h3>
        <Filter filterType={filterType} setFilterType={setFilterType} />
      </section>
      <section className="mx-auto lg:max-w-5xl mb4 pb-20">
        <h2 className="text-3xl pt-12 pb-4 text-center font-bold">
          Your Collection:
        </h2>
        {currentItems && currentItems.length > 0 ? (
          <div className="mb-32 grid text-center lg:mb-0 md:grid-cols-3">
            {currentItems.map((pokemon: Pokemon, i) => (
              <GetPokemonCard name={pokemon.name} key={`${i}-pokemon`} />
            ))}
          </div>
        ) : (
          <div className="my-32 grid text-center lg:mb-0">
            <p className="text-2xl font-bold">No results</p>
          </div>
        )}
        {filteredPokemonList && filteredPokemonList.length > itemsPerPage && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredPokemonList.length}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </section>
    </>
  );
}
