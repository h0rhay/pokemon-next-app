import { render } from '@testing-library/react';
import { Img } from './index';

describe('Img', () => {
  it('should render the Img with the correct alt text', () => {
    const image = 'https://example.com/pikachu.png';
    const name = 'Pikachu';
    const { getByAltText } = render(<Img image={image} name={name} />);
    const imgElement = getByAltText(
      `Image of a ${name} pokemon`
    ) as HTMLImageElement;
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toContain('pikachu.png');
  });

  it('should return null if Img prop is not provided', () => {
    const { container } = render(<Img name="Pikachu" image="" />);
    expect(container.firstChild).toBeNull();
  });
});
