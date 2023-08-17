import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const books = [
  {
    id: '0645213e-330a-4ac5-b2cf-7ba0db79a90f',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924506/book/0645213e-330a-4ac5-b2cf-7ba0db79a90f/be7315f3-8c2c-4d92-992e-ee7af54888b5.jpg',
    },
    title: 'Poesía completa',
    author: 'Alejandra Pizarnik',
  },
  {
    id: '76534d28-7dfc-4dac-a98d-9926948a2db3',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924507/book/76534d28-7dfc-4dac-a98d-9926948a2db3/12c91e2d-ccb5-4be9-9b37-842d0b355ccd.webp',
    },
    title: 'Las cosas que digo son ciertas (Poesía completa 1949-2000)',
    author: 'Blanca Varela',
  },
  {
    id: '27b3cd26-be27-4baa-a367-9148acdfa7e5',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924508/book/27b3cd26-be27-4baa-a367-9148acdfa7e5/961a2cb8-2f7e-49c3-a4f9-9c777eb03cc4.png',
    },
    title: 'Nadie duerme de verdad aquí',
    author: 'Verónica Pérez Arango',
  },
  {
    id: '7e320b7e-842d-49bb-b5d1-b3c65be041d0',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924509/book/7e320b7e-842d-49bb-b5d1-b3c65be041d0/a920bbc2-dcc5-4f3e-926b-3f69f9c21f54.jpg',
    },
    title: 'Envíame tus poemas y te enviaré los míos',
    author: 'Fabián Casas',
  },
  {
    id: 'ff92db80-294c-4aaf-b52e-4e3fce44c34e',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924510/book/ff92db80-294c-4aaf-b52e-4e3fce44c34e/0d4612f7-4cfc-4748-a5fa-bbb660832205.webp',
    },
    title: 'NOVÍSIMOS (Poemas inéditos)',
    author: 'Juana Bignozzi',
  },
];
const books1 = [
  {
    id: '0645213e-330a-4ac5-b2cf-7ba0db79a90f',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924506/book/0645213e-330a-4ac5-b2cf-7ba0db79a90f/be7315f3-8c2c-4d92-992e-ee7af54888b5.jpg',
    },
    title: 'Poesía completa',
    author: 'Alejandra Pizarnik',
  },
  {
    id: '76534d28-7dfc-4dac-a98d-9926948a2db3',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924507/book/76534d28-7dfc-4dac-a98d-9926948a2db3/12c91e2d-ccb5-4be9-9b37-842d0b355ccd.webp',
    },
    title: 'Las cosas que digo son ciertas (Poesía completa 1949-2000)',
    author: 'Blanca Varela',
  },
  {
    id: '27b3cd26-be27-4baa-a367-9148acdfa7e5',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924508/book/27b3cd26-be27-4baa-a367-9148acdfa7e5/961a2cb8-2f7e-49c3-a4f9-9c777eb03cc4.png',
    },
    title: 'Nadie duerme de verdad aquí',
    author: 'Verónica Pérez Arango',
  },
  {
    id: '7e320b7e-842d-49bb-b5d1-b3c65be041d0',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924509/book/7e320b7e-842d-49bb-b5d1-b3c65be041d0/a920bbc2-dcc5-4f3e-926b-3f69f9c21f54.jpg',
    },
    title: 'Envíame tus poemas y te enviaré los míos',
    author: 'Fabián Casas',
  },
  {
    id: 'ff92db80-294c-4aaf-b52e-4e3fce44c34e',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924510/book/ff92db80-294c-4aaf-b52e-4e3fce44c34e/0d4612f7-4cfc-4748-a5fa-bbb660832205.webp',
    },
    title: 'NOVÍSIMOS (Poemas inéditos)',
    author: 'Juana Bignozzi',
  },
];
const books2 = [
  {
    id: '0645213e-330a-4ac5-b2cf-7ba0db79a90f',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924506/book/0645213e-330a-4ac5-b2cf-7ba0db79a90f/be7315f3-8c2c-4d92-992e-ee7af54888b5.jpg',
    },
    title: 'Poesía completa',
    author: 'Alejandra Pizarnik',
  },
  {
    id: '76534d28-7dfc-4dac-a98d-9926948a2db3',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924507/book/76534d28-7dfc-4dac-a98d-9926948a2db3/12c91e2d-ccb5-4be9-9b37-842d0b355ccd.webp',
    },
    title: 'Las cosas que digo son ciertas (Poesía completa 1949-2000)',
    author: 'Blanca Varela',
  },
  {
    id: '27b3cd26-be27-4baa-a367-9148acdfa7e5',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924508/book/27b3cd26-be27-4baa-a367-9148acdfa7e5/961a2cb8-2f7e-49c3-a4f9-9c777eb03cc4.png',
    },
    title: 'Nadie duerme de verdad aquí',
    author: 'Verónica Pérez Arango',
  },
  {
    id: '7e320b7e-842d-49bb-b5d1-b3c65be041d0',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924509/book/7e320b7e-842d-49bb-b5d1-b3c65be041d0/a920bbc2-dcc5-4f3e-926b-3f69f9c21f54.jpg',
    },
    title: 'Envíame tus poemas y te enviaré los míos',
    author: 'Fabián Casas',
  },
  {
    id: 'ff92db80-294c-4aaf-b52e-4e3fce44c34e',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924510/book/ff92db80-294c-4aaf-b52e-4e3fce44c34e/0d4612f7-4cfc-4748-a5fa-bbb660832205.webp',
    },
    title: 'NOVÍSIMOS (Poemas inéditos)',
    author: 'Juana Bignozzi',
  },
];
const books3 = [
  {
    id: '0645213e-330a-4ac5-b2cf-7ba0db79a90f',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924506/book/0645213e-330a-4ac5-b2cf-7ba0db79a90f/be7315f3-8c2c-4d92-992e-ee7af54888b5.jpg',
    },
    title: 'Poesía completa',
    author: 'Alejandra Pizarnik',
  },
  {
    id: '76534d28-7dfc-4dac-a98d-9926948a2db3',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924507/book/76534d28-7dfc-4dac-a98d-9926948a2db3/12c91e2d-ccb5-4be9-9b37-842d0b355ccd.webp',
    },
    title: 'Las cosas que digo son ciertas (Poesía completa 1949-2000)',
    author: 'Blanca Varela',
  },
  {
    id: '27b3cd26-be27-4baa-a367-9148acdfa7e5',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924508/book/27b3cd26-be27-4baa-a367-9148acdfa7e5/961a2cb8-2f7e-49c3-a4f9-9c777eb03cc4.png',
    },
    title: 'Nadie duerme de verdad aquí',
    author: 'Verónica Pérez Arango',
  },
  {
    id: '7e320b7e-842d-49bb-b5d1-b3c65be041d0',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924509/book/7e320b7e-842d-49bb-b5d1-b3c65be041d0/a920bbc2-dcc5-4f3e-926b-3f69f9c21f54.jpg',
    },
    title: 'Envíame tus poemas y te enviaré los míos',
    author: 'Fabián Casas',
  },
  {
    id: 'ff92db80-294c-4aaf-b52e-4e3fce44c34e',
    images: {
      cover:
        'http://res.cloudinary.com/djfa22pkl/image/upload/v1691924510/book/ff92db80-294c-4aaf-b52e-4e3fce44c34e/0d4612f7-4cfc-4748-a5fa-bbb660832205.webp',
    },
    title: 'NOVÍSIMOS (Poemas inéditos)',
    author: 'Juana Bignozzi',
  },
];

{
  /* //--------------Instalar "pnpm i react-slick slick-carousel react-icons"--------- */
}
const Carousels = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageIndex1, setImageIndex1] = useState(0);
  const [imageIndex2, setImageIndex2] = useState(0);
  const [imageIndex3, setImageIndex3] = useState(0);

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
          {books?.map((book, index) => {
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
                      src={book.images.cover}
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
          })}
        </Slider>
      </div>

      <div className='h-[320px] w-[220px] mx-auto my-1 md:mt-28 md:mr-32 lg:mt-60 lg:mr-64 xl:mt-16 xl:ml-20 relative border border-slate-100 rounded-3xl shadow-lg'>
        <h1 className='text-xl ml-6 leading-4 mb-3 mt-6 font-dark text-bluebook'>
          LOS MÁS <br /> POPULARES
        </h1>
        <Slider {...settings1}>
          {books1?.map((book, index) => {
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
                      src={book.images.cover}
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
          })}
        </Slider>
      </div>

      <div className='h-[320px] w-[220px] mx-auto my-1 md:-mt-24 md:ml-32 lg:-mt-56 lg:ml-64 xl:mt-16 xl:ml-8 relative border border-slate-100 rounded-3xl shadow-lg'>
        <h1 className='text-xl ml-6 leading-4 mb-7 mt-6 font-dark text-bluebook'>
          AUDIOLIBROS
        </h1>
        <Slider {...settings2}>
          {books2?.map((book, index) => {
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
                      src={book.images.cover}
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
          })}
        </Slider>
      </div>

      <div className='h-[320px] w-[220px] mx-auto my-1 md:-mt-24 md:mr-32 lg:-mt-56 lg:mr-64 xl:mt-16 xl:ml-0 relative border border-slate-100 rounded-3xl shadow-lg'>
        <h1 className='text-xl ml-6 leading-4 mb-3 mt-6 font-dark text-bluebook'>
          LIBROS <br /> USADOS
        </h1>
        <Slider {...settings3}>
          {books3?.map((book, index) => {
            return (
              <div key={index} className='h-96 relative mt-4'>
                <div className='absolute'>
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
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousels;
