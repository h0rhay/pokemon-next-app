import { render, fireEvent } from '@testing-library/react';
import { Filter } from './index';
import '@testing-library/jest-dom';

describe('Filter', () => {
  it('renders all filter buttons', () => {
    const { getByText } = render(
      <Filter filterType="normal" setFilterType={() => {}} setCurrentPage={() => {}} />
    );

    expect(getByText('Normal')).toBeInTheDocument();
    expect(getByText('Grass')).toBeInTheDocument();
    expect(getByText('Rock')).toBeInTheDocument();
    expect(getByText('Fire')).toBeInTheDocument();
    expect(getByText('Electric')).toBeInTheDocument();
    expect(getByText('Ice')).toBeInTheDocument();
    expect(getByText('Fighting')).toBeInTheDocument();
    expect(getByText('Ground')).toBeInTheDocument();
    expect(getByText('Flying')).toBeInTheDocument();
    expect(getByText('Psychic')).toBeInTheDocument();
    expect(getByText('Bug')).toBeInTheDocument();
    expect(getByText('Dragon')).toBeInTheDocument();
    expect(getByText('Ghost')).toBeInTheDocument();
    expect(getByText('Poison')).toBeInTheDocument();
    expect(getByText('Steel')).toBeInTheDocument();
    expect(getByText('Fairy')).toBeInTheDocument();
  });

  it('calls setFilterType when a filter button is clicked', () => {
    const setFilterType = jest.fn();
    const { getByText } = render(
      <Filter filterType="normal" setFilterType={setFilterType} setCurrentPage={() => {}} />
    );

    fireEvent.click(getByText('Grass'));
    expect(setFilterType).toHaveBeenCalledWith('grass');

    fireEvent.click(getByText('Rock'));
    expect(setFilterType).toHaveBeenCalledWith('rock');
  });
});
