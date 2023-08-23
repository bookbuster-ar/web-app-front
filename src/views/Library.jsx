import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGenres } from '../store/books/bookSlice';
import { Link } from 'react-router-dom';
import PurpleEye from '../assets/PurpleEye.png';
import RedMark from '../assets/RedMark.png';
import Footer from '../views/Footer';

const Library = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className='w-full'>
      <div className='flex items-center justify-start mt-8 ml-12'>
        <img src={PurpleEye} className='h-5 md:h-8 lg:h-10 xl:h-10' />
        <h1 className='text-xl md:text-3xl lg:text-5xl xl:text-5xl font-bold font-roboto text-bluebook'>
          EXPLORÁ LA LIBRERÍA
        </h1>
      </div>
      <div className='h-[829px] w-11/12 my-12 mx-auto '>
        <div className='grid h-full grid-cols-9 grid-rows-16 xl:grid-cols-12 xl:grid-rows-6 lg:grid-cols-11 lg:grid-rows-9 '>
          {/* Esto es una separacion NARRATIVAS */}
          <div className='bg-orangebook relative col-span-5 row-span-5 col-start-1 row-start-1 text-2xl xl:col-span-4 xl:row-span-2 lg:col-span-4 lg:row-span-4 lg:text-4xl md:text-3xl font-roboto text-white font-black cursor-pointer group hover:bg-orange-200'>
            <Link to='genre/cd49e523-5861-4669-9e26-8766812de9d5'>
              <div className='relative transition-all duration-500 h-full ease-in left-3 md:left-5 lg:left-5 xl:left-5'>
                <div className='absolute bottom-1 leading-10 font-roboto duration-500 group-hover:bottom-24 group-hover:text-bluebook'>
                  NARRATIVAS
                </div>
                <div className='absolute bottom-5 transition-opacity opacity-0 group-hover:opacity-100 max-w-[150px] md:max-w-[250px] lg:max-w-[250px] xl:max-w-[250px] leading-4 duration-300 text-[8px] md:text-[12px] lg:text-[12px] xl:text-[12px] text-bluebook'>
                  Historias atrapantes, novelas perfectas, ficción creativa de
                  amor, terror, suspenso, policiales, clásicos y contemporáneos
                  de todo el mundo.
                </div>
                <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-8 top-3 w-9 h-9 md:w-8 md:h-8 sm:w-7 sm:h-7'>
                  <img src={RedMark} alt='Marcador Rojo' />
                </div>
              </div>
            </Link>
          </div>
          {/* Esto es una separacion NO FICCION Y CRONICA */}
          <div className='bg-redbook relative col-span-4 row-span-6 col-start-6 row-start-1 lg:col-span-3 lg:row-span-5 xl:col-span-3 xl:row-span-3 text-lg md:text-3xl  font-roboto text-yellowbook font-black cursor-pointer group hover:bg-red-200'>
            <Link to='genre/ca9bc2d6-3d43-46d6-96b2-8e99b7453d00'>
              <div className='relative transition-all duration-500 h-full ease-in left-3 md:left-5 lg:left-5 xl:left-5'>
                <div className='absolute bottom-2 leading-6 font-roboto duration-500 group-hover:bottom-28 md:group-hover:bottom-24 group-hover:text-bluebook'>
                  NO FICCIÓN <br />Y CRÓNICA
                </div>
              </div>
              <div className='absolute bottom-7 transition-opacity opacity-0 group-hover:opacity-100 text-[8px] md:text-[12px] lg:text-[12px] xl:text-[12px] max-w-[140px] md:max-w-[250px] lg:max-w-[250px] xl:max-w-[250px] left-3 md:left-5 lg:left-5 xl:left-5 leading-4 duration-200 text-bluebook'>
                Relatos en primera persona, periodismo, viajes, investigación y
                reflexión a través de historias reales.
              </div>
            </Link>
            <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-3 top-3 w-10 h-10'>
              <img src={RedMark} alt='Marcador Rojo' />
            </div>
          </div>
          {/* Esto es una separacion TEATRO */}
          <div className='bg-pinkbook relative col-span-5 row-span-3 col-start-1 row-start-12 text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:col-span-4 xl:row-span-1 lg:col-span-6 lg:row-span-1 lg:col-start-6 lg:row-start-9 font-roboto text-yellowbook font-black cursor-pointer group hover:bg-pink-200'>
            <Link to='genre/e60e1481-ce30-416b-a13a-8ed9c554dd11'>
              <div className='relative transition-all duration-500 h-full ease-in left-3 md:left-5 lg:left-5 xl:left-5'>
                <div className='absolute bottom-0 leading-1 font-roboto duration-500 group-hover:bottom-14 lg:group-hover:bottom-10 xl:group-hover:bottom-14 group-hover:text-bluebook'>
                  TEATRO
                </div>
              </div>
              <div className='absolute bottom-2 transition-opacity opacity-0 group-hover:opacity-100 text-[10px] md:text-[10px] xl:text-[12px] max-w-[160px] left-3 md:left-5 lg:left-5 xl:left-5 md:max-w-[250px] lg:max-w-[250px] xl:max-w-[250px] leading-4 duration-200 text-bluebook'>
                Dramaturgia, historias basadas en diálogos, ensayos y
                reflexiones sobre el teatro.
              </div>
            </Link>
            <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-3 top-3 w-8 h-8'>
              <img src={RedMark} alt='Marcador Rojo' />
            </div>
          </div>
          {/* Esto es una separacion */}
          <div className='bg-yellowbook relative col-span-3 row-span-2 col-start-6 row-start-13 xl:col-span-1 xl:row-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-8 lg:row-start-4 text-[13px] md:text-lg font-roboto text-redbook font-black cursor-pointer group hover:bg-yellow-200'>
            <Link to='genre/156a7635-c01f-460d-8e0a-45c4402cd2d7'>
              <div className='relative transition-all duration-500 h-full ease-in left-3 font-roboto'>
                <div className='absolute bottom-2 font-roboto duration-500 group-hover:bottom-14 md:group-hover:bottom-12 lg:group-hover:bottom-16 xl:group-hover:bottom-[90px] group-hover:text-bluebook'>
                  CIEN
                  <br />
                  CIA
                </div>
              </div>
              <div className='absolute bottom-4 transition-opacity opacity-0 group-hover:opacity-100 max-w-[60px] md:max-w-[130px] lg:max-w-[150px] xl:max-w-[90px] left-3 duration-200 text-[4px] md:text-[6px] lg:text-[8px] text-bluebook'>
                Investigación y ensayo sobre ciencia, ecología, naturaleza,
                biología, medio ambiente, recursos, pensamiento lógico y
                matemático.
              </div>
            </Link>
            <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-5 top-5 w-2 h-2 lg:right-2 lg:top-2 lg:w-5 lg:h-5'>
              <img src={RedMark} alt='Marcador Rojo' />
            </div>
          </div>
          {/* Esto es una separacion */}
          <div className='bg-white relative col-span-5 row-span-3 col-start-1 row-start-15 text-sm md:text-lg xl:text-2xl lg:col-span-7 lg:row-span-1 lg:col-start-6 lg:row-start-8 xl:col-span-4 xl:row-span-1 font-roboto text-redbook font-black cursor-pointer group hover:bg-blue-200'>
            <Link to='genre/b0684c9f-8236-47b8-b4e3-600e3e2ca3eb'>
              <div className='relative transition-all duration-500 h-full ease-in left-3 font-roboto'>
                <div className='absolute bottom-1 font-roboto duration-500 group-hover:bottom-14 xl:group-hover:bottom-20 group-hover:text-bluebook'>
                  HISTORIA Y POLÍTICA
                </div>
              </div>
              <div className='absolute bottom-4 transition-opacity opacity-0 group-hover:opacity-100 max-w-[200px] left-3 duration-200 text-[7px] md:text-[9px] md:max-w-[300px] xl:leading-4  xl:text-[12px] text-bluebook'>
                Análisis, periodismo, actualidad, ensayos y reflexiones sobre
                sucesos sociales, históricos y políticos. Relatos históricos y
                políticos.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-3 top-3 w-4 h-4'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          <div className='bg-white relative col-span-5 row-span-2 col-start-1 row-start-6 text-md md:text-2xl lg:text-2xl xl:text-3xl lg:col-span-4 lg:row-span-1 lg:col-start-1 lg:row-start-5 xl:col-span-4 xl:row-span-1 font-roboto text-bluebook font-black cursor-pointer group hover:bg-blue-200'>
            <Link to='genre/4375baed-ffaa-4d62-9643-9e0852eecfb0'>
              <div className='relative transition-all duration-500 h-full ease-in left-3 md:left-5 lg:left-5 xl:left-5'>
                <div className='absolute bottom-2 duration-500 group-hover:bottom-12 md:group-hover:bottom-13 xl:group-hover:bottom-16 group-hover:text-bluebook'>
                  RELATOS BREVES
                </div>
              </div>
              <div className='absolute bottom-4 transition-opacity opacity-0 group-hover:opacity-100 text-[8px] md:text-[12px] lg:text-[12px] xl:text-[12px] max-w-[180px] md:max-w-[250px] left-3 md:left-5 lg:left-5 xl:left-5 duration-200 text-bluebook leading-4'>
                Lecturas rápidas y precisas, libros objetos, cuentos y relatos
                atrapantes.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-2 top-2 w-[20px] h-3 md:right-4 top-2 w-8 h-8 lg:right-4 top-2 w-8 h-8 xl:right-4 top-2 w-8 h-8'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          <div className='bg-bluebook relative col-span-4 row-span-3 col-start-6 row-start-10 text-sm md:text-2xl lg:text-3xl xl:text-3xl lg:col-span-4 lg:row-span-3 lg:col-start-8 lg:row-start-1 xl:col-span-4 xl:row-span-2 font-roboto text-white font-black cursor-pointer group hover:bg-blue-200'>
            <Link to='genre/61b1d9bf-f5f0-41bc-9e2c-f236602d8d80'>
              <div className='relative transition-all duration-500 h-full ease-in left-3 md:left-5 lg:left-5 xl:left-5 font-roboto'>
                <div className='absolute bottom-2 duration-500 group-hover:bottom-20 group-hover:text-bluebook'>
                  PENSAMIENTOS <br /> Y FILOSOFÍA
                </div>
              </div>
              <div className='absolute bottom-4 transition-opacity opacity-0 group-hover:opacity-100 text-[8px] md:text-[12px] lg:text-[12px] xl:text-text[14px] max-w-[140px] md:max-w-[250px] lg:max-w-[250px] xl:max-w-[300px] left-3 md:left-5 duration-200 text-bluebook leading-3 md:leading-4'>
                Ensayos, pensamiento contemporáneo y clásico, nuevas filosofías,
                estudios del lenguaje, ambientalismo, economía y sociología.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-3 top-3 w-5 h-5'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          <div className='bg-orangebook relative col-span-2 row-span-2 col-start-8 row-start-13 text-xs md:text-xl lg:text-2xl xl:text-2xl lg:col-span-2 lg:row-span-2 lg:col-start-10 lg:row-start-4 xl:col-span-1 xl:row-span-2 font-roboto text-yellowbook font-black cursor-pointer group hover:bg-orange-200'>
            <Link to='genre/093588bd-60fb-4887-be36-33eb90efd8de'>
              <div className='relative transition-all duration-500 h-full ease-in left-3'>
                <div className='absolute bottom-2 leading-5 font-roboto duration-500 group-hover:bottom-14 md:group-hover:bottom-12 lg:group-hover:bottom-28 xl:group-hover:bottom-[100px] group-hover:text-bluebook'>
                  JÓVE
                  <br />
                  NES
                </div>
              </div>
              <div className='absolute bottom-3 transition-opacity opacity-0 group-hover:opacity-100 text-[4px] md:text-[6px] lg:text-[8px] xl:text-[8px] max-w-[50px] md:max-w-[150px] lg:max-w-[150px] xl:max-w-[80px] left-3 duration-200 text-bluebook md:leading-2 lg:leading-4 xl:leading-[10px]'>
                Ensayos, pensamiento contemporáneo y clásico, nuevas filosofías,
                estudios del lenguaje, ambientalismo, economía y sociología.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-2 top-2 w-4 h-4'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          <div className='bg-yellowbook relative col-span-5 row-span-2 col-start-1 row-start-8 text-lg md:text-2xl lg:col-span-4 lg:row-span-2 lg:col-start-1 lg:row-start-6 xl:col-span-4 xl:row-span-1 font-roboto text-redbook font-black cursor-pointer group hover:bg-yellow-200'>
            <Link to='genre/86dee506-02e0-498b-8c0d-ae36712b61a1'>
              <div className='relative transition-all duration-500 h-full ease-in left-3 md:left-5'>
                <div className='absolute bottom-1 font-roboto duration-500 group-hover:bottom-14 lg:group-hover:bottom-16 group-hover:text-bluebook'>
                  POESÍA
                </div>
              </div>
              <div className='absolute bottom-2 transition-opacity opacity-0 group-hover:opacity-100 text-[6px] max-w-[250px] md:text-[10px] md:max-w-[300px] xl:text-[12px] xl:max-w-[350px] leading-4 left-3 md:left-5 lg:left-5 xl:left-5 duration-200 text-bluebook leading-2'>
                Ensayos, pensamiento contemporáneo y clásico, nuevas filosofías,
                estudios del lenguaje, ambientalismo, economía y sociología.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-2 top-2 w-5 h-5 lg:rigth-2 lg:top-2 lg:w-8 lg:h-8'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          <div className='bg-pinkbook relative col-span-4 row-span-3 col-start-6 row-start-7 xl:col-span-3 xl:row-span-1 lg:col-span-3 lg:row-span-2 lg:col-start-5 lg:row-start-6 font-roboto text-xl md:text-2xl text-bluebook font-black cursor-pointer group hover:bg-pink-200'>
            <Link to='genre/4fa6d874-f95b-47e4-9ccb-2a3b57abe41f'>
              <div className='relative transition-all duration-500 h-full ease-in left-3'>
                <div className='absolute bottom-1 font-roboto duration-500 group-hover:bottom-20 group-hover:text-bluebook'>
                  MÚSICA
                </div>
              </div>
              <div className='absolute bottom-6 transition-opacity opacity-0 group-hover:opacity-100 max-w-[280px] leading-4 left-3 duration-200 text-[7px] md:text-[10px] lg:text-[12px] text-bluebook'>
                Novedades musicales, ensayos y reflexiones sobre la música.
                Historias con la música como protagonista.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-2 top-2 w-6 h-6'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          <div className='bg-redbook relative col-span-2 row-span-2 col-start-1 row-start-10 xl:col-span-3 xl:row-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-4 lg:row-start-8 text-[7px] md:text-sm lg:text-md xl:text-2xl font-roboto text-white font-black cursor-pointer group hover:bg-red-200'>
            <Link to='genre/a59840fe-7f7a-4086-9966-d18725ab8e70'>
              <div className='relative transition-all duration-500 h-full ease-in left-1 md:left-3'>
                <div className='absolute bottom-1 left-1 font-roboto duration-500 group-hover:bottom-10 lg:group-hover:bottom-24 xl:group-hover:bottom-32 group-hover:text-bluebook'>
                  BIENESTAR Y <br /> ESPIRITUALIDAD
                </div>
              </div>
              <div className='absolute bottom-2 xl:bottom-6 transition-opacity opacity-0 group-hover:opacity-100 max-w-[200px] xl:max-w-[290px] xl:leading-5 lg:text-[9px] leading-2 left-2 md:left-4 duration-200 text-[4px] md:text-[6px] lg:text-[10px] xl:text-[14px] text-bluebook'>
                Medicina del estilo de vida, terapias alternativas, yoga,
                budismo, ayurveda, neurociencia, magia y astrología.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-2 top-2 w-3 h-3 xl:right-4 xl:top-4 xl:w-8 xl:h-8 lg:top-2 lg:w-4 lg:h-4'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          <div className='bg-white relative col-span-3 row-span-2 col-start-3 row-start-10 xl:col-span-3 xl:row-span-2 lg:col-span-3 lg:row-span-2 lg:col-start-1 lg:row-start-8 text-[10px] md:text-[15px] lg:text-[20px] xl:text-[25px] font-roboto text-orangebook font-black cursor-pointer group hover:bg-blue-200'>
            <Link to='genre/ac222fdc-e53d-4bbb-8726-03f5dbdd0823'>
              <div className='relative transition-all duration-500 h-full ease-in left-3 lg:left-5'>
                <div className='absolute bottom-1 left-1 front-roboto duration-500 group-hover:bottom-12 lg:group-hover:bottom-16 group-hover:text-bluebook'>
                  NIÑOS Y NIÑAS
                </div>
              </div>
              <div className='absolute bottom-2 md:bottom-4 transition-opacity opacity-0 group-hover:opacity-100 max-w-[250px] lg:max-w-[200px] xl:max-w-[3000px] leading-2 left-4 lg:left-6 duration-200 text-[6px] md:text-[8px] lg:text-[10px] xl:text-[12px] text-bluebook'>
                Literatura infantil, narrativa inicial, audiolibros y historias
                dibujadas. Juegos y recreos literarios.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-4 top-4 w-4 h-4 lg:right-4 lg:top-4 lg:w-6 lg:h-6'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
          {/* Esto es una separacion */}
          <div className='bg-pinkbook relative col-span-6 row-span-4 col-start-6 row-start-15 xl:col-span-6 xl:row-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-8 lg:row-start-6 text-sm md:text-md lg:text-3xl xl:text-4xl font-roboto text-redbook font-black cursor-pointer group hover:bg-pink-200'>
            <Link to='genre/5a48caeb-d3cb-443c-a894-c620694e73a5'>
              <div className='relative transition-all duration-500 h-full ease-in left-3'>
                <div className='absolute bottom-1 left-1 front-roboto duration-500 group-hover:bottom-12 md:group-hover:bottom-10 lg:group-hover:bottom-20 xl:group-hover:bottom-28 group-hover:text-bluebook'>
                  FEMINISMOS Y <br /> LGTBIQ
                </div>
              </div>
              <div className='absolute bottom-2 md:bottom-3 transition-opacity opacity-0 group-hover:opacity-100 max-w-[250px] xl:max-w-[350px] leading-2 lg:leading-6 left-4 duration-200 text-[7px] md:text-[9px] lg:text-[10px] xl:text-[14px] text-bluebook'>
                Literatura diversa, autores trans, sexualidad, pensamiento
                feminista, mujeres, poesía y ensayo.
              </div>
              <div className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 right-2 top-2 w-4 h-5 md:right-4 md:top-4 md:w-6 md:h-6'>
                <img src={RedMark} alt='Marcador Rojo' />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  );
};

export default Library;
