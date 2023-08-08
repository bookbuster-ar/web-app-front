import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllGenres, selectGenreStatus } from '../store/books/bookSlice';
import { fetchGenres } from '../store/books/bookSlice';
import { Link } from 'react-router-dom';

const colorClasses = {
  0: 'bg-red-300',
  1: 'bg-blue-500',
  2: 'bg-green-500',
  3: 'bg-red-600',
  4: 'bg-yellow-400',
  5: 'bg-red-300',
  6: 'bg-yellow-400',
  7: 'bg-red-600',
  8: 'bg-red-300',
  9: 'bg-green-500',
  10: 'bg-blue-500',
};

const Library = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectAllGenres);
  const genreStatus = useSelector(selectGenreStatus);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className='bg-white h-screen flex flex-col items-center justify-center '>
      <h1 className='font-bold text-4xl m-6'>Explorá la librería</h1>
      <div className='flex flex-row flex-wrap m-6 max-w-5xl justify-center'>
        {genreStatus === 'loading' ? (
          <p>Loading...</p>
        ) : (
          genres?.map((genre, index) => (
            <Link to={`/home/library/genre/${genre.id}`}>
              <button
                className={`w-36 h-36 ${colorClasses[index]} m-2 rounded-2xl flex justify-center text-gray-50 cursor-pointer shadow-gray-400 shadow-lg`}
              >
                {genre.name}
              </button>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Library;
