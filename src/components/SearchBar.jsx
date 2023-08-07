import { useEffect, useState, useCallback } from 'react';
import debounce from 'just-debounce-it';
import { Books } from './BooksHome';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBooksBySearch,
  selectStatus,
  selectAllBooks,
} from '../store/books/bookSlice';

function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const debouncedGetMovies = useCallback(
    debounce((search) => {
      dispatch(getBooksBySearch(search));
    }, 500),
    [dispatch]
  );

  useEffect(() => {
    if (search === '') {
      setError(null);
      return;
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres');
      return;
    }

    setError(null);
    debouncedGetMovies(search);
  }, [search, debouncedGetMovies]);

  return { search, setSearch, error };
}

const SearchBar = () => {
  const { search, setSearch, error } = useSearch();
  const books = useSelector(selectAllBooks);
  const booksStatus = useSelector(selectStatus);

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  const handleDelete = () => {
    setSearch('');
  };

  return (
    <div>
      <div className='space-x-2 flex items-center ml-15 justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
        <input
          type='text'
          value={search}
          placeholder='Buscá tu libro o autor aquí..'
          onChange={handleChange}
          name='search'
          className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
        />
        {search && (
          <svg
            onClick={handleDelete}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        )}
      </div>
      <br />
      {error && <p>{error}</p>}
      <br />
      <div className='flex justify-center'>
        <div>
          {booksStatus === 'loading' ? <p>Cargando tus libros...</p> : null}
          {booksStatus === 'rejected' ? <p>Ocurrió un error</p> : null}
          {search && <Books books={books} />}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
