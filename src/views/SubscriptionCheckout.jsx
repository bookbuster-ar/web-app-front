import axios from 'axios';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { useState } from 'react';

const SubscriptionCheckout = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  initMercadoPago('YOUR_PUBLIC_KEY'); // olocar Public_key

  const createPreference = async () => {
    try {
      const response = await axios.post('aca el endpoint que corresponda', {
        description: 'suscription',
        price: 2000,
        quantity: 1,
        currency_id: 'ARS',
      });

      const { id } = response.data; //response.data.response.body ?
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
      <div className='bg-white rounded-xl shadow-xl w-full max-w-xl p-8'>
        <h3 className='text-2xl font-semibold mb-4 text-gray-800'>
          Suscripción Mensual
        </h3>
        <p className='text-lg text-gray-600 mb-6'>
          ¡Accedé a la suscripción mensual y disfrutá de los beneficios!
        </p>
        <button
          onClick={handleBuy}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mb-5 transition duration-300 ease-in-out transform hover:scale-105'
        >
          Suscribirme
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

export default SubscriptionCheckout;
