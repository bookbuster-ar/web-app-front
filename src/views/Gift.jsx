import FAQs from '../components/FAQs';
import GiftImage from '../assets/Gift.png';
import LinePink from '../assets/home/recomendaciones/Line-Pink.png';

const Gift = () => {
  return (
    <div className='flex flex-col justify-content items-center'>
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
        <FAQs />
      </div>
    </div>
  );
};

export default Gift;
