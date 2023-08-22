import { useState } from 'react';
import ErrorModal from '../icons/ErrorModal';
import SuccessModal from '../icons/SuccessModal';

const ModalMessage = ({
  message,
  status,
}) => {
  const [isActive, setIsActive] = useState(true);
  if (!isActive) {
    return null;
  }

  const handleContinue = () => {
    setIsActive(!isActive)
  }

  return (
    <div
      className='relative z-10'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 ${status > 299 ? 'bg-red-100' : 'bg-green-100'}`}>
                  {status > 399 ? <ErrorModal /> : <SuccessModal/>}
                </div>
                <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
                  <h3
                    className={`text-base font-semibold leading-6 ${status > 399 ? 'text-red-500 hover:text-red-600' : 'text-green-500 hover:text-green-600'}'  `}
                    id='modal-title'
                  >
                    {status > 399 ? 'Ha ocurrido un error.' : '¡Listo!'}
                  </h3>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>{message}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
              <button
                type='button'
                className='inline-flex w-full justify-center rounded-md bg-bluebook px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:ml-3 sm:w-auto'
                onClick={handleContinue}
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMessage;
