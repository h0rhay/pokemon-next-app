'use client';
import { useState } from 'react';
import { Filter } from '../filter';
import { SearchBar } from '../searchBar';
import { GetPokemonCard } from '../getPokemonCard';
import { Pagination } from '../pagination';
import { usePokemon } from '@/app/context/PokemonProvider';

export interface Pokemon {
  name: string;
  url: string;
  types: {
    type: {
      name: string;
    };
  }[];
}

interface GridProps {
  pokemonData: Pokemon[];
  pokemonList: {
    name: string;
    url: string;
    types: {
      type: {
        name: string;
      };
    }[];
  }[];
}

export function Grid({ pokemonData }: GridProps): JSX.Element {
  const [searchText, setSearchText] = useState('');
  const [filterType, setFilterType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // filter pokemon by type
  const filterByType = (pokemonData: Pokemon[], type: string) => {
    if (!pokemonData) {
      return [];
    }
    const filteredList = pokemonData.filter((pokemon) =>
      pokemon.types.some((t) => t.type.name === type)
    );
    return filteredList;
  };
  const filteredPokemonList = filterType
    ? filterByType(pokemonData, filterType)
    : pokemonData;

  // search pokemon by name
  const searchedPokemonList = filteredPokemonList
  ?
  filteredPokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText.toLowerCase())
  )
  : [];

  // get current items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedPokemonList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // get total pages for pagination
  const totalPages = Math.ceil(searchedPokemonList.length / itemsPerPage);

  // handle page change for pagination
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="mx-auto lg:max-w-5xl">
        <h3 className={`text-2xl pb-4 text-center`}>Name search:</h3>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </section>
      <section className="mx-auto lg:max-w-4xl">
        <h3 className="text-2xl pt-12 pb-4 text-center">Pokemon types:</h3>
        <Filter
          filterType={filterType}
          setFilterType={setFilterType}
          setCurrentPage={setCurrentPage}
        />
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
