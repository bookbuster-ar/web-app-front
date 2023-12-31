import FAQs from '../components/FAQs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  subscribeUser,
  selectResponseUrl,
  selectStatus,
} from '../store/payment/paymentSlice';
import TitleBookBuster from '../assets/home/desafia/TitleBookBuster.png';
import Footer from './Footer';

const Subscription = () => {
  const dispatch = useDispatch();
  const responseUrl = useSelector(selectResponseUrl);
  const status = useSelector(selectStatus);

  const monthSubscription = {
    price: 2000,
  };

  useEffect(() => {
    if (status === 200) {
      window.location.href = responseUrl;
    }
  }, [status, dispatch]);

  const handlerSubscription = () => {
    dispatch(subscribeUser(monthSubscription));
  };

  return (
    <div className='flex flex-col items-center no-scroll-x'>
      <div className='md:flex'>
        <div className='flex flex-col items-center mt-10 md:w-[640px] px-5 justify-center lg:w-[570px] xl:w-[500px]'>
          <h2 className='text-3xl mx-12 w-[300px] md:scale-110 font-bold font-roboto text-bluebook md:text-5xl lg:text-6xl'>
            AL SUSCRIBIRTE A
          </h2>
          <img src={TitleBookBuster} alt='TitleBookBuster' className='w-60  mx-10 md:w-[700px]'/>
        </div>
        <div className='mx-10 md:cursor-default mt-10 xl:flex flex-col justify-center '>
          <p className='font-sans text-2xl text-slate-400 mx-5 text-xs md:text-sm hover:bg-bluebook  hover:text-white transition-all duration-200'>
            Acceder a la opción de alquilar libros físicos.
          </p>
          <p className='font-sans text-2xl text-slate-400 mx-5 text-xs md:text-sm   hover:bg-bluebook  hover:text-white transition-all duration-200'>
            Tenés la posibilidad de vender tus libros a la plataforma, y usar el
            crédito para comprar o alquilar otros libros.
          </p>
          <p className='font-sans text-2xl text-slate-400 mx-5  text-xs md:text-sm   hover:bg-bluebook  hover:text-white transition-all duration-200'>
            Tener el envío o retiro de libros accesibles
          </p>
          <p className='font-sans text-2xl text-slate-400 mx-5 text-xs md:text-sm  hover:bg-bluebook  hover:text-white transition-all duration-200'>
            Accedés a un catálogo y contenido exclusivo para socios.
          </p>
          <p className='font-sans text-2xl text-slate-400 mx-5 text-xs md:text-sm  hover:bg-bluebook  hover:text-white transition-all duration-200'>
            Tenés descuentos en compras, lectura on line y audiolibros sobre el
            precio regular de la plataforma.
          </p>
          <p className='font-sans text-2xl text-slate-400 mx-5 text-xs md:text-sm  hover:bg-bluebook  hover:text-white transition-all duration-200'>
            Descuentos en compras de productos y servicios de nuestras tiendas
            amigas.
          </p>
        </div>
      </div>

      <div className='mx-auto max-w-2xl ring-1 w-4/5 ring-gray-200 sm:mt-16 lg:mx-0 lg:flex lg:max-w-none lg:pt-4 lg:pr-4'>
        <div className='p-8 sm:p-10 lg:flex-auto'>
          <h3 className='text-2xl font-bold tracking-tight text-gray-900'>
            Suscribite
          </h3>
          <div className='mt-10 flex items-center gap-x-4'>
            <h4 className='flex-none text-sm font-semibold leading-6 text-blue-600'>
              Incluye
            </h4>
            <div className='h-px flex-auto bg-gray-100'></div>
          </div>
          <ul
            role='list'
            className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'
          >
            <li className='flex gap-x-3'>
              <svg
                className='h-6 w-5 flex-none text-blue-600'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clipRule='evenodd'
                />
              </svg>
              Envío sin cargo en caso de compra de libros nuevos y usados
            </li>
            <li className='flex gap-x-3'>
              <svg
                className='h-6 w-5 flex-none text-blue-600'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clipRule='evenodd'
                />
              </svg>
              Alquilar hasta 2 libros en simultáneo
            </li>
            <li className='flex gap-x-3'>
              <svg
                className='h-6 w-5 flex-none text-blue-600'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clipRule='evenodd'
                />
              </svg>
              Podés vender tus libros usados a la plataforma para comprar nuevos
            </li>
            <li className='flex gap-x-3'>
              <svg
                className='h-6 w-5 flex-none text-blue-600'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clipRule='evenodd'
                />
              </svg>
              Acceso a catálogo exclusivo para suscriptores
            </li>
            <li className='flex gap-x-3'>
              <svg
                className='h-6 w-5 flex-none text-blue-600'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                  clipRule='evenodd'
                />
              </svg>
              30 días de permanencia de libros
            </li>
          </ul>
        </div>
        <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
          <div className='bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
            <div className='mx-auto max-w-xs px-8'>
              <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                <span className='text-5xl font-bold tracking-tight text-gray-900'>
                  $2000
                </span>
                <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                  ARS/mes
                </span>
              </p>
              <button
                href='#'
                onClick={handlerSubscription}
                className='mt-10 block w-full bg-bluebook px-3 py-2 text-center text-sm font-bold font-roboto text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              >
                SUSCRIBIRME
              </button>
              {/* </Link> */}
              <p className='mt-6 text-xs leading-5 text-gray-600'>
                EL PRECIO NO INCLUYE IMPUESTOS VIGENTES EN ARGENTINA.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FAQs />
      <div className='w-full'>
      <Footer />
      </div>
    </div>
  );
};

export default Subscription;
