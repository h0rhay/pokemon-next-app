import { useState } from 'react';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [page, setPage] = useState(currentPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const button = e.currentTarget.getAttribute('data-button');
    if (button === 'previous') {
      handlePageChange(page - 1);
    } else if (button === 'next') {
      handlePageChange(page + 1);
    }
  };

  return (
    <nav className="mx-auto max-w-xl mt-8">
      <ul className="pagination flex items-center">
        <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
          <a
            onClick={(e) => handleButtonClick(e)}
            href="#"
            className="page-link"
            aria-label="Previous"
            data-button="previous"
          >
            <ChevronLeftCircle size={24} />
          </a>
        </li>
        <li className="page-item flex-grow text-center">
          <a href="#" className="page-link">
            {`Page ${page} of ${totalPages}`}
          </a>
        </li>
        <li
          className={`page-item ${
            page === totalPages ? 'disabled' : ''
          } ml-auto`}
        >
          <a
            onClick={(e) => handleButtonClick(e)}
            href="#"
            className="page-link"
            aria-label="Next"
            data-button="next"
          >
            <ChevronRightCircle size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
