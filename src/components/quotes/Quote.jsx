import { useDispatch } from 'react-redux';
import { deleteQuote } from '../../store/quotes/quotesSlice';
import Foto from '../../assets/home/noencontras/Background.png';
import LikeQuote from './LikeQuote';

const Quote = ({ quote, id, onClick }) => {
  const dispatch = useDispatch();
  const userid = localStorage.getItem('user_id');

  let quoteOwner = quote.by?.id === userid;

  const handleDelete = () => {
    dispatch(deleteQuote({ id, reviewId }));
  };

  return (
    <article
      className='w-full h-full bg-greybook duration-500'
      onClick={onClick}
    >
      {/* // <article className='md:col-span-4 bg-white p-6 shadow-lg rounded-lg my-11'> */}
      <div className='flex flex-col'>
        {quoteOwner ? (
          <button
            onClick={handleDelete}
            className='bg-pink-300 rounded-full w-6 text-white my-4 hover:bg-pink-400'
          >
            X
          </button>
        ) : (
          ''
        )}
        <div className='flex items-center'>
          <img src={Foto} alt='Foto' className='w-12 rounded-full mr-2' />
          <p className='font-bold'>
            {`${quote.by?.name} ${quote.by?.last_name}` || 'unknown author'}
          </p>
          <p className='mx-1'> compartió una cita</p>
        </div>
      </div>
      <div>
        <p className='my-4'>{quote.content}</p>
        <p className='text-sm'>{quote.createdAt} </p>
        <LikeQuote
          quoteId={quote.id}
          id={id}
          likes={quote.likes}
          quoteCreator={quote.by}
        />
      </div>
    </article>
  );
};

export default Quote;
