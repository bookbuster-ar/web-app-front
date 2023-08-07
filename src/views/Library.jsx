import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllGenres, selectGenreStatus } from '../store/books/bookSlice';
import { fetchGenres } from '../store/books/bookSlice';
import { Link } from 'react-router-dom';

const colorClasses = {
  0: 'bg-red-400',
  1: 'bg-yellow-400',
  2: 'bg-green-400',
  3: 'bg-blue-400',
  4: 'bg-indigo-400',
  5: 'bg-purple-400',
  6: 'bg-pink-400',
  7: 'bg-gray-400',
  8: 'bg-yellow-600',
  9: 'bg-green-600',
  10: 'bg-blue-400',
  11: 'bg-lime-400',
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
