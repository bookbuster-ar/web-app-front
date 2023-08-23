import FAQs from '../components/FAQs';
import GiftImage from '../assets/Gift.png';
import LinePink from '../assets/home/recomendaciones/Line-Pink.png';
import estrellaNaranja from '../assets/gift/estrellaNaranja.png';
import manchaRoja from '../assets/gift/manchaRoja.png';
import cruzRosa from '../assets/gift/cruzRosa.png';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  giftSubscription,
  selectResponseUrl,
  selectStatus,
} from '../store/payment/paymentSlice';

const Gift = () => {
  const dispatch = useDispatch();
  const responseUrl = useSelector(selectResponseUrl);
  const status = useSelector(selectStatus);

  const [emailOption1, setEmailOption1] = useState('');
  const [emailOption2, setEmailOption2] = useState('');
  const [emailOption3, setEmailOption3] = useState('');
  const [selectedGiftDays, setSelectedGiftDays] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    if (status === 200) {
      window.location.href = responseUrl;
    }
  }, [status, dispatch]);

  const handleGiftClick = (option) => {
    if (selectedGiftDays && selectedPrice) {
      const email = getEmailForOption(option);
      if (email) {
        dispatch(
          giftSubscription({
            price: selectedPrice,
            userEmail: email,
            giftDays: selectedGiftDays,
          })
        );
      }
    }
  };

  const getEmailForOption = (option) => {
    switch (option) {
      case 1:
        return emailOption1;
      case 2:
        return emailOption2;
      case 3:
        return emailOption3;
      default:
        return '';
    }
  };

  const setEmailForOption = (option, value) => {
    switch (option) {
      case 1:
        setEmailOption1(value);
        break;
      case 2:
        setEmailOption2(value);
        break;
      case 3:
        setEmailOption3(value);
        break;
      default:
        break;
    }
  };
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
        <div className='rounded-2xl  bg-gray-50 m-6 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
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
            <input
              type='email'
              placeholder='Ingresa tu email'
              value={emailOption1}
              onChange={(e) => setEmailForOption(1, e.target.value)}
              className='mt-6 rounded-md border border-gray-300 p-2'
            />
            <button
              onClick={() => {
                setSelectedGiftDays(30);
                setSelectedPrice(2000);
                handleGiftClick(1);
              }}
              className='mt-10 block w-full bg-bluebook px-3 py-2 text-center text-sm font-bold font-roboto text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              REGALAR
            </button>
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
            <input
              type='email'
              placeholder='Ingresa tu email'
              value={emailOption2}
              onChange={(e) => setEmailForOption(2, e.target.value)}
              className='mt-6 rounded-md border border-gray-300 p-2'
            />
            <button
              onClick={() => {
                setSelectedGiftDays(90);
                setSelectedPrice(5000);
                handleGiftClick(2);
              }}
              className='mt-10 block w-full bg-bluebook px-3 py-2 text-center text-sm font-bold font-roboto text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              REGALAR
            </button>
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
            <input
              type='email'
              placeholder='Ingresa tu email'
              value={emailOption3}
              onChange={(e) => setEmailForOption(3, e.target.value)}
              className='mt-6 rounded-md border border-gray-300 p-2'
            />
            <button
              onClick={() => {
                setSelectedGiftDays(365);
                setSelectedPrice(20000);
                handleGiftClick(3);
              }}
              className='mt-10 block w-full bg-bluebook px-3 py-2 text-center text-sm font-bold font-roboto text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              REGALAR
            </button>
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
          src={manchaRoja}
          alt='estrellaNaranja'
          className='absolute w-[250px] ml-[-700px] top-16  '
        />
      </div>

      <div>
        <img
          src={cruzRosa}
          alt='estrellaNaranja'
          className='absolute w-[250px] ml-[-800px] top-[480px] rotate-12'
        />
      </div>
      <div>
        <img
          src={manchaRoja}
          alt='estrellaNaranja'
          className='absolute w-[250px] ml-[660px] top-[750px]'
        />
      </div>
      <div>
        <img
          src={estrellaNaranja}
          alt='estrellaNaranja'
          className='absolute w-[270px] ml-[-900px] top-[950px] '
        />
      </div>
      <div>
        <FAQs />
      </div>
      <div className='w-screen'>
        <Footer />
      </div>
    </div>
  );
};

export default Gift;
