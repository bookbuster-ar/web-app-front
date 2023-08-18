import { useEffect, useState, useCallback } from 'react';
import debounce from 'just-debounce-it';
import { Books } from './BooksHome';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBooksBySearch,
  selectStatus,
  selectAllBooks,
  resetBooks
} from '../store/books/bookSlice';
import Delete from '../icons/Delete';
import Search from '../icons/Search';

function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const debouncedGetBooks = useCallback(
    debounce((search) => {
      dispatch(getBooksBySearch(search));
    }, 500),
    [dispatch]
  );

  useEffect(() => {
    if (search.length < 3) {
      setError(null);
      dispatch(resetBooks());
      return;
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres');
      return;
    }

    setError(null);
    debouncedGetBooks(search);
  }, [search, debouncedGetBooks]);

  return { search, setSearch, error };
}

const SearchBar = () => {
  const { search, setSearch, error } = useSearch();
  const books = useSelector(selectAllBooks);
  let booksStatus = useSelector(selectStatus);

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  const handleDelete = () => {
    setSearch('');
  };

  return (
    <div>
      <div className='space-x-2 flex items-center my-9 ml-15 justify-center'>
        <Search />
        <input
          type='text'
          value={search}
          placeholder='Encontrá tu próximo libro'
          onChange={handleChange}
          name='search'
          className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
        />
        {search && <p onClick={handleDelete}><Delete classN={'cursor-pointer'} /></p>}
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
