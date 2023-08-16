import Banner from '../../assets/home/desafia/BannerHome.png';
import OrangeLines from '../../assets/home/desafia/OrangeLines.png';
import PinkArrow from '../../assets/home/desafia/PinkArrow.png';
import TitleBookBuster from '../../assets/home/desafia/TitleBookBuster.png';
import YellowArrow from '../../assets/home/desafia/YellowArrow.png';
import PurpleEye from '../../assets/PurpleEye.png';
import YellowHeart from '../../assets/home/desafia/YellowHeart.png';
import { Link } from 'react-router-dom';

const DesafiaLasNormas = () => {
  return (
    <>
      <div className='relative xl:-mt-[600px]'>
        <div className='hidden md:absolute md:inline md:-right-16 md:-top-28 lg:-right-28 lg:scale-110 xl:scale-[2] xl:mr-10 xl:-top-24'>
          <img
            className='md:h-80 my-14 mr-8'
            src={Banner}
            alt='Mujer leyendo un libro con una pila de libros delante'
          />
        </div>
        <div className='hidden md:absolute md:inline'>
          <img
            className='md:h-10 md:ml-80 md:-mt-16 lg:h-14 lg:ml-[400px] lg:-mt-20 xl:h-24 xl:ml-[440px] xl:-mt-[220px]'
            src={OrangeLines}
            alt='Lineas naranjas horizontales'
          />
        </div>
      </div>
      <div className='text-bluebook text-center md:text-start md:mb-28 md:mr-80 lg:mr-96 lg:scale-125 xl:scale-[2] xl:mr-[650px] xl:mb-72'>
        <h1 className='font-dark text-3xl max-w-xs mb-2 mx-auto md:text-5xl md:mx-0'>
          DESAFIÁ <br className='hidden md:block' /> LAS FORMAS
        </h1>
        <p className='text-pinkbook font-kabut text-5xl transform -rotate-2 leading-10 -mt-4 md:-ml-2 md:-mt-2 md:text-[55px]'>
          de la lectura con Bookbuster.
        </p>
        <p className='text-[10px] max-w-xs mx-auto md:mb-8 md:mt-2 mb-4'>
          Encontrá las historias que te apasionan a tu manera. Alquilá,{' '}
          <br className='hidden md:block' />
          visualizá, escuchá, comprá y vendé libros en
          <span className='bg-yellowbook'> tu nueva librería on line.</span>
        </p>
        <div className='absolute'>
          <img
            className='h-8 ml-[270px] -mt-14 md:h-10 md:ml-[270px] md:-mt-20'
            src={YellowArrow}
            alt='Flecha amarilla hacia arriba'
          />
        </div>
        <div className='flex flex-row items-center md:justify-start justify-center md:-mt-3 mb-2 gap-2'>
          <Link to={'/home/recommendation'}>
            <button className='bg-bluebook py-1 text-[9px] text-white w-36 flex justify-center items-center'>
              <img src={YellowHeart} className='mr-2 h-3.5 w-3.5' alt='Corazon amarillo' />
              Obtené una recomendación
            </button>
          </Link>
          <Link to={'/home/library'}>
            <button className='bg-bluebook py-[5px] text-[8px] text-white w-32 flex justify-evenly items-center'>
              <img src={PurpleEye} className='h-3 w-6' alt='Ojo purpura' />
              Explorá la librería
            </button>
          </Link>
        </div>
      </div>
      <div className='lg:scale-125 lg:-mt-2 lg:mb-2 xl:scale-[1.75]'>
        <p className='text-bluebook text-center font-dark text-sm md:text-md leading-3 mt-6'>
          CÓMO FUNCIONA
        </p>
        <img
          className='h-12 mx-auto md:h-14 md:right-0'
          src={TitleBookBuster}
          alt='Titulo de Book Buster'
        />
      </div>
      <div className='absolute'>
        <img
          className='h-16 ml-60 -mt-16 md:h-20 md:-mt-20 md:ml-[410px] lg:ml-[460px] xl:h-32 xl:-mt-28 xl:ml-[640px]'
          src={PinkArrow}
          alt='Flecha rosa rulo'
        />
      </div>
    </>
  );
};

export default DesafiaLasNormas;
