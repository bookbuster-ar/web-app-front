import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import {
  getMostPopular,
  getNewlyArrived,
  getLatestReleases,
  selectMostPopular,
  selectMostPopularStatus,
  selectNewlyArrived,
  selectNewlyArrivedStatus,
  selectLatestReleases,
  selectLatestReleasesStatus,
} from '../store/books/bookCategory';
import {
  getBooksForRent,
  selectBooksForRent,
  selectBooksForRentStatus,
} from '../store/books/booksForRentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../icons/Loader/Loader';
{
  /* //--------------Instalar "pnpm i react-slick slick-carousel react-icons"--------- */
}
const Carousels = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageIndex1, setImageIndex1] = useState(0);
  const [imageIndex2, setImageIndex2] = useState(0);
  const [imageIndex3, setImageIndex3] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMostPopular());
    dispatch(getNewlyArrived());
    dispatch(getLatestReleases());
    dispatch(getBooksForRent());
  }, [dispatch]);

  const mostPopular = useSelector(selectMostPopular);
  const mostPopularStatus = useSelector(selectMostPopularStatus);
  const newlyArrived = useSelector(selectNewlyArrived);
  const newlyArrivedStatus = useSelector(selectNewlyArrivedStatus);
  const latestReleases = useSelector(selectLatestReleases);
  const latestReleasesStatus = useSelector(selectLatestReleasesStatus);
  const booksForRent = useSelector(selectBooksForRent);
  const booksForRentStatus = useSelector(selectBooksForRentStatus);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className='text-3xl text-redbook absolute z-10 cursor-pointer right-0 top-14'
        onClick={onClick}
      >
        <SlArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className='text-3xl text-redbook absolute z-10 cursor-pointer left-0 top-14'
        onClick={onClick}
      >
        <SlArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  const settings1 = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex1(next),
  };
  const settings2 = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex2(next),
  };
  const settings3 = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex3(next),
  };

  return (
    <>
      <div className='h-[320px] w-[220px] mx-auto mt-8 mb-1 md:mt-28 md:ml-32 lg:mt-60 lg:ml-64 xl:mt-16 xl:ml-32 relative border border-slate-100 rounded-3xl shadow-lg'>
        <h1 className='text-xl ml-6 leading-4 mb-3 mt-6 font-dark text-bluebook'>
          RECIÉN <br /> LLEGADOS
        </h1>
        <Slider {...settings}>
          {mostPopularStatus === 'loading' ? (
            <Loader />
          ) : (
            mostPopular?.map((book, index) => {
              return (
                <div key={index} className='h-96 relative mt-4'>
                  <div className='absolute'>
                    <div
                      className={
                        index === imageIndex
                          ? 'relative z-10 scale-125 opacity-100 transition-transform duration-500'
                          : 'relative z-0 scale-75 opacity-50 transition-transform duration-500'
                      }
                    >
                      <img
                        src={book?.images?.cover}
                        alt={book.title}
                        className='h-[124px] w-[82px]'
                      />
                    </div>
                    <div className='absolute mt-6 w-60 -ml-16 text-start'>
                      <Link to={`/detail/${book.id}`}>
                        {index === imageIndex ? (
                          <div className=''>
                            <h2 className='font-bold text-sm'>{book.title}</h2>
                            <h2 className='text-xs'>{book.author}</h2>
                          </div>
                        ) : (
                          ''
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </Slider>
      </div>

      <div className='h-[320px] w-[220px] mx-auto my-1 md:mt-28 md:mr-32 lg:mt-60 lg:mr-64 xl:mt-16 xl:ml-20 relative border border-slate-100 rounded-3xl shadow-lg'>
        <h1 className='text-xl ml-6 leading-4 mb-3 mt-6 font-dark text-bluebook'>
          LOS MÁS <br /> POPULARES
        </h1>
        <Slider {...settings1}>
          {newlyArrivedStatus === 'loading' ? (
            <Loader />
          ) : (
            newlyArrived?.map((book, index) => {
              return (
                <div key={index} className='h-96 relative mt-4'>
                  <div className='absolute'>
                    <div
                      className={
                        index === imageIndex1
                          ? 'relative z-10 scale-125 opacity-100 transition-transform duration-500'
                          : 'relative z-0 scale-75 opacity-50 transition-transform duration-500'
                      }
                    >
                      <img
                        src={book?.images?.cover}
                        alt={book.title}
                        className='h-[124px] w-[82px]'
                      />
                    </div>
                    <div className='absolute mt-6 w-60 -ml-16 text-start'>
                      <Link to={`/detail/${book.id}`}>
                        {index === imageIndex1 ? (
                          <div className=''>
                            <h2 className='font-bold text-sm'>{book.title}</h2>
                            <h2 className='text-xs'>{book.author}</h2>
                          </div>
                        ) : (
                          ''
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </Slider>
      </div>

      <div className='h-[320px] w-[220px] mx-auto my-1 md:-mt-24 md:ml-32 lg:-mt-56 lg:ml-64 xl:mt-16 xl:ml-8 relative border border-slate-100 rounded-3xl shadow-lg'>
        <h1 className='text-xl ml-6 leading-4 mb-7 mt-6 font-dark text-bluebook'>
          AUDIOLIBROS
        </h1>
        <Slider {...settings2}>
          {latestReleasesStatus === 'loading' ? (
            <Loader />
          ) : (
            latestReleases?.map((book, index) => {
              return (
                <div key={index} className='h-96 relative mt-4'>
                  <div className='absolute'>
                    <div
                      className={
                        index === imageIndex2
                          ? 'relative z-10 scale-125 opacity-100 transition-transform duration-500'
                          : 'relative z-0 scale-75 opacity-50 transition-transform duration-500'
                      }
                    >
                      <img
                        src={book?.images?.cover}
                        alt={book.title}
                        className='h-[124px] w-[82px]'
                      />
                    </div>
                    <div className='absolute mt-6 w-60 -ml-16 text-start'>
                      <Link to={`/detail/${book.id}`}>
                        {index === imageIndex2 ? (
                          <div className=''>
                            <h2 className='font-bold text-sm'>{book.title}</h2>
                            <h2 className='text-xs'>{book.author}</h2>
                          </div>
                        ) : (
                          ''
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </Slider>
      </div>

      <div className='h-[320px] w-[220px] mx-auto my-1 md:-mt-24 md:mr-32 lg:-mt-56 lg:mr-64 xl:mt-16 xl:ml-0 relative border border-slate-100 rounded-3xl shadow-lg'>
        <h1 className='text-xl ml-6 leading-4 mb-3 mt-6 font-dark text-bluebook'>
          LIBROS <br /> USADOS
        </h1>
        <Slider {...settings3}>
          {booksForRentStatus === 'loading' ? (
            <Loader />
          ) : (
            booksForRent?.map((book, index) => {
              return (
                <div key={index} className='h-96 relative mt-4'>
                  <div className='absolute '>
                    <Link to={`/library`}>
                      <div
                        className={
                          index === imageIndex3
                            ? 'relative z-10 scale-125 opacity-100 transition-transform duration-500'
                            : 'relative z-0 scale-75 opacity-50 transition-transform duration-500'
                        }
                      >
                        <img
                          src={book.images.cover}
                          alt={book.title}
                          className='h-[124px] w-[82px]'
                        />
                      </div>
                    </Link>
                    <div className='absolute mt-6 w-60 -ml-16 text-start'>
                      <Link to={`/detail/${book.id}`}>
                        {index === imageIndex3 ? (
                          <div className=''>
                            <h2 className='font-bold text-sm'>{book.title}</h2>
                            <h2 className='text-xs'>{book.author}</h2>
                          </div>
                        ) : (
                          ''
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </Slider>
      </div>
    </>
  );
};

export default Carousels;
