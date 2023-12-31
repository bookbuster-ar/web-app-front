import { useDispatch } from 'react-redux';
import { deleteQuote } from '../../store/quotes/quotesSlice';
import Foto from '../../assets/home/noencontras/Background.png';
import LikeQuote from './LikeQuote';

const Quote = ({ quote, id, onClick }) => {
  const dispatch = useDispatch();
  const quoteId = quote.id;
  const userid = localStorage.getItem('user_id');
  let quoteOwner = quote.creator?.id === userid;
  const handleDelete = () => {
    dispatch(deleteQuote({ id, quoteId }));
  };

  return (
    <article
      className='w-9/12 h-full duration-500 p-12 shadow-lg mb-2'
      onClick={onClick}
    >
      <div className='flex flex-col w-full '>
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
        <div className='flex items-center w-full'>
          <img src={Foto} alt='Foto' className='w-12 rounded-full mr-2' />
          <p className='font-bold'>
            {`${quote.creator?.name} ${quote.creator?.last_name}` ||
              'unknown author'}
          </p>
          <p className='mx-1 text-sm'> compartió una cita -</p>
          <p className=' text-sm'>{quote.createdAt}</p>
        </div>
      </div>
      <div>
        <p className='my-4'>{quote.content}</p>
        <LikeQuote
          quoteId={quote.id}
          id={id}
          likes={quote.likes}
          quoteCreator={quote.creator}
        />
      </div>
    </article>
  );
};

export default Quote;
