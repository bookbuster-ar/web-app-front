import Mrs from '../../assets/home/entorno/Mrs.png';
import Red from '../../assets/home/entorno/Red.png';
import Yellow from '../../assets/home/entorno/Yellow.png';

const EntornoDigital = () => {
  return (
    <>
      <div className='absolute'>
        <img
          className='h-56 md:h-[350px] lg:h-[480px] xl:h-[700px]'
          src={Mrs}
          alt='Chica en blanco y negro con un libro en la cabeza'
        />
      </div>
      <div className='text-white text-center relative mb-56 md:mb-20 md:text-end md:ml-48 lg:scale-125 lg:mb-36 lg:ml-[350px] xl:scale-[1.75] xl:mb-72 xl:ml-[640px]'>
        <h1 className='font-dark mb-2 text-2xl max-w-xs md:text-5xl mx-auto md:max-w-lg leading-7'>
          UNA LIBRERÍA TRADICIONAL, EN UN ENTORNO DIGITAL
        </h1>
        <p className='text-xs max-w-[300px] mx-auto md:max-w-[360px] md:mr-0 lg:max-w-[400px] xl:max-w-[420px]'>
          Desde tu hogar, explorá nuestra colección de libros y disfrutá de la
          sensación de descubrimiento y exploración que disfrutarías en una
          librería física.
        </p>
      </div>
      <div className='absolute w-20 h-20 ml-24 mb-32 md:mb-64 md:ml-40 lg:h-24 lg:w-24 lg:mb-[360px] lg:ml-56 xl:w-32 xl:h-32 xl:ml-[360px] xl:mb-[530px]'>
        <img src={Yellow} alt='Circulo amarillo sobre el libro de la chica' />
      </div>
      <div className='absolute'>
        <img
          className='h-24 mr-48 mb-3 md:h-20 md:ml-60 lg:h-28 lg:ml-80 xl:h-40 xl:mb-8 xl:ml-[480px]'
          src={Red}
          alt='Corazon rojo sobre la chica'
        />
      </div>
    </>
  );
};

export default EntornoDigital;
