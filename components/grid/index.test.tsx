import { render, screen } from '@testing-library/react';
import { Grid } from './index';
import '@testing-library/jest-dom';

jest.mock('../searchBar', () => ({
  SearchBar: function () {
    return <div>SearchBar</div>;
  },
}));

jest.mock('../filter', () => ({
  Filter: function () {
    return <div>Filter</div>;
  },
}));

describe('Grid', () => {
  it('renders the main components', async () => {
    const pokemonList = [
      { name: 'charmander', url: 'url', types: [{ type: { name: 'fire' } }] },
    ];
    render(<Grid pokemonList={pokemonList} pokemonData={[]} />);

    expect(screen.getByText('SearchBar')).toBeInTheDocument();
    expect(screen.getByText('Filter')).toBeInTheDocument();

  });
});
