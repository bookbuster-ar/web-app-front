import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBookByDetail,
  selectDetail,
  selectDetailStatus,
} from '../store/books/bookSlice';
import { useParams } from 'react-router-dom';
import ReviewList from '../components/reviews/ReviewsList';
import FormAddReview from '../components/reviews/FormAddReview';
import { Link } from 'react-router-dom';

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
                className='h-70 w-64 object-cover rounded-md'
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
                  <span className='font-medium'>Editorial: </span>
                  {detail.editorial}
                </li>
                <li>
                  <span className='font-medium'>Temática: </span>
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
                  <span className='font-medium'>Idioma:</span> {detail.language}
                </li>
                <li>
                  <span className='font-medium'>Tamaño:</span> {detail.size}
                </li>
              </ul>
              <FormAddReview />
            </div>
          </div>
        )}

        <div>
          <Link to={'/bookcheckout'}>
            <button className='bg-blue-900 hover:bg-blue-400 text-white font-light py-2 px-4 rounded-full mt-4'>
              Ver opciones de adquisición
            </button>
          </Link>
        </div>
      </div>

      <div className='md:col-span-4 bg-white p-6 shadow-lg rounded-lg my-11'>
        <h2 className='text-xl font-semibold text-gray-800'>Sinopsis</h2>
        <p className='text-sm text-gray-500 mt-2'>{detail.synopsis}</p>
      </div>

      <ReviewList />
    </div>
  );
};

export default BookDetail;
