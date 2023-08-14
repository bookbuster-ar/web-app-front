import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGenre,
  selectSingleGenre,
  selectGenreStatus,
} from '../store/books/bookSlice';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Genre = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleGenre = useSelector(selectSingleGenre);
  const singleGenreStatus = useSelector(selectGenreStatus);

  useEffect(() => {
    dispatch(fetchGenre(id));
  }, [dispatch, id]);

  return (
    <div className='h-full flex flex-col items-center'>
      <div className='bg-gray-500 w-full h-36 flex justify-center items-center mb-16'>
        <h1 className='font-bold text-4xl text-white'>{singleGenre.genre}</h1>
      </div>
      <div className='h-96 w-11/12 flex pt-4 gap-3 scroll-smooth snap-mandatory overflow-x-scroll mb-40'>
        {singleGenreStatus === 'loading' ? (
          <p>Loading...</p>
        ) : (
          singleGenre.books?.map((book) => {
            return (
              <Link to={`/detail/${book.id}`}>
                <div className='h-80 w-44 text-sm'>
                  <img
                    className='h-64 w-44 object-fill'
                    src={book.images.cover}
                  />
                  <h2>{book.author}</h2>
                  <h2 className='font-bold'>{book.title}</h2>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Genre;
