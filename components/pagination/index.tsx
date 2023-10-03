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

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
        <li className="page-item">
          <button
            onClick={handleButtonClick}
            className="page-link"
            aria-label="Previous"
            data-button="previous"
            disabled={page === 1}
            style={{ opacity: page === 1 ? 0.5 : 1 }}
          >
            <ChevronLeftCircle size={24} />
          </button>
        </li>
        <li className="page-item flex-grow text-center">
          <p className="page-link">
            {`Page ${page} of ${totalPages}`}
          </p>
        </li>
        <li className="page-item ml-auto">
          <button
            onClick={(e) => handleButtonClick(e)}
            className="page-link"
            aria-label="Next"
            data-button="next"
            disabled={page === totalPages}
            style={{ opacity: page === totalPages ? 0.5 : 1 }}
          >
            <ChevronRightCircle size={24} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
