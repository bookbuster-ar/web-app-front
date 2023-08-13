import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useState } from 'react';

const BookCheckout = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago('YOUR_PUBLIC_KEY'); // Colocar Public_Key

  const createPreference = async () => {
    try {
      const response = await axios.post('aca el endpoint que corresponda', {
        description: 'compra de libro',
        price: 2000,
        quantity: 1,
        currency_id: 'ARS',
      });

      const { id } = response.data; // response.data.response.body ?
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-200'>
      <div className='bg-white rounded-xl shadow-lg w-full max-w-md p-8 space-y-5'>
        <h3 className='text-2xl font-semibold text-gray-800'>Comprar Libro</h3>
        <div className='flex justify-between items-center'>
          <p className='text-lg text-gray-600'>Nombre del libro</p>
          <span className='text-xl font-bold text-gray-800'>$2000</span>
        </div>
        <p className='text-sm text-gray-500 mb-4'>
          Disfruta de tu próxima lectura con una entrega rápida y segura a
          través de Mercado Pago.
        </p>
        <button
          onClick={handleBuy}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full w-full transition duration-300 ease-in-out transform hover:scale-105'
        >
          Comprar con Mercado Pago
        </button>
        {preferenceId && (
          <div className='mt-5 bg-gray-100 p-5 rounded-lg'>
            <Wallet initialization={{ preferenceId }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCheckout;
