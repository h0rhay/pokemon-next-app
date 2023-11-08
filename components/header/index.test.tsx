import { render, screen } from '@testing-library/react';
import { Header } from './index';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('renders the home link', () => {
    render(<Header />);
    const homeLink = screen.getByTitle('homeLink');
    expect(homeLink).toBeInTheDocument();
  });

  it('renders the home icon', () => {
    render(<Header />);
    const homeIcon = screen.getByTitle('iconHome');
    expect(homeIcon).toBeInTheDocument();
  });

  it('renders the theme toggle', () => {
    render(<Header />);
    const themeToggle = screen.getByRole('button');
    expect(themeToggle).toBeInTheDocument();
  });
});
