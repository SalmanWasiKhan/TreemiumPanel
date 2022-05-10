import useSearchParams from '../../../hooks/useSearchParams';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const Pagination = ({
  totalPages,
  noOfButtons = 5,
  showNext = true,
  showPrevious = true,
}) => {
  const { search, setSearchParam } = useSearchParams();

  const currentPage = parseInt(parseInt(search.page) || 1);

  const buttonNumbers = [];
  if (totalPages > noOfButtons) {
    let start = currentPage - Math.floor((noOfButtons - 1) / 2);
    let end = start + noOfButtons - 1;

    if (start < 1) {
      start = 1;
      end = start + noOfButtons - 1;
    } else if (end > totalPages) {
      end = totalPages;
      start = end - noOfButtons + 1;
    }

    for (let i = start; i <= end; i++) {
      buttonNumbers.push(i);
    }
  } else {
    for (let i = 1; i <= totalPages; i++) {
      buttonNumbers.push(i);
    }
  }

  const hasNext = currentPage < totalPages;
  const hasPrevious = currentPage > 1;

  return (
    <div className="flex items-center justify-center">
      {showPrevious && (
        <button
          onClick={() => {
            setSearchParam('page', currentPage - 1);
          }}
          className="mr-2 p-2 transition hover:text-primary disabled:text-muted"
          disabled={!hasPrevious}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
      )}

      {buttonNumbers.map((number) => {
        const page = number;
        const isActive = currentPage === page;
        const isDisabled = page > totalPages;
        const className = isActive
          ? 'bg-primary text-white'
          : 'bg-white text-primary';
        const onClick = isDisabled ? null : () => setSearchParam('page', page);
        return (
          <button
            key={number}
            className={`${className} mx-2 flex h-10 w-10 items-center justify-center rounded-lg `}
            onClick={onClick}
          >
            {page}
          </button>
        );
      })}

      {showNext && (
        <button
          onClick={() => {
            setSearchParam('page', currentPage + 1);
          }}
          className="ml-2 p-2 transition hover:text-primary disabled:text-muted"
          disabled={!hasNext}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default Pagination;
