import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handlerSearch = () => {
    alert('Simulamos que se busca algo mi rey');
  };

  return (
    <div className='space-x-2 flex items-center ml-15'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        />
      </svg>
      <input
        type='text'
        placeholder='Buscá tu libro o autor aquí..'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='text-black text-base rounded-md pl-2 w-96 p-2  bg-transparent border outline-none'
      />
      {inputValue && (
        <svg
          onClick={() => setInputValue('')}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      )}
    </div>
  );
};

export default SearchBar;