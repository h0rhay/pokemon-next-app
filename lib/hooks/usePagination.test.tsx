import { renderHook, act } from '@testing-library/react-hooks';
import { usePagination } from './usePagination';

describe('usePagination', () => {
  const items = [
    { id: 1, name: 'Bulbasaur' },
    { id: 2, name: 'Charmander' },
    { id: 3, name: 'Squirtle' },
    { id: 4, name: 'Pikachu' },
    { id: 5, name: 'Eevee' },
    { id: 6, name: 'Snorlax' },
    { id: 7, name: 'Dragonite' },
    { id: 8, name: 'Mewtwo' },
  ];
  const itemsPerPage = 3;

  it('should return the correct currentItems for the first page', () => {
    const { result } = renderHook(() => usePagination({ items, itemsPerPage }));

    expect(result.current.currentItems).toEqual([
      { id: 1, name: 'Bulbasaur' },
      { id: 2, name: 'Charmander' },
      { id: 3, name: 'Squirtle' },
    ]);
  });

  it('should return the correct currentItems for the second page', () => {
    const { result } = renderHook(() => usePagination({ items, itemsPerPage }));

    act(() => {
      result.current.handlePageChange(2);
    });

    expect(result.current.currentItems).toEqual([
      { id: 4, name: 'Pikachu' },
      { id: 5, name: 'Eevee' },
      { id: 6, name: 'Snorlax' },
    ]);
  });

  it('should return the correct currentItems for the last page', () => {
    const { result } = renderHook(() => usePagination({ items, itemsPerPage }));

    act(() => {
      result.current.handlePageChange(3);
    });

    expect(result.current.currentItems).toEqual([
      { id: 7, name: 'Dragonite' },
      { id: 8, name: 'Mewtwo' },
    ]);
  });
});