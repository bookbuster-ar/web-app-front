import { Link } from 'react-router-dom';
import {
  getBookshelf,
  selectBookshelf,
  selectBookshelfStatus,
  selectBookshelfError,
  deleteBookFromShelf,
} from '../../store/books/bookshelvesSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../icons/Loader/Loader';

const Carrousel = ({ bookshelf }) => {
  //Bookshelf viene así
  // {
  //   "id": "2b727cc3-0e05-4d85-8ff6-7970e6098a44",
  //   "name": "Todos",
  //   "created": false,
  //   "book_shelves_id": "487d3bc3-bd6d-4212-bd58-faa54b9f8041"
  // }
  const dispatch = useDispatch();
  const bookshelfBooks = useSelector(selectBookshelf);
  const status = useSelector(selectBookshelfStatus);
  // const error = useSelector(selectBookshelfError);

  const book_shelf_categoriy_id = bookshelf.book_shelves_id;
  //cual es el id?????

  useEffect(() => {
    dispatch(getBookshelf(book_shelf_categoriy_id));
  }, [dispatch, book_shelf_categoriy_id]);

  // const handleDelete = (book_shelf_categoriy_id, id) => {

  // }
  return (
    <div>
      {status === 'loading' ? (
        <Loader />
      ) : (
        <div className='flex items-center justify-start mt-8 ml-12'>
          <h1 className='text-xl md:text-3xl lg:text-5xl xl:text-5xl font-bold font-roboto text-bluebook'>
            Mis estanterías
          </h1>
          <div>
            <div className='h-96 w-11/12 mb-20 flex flex-col justify-center pb-1 pl-24 border border-none rounded-xl shadow-xl'>
              <p className='font-bold text-blue-500 text-2xl'>
                {bookshelf.name}
              </p>
              <div className='max-[640px]:flex-wrap h-96 w-11/12 gap-3 my-2 flex min-[640px]:overflow-x-scroll'>
                {bookshelfBooks?.map((book, index) => {
                  return (
                    <div key={book.id}>
                      {/* <button onClick={handleDelete}>x</button> */}
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Carrousel;
