import { render, screen } from '@testing-library/react';
import { Heading } from './index';
import '@testing-library/jest-dom';

describe('Heading', () => {
  it('renders the heading with the correct text', () => {
    render(
      <Heading size={1} className="test-class" primary={true}>
        Test Heading
      </Heading>
    );
    const headingElement = screen.getByRole('heading', {
      name: /Test Heading/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the primary heading with two elements', () => {
    render(
      <Heading size={1} className="test-class" primary={true}>
        Test Heading
      </Heading>
    );
    const headingElements = screen.getAllByText(/Test Heading/i);
    expect(headingElements.length).toBe(2);
  });

  it('renders non-primary heading with one element', () => {
    render(
      <Heading size={1} className="test-class" primary={false}>
        Test Heading
      </Heading>
    );
    const headingElements = screen.getAllByText(/Test Heading/i);
    expect(headingElements.length).toBe(1);
  });
});
