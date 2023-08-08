import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBookByDetail,
  selectDetail,
  selectDetailStatus,
} from '../store/books/bookSlice';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const detail = useSelector(selectDetail);
  const status = useSelector(selectDetailStatus);

  useEffect(() => {
    dispatch(getBookByDetail(id));
  }, [dispatch, id]);

  return (
    <div className='p-8 rounded-lg shadow-md '>
      <div className='mb-10'>
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : (
          <div className='flex w-2/4'>
              <div className='w-2/4'>
                <img
                  className=' max-h-96 w-full bg-cover'
                  src={detail.images?.cover}
                  alt={detail.title}
                />
              </div>

            <div className='md:col-span-1 flex flex-col justify-between ml-10'>
              <div>
                <h1 className='text-3xl font-semibold text-gray-800'>
                  {detail.title}
                </h1>
                <h2 className='text-lg text-gray-500 mt-2'>{detail.author}</h2>
              </div>
              <ul className='mt-4 space-y-2'>
                <li>
                  <span className='font-medium'>Editorial:</span>
                  {detail.editorial}
                </li>
                <li>
                  <span className='font-medium'>Temática:</span>
                  {detail.editorial}
                </li>
                <li>
                  <span className='font-medium'>Año de publicación:</span>
                  {detail.publication_year}
                </li>
                <li>
                  <span className='font-medium'>Cantidad de páginas:</span>
                  {detail.pages}
                </li>
                <li>
                  <span className='font-medium'>Idioma:</span> {detail.language}
                </li>
                <li>
                  <span className='font-medium'>Tamaño:</span> {detail.size}
                </li>
              </ul>
            </div>
          </div>
        )}

        <div>
          <button className='bg-blue-900 hover:bg-blue-400 text-white font-light py-2 px-4 rounded-full mt-4'>
            Ver opciones de adquisición
          </button>
        </div>
      </div>

      <div className='md:col-span-4 bg-white p-6 shadow-lg rounded-lg'>
        <h2 className='text-xl font-semibold text-gray-800'>Sinopsis</h2>
        <p className='text-sm text-gray-500 mt-2'>{detail.synopsis}</p>
      </div>

      <div className='md:col-span-4 p-6 rounded-lg flex flex-row'>
        <div>
          <h2 className='text-xl font-semibold text-gray-800'>
            Reseñas editoriales
          </h2>
          <div className='mt-7 ml-20 mr-60 bg-blue-100 rounded-lg p-14 shadow-md'>
            <h3 className='text-lg font-semibold text-gray-800'>Asombroso</h3>
            <p className='text-lg font-italic text-black mt-2'>
              El Principito es uno de los mejores libros que leí cuando era niña
            </p>
            <h3 className='text-md font-light text-black-500 mt-2'>
              Graciela Divaza
            </h3>
          </div>
        </div>
        <div className='mt-16 ml-1 bg-blue-100 rounded-lg p-14'>
          <h3 className='text-lg font-semibold text-gray-800'>Grandioso</h3>
          <p className='text-lg text-black mt-2'>
            El Principito es uno de los mejores libros que leí cuando era niño
          </p>
          <h3 className='text-md font-light text-black mt-2'>
            Alfredo Ramírez
          </h3>
        </div>
      </div>

      <div className='md:col-span-4 p-6 rounded-lg flex flex-row'>
        <div>
          <h2 className='text-xl font-semibold text-gray-800'>Opiniones</h2>
          <div className='mt-7 ml-20 mr-60 bg-blue-100 rounded-lg p-14 shadow-md'>
            <h3 className='text-lg font-semibold text-black'>Recomendado</h3>
            <p className='text-lg text-black mt-2'>
              El Principito es uno de los mejores libros que leí cuando era niña
            </p>
            <h3 className='text-md font-light text-black mt-2'>
              Graciela Divaza
            </h3>
          </div>
        </div>
        <div className='mt-16 ml-1 bg-blue-100 rounded-lg p-14'>
          <h3 className='text-lg font-semibold text-black'>
            Lo volvería a leer
          </h3>
          <p className='text-lg text-black mt-2'>
            El Principito es uno de los mejores libros que leí cuando era niño
          </p>
          <h3 className='text-md font-light text-black mt-2'>
            Alfredo Ramírez
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
