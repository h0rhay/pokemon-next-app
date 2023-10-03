import { render } from '@testing-library/react';
import { Banner } from './index';
import '@testing-library/jest-dom';

describe('PokemonBanner', () => {
  it('renders the banner Img', () => {
    const { getByAltText } = render(<Banner />);
    const bannerImg = getByAltText('Pokemon Banner image of various pokemon');
    expect(bannerImg).toBeInTheDocument();
  });
  it('renders the heading', () => {
    const { getByRole } = render(<Banner />);
    const heading = getByRole('heading', { name: 'Explorer' });
    expect(heading).toBeInTheDocument();
  });
});
