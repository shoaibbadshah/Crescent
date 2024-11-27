import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function PaginationComponent({ currentPage, totalPages, handlePaginationClick }) {
    const pageRange = 6;
    const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    const endPage = Math.min(startPage + pageRange - 1, totalPages || 1);

    let pageNumbers = [];
    if (endPage >= startPage) {
        pageNumbers = [...Array(endPage - startPage + 1)].map((_, i) => startPage + i);
    }

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                <button
                    className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                    onClick={() => handlePaginationClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <span className="sr-only">Previous</span>
                    <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === pageNumber
                            ? 'bg-indigo-600 text-white'
                            : 'text-gray-900 hover:bg-gray-50'
                            } ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                        onClick={() => handlePaginationClick(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button
                    className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${currentPage === totalPages ? 'opacity-0 pointer-events-none' : ''}`}
                    onClick={() => handlePaginationClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <span className="sr-only">Next</span>
                    <FaChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
            </nav>
        </div>
    );
}
