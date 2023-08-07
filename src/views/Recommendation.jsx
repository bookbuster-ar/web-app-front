import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllGenres, selectGenreStatus } from '../store/books/bookSlice';
import { fetchGenres } from '../store/books/bookSlice';

const Recommendation = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectAllGenres);
  const genreStatus = useSelector(selectGenreStatus);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div>
      <div className='text-center h-52 flex justify-center items-center'>
        <div>
          <h2 className='text-3xl font-bold'>
            Encontraremos el libro indicado para vos...
          </h2>
          <br />
          <h4>
            Pero antes de continuar, ¿por qué no respondes unas preguntas?
          </h4>
        </div>
      </div>

      <div>
        <div className='h-28 w-2/5 ml-20'>
          <h2 className='text-2xl font-bold mb-2'>
            ¿Preferís un libro que esté en tendencia o te animas a algo
            desconocido para el gran público?
          </h2>
          {/* <input type='text' className="rounded"/> */}
          <select className='w-80 h-10 border border-gray-400 rounded-lg'>
            <option></option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <br />
        <div className='h-28 w-2/5 ml-20'>
          <h2 className='text-2xl font-bold mb-2'>
            ¿Tenés tiempo para leer algo grande o preferís un libro corto?
          </h2>
          {/* <input type='text' className="rounded"/> */}
          <select className='w-80 h-10 border border-gray-400 rounded-lg'>
            <option></option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <br />
        <div className='h-28 w-2/5 ml-20'>
          <h2 className='text-2xl font-bold mb-2'>
            ¿Preferís autores latinoamericanos o de otras partes del mundo?
          </h2>
          {/* <input type='text' className="rounded"/> */}
          <select className='w-80 h-10 border border-gray-400 rounded-lg'>
            <option></option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <br />
        <div className='ml-20 w-2/5'>
          <h2 className='text-2xl font-bold mb-2'>
            ¿Qué géneros te interesan?
          </h2>
          <br />
          <div className='flex flex-wrap gap-3'>
            {genreStatus === 'loading' ? (
              <p>Loading...</p>
            ) : (
              genres?.map((genre) => (
                <button className='flex justify-center items-center p-2 border border-blue-500 rounded-lg w-auto focus:text-white focus:outline-none focus:bg-blue-500'>
                  {genre.name}
                </button>
              ))
            )}
          </div>
        </div>

        <div className=' flex justify-center items-center h-40 pt-'>
          <button className='bg-blue-500 rounded-lg p-3 text-white focus:bg-blue-700'>
            CONTINUAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
