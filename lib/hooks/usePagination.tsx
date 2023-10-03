import { useState } from 'react';

interface PaginationProps {
  items: any[];
  itemsPerPage: number;
}

interface PaginationReturn {
  currentItems: any[];
  handlePageChange: (pageNumber: number) => void;
}

export function usePagination({ items, itemsPerPage }: PaginationProps): PaginationReturn {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return { currentItems, handlePageChange };
}