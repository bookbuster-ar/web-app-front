// src/hooks/useMovies.js
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, selectAllMovies, selectStatus } from '../store/books/moviesSlice';


export function useMovies() {
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);
  const status = useSelector(selectStatus);

  const getMovies = (search) => {
    dispatch(fetchMovies(search));
  };

  return { movies, getMovies, loading: status === 'loading' };
}