import { useEffect, useRef, useState, useCallback } from "react";
import { useMovies } from '../hooks/useMovies';
import { Movies } from "./Movies";
import debounce from "just-debounce-it";
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../store/books/moviesSlice';

function useSearch() {
  const [hasSearched, setHasSearched] = useState(false)
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);
  const dispatch = useDispatch();

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      dispatch(fetchMovies(search));
      
    }, 500),
    [dispatch]
  );

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un numero");
      return;
    }

    if (search.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
    debouncedGetMovies(search);
    setHasSearched(true)
  }, [search, debouncedGetMovies, hasSearched]);

  return { search, setSearch, error, hasSearched, setHasSearched };
}

const SearchBar = () => {
  const { search, setSearch, error, hasSearched, setHasSearched } = useSearch();
  const { movies, loading } = useMovies();

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
  };

  const handleDelete = () => {
    setSearch('')
    setHasSearched(false)
  }

  return (
    <div className=''>
      <div className='space-x-2 flex items-center ml-15 justify-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        />
      </svg>
      <input
        placeholder='Buscá tu libro o autor aquí..'
        value={search}
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
        stroke-width='1.5'
        stroke='currentColor'
        class='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      )}
      </div>
      <br />
      {error && <p>{error}</p>}
      <br />
      <div className='flex justify-center'>
      <div >
        {loading ? <p>Cargando ... </p> : null}
        {search && <Movies movies={movies}/>}
      </div>
      </div>
    </div>
  );
};

export default SearchBar;