import Leyendo from '../../assets/home/noencontras/Leyendo.png';
import Background from '../../assets/home/noencontras/Background.png';
import PurpleEye from '../../assets/home/noencontras/PurpleEye.png';
import YellowHeart from '../../assets/home/noencontras/YellowHeart.png';
import { Link } from 'react-router-dom';

const NoEncontras = () => {
  return (
    <>
      <div className='hidden md:absolute md:inline'>
        <img
          className='md:h-56 md:right-0 lg:h-80 xl:h-96'
          src={Background}
          alt='Dibujos aleatorios'
        />
      </div>
      <div className='hidden md:absolute md:inline'>
        <img
          className='md:h-56 mr-44 lg:h-80 lg:mr-60 xl:h-96 xl:mr-72'
          src={Leyendo}
          alt='Hombre abrigado leyendo'
        />
      </div>
      <div className='text-bluebook mb-8 text-center md:mb-6 md:text-start md:mr-72 md:max-w-md lg:scale-125 lg:mb-24 lg:mr-[480px] xl:scale-[1.75] xl:mb-28 xl:mr-[720px]'>
        <h1 className='font-dark text-4xl max-w-xs mb-2 md:text-5xl mx-auto md:max-w-lg'>
          ¿NO ENCONTRÁS LO QUE BUSCÁS?
        </h1>
        <p className='text-sm max-w-[250px] mx-auto md:max-w-[360px] md:ml-2 lg:max-w-[400px] xl:max-w-[420px] mb-4'>
          Asesorate con nuestros libreros, o recorré nuestro catálogo.
        </p>
        <div className='flex flex-row items-center md:justify-start justify-center md:-mt-3 mb-2 gap-2'>
          <Link to={'/recommendation'}>
            <button className='bg-bluebook py-1 text-[9px] text-white w-40 flex justify-center items-center'>
              <img src={YellowHeart} className='mr-2 h-5 w-5' alt='Corazon amarillo' />
              Obtené una recomendación
            </button>
          </Link>
          <Link to={'/library'}>
            <button className='bg-bluebook py-1.5 text-[9px] text-white w-40 flex justify-evenly items-center'>
              <img src={PurpleEye} className='h-4 w-8' alt='Ojo purpura' />
              Explorá la librería
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoEncontras;
