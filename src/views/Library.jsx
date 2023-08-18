import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllGenres, selectGenreStatus } from '../store/books/bookSlice';
import { fetchGenres } from '../store/books/bookSlice';
import Loader from '../icons/Loader/Loader';
import { Link } from 'react-router-dom';
import PurpleEye from '../assets/PurpleEye.png';
import RedMark from '../assets/RedMark.png';

const colorClasses = {
  0: 'bg-red-300',
  1: 'bg-blue-500',
  2: 'bg-green-500',
  3: 'bg-red-600',
  4: 'bg-yellow-400',
  5: 'bg-red-300',
  6: 'bg-yellow-400',
  7: 'bg-red-600',
  8: 'bg-red-300',
  9: 'bg-green-500',
  10: 'bg-blue-500',
  11: 'bg-red-600',
  12: 'bg-yellow-400',
};

const Library = () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectAllGenres);
  const genreStatus = useSelector(selectGenreStatus);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className='bg-white h-screen flex flex-col items-center justify-center '>
      <img src={PurpleEye} className='h-12 mt-10' />
      <h1 className='font-bold font-roboto text-5xl text-blue-500'>
        EXPLORÁ LA LIBRERÍA
      </h1>
      <div className='h-[800px] w-[900px]'>
        <div className='grid h-full grid-cols-12 grid-rows-6 relative'>
          <Link to='genre/fc94da93-75ff-4e12-a9cd-b61333126dce'>
            <div className='bg-orangebook relative col-span-4 row-span-2 text-4xl font-roboto text-white font-black cursor-pointer overflow-hidden group hover:bg-orange-200'>
              <div className='relative transition-all duration-500 h-full ease-in left-5'>
                <div className='absolute bottom-2 leading-10 font-roboto duration-500 group-hover:bottom-24 group-hover:text-bluebook'>
                  NARRATIVAS
                </div>
                <div className='absolute bottom-2 transition-opacity opacity-0 group-hover:opacity-100 max-w-[250px] leading-4 duration-300 text-[10px] text-bluebook'>
                  Se trata de un género literario que presenta una serie de
                  hechos reales o ficticios. Se caracteriza por ser una
                  narración extensa, tener una trama compleja en la que el
                  narrador se vale de la descripción, diálogos o monólogos.
                </div>
                <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-8 top-4 w-10 h-10'>
                  <img src={RedMark} alt='Marcador Rojo' />
                </div>
              </div>
            </div>
          </Link>

          <div className='bg-redbook col-span-3 row-span-3 text-2xl text-yellowbook font-sans font-black cursor-pointer'>
            <span className='absolute top-56 inset-x-80 font-roboto'>
              NO FICCIÓN <br />Y CRÓNICA
            </span>
          </div>

          <div className='bg-pinkbook col-span-4 row-span-1 text-3xl text-yellowbook font-sans font-black cursor-pointer'>
            <span className='absolute top-16 inset-x-2/3 font-roboto'>
              TEATRO
            </span>
          </div>

          <div className='bg-yellowbook col-span-1 row-span-2 text-md text-redbook font-sans font-black cursor-pointer'>
            <span className='absolute top-36 font-roboto'>
              CIEN
              <br />
              CIA
            </span>
          </div>

          <div className='bg-white col-span-4 row-span-1 text-xl text-redbook font-sans font-black cursor-pointer'>
            <span className='absolute top-36 left-2/3 font-roboto'>
              HISTORIA Y POLÍTICA
            </span>
          </div>

          <div className='bg-white col-span-4 row-span-1 text-xl text-bluebook font-sans font-black cursor-pointer'>
            <span className='absolute top-64 left-10 font-roboto'>
              RELATOS BREVES
            </span>
          </div>

          <div className='bg-bluebook col-span-4 row-span-2 text-xl text-white font-sans font-black cursor-pointer'>
            <span className='absolute top-80 left-2/3 font-roboto'>
              PENSAMIENTOS <br /> Y FILOSOFÍA
            </span>
          </div>

          <div className='bg-orangebook col-span-1 row-span-2 text-yellowbook font-sans font-black cursor-pointer'>
            <span className='absolute bottom-52 font-roboto'>
              JÓVE
              <br />
              NES
            </span>
          </div>

          <div className='bg-yellowbook col-span-4 row-span-1 text-2xl text-redbook font-sans font-black cursor-pointer'>
            <span className='absolute bottom-52 left-10 font-roboto'>
              POESÍA
            </span>
          </div>

          <div className='bg-pinkbook col-span-3 row-span-1 text-2xl text-bluebook font-sans font-black cursor-pointer'>
            <span className='absolute bottom-52 left-80 font-roboto'>
              MÚSICA
            </span>
          </div>

          <div className='bg-redbook col-span-3 row-span-2 text-xl  text-white font-sans font-black cursor-pointer'>
            <span className='absolute bottom-5 left-10 font-roboto'>
              BIENESTAR Y <br /> ESPIRITUALIDAD
            </span>
          </div>

          <div className='bg-white col-span-3 row-span-2 text-xl text-orangebook font-roboto font-black cursor-pointer'>
            <span className='absolute bottom-5 left-64 font-roboto'>
              NIÑOS Y NIÑAS
            </span>
          </div>

          <div className='bg-pinkbook col-span-6 row-span-2 text-4xl text-redbook font-sans font-black cursor-pointer'>
            <span className='absolute bottom-2 left-2/3 font-roboto'>
              FEMINISMOS Y <br /> LGTBIQ
            </span>
          </div>
        </div>
      </div>
      {/* <div className='flex flex-row flex-wrap m-6 max-w-5xl  justify-center'>
        {genreStatus === 'loading' ? (
          <Loader />
        ) : (
          genres?.map((genre, index) => (
            <Link to={`/library/genre/${genre.id}`} key={index}>
              <button
                className={`w-36 h-36 ${colorClasses[index]} m-2 rounded-2xl flex justify-center text-gray-50 cursor-pointer shadow-gray-400 shadow-lg`}
              >
                {genre.name}
              </button>
            </Link>
          ))
        )}
      </div> */}
    </div>
  );
};

export default Library;
