import Girl from '../../assets/home/interactua/Girl.png';
import Asterisc from '../../assets/home/interactua/Asterisc.png';
import LinePink from '../../assets/home/interactua/LinePink.png';
import LinePinkRev from '../../assets/home/interactua/LinePinkRev.png';
import Heart from '../../assets/home/interactua/Heart.png';

const InteractuaLibros = () => {
  return (
    <>
      <div className='absolute md:right-4 lg:right-6 xl:right-8'>
        <img
          className='h-60 md:h-[350px] lg:h-[480px] xl:h-[700px]'
          src={Girl}
          alt='Chica en blanco y negro con un libro en la cabeza'
        />
      </div>
      <div className='absolute w-12 h-12 ml-32 md:h-14 md:mr-16 md:w-14 mb-32 md:mb-[270px] md:ml-[644px] lg:h-16 lg:w-16 lg:mb-96 lg:mr-24 xl:w-20 xl:h-20 xl:mr-40 xl:mb-[565px]'>
        <img src={Asterisc} alt='Circulo amarillo sobre el libro de la chica' />
      </div>
      <div className='absolute'>
        <img
          className='h-16 mr-48 mb-6 md:h-14 md:mb-8 md:mr-64 lg:h-16 lg:mb-11 lg:ml-[604px] xl:h-24 xl:mb-16 xl:mr-[510px]'
          src={Heart}
          alt='Corazon rojo sobre la chica'
        />
      </div>
      <div className='text-bluebook text-center relative mb-60 md:mb-20 md:text-start md:mr-[200px] lg:scale-125 lg:mb-36 lg:mr-[340px] xl:scale-[1.75] xl:mb-72 xl:mr-[600px]'>
        <h1 className='font-dark text-2xl max-w-xs md:text-5xl mx-auto md:max-w-lg leading-6'>
          COMPRÁ, VISUALIZÁ,
          <br /> ESCUCHÁ, ALQUILÁ O VENDÉ LIBROS
        </h1>
        <p className='text-xs max-w-xs md:max-w-[355px] lg:max-w-[370px] xl:max-w-[380px]'>
          Accedé a una amplia gama de libros nuevos y usados que se pueden leer
          on line, escuchar, alquilar, vender o comprar. Todos nuestros libros
          cuentan con un sello de calidad que te garantiza su perfecto estado
        </p>
        <div className='absolute'>
          <img
            className='md:w-36 mt-2 md:ml-12 lg:w-36 md:h-8 hidden md:inline'
            src={LinePink}
            alt='Rayado rosa'
          />
          <img
            className='h-7 w-24 md:w-32 mt-2 ml-2 md:ml-48 lg:w-36 md:h-6 md:hidden'
            src={LinePinkRev}
            alt='Rayado rosa'
          />
        </div>
      </div>
    </>
  );
};

export default InteractuaLibros;
