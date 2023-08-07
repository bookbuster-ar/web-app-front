import SearchBar from '../components/SearchBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllGenres, selectGenreStatus } from '../store/books/bookSlice';
import { fetchGenres } from '../store/books/bookSlice';

const Search = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectAllGenres);
  const genreStatus = useSelector(selectGenreStatus);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className='bg-slate-50  h-screen flex flex-col items-center space-y-12 p-4'>
      <div className='w-10/12 flex justify-center items-center'>
        <SearchBar />
      </div>
      <div className='flex flex-col align-items box-border'>
        {genreStatus === 'loading' ? (
          <p>Loading...</p>
        ) : (
          genres?.map((genre, index) => (
            <div key={index} className='text-black text-base rounded-md pl-2 w-96 bg-transparent flex justify-center border outline-none m-1 p-2 hover:border-blue-600 hover:text-blue-600 cursor-pointer'>
              {genre.name}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
