import React, { useEffect, useState } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  const handlePageChange = (page: number) => {
    onPageChange(page);
    setVisiblePages(getVisiblePages(page, totalPages));
  };

  const getVisiblePages = (selectedPage: number, totalPages: number) => {
    const maxVisiblePages = 5; // Adjust as needed
    let visiblePages = [];

    if (totalPages <= maxVisiblePages) {
      visiblePages = [...Array(totalPages).keys()].map((i) => i + 1);
    } else {
      let startPage = Math.max(
        selectedPage - Math.floor(maxVisiblePages / 2),
        1
      );
      const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = endPage - maxVisiblePages + 1;
      }

      visiblePages = [...Array(endPage - startPage + 1)].map(
        (i) => startPage + i
      );
    }

    return visiblePages;
  };

  useEffect(() => {
    setVisiblePages(getVisiblePages(currentPage, totalPages));
  }, [currentPage, totalPages]);

  return (
    <div className='pagination'>
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      {visiblePages.map((page) => (
        <button
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
