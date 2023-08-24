import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTransactionsStatus,
  selectTransactions,
  getAllTransactions,
} from '../../store/user/adminSlice';

const Transactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
  const transactionsStatus = useSelector(selectTransactionsStatus);

  useEffect(() => {
    if (transactionsStatus === 'idle') {
      dispatch(getAllTransactions());
    }
  }, [transactionsStatus, dispatch]);

  return (
    <div className='text-center'>
      <h1 className='bg-bluebook w-60 mx-auto text-white rounded-lg py-2 px-4'>
        Transactions
      </h1>
      <br />
      <ul className='hidden lg:bg-bluebook text-white rounded-lg lg:grid grid-cols-6 gap-5 w-full font-bold sticky top-0 bg-white py-4'>
        <li>Usuario</li>
        <li className='col-span-2'>Transacción</li>
        <li className='col-span-3 text-center'>Libros</li>
      </ul>
      <ul className='grid grid-cols-1 gap-5 w-full'>
        {transactions?.map((transac, index) => (
          <li
            key={index}
            className={`grid grid-cols-12 items-center gap-x-5 border-b-2 rounded-lg `}
          >
            <h3 className='mx-auto md:h-20 md:w-20 lg:h-24 lg:w-24 col-span-4 md:col-span-2 lg:col-span-2 p-4'>
              {transac.user.user_name}
            </h3>

            <h3 className='font-semibold text-xl col-span-8 md:col-span-3 lg:col-span-4'>
              {transac.transaction.transaction_date} {transac.user_last_name}
            </h3>
            <h3 className='font-semibold text-xl col-span-12 md:col-span-6'>
              {transac.books.map((book) => {
                return <p key={book.id}>{book.title}</p>;
              })}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
