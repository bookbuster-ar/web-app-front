import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const books = [
  {
    id: 'b2f693f7-d74b-4744-bc6f-885e7132bbd8',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407890/book/15b1632a-d54c-4850-9d66-614d002e2add/a704a18b-034c-4024-bc01-84f52eaf83cb.jpg',
    },
    title: 'Poeta Chileno',
    author: 'Alejandro Zambra',
  },
  {
    id: 'b8ec3370-6a74-471e-a026-ccf44b777bb4',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407841/book/8022896d-1648-4ffa-ac49-629e4bf4b298/d9478fe2-4b6c-4e99-b2f0-1a0e960c4da6.jpg',
    },
    title: 'CARTAS A THEO',
    author: 'Vincent van Gogh',
  },
  {
    id: '1f93104a-7eef-4f08-8f80-1bc59d046106',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407821/book/0645213e-330a-4ac5-b2cf-7ba0db79a90f/c17db0c0-9d5f-4684-94ff-60802f8f945b.jpg',
    },
    title: 'Poesía completa',
    author: 'Alejandra Pizarnik',
  },
  {
    id: '70e6f1ae-b955-4e03-9ab4-a13b4f274e26',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407828/book/ff92db80-294c-4aaf-b52e-4e3fce44c34e/77a478af-3eb2-4d98-842f-c00d24586543.webp',
    },
    title: 'NOVÍSIMOS (Poemas inéditos)',
    author: 'Juana Bignozzi',
  },
  {
    id: '7e4a4403-abc5-4f21-bba8-79cb1d00eebd',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407823/book/76534d28-7dfc-4dac-a98d-9926948a2db3/07f997f0-d6ac-4254-abf2-eaec55ee950e.webp',
    },
    title: 'Las cosas que digo son ciertas (Poesía completa 1949-2000)',
    author: 'Blanca Varela',
  },
];
const books1 = [
  {
    id: 'b2f693f7-d74b-4744-bc6f-885e7132bbd8',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407890/book/15b1632a-d54c-4850-9d66-614d002e2add/a704a18b-034c-4024-bc01-84f52eaf83cb.jpg',
    },
    title: 'Poeta Chileno',
    author: 'Alejandro Zambra',
  },
  {
    id: 'b8ec3370-6a74-471e-a026-ccf44b777bb4',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407841/book/8022896d-1648-4ffa-ac49-629e4bf4b298/d9478fe2-4b6c-4e99-b2f0-1a0e960c4da6.jpg',
    },
    title: 'CARTAS A THEO',
    author: 'Vincent van Gogh',
  },
  {
    id: '1f93104a-7eef-4f08-8f80-1bc59d046106',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407821/book/0645213e-330a-4ac5-b2cf-7ba0db79a90f/c17db0c0-9d5f-4684-94ff-60802f8f945b.jpg',
    },
    title: 'Poesía completa',
    author: 'Alejandra Pizarnik',
  },
  {
    id: '70e6f1ae-b955-4e03-9ab4-a13b4f274e26',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407828/book/ff92db80-294c-4aaf-b52e-4e3fce44c34e/77a478af-3eb2-4d98-842f-c00d24586543.webp',
    },
    title: 'NOVÍSIMOS (Poemas inéditos)',
    author: 'Juana Bignozzi',
  },
  {
    id: '7e4a4403-abc5-4f21-bba8-79cb1d00eebd',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407823/book/76534d28-7dfc-4dac-a98d-9926948a2db3/07f997f0-d6ac-4254-abf2-eaec55ee950e.webp',
    },
    title: 'Las cosas que digo son ciertas (Poesía completa 1949-2000)',
    author: 'Blanca Varela',
  },
];
const books2 = [
  {
    id: 'b2f693f7-d74b-4744-bc6f-885e7132bbd8',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407890/book/15b1632a-d54c-4850-9d66-614d002e2add/a704a18b-034c-4024-bc01-84f52eaf83cb.jpg',
    },
    title: 'Poeta Chileno',
    author: 'Alejandro Zambra',
  },
  {
    id: 'b8ec3370-6a74-471e-a026-ccf44b777bb4',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407841/book/8022896d-1648-4ffa-ac49-629e4bf4b298/d9478fe2-4b6c-4e99-b2f0-1a0e960c4da6.jpg',
    },
    title: 'CARTAS A THEO',
    author: 'Vincent van Gogh',
  },
  {
    id: '1f93104a-7eef-4f08-8f80-1bc59d046106',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407821/book/0645213e-330a-4ac5-b2cf-7ba0db79a90f/c17db0c0-9d5f-4684-94ff-60802f8f945b.jpg',
    },
    title: 'Poesía completa',
    author: 'Alejandra Pizarnik',
  },
  {
    id: '70e6f1ae-b955-4e03-9ab4-a13b4f274e26',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407828/book/ff92db80-294c-4aaf-b52e-4e3fce44c34e/77a478af-3eb2-4d98-842f-c00d24586543.webp',
    },
    title: 'NOVÍSIMOS (Poemas inéditos)',
    author: 'Juana Bignozzi',
  },
  {
    id: '7e4a4403-abc5-4f21-bba8-79cb1d00eebd',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407823/book/76534d28-7dfc-4dac-a98d-9926948a2db3/07f997f0-d6ac-4254-abf2-eaec55ee950e.webp',
    },
    title: 'Las cosas que digo son ciertas (Poesía completa 1949-2000)',
    author: 'Blanca Varela',
  },
];
const books3 = [
  {
    id: 'b2f693f7-d74b-4744-bc6f-885e7132bbd8',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407890/book/15b1632a-d54c-4850-9d66-614d002e2add/a704a18b-034c-4024-bc01-84f52eaf83cb.jpg',
    },
    title: 'Poeta Chileno',
    author: 'Alejandro Zambra',
  },
  {
    id: 'b8ec3370-6a74-471e-a026-ccf44b777bb4',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407841/book/8022896d-1648-4ffa-ac49-629e4bf4b298/d9478fe2-4b6c-4e99-b2f0-1a0e960c4da6.jpg',
    },
    title: 'CARTAS A THEO',
    author: 'Vincent van Gogh',
  },
  {
    id: '1f93104a-7eef-4f08-8f80-1bc59d046106',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407821/book/0645213e-330a-4ac5-b2cf-7ba0db79a90f/c17db0c0-9d5f-4684-94ff-60802f8f945b.jpg',
    },
    title: 'Poesía completa',
    author: 'Alejandra Pizarnik',
  },
  {
    id: '70e6f1ae-b955-4e03-9ab4-a13b4f274e26',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407828/book/ff92db80-294c-4aaf-b52e-4e3fce44c34e/77a478af-3eb2-4d98-842f-c00d24586543.webp',
    },
    title: 'NOVÍSIMOS (Poemas inéditos)',
    author: 'Juana Bignozzi',
  },
  {
    id: '7e4a4403-abc5-4f21-bba8-79cb1d00eebd',
    images: {
      cover:
        'https://res.cloudinary.com/djfa22pkl/image/upload/v1692407823/book/76534d28-7dfc-4dac-a98d-9926948a2db3/07f997f0-d6ac-4254-abf2-eaec55ee950e.webp',
    },
    title: 'Las cosas que digo son ciertas (Poesía completa 1949-2000)',
    author: 'Blanca Varela',
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
          })}
        </Slider>
      </div>
    </>
  );
};

export default Carousels;
