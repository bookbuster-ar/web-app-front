import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGenre,
  selectSingleGenre,
  selectGenreStatus,
} from '../store/books/bookSlice';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import icono from '../assets/Footer-BookBuster.png';

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
      <div className='w-full h-36 flex items-center my-8'>
        <img src={icono} alt='icono' className='w-12 ml-20' />
        <h1 className='font-bold text-5xl text-blue-700 ml-4'>
          {singleGenre.genre}
        </h1>
      </div>

      <div className='h-96 w-11/12 mb-20 flex flex-col justify-center pb-1 pl-24 border border-none rounded-xl shadow-xl'>
        <p className='font-bold text-blue-500 text-2xl'>
          RECOMENDACIONES DE LA SEMANA
        </p>
        <div className='max-[640px]:flex-wrap h-96 w-11/12 gap-3 my-2 flex min-[640px]:overflow-x-scroll'>
          {singleGenreStatus === 'loading' ? (
            <p>Loading...</p>
          ) : (
            singleGenre.books?.map((book, index) => {
              return (
                <Link to={`/detail/${book.id}`} key={index}>
                  <div className='h-72 w-36 text-sm my-4'>
                    <img
                      className='h-48 w-40 object-fill'
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

      <div className='h-96 w-11/12 mb-20 flex flex-col justify-center pb-1 pl-24 border border-none rounded-xl shadow-xl'>
        <p className='font-bold text-blue-500 text-2xl'>
          LOS MÁS POPULARES AHORA
        </p>
        <div className='max-[640px]:flex-wrap h-96 w-11/12 gap-3 my-2 flex min-[640px]:overflow-x-scroll'>
          {singleGenreStatus === 'loading' ? (
            <p>Loading...</p>
          ) : (
            singleGenre.books?.map((book, index) => {
              return (
                <Link to={`/detail/${book.id}`} key={index}>
                  <div className='h-72 w-36 text-sm my-4'>
                    <img
                      className='h-48 w-40 object-fill'
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
    </div>
  );
};

export default Genre;
