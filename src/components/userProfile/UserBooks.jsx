import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserBooks,
  selectUserBooksStatus,
  getUserBooks,
} from '../../store/user/userSlice';
import Loader from '../../icons/Loader/Loader';
import { Link } from 'react-router-dom';

const UserBooks = () => {
  const dispatch = useDispatch();

  const userBooks = useSelector(selectUserBooks);
  const userBooksStatus = useSelector(selectUserBooksStatus);

  useEffect(() => {
    dispatch(getUserBooks());
  }, [dispatch]);

  return (
    <div>
      <h1 className='font-bold font-roboto text-5xl text-bluebook my-10 ml-6 text-center uppercase'>
        Mis libros
      </h1>
      <div>
        {userBooksStatus === 'loading' ? (
          <Loader />
        ) : (
          <div className='h-96 w-11/12 mb-20 flex flex-col justify-center mx-6 pb-1 pl-24 border border-none rounded-xl shadow-xl'>
            <p className='font-bold text-blue-500 text-2xl ml-[-70px] '>
              Libros comprados
            </p>
            <div className='max-[640px]:flex-wrap h-96 w-11/12 gap-3 my-2 flex min-[640px]:overflow-x-scroll'>
              {userBooks.length > 0 &&
                userBooks?.map((book) => {
                  return (
                    <Link to={`/detail/${book.id}`} key={book.id}>
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
        )}
      </div>
    </div>
  );
};

export default UserBooks;
