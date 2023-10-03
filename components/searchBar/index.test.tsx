import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './index';
import '@testing-library/jest-dom';

describe('SearchBar', () => {
  it('renders the label and input', () => {
    render(<SearchBar searchText="" setSearchText={() => {}} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Pikachu, Bulbasaur...')
    ).toBeInTheDocument();
  });

  it('calls setSearchText when input value changes', () => {
    const setSearchText = jest.fn();
    render(<SearchBar searchText="" setSearchText={setSearchText} />);
    const input = screen.getByPlaceholderText('Pikachu, Bulbasaur...');
    fireEvent.change(input, { target: { value: 'Charmander' } });
    expect(setSearchText).toHaveBeenCalledWith('Charmander');
  });
});
