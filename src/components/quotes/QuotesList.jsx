import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  selectAllQuotes,
  selectQuotesStatus,
  selectQuotesError,
  selectReloadQuotes,
  fetchQuotes,
} from '../../store/quotes/quotesSlice';
import Quote from './Quote';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Error from '../Error';

const QuotesList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const quotes = useSelector(selectAllQuotes);
  const status = useSelector(selectQuotesStatus);
  const error = useSelector(selectQuotesError);
  const reloadQuotes = useSelector(selectReloadQuotes);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchQuotes(id));
  }, [reloadQuotes, dispatch]);

  const handleQuoteClick = (index) => {
    setCurrentIndex(index);
  };

  if (status === 'failed') {
    return <Error />;
  }

  return (
    <div className='relative group md:col-span-4 bg-white shadow-lg rounded-lg w-full'>
      {status !== 'failed' &&
        quotes.length > 0 &&
        quotes?.map((quote, index) => (
          <Quote
            key={quote.id}
            quote={quote}
            id={id}
            onClick={() => handleQuoteClick(index)}
          />
        ))}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2x1 rounded-full p-2 bg-gray-300 text-white cursor-pointer '>
        <BsChevronCompactLeft size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2x1 rounded-full p-2 bg-gray-300 text-white cursor-pointer '>
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
};

export default QuotesList;
