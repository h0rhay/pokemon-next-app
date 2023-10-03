import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from './index';
import { useTheme } from 'next-themes';
import '@testing-library/jest-dom';

jest.mock('next-themes', () => ({
  useTheme: jest.fn().mockReturnValue({ theme: 'light', setTheme: jest.fn() }),
}));

describe('ThemeToggle', () => {
  it('should render the button', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', {
      name: 'Toggle Light/Dark Mode',
    });
    expect(button).toBeInTheDocument();
  });

  it('calls setTheme with the correct theme value when the button is clicked', () => {
    const setTheme = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({ theme: 'light', setTheme });
    render(<ThemeToggle />);
    const button = screen.getByRole('button', {
      name: 'Toggle Light/Dark Mode',
    });
    fireEvent.click(button);
    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});
