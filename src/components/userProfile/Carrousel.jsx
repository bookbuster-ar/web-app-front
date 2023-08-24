import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteBookFromShelf } from '../../store/books/bookshelvesSlice';
import Trash from '../../icons/Trash';
const Carrousel = ({ bookshelf }) => {
  const dispatch = useDispatch();

  const book_shelf_categories_id = bookshelf.id;
  
  const handleDeleteBookFromShelf = (bookId) => {
    dispatch(
      deleteBookFromShelf({
        bookId,
        book_shelf_category_id: book_shelf_categories_id,
      })
    );
  };
  
  return (
    <div className='h-[420px] w-11/12 mb-20 flex flex-col justify-center mx-6 pb-1 pl-24 border border-none rounded-xl shadow-xl'>
      <p className='font-bold text-blue-500 text-2xl'>{bookshelf.name}</p>
      <div className='max-[640px]:flex-wrap h-96 w-11/12 gap-3 my-2 flex min-[640px]:overflow-x-scroll'>
        {bookshelf.books?.map((book, index) => {
          return (
            <div key={index} className='relative flex flex-col items-center'> 
              <Link to={`/detail/${book.id}`}>
                <div className='h-72 w-36 text-sm my-4'>
                  <img
                    className='h-48 w-40 object-fill'
                    src={book.images.cover}
                  />
                  <h2>{book.author}</h2>
                  <h2 className='font-bold'>{book.title}</h2>
                </div>
              </Link>
              <button
                className='absolute top-0 right-0 rounded-full bg-gray-300 w-6 hover:bg-red-400 mt-5 mr-1'
                onClick={() => handleDeleteBookFromShelf(book.id)}
              >
                <Trash/>
              </button>
            </div>
          );
        })}
      </div>
    </div>
);

};
export default Carrousel;
