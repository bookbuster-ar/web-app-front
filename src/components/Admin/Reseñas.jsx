import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getBookSentForReview,
  selectSentForReview,
  selectSentForReviewStatus,
  selectSentForReviewError,
} from '../../store/books/bookSlice';

import Loader from '../../icons/Loader/Loader';

import { BiSolidBookAdd } from 'react-icons/bi';

const Revision = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookSentForReview());
  }, []);

  const booksWithUsers = useSelector(selectSentForReview);
  const status = useSelector(selectSentForReviewStatus);
  const error = useSelector(selectSentForReviewError);

  if (status === 'loading') {
    return (
      <div className='h-screen flex items-center justify-center'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='mx-auto max-w-screen-lg px-4 py-8 sm:px-8'>
      <div className='flex items-center justify-between pb-6'>
        <div>
          <h2 className='font-semibold text-gray-700'>Libros en Revisión</h2>
          <span className='text-xs text-gray-500'>
            Ve todos los libros enviados para ser publicados por suscriptores de
            Bookbuster
          </span>
        </div>
        <div className='flex items-center justify-between'>
          <div className='ml-10 space-x-8 lg:ml-40'>
            <button className='flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700'>
              <BiSolidBookAdd />
              CREAR
            </button>
          </div>
        </div>
      </div>
      <div className='overflow-y-hidden rounded-lg border'>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white'>
                <th className='px-5 py-3'>ID</th>
                <th className='px-5 py-3'>Libro</th>
                <th className='px-5 py-3'>Usario</th>
                <th className='px-5 py-3'>Enviado</th>
                <th className='px-5 py-3'>Estado</th>
              </tr>
            </thead>
            <tbody className='text-gray-500'>
              {booksWithUsers &&
                booksWithUsers.map((item, index) => (
                  <tr key={item.book.id}>
                    <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                      <p className='whitespace-no-wrap'>{index + 1}</p>
                    </td>
                    <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                      <div className='flex items-center'>
                        <div className='h-10 w-10 flex-shrink-0'>
                          <img
                            className='h-full w-full rounded-full'
                            src={item.book.images}
                            alt={item.book.title}
                          />
                        </div>
                        <div className='ml-3'>
                          <p className='whitespace-no-wrap capitalize'>
                            {item.book.title}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm capitalize'>
                      <p className='whitespace-no-wrap'>{`${item.user.name} ${item.user.lastName}`}</p>
                    </td>
                    <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                      <p className='whitespace-no-wrap'>{item.createdAt}</p>
                    </td>
                    <td className='border-b border-gray-200 bg-white px-5 py-5 text-sm'>
                      {/* Puedes cambiar este estado según tu lógica */}
                      <span className='rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900'>
                        Pendiente
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className='flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between'>
          <span className='text-xs text-gray-600 sm:text-sm'> 1 of 1 </span>
          <div className='mt-2 inline-flex sm:mt-0'>
            <button className='mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100'>
              Prev
            </button>
            <button className='h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100'>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revision;
