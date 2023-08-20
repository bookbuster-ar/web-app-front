import Red from '../assets/home/entorno/Red.png';
import Heart from '../assets/home/interactua/Heart.png';
import Yellow from '../assets/home/recomendaciones/Line-Yellow.png';
import {
  getBooksForRent,
  selectBooksForRent,
  selectBooksForRentStatus,
  selectBooksForRentError,
} from '../store/books/booksForRentSlice';
import Loader from '../icons/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Rent = () => {
  const dispatch = useDispatch();
  const booksForRent = useSelector(selectBooksForRent);
  const status = useSelector(selectBooksForRentStatus);
  const error = useSelector(selectBooksForRentError);

  useEffect(() => {
    dispatch(getBooksForRent());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className='flex flex-col items-center mt-60'>
        <Loader />;
      </div>
    );
  } else if (status === 'failed') {
    <p>{error}</p>;
  }

  return (
    <div className='flex flex-col items-center relative'>
      <h2 className='font-bold font-roboto text-5xl text-bluebook my-6 text-center'>
        Te prestamos, vos decidís si devolvés
      </h2>
      <p className='text-justify text 4x1 mx-8 font-roboto text-gray-800 mt-6'>
        Para que puedas acceder a más y más libros, Bookbuster te ofrece la
        posibilidad de alquilar libros físicos con una permanencia de 30 días.
      </p>
      <p className='text-justify text 4x1 mx-8 font-roboto text-gray-800'>
        Si te gustó mucho podés comprarlo y quedártelo para siempre.{' '}
      </p>
      <p className='text-justify text 4x1 mx-8 font-roboto text-gray-800'>
        {' '}
        Si no te gustó, lo devolvés y te prestamos una nueva lectura.
      </p>
      <button className='bg-bluebook py-4 px-4 text 3x1 font-bold font-roboto text-white m-6 hover:bg-blue-700'>
        ALQUILÁ EN BOOKBUSTER
      </button>

      <div className='h-96 w-11/12 mb-20 flex flex-col justify-center pb-1 pl-24 border border-none rounded-xl shadow-xl'>
        <p className='font-bold text-blue-500 text-2xl'>
          ELEGÍ TU PRÓXIMA LECTURA
        </p>
        <div className='max-[640px]:flex-wrap h-96 w-11/12 gap-3 my-2 flex min-[640px]:overflow-x-scroll'>
          {booksForRent?.map((book, index) => {
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
          })}
        </div>
      </div>

      <div>
        <img src={Red} alt='RedAsterisc' className='absolute ml-[500px]' />
      </div>
      <div className='absolute'>
        <img src={Heart} alt='Heart' className=' ml-[-700px] mt-[-200px] ' />
      </div>
      <div className='absolute bottom-0'>
        <img
          src={Yellow}
          alt='Yellow'
          className='absolute ml-[740px] mt-[-220px] h-[30px] w-60 '
        />
      </div>
    </div>
  );
};

export default Rent;
