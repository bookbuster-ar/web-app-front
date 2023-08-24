import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBookByDetail,
  selectDetail,
  selectDetailStatus,
  getBookSubgenres,
  selectBookSubgenres,
  selectBookSubgenresStatus,
} from '../store/books/bookSlice';
import { useParams } from 'react-router-dom';
import ReviewList from '../components/reviews/ReviewsList';
import FormAddReview from '../components/reviews/FormAddReview';
import {
  selectResponseUrl,
  selectStatus,
  BuyBook,
} from '../store/payment/paymentSlice';
import QuotesList from '../components/quotes/QuotesList';
import FormAddRQuote from '../components/quotes/FormAddQuote';
import Synopsis from '../components/Synopsis';
import Loader from '../icons/Loader/Loader';
import PaymentOptions from '../components/PaymentOptions';
import {
  selectFormatPrice,
  getPriceByFormat,
} from '../store/books/bookPriceSlice';
import {
  addToBookshelf,
  getBookshelves,
  selectAllBookshelves,
} from '../store/books/bookshelvesSlice';

const BookDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const responseUrl = useSelector(selectResponseUrl);
  const statusUrl = useSelector(selectStatus);
  const formatPrice = useSelector(selectFormatPrice);

  const detail = useSelector(selectDetail);
  const status = useSelector(selectDetailStatus);

  const bookSubgenres = useSelector(selectBookSubgenres);
  const bookSubgenresStatus = useSelector(selectBookSubgenresStatus);

  const bookshelves = useSelector(selectAllBookshelves);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bookToSend, setBookToSend] = useState({});

  const [toggle, setToggle] = useState(1);

  const [bookshelvesOptions, setBookshelvesOptions] = useState(false);

  const updateToggle = (value) => {
    setToggle(value);
  };

  const handleOpen = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const handleBookshelves = () => {
    setBookshelvesOptions(!bookshelvesOptions);
  };

  useEffect(() => {
    if (statusUrl === 200) {
      window.location.href = responseUrl;
    }
  }, [statusUrl, dispatch]);

  useEffect(() => {
    dispatch(getBookByDetail(id));
    dispatch(getBookSubgenres(id));
    dispatch(getBookshelves());
    dispatch(getPriceByFormat(id));
  }, [dispatch, id]);

  useEffect(() => {
    setBookToSend({
      id: detail.id,
      title: detail.title,
      quantity: 1,
      image: detail?.images?.cover,
      description: 'Compra del libro',
    });
  }, [detail]);

  const handlerBuyBook = (price, condition) => {
    setBookToSend({
      ...bookToSend,
      price: price,
      condition: condition,
    });
    dispatch(BuyBook(bookToSend));
  };

  const bookId = id;
  const selectHandler = (event) => {
    const book_shelf_category_id =
      event.target.options[event.target.selectedIndex].id;

    dispatch(addToBookshelf({ bookId, book_shelf_category_id }));
  };

  return (
    <div className='no-scroll-x'>
      <div className='pt-10 flex flex-col content-center '>
        <div className='mb-10 '>
          {status === 'loading' ? (
            <div className='flex flex-col items-center w-full mt-60 '>
              <Loader />
            </div>
          ) : (
            <div className='flex w-full h-full ml-20'>
              <div className='w-96 mx-14 '>
                <img
                  className='h-96 object-cover '
                  src={detail.images?.cover}
                  alt={detail.title}
                />
              </div>

              <div className='md:col-span-1 flex flex-col justify-between w-full'>
                <div>
                  <h1 className='text-3xl font-semibold text-gray-800'>
                    {detail.title}
                  </h1>
                  <h2 className='text-lg text-gray-500 mt-2'>
                    {detail.author}
                  </h2>
                  <div className='relative'>
                    <button className='bg-bluebook hover:bg-blue-800 text-white font-light py-2 px-4 mt-3 '>
                      Agregar a mi estantería
                    </button>
                    <button
                      onClick={handleBookshelves}
                      className='bg-blue-700 hover:bg-blue-800 text-white font-light py-2 px-4 mt-3'
                    >
                      +
                    </button>

                    {bookshelvesOptions && (
                      <select
                        name='bookshelves'
                        onChange={selectHandler}
                        className={`bg-bluebook absolute text-white ${
                          bookshelvesOptions ? 'block' : 'hidden'
                        } `}
                      >
                        <option value="mis estantes">Mis estantes</option>
                        {bookshelves.book_shelf_categories?.map(
                          (bookshelf, index) => (
                            <option
                              key={`${bookshelf.id}-${index}`}
                              value={bookshelf.name}
                              id={bookshelf.id}
                              className=' bg-bluebook text-white'
                            >
                              {bookshelf.name}
                            </option>
                          )
                        )}
                      </select>
                    )}

                    {/* <Link to={'/bookcheckout'}> */}
                    <button
                      onClick={handleOpen}
                      className='bg-bluebook hover:bg-blue-800 text-white font-light py-2 px-4 my-3 ml-2'
                    >
                      Opciones de adquisición{' '}
                      {/* temporal, antes Ver opciones de adquisicion */}
                    </button>
                    <button
                      onClick={handleOpen}
                      className='bg-blue-700 hover:bg-blue-800 text-white font-light py-2 px-4 my-3'
                    >
                      +
                    </button>
                    {/* </Link> */}
                  </div>

                  <div>
                    <div className=' w-full '>
                      <ul className='flex '>
                        <li
                          className={`flex-fill ${
                            toggle === 1
                              ? 'text-bluebook  font-bold'
                              : 'text-gray-800'
                          } mr-6 cursor-pointer`}
                          onClick={() => updateToggle(1)}
                        >
                          Descripción
                        </li>
                        <li
                          className={`flex-fill ${
                            toggle === 2
                              ? 'text-bluebook font-bold'
                              : 'text-gray-800 '
                          } mr-6 cursor-pointer`}
                          onClick={() => updateToggle(2)}
                        >
                          Citas
                        </li>
                        <li
                          className={`flex-fill ${
                            toggle === 3
                              ? 'text-bluebook  font-bold'
                              : 'text-gray-800'
                          } mr-6 cursor-pointer`}
                          onClick={() => updateToggle(3)}
                        >
                          Tu cita
                        </li>
                        <li
                          className={`flex-fill ${
                            toggle === 4
                              ? 'text-bluebook font-bold'
                              : 'text-gray-800'
                          } mr-6 cursor-pointer`}
                          onClick={() => updateToggle(4)}
                        >
                          Lectores
                        </li>
                        <li
                          className={`flex-fill ${
                            toggle === 5
                              ? 'text-bluebook font-bold'
                              : 'text-gray-800'
                          } mr-6 cursor-pointer`}
                          onClick={() => updateToggle(5)}
                        >
                          Tu opinión
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    {/* este es el contenido de DESCRIPCIÓN */}
                    <div className={toggle === 1 ? 'block' : 'hidden'}>
                      <ul className='w-9/12'>
                        <li className='max-w-xl'>
                          <Synopsis text={detail.synopsis} />
                        </li>
                        <li className='flex'>
                          {bookSubgenresStatus !== 'failed' &&
                            bookSubgenres?.length > 0 &&
                            bookSubgenres.map((subgenre) => (
                              <div
                                key={subgenre.id}
                                className='text-gray-400 border-gray-400 mr-1 hover:border-bluebook border-2 hover:text-bluebook uppercase p-2 w-fit h-6 flex items-center justify-center text-xs '
                              >
                                {subgenre.name}
                              </div>
                            ))}
                        </li>
                        <li className='text-md text-gray-400 mt-3'>
                          <span>EDITORIAL: </span>
                          {detail.editorial}
                        </li>
                        <li className='text-md text-gray-400'>
                          <span>AÑO DE PUBLICACIÓN: </span>
                          {detail.publication_year}
                        </li>
                        <li className='text-md text-gray-400'>
                          <span>CANTIDAD DE PÁGINAS: </span>
                          {detail.pages}
                        </li>
                      </ul>
                    </div>
                    {/* este es el contenido de CITAS */}
                    <div className={toggle === 2 ? 'block' : 'hidden'}>
                      <QuotesList />
                    </div>
                    {/* este es el contenido de TU CITA */}
                    <div className={toggle === 3 ? 'block' : 'hidden'}>
                      <FormAddRQuote />
                    </div>
                    {/* este es el contenido de Opiniones */}
                    <div className={toggle === 4 ? 'block' : 'hidden'}>
                      <ReviewList />
                    </div>
                    {/* este es el contenido de TU OPINIÓN */}
                    <div className={toggle === 5 ? 'block' : 'hidden'}>
                      <FormAddReview />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {isDialogOpen && (
          <PaymentOptions
            handlerBuyBook={handlerBuyBook}
            handleClose={handleClose}
            formatPrice={formatPrice}
          />
        )}
      </div>
    </div>
  );
};

export default BookDetail;
