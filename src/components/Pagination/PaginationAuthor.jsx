import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCurrentPage,
  getAuthorByPage,
  selectCurrentPage,
  selectTotalPages,
  selectStatus,
  selectError,
  selectAllBooks,
} from '../../store/books/bookSlice';
import { Link } from 'react-router-dom';

const PaginationAuthor = ({ author }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const books = useSelector(selectAllBooks);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAuthorByPage({ author: author, page: currentPage }));
  }, [currentPage, dispatch, author]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setCurrentPage(newPage));
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`text-xl mx-2 ${
            i === currentPage ? 'text-blue-500 font-bold' : 'text-blue-500'
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className='flex flex-col items-center mb-10'>
      <div className='flex items-center justify-center mb-10'>
        <button
          className='text-xl text-blue-500 mr-2'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {renderPageNumbers()}
        <button
          className='text-xl text-blue-500 ml-2'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>

      <div className='w-full px-4'>
        {status === 'loading' ? (
          <p className='text-center'>Cargando libros...</p>
        ) : status === 'failed' ? (
          <p className='text-center text-red-500'>Error: {error}</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {books?.map((book) => (
                <Link to={`/detail/${book.id}`} key={book.id}>
                <div>
                  <img
                    src={book.images.cover}
                    alt={book.title}
                    className='h-72 w-full object-fill'
                  />
                  <p className='text-xs'>{book.author}</p>
                  <h3 className='font-semibold text-sm'>{book.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaginationAuthor;