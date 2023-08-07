import { useEffect } from 'react';
import { fetchGenre } from '../store/books/bookSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSingleGenre, selectGenreStatus } from '../store/books/bookSlice';
import { useParams } from 'react-router-dom';

const Genre = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleGenre = useSelector(selectSingleGenre);
  const singleGenreStatus = useSelector(selectGenreStatus);

  useEffect(() => {
    dispatch(fetchGenre(id));
  }, [dispatch, id]);
  console.log(singleGenreStatus);
  return (
    <div className='bg-red-200 h-3/6 '>
      <div>
        <h1 className='font-bold text-4xl text-white'>{singleGenre.genre}</h1>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {singleGenreStatus === 'loading' ? (
          <p>Loading...</p>
        ) : (
          singleGenre.books?.map((book) => {
            return (
              <div>
                <div>
                  <h1>{book.title}</h1>
                  <h2>{book.author}</h2>
                  <img
                    className='h-72 w-3/4 object-cover'
                    src={book.images.cover}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Genre;
