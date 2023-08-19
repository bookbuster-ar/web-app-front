import { useState } from 'react';
import FormSell from '../components/FormSell';
import Rent from '../components/Rent';

const SellOrRent = () => {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (value) => {
    setToggle(value);
  };
  return (
    <div>
      <div className='w-full'>
        <ul className='flex font-bold font-roboto text-3xl text-bluebook text-center'>
          <li
            className={`flex-fill ${
              toggle === 1
                ? 'text-bluebook font-bold bg-greybook h-full w-1/2 py-6'
                : 'text-white font-bold bg-gray-400 h-full w-1/2 py-6'
            }  cursor-pointer`}
            onClick={() => updateToggle(1)}
          >
            VENDÉ
          </li>
          <li
            className={`flex-fill ${
              toggle === 2
                ? 'text-bluebook font-bold bg-greybook h-full w-1/2 py-6'
              : 'text-white font-bold bg-gray-400 h-full w-1/2 py-6'
            }  cursor-pointer`}
            onClick={() => updateToggle(2)}
          >
            ALQUILÁ
          </li>
        </ul>
      </div>
      <div className={toggle === 1 ? 'block' : 'hidden'}>
        <FormSell />
      </div>
      <div className={toggle === 2 ? 'block' : 'hidden'}>
        <Rent />
      </div>
    </div>
  );
};

export default SellOrRent;
