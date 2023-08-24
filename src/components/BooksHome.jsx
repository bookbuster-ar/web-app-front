import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCurrentPage,
  selectCurrentPage,
  selectTotalPages,
} from '../store/books/bookSlice';

export function ListOfBooks({ books }) {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

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
    <div>
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

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {books.map((book) => (
          <Link to={`/detail/${book.id}`} key={book.id}>
            <div className='flex flex-col items-center m-2'>
              <img
                src={book.images.cover}
                alt={book.title}
                className='h-3/4 w-40 object-cover'
              />
              <p className='text-xs'>{book.author}</p>
              <h3 className='font-semibold text-sm'>{book.title}</h3>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export function Books({ books }) {
  const hasBooks = books?.length > 0;

  return hasBooks ? <ListOfBooks books={books} /> : '';
}
