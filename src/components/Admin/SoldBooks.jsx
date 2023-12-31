
import {
  getSoldBooks,
  selectSoldBooks,
  selectSoldBooksStatus,
} from '../../store/user/adminSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const SoldBooks = () => {
  const dispatch = useDispatch();
  const soldBooks = useSelector(selectSoldBooks);
  const soldBooksStatus = useSelector(selectSoldBooksStatus);

  useEffect(() => {
    dispatch(getSoldBooks());
  }, [dispatch]);

  const imageDefault =
    'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';

  if (soldBooksStatus === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-center'>
      <h1 className='bg-bluebook w-60 mx-auto text-white rounded-lg py-2 px-4'>
        Libros Vendidos
      </h1>
      <br />
      <ul className='hidden lg:bg-bluebook text-white rounded-lg lg:grid grid-cols-6 gap-5 w-full font-bold sticky top-0 bg-white py-4'>
        <li></li>
        <li className='col-span-2'>Título</li>
        <li className='col-span-3 text-center'>Total</li>
      </ul>
      <ul className='grid grid-cols-1 gap-5 w-full'>
        {soldBooks?.map((book, index) => (

          <li
            key={index}
            className={`grid grid-cols-12 items-center gap-x-5 border-b-2 rounded-lg `}
          >
            <img
              src={imageDefault}
              alt={book.book}
              className='mx-auto h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 col-span-4 md:col-span-2 lg:col-span-2 p-4 object-cover rounded-full'
            />

            <h3 className='font-semibold text-xl col-span-8 md:col-span-3 lg:col-span-4'>
              {book.book}
            </h3>
            <h3 className='font-semibold text-xl col-span-12 md:col-span-6'>
              Total vendido: {book.total_sold}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoldBooks;
