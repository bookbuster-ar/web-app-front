import FAQs from '../components/FAQs';

const Gift = () => {
  return (
    <div className='flex flex-col justify-content items-center'>
      <h2 className='text-center text-4xl font-bold m-6 text-blue-500'>
        REGALÁ BOOKBUSTER
      </h2>
      <h3 className='text-blue-600'>
        Regalá la experiencia de lectura sin límites
      </h3>

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
              className='mt-10 block w-full rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              Regalar
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
              className='mt-10 block w-full rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              Regalar
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
              className='mt-10 block w-full rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              Regalar
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
