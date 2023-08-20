import Girl from '../../assets/home/recomendaciones/Girl.png';
import CircleY from '../../assets/home/recomendaciones/Circle-Yellow.png';
import LineYellow from '../../assets/home/recomendaciones/Line-Yellow.png';
import LinePink from '../../assets/home/recomendaciones/Line-Pink.png';
import CruzPink from '../../assets/home/recomendaciones/Cruz-Pink.png';

const Recomendaciones = () => {
  return (
    <>
      <div className='text-white text-center relative mb-60 md:mb-36 md:text-start md:ml-[290px] lg:scale-125 lg:mb-48 lg:ml-[420px] xl:scale-[1.75] xl:mb-80 xl:ml-[670px]'>
        <h1 className='font-bold md:font-dark text-2xl md:text-5xl max-w-xs leading-7'>
          RECOMENDACIONES PERSONALIZADAS
        </h1>
        <p className='text-xs font-thin max-w-xs'>
          Brindamos recomendaciones personalizadas que coincidan con tus
          intereses. Además, contamos con expertos en el rubro a la hora de
          publicar reseñas oficiales.
        </p>
        <div className='absolute'>
          <img className='h-6 -mt-36 ml-40 md:ml-60 md:-mt-44' src={LineYellow} alt='' />
        </div>
        <div className='absolute'>
          <img className='h-5 w-24 md:w-32 mt-2 ml-52 md:ml-48 lg:w-36 md:h-6' src={LinePink} alt='' />
        </div>
      </div>
      <div className='absolute ml-12 md:-ml-0'>
        <img
          className='h-64 md:h-[420px] lg:h-[545px] xl:h-[800px]'
          src={Girl}
          alt='Chica en blanco y negro con un libro en la cabeza'
        />
      </div>
      <div className='absolute w-28 h-28 ml-12 -mb-2 transform -rotate-45 md:rotate-0 md:-mb-6 md:ml-20 md:h-52 md:w-52 lg:w-[268px] lg:h-[268px] lg:ml-24 xl:w-[400px] xl:h-[400px] xl:ml-36 xl:-mb-12'>
        <img src={CircleY} alt='Circulo amarillo sobre el libro de la chica' />
      </div>
      <div className='hidden md:block md:absolute'>
        <img src={CruzPink} alt='Cruz rosa' className='md:h-10 md:mb-[300px] md:ml-[170px] lg:h-16 lg:mb-[380px] lg:ml-[220px] xl:h-24 xl:mb-[550px] xl:ml-[320px]' />
      </div>
    </>
  );
};

export default Recomendaciones;
