import { render, screen } from '@testing-library/react';
import { Card } from './index';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('renders the name and image of the pokemon', () => {
    const name = 'Pikachu';
    const image = 'https://example.com/pikachu.png';
    const types = [{ type: { name: 'electric' } }];
    render(<Card name={name} image={image} types={types} />);
    const pokemonName = screen.getByText('Pikachu');
    const Image = screen.getByAltText(
      `Image of a ${name} pokemon`
    ) as HTMLImageElement;
    expect(pokemonName).toBeInTheDocument();
    expect(Image).toBeTruthy();
    expect(Image.src).toContain('pikachu.png');
  });
});
