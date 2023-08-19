import Red from '../assets/home/entorno/Red.png';
import Heart from '../assets/home/interactua/Heart.png';
import Yellow from '../assets/home/recomendaciones/Line-Yellow.png';

const Rent = () => {
  return (
    <div className='flex flex-col items-center '>
      <h2 className='font-bold font-roboto text-5xl text-bluebook my-6 text-center'>
        Te prestamos, vos decidís si devolvés
      </h2>
      <p className='text-justify text 4x1 mx-8 font-roboto text-gray-800 mt-6'>
        Para que puedas acceder a más y más libros, Bookbuster te ofrece la
        posibilidad de alquilar libros físicos con una permanencia de 30 días.
      </p>
      <p className='text-justify text 4x1 mx-8 font-roboto text-gray-800'>
        Si te gustó mucho podés comprarlo y quedártelo para siempre.{' '}
      </p>
      <p className='text-justify text 4x1 mx-8 font-roboto text-gray-800'>
        {' '}
        Si no te gustó, lo devolvés y te prestamos una nueva lectura.
      </p>
      <button className='bg-bluebook py-4 px-4 text 3x1 font-bold font-roboto text-white m-6 hover:bg-blue-700'>
        ALQUILÁ EN BOOKBUSTER
      </button>
      <div>
        <img src={Red} alt='RedAsterisc' className='absolute ml-[500px]' />
      </div>
      <div>
        <img
          src={Heart}
          alt='Heart'
          className='absolute ml-[-700px] mt-[-200px] '
        />
      </div>
      <div>
        <img
          src={Yellow}
          alt='Yellow'
          className='absolute ml-[280px] mt-[-220px] h-[30px] w-[100] '
        />
      </div>
    </div>
  );
};

export default Rent;
