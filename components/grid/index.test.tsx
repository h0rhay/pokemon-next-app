import { render, screen } from '@testing-library/react';
import { Grid } from './index';
import '@testing-library/jest-dom';

jest.mock('../../lib/pokemonAPI', () => ({
  getPokemon: jest.fn().mockResolvedValue({
    types: [{ type: { name: 'fire' } }],
  }),
}));

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

jest.mock('../card', () => ({
  Card: function () {
    return <div>Card</div>;
  },
}));

describe('Grid', () => {
  it('renders the main components', async () => {
    const pokemonList = [
      { name: 'charmander', url: 'url', types: [{ type: { name: 'fire' } }] },
    ];
    render(<Grid pokemonList={pokemonList} />);

    expect(screen.getByText('SearchBar')).toBeInTheDocument();
    expect(screen.getByText('Filter')).toBeInTheDocument();
    expect(await screen.findByText('Card')).toBeInTheDocument();
  });
});
