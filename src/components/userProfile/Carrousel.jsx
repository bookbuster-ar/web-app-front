import { Link } from 'react-router-dom';
const Carrousel = ({ bookshelf }) => {

  return (
    <div className='h-96 w-11/12 mb-20 flex flex-col justify-center mx-6 pb-1 pl-24 border border-none rounded-xl shadow-xl'>
      <p className='font-bold text-blue-500 text-2xl'>{bookshelf.name}</p>
      <div className='max-[640px]:flex-wrap h-96 w-11/12 gap-3 my-2 flex min-[640px]:overflow-x-scroll'>
        {bookshelf.books?.map((book, index) => {
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
  );
};
export default Carrousel;
