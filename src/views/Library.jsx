import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllGenres, selectGenreStatus } from '../store/books/bookSlice';
import { fetchGenres } from '../store/books/bookSlice';
import Loader from '../icons/Loader/Loader';
import { Link } from 'react-router-dom';
import IconoBoton2 from '../assets/IconoBoton2.png';

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
  11: 'bg-red-600',
  12: 'bg-yellow-400',
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
      <div className=' flex '>
        <img src={IconoBoton2} className='h-12' />
        <h1 className='font-bold text-5xl text-blue-500'>
          EXPLORÁ LA LIBRERÍA
        </h1>
      </div>
      <div className='flex flex-row flex-wrap m-6 max-w-5xl  justify-center'>
        {genreStatus === 'loading' ? (
          <Loader />
        ) : (
          genres?.map((genre, index) => (
            <Link to={`/home/library/genre/${genre.id}`} key={index}>
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
