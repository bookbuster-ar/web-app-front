import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBookByDetail,
  selectDetail,
  selectDetailStatus,
} from '../store/books/bookSlice';
import { useParams } from 'react-router-dom';
import ReviewList from '../components/reviews/ReviewsList';
import FormAddReview from '../components/reviews/FormAddReview';
import { selectAllReviews } from '../store/reviews/reviewsSlice';
import {
  selectResponseUrl,
  selectStatus,
  BuyBook,
} from '../store/payment/paymentSlice';
import QuotesList from '../components/quotes/QuotesList';
import FormAddRQuote from '../components/quotes/FormAddQuote';

const BookDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reviews = useSelector(selectAllReviews);

  const responseUrl = useSelector(selectResponseUrl);
  const statusUrl = useSelector(selectStatus);

  const detail = useSelector(selectDetail);
  const status = useSelector(selectDetailStatus);

  const [toggle, setToggle] = useState(1);

  const updateToggle = (value) => {
    setToggle(value);
  };

  useEffect(() => {
    if (statusUrl === 200) {
      window.location.href = responseUrl;
    }
  }, [statusUrl, dispatch]);

  useEffect(() => {
    dispatch(getBookByDetail(id));
  }, [dispatch, id]);

  const bookToSend = {
    id: detail.id,
    title: detail.title,
    quantity: 1,
    price: 1000,
    condition: 'new',
    image: detail.image,
    description: 'Compra del libro',
  };

  const handlerBuyBook = () => {
    dispatch(BuyBook(bookToSend));
  };

  return (
    <div className='p-8 rounded-lg shadow-md '>
      <div className='mb-10'>
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : (
          <div className='flex w-fill'>
            <div className='w-1/4'>
              <img
                className='h-70 w-64 object-cover rounded-md'
                src={detail.images?.cover}
                alt={detail.title}
              />
            </div>

            <div className='md:col-span-1 flex flex-col justify-between w-full'>
              <div>
                <h1 className='text-3xl font-semibold text-gray-800'>
                  {detail.title}
                </h1>
                <h2 className='text-lg text-gray-500 mt-2'>{detail.author}</h2>
                <div>
                  <button className='bg-bluebook hover:bg-blue-800 text-white font-light py-2 px-4 my-3 '>
                    Leer
                  </button>
                  <button className='bg-blue-700 hover:bg-blue-800 text-white font-light py-2 px-4 my-3'>
                    +
                  </button>
                  {/* <Link to={'/bookcheckout'}> */}
                  <button
                    onClick={handlerBuyBook}
                    className='bg-bluebook hover:bg-blue-800 text-white font-light py-2 px-4 my-3 ml-2'
                  >
                    Opciones de adquisición{' '}
                    {/* temporal, antes Ver opciones de adquisicion */}
                  </button>
                  <button className='bg-blue-700 hover:bg-blue-800 text-white font-light py-2 px-4 my-3'>
                    +
                  </button>
                  {/* </Link> */}
                </div>
                <div className=' w-full  '>
                  <ul className='flex '>
                    <li
                      className={`flex-fill ${
                        toggle === 1
                          ? 'text-bluebook  font-bold'
                          : 'text-gray-800'
                      } mr-6 cursor-pointer`}
                      onClick={() => updateToggle(1)}
                    >
                      Descripción
                    </li>
                    <li
                      className={`flex-fill ${
                        toggle === 2
                          ? 'text-bluebook font-bold'
                          : 'text-gray-800 '
                      } mr-6 cursor-pointer`}
                      onClick={() => updateToggle(2)}
                    >
                      Citas
                    </li>
                    <li
                      className={`flex-fill ${
                        toggle === 3
                          ? 'text-bluebook  font-bold'
                          : 'text-gray-800'
                      } mr-6 cursor-pointer`}
                      onClick={() => updateToggle(3)}
                    >
                      Tu cita
                    </li>
                    <li
                      className={`flex-fill ${
                        toggle === 4
                          ? 'text-bluebook font-bold'
                          : 'text-gray-800'
                      } mr-6 cursor-pointer`}
                      onClick={() => updateToggle(4)}
                    >
                      Lectores
                    </li>
                    <li
                      className={`flex-fill ${
                        toggle === 5
                          ? 'text-bluebook font-bold'
                          : 'text-gray-800'
                      } mr-6 cursor-pointer`}
                      onClick={() => updateToggle(5)}
                    >
                      Tu opinión
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                {/* este es el contenido de DESCRIPCIÓN */}
                <div className={toggle === 1 ? 'block' : 'hidden'}>
                  <ul className='mt-4 space-y-2 '>
                    <li>
                      <span className='font-medium'>Editorial: </span>
                      {detail.editorial}
                    </li>
                    <li>
                      <span className='font-medium'>Año de publicación: </span>
                      {detail.publication_year}
                    </li>
                    <li>
                      <span className='font-medium'>Cantidad de páginas: </span>
                      {detail.pages}
                    </li>
                    <li>
                      <span className='font-medium'>Idioma:</span>{' '}
                      {detail.language}
                    </li>
                    <li>
                      <span className='font-medium'>Tamaño:</span> {detail.size}
                    </li>
                    <li>
                      <div className='md:col-span-4 bg-white p-6 shadow-lg rounded-lg my-2'>
                        <h2 className='text-xl font-semibold text-gray-800'>
                          Sinopsis
                        </h2>
                        <p className='text-sm text-gray-500 mt-2'>
                          {detail.synopsis}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* este es el contenido de CITAS */}
                <div className={toggle === 2 ? 'block' : 'hidden'}>
                  <QuotesList />
                </div>
                {/* este es el contenido de TU CITA */}
                <div className={toggle === 3 ? 'block' : 'hidden'}>
                  <FormAddRQuote />
                </div>
                {/* este es el contenido de Opiniones */}
                <div className={toggle === 4 ? 'block' : 'hidden'}>
                  <ReviewList />
                </div>
                {/* este es el contenido de TU OPINIÓN */}
                <div className={toggle === 5 ? 'block' : 'hidden'}>
                  <FormAddReview />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
