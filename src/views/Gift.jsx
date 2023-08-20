import FAQs from '../components/FAQs';
import GiftImage from '../assets/Gift.png';
import LinePink from '../assets/home/recomendaciones/Line-Pink.png';
import estrellaNaranja from '../assets/gift/estrellaNaranja.png';
import estrellaAzul from '../assets/gift/estrellaAzul.png';
import manchaRoja from '../assets/gift/manchaRoja.png';
import cruzRosa from '../assets/gift/cruzRosa.png';
import YellowLines from '../assets/home/entorno/Yellow.png';

const Gift = () => {
  return (
    <div className='flex flex-col justify-content items-center relative no-scroll-x'>
      <img src={GiftImage} alt='Books' className='mt-8' />
      <h2 className='font-bold font-roboto text-5xl text-bluebook mt-6'>
        REGALÁ BOOKBUSTER
      </h2>
      <h3 className='text-gray-600 font-roboto text-3xl m-6'>
        Regalá la experiencia de lectura sin límites
      </h3>
      <img
        src={LinePink}
        alt='LinePink'
        className='absolute mt-[470px] ml-[470px] w-[200px] '
      />

      <div className='flex flex-wrap'>
        <div className='rounded-2xl bg-gray-50 m-6 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
          <div className='mx-auto max-w-xs px-8'>
            <p className='text-base font-semibold text-gray-600'>
              Regalo por 1 mes
            </p>
            <p className='mt-6 flex items-baseline justify-center gap-x-2'>
              <span className='text-5xl font-bold tracking-tight text-gray-900'>
                $2000
              </span>
              <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                ARS
              </span>
            </p>
            <a
              href='#'
              className='mt-10 block w-full bg-bluebook px-3 py-2 text-center text-sm font-semibold font-roboto text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              REGALAR
            </a>
          </div>
        </div>

        <div className='rounded-2xl bg-gray-50 m-6 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
          <div className='mx-auto max-w-xs px-8'>
            <p className='text-base font-semibold text-gray-600'>
              Regalo por 3 meses
            </p>
            <p className='mt-6 flex items-baseline justify-center gap-x-2'>
              <span className='text-5xl font-bold tracking-tight text-gray-900'>
                $5000
              </span>
              <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                ARS
              </span>
            </p>
            <a
              href='#'
              className='mt-10 block w-full bg-bluebook px-3 py-2 text-center text-sm font-semibold font-roboto text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              REGALAR
            </a>
          </div>
        </div>

        <div className='rounded-2xl bg-gray-50 m-6 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
          <div className='mx-auto max-w-xs px-8'>
            <p className='text-base font-semibold text-gray-600'>
              Regalo por 1 año
            </p>
            <p className='mt-6 flex items-baseline justify-center gap-x-2'>
              <span className='text-5xl font-bold tracking-tight text-gray-900'>
                $20000
              </span>
              <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                ARS
              </span>
            </p>
            <a
              href='#'
              className='mt-10 block w-full bg-bluebook px-3 py-2 text-center text-sm font-semibold font-roboto text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              REGALAR
            </a>
          </div>
        </div>
      </div>
      <div>
        <img
          src={estrellaNaranja}
          alt='estrellaNaranja'
          className='absolute w-[470px] ml-[400px] top-0 '
        />
      </div>

      <div>
        <img
          src={cruzRosa}
          alt='estrellaNaranja'
          className='absolute w-[250px] ml-[-700px] top-10 rotate-12'
        />
      </div>

      <div>
        <img
          src={estrellaAzul}
          alt='estrellaNaranja'
          className='absolute w-[250px] ml-[-650px] top-[350px]'
        />
      </div>

      <div>
        <img
          src={manchaRoja}
          alt='estrellaNaranja'
          className='absolute w-[250px] ml-[500px] top-[550px]'
        />
      </div>
      <div>
        <img
          src={YellowLines}
          alt='estrellaNaranja'
          className='absolute w-[250px] ml-[-700px] top-[650px]'
        />
      </div>
      <div>
        <FAQs />
      </div>
    </div>
  );
};

export default Gift;
