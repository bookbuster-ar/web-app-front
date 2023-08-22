import SearchBar from '../components/SearchBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGenres } from '../store/books/bookSlice';

const Search = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className=' h-screen flex flex-col items-center space-y-12 p-4'>
      <div className='w-10/12 flex justify-center items-center mb-6'>
        <SearchBar />
      </div>
    </div>
  );
};

export default Search;
