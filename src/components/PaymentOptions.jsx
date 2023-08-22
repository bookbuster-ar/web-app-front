const PaymentOptions = ({handlerBuyBook,handleClose,  price}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-md text-center h-[620px] '>
        <button
          onClick={handleClose}
          className='bg-blue-600 text-white rounded-full w-6 hover:bg-blue-700'
        >
          x
        </button>
        <div className='flex flex-col items-center justify-center'></div>
        <h1 className='text-center font-semibold py-2'>
          DISPONIBILIDAD DEL LIBRO
        </h1>
        <div className='grid grid-cols-2 grid-rows-3 gap-4 w-auto h-full'>
          <div className='w-full h-fit'>
            <h1 className='text-start font-semibold font-roboto '>
              LIBRO FÍSICO
            </h1>
            <div className=' w-full'>
              <h1 className='text-start font-semibold font-roboto'>
                Comprar nuevo
              </h1>
              <div className='border rounded-lg border-slate-300 p-2'>
                <h1 className='font-semibold font-roboto'>
                  ARS $ {price}
                </h1>
                <h2 className='text-bluebook font-semibold'>
                  Envío sin cargo para suscriptores y hasta 20% off
                </h2>
                <button
                  onClick={handlerBuyBook}
                  className='bg-greybook px-4 rounded-lg hover:bg-slate-300 '
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>

          <div>
            <h1 className='text-start font-semibold font-roboto'>DIGITAL</h1>
            <div className=' w-full'>
              <h1 className='text-start font-semibold font-roboto'>Comprar</h1>
              <div className='border rounded-lg border-slate-300 p-2'>
                <h1 className='font-semibold font-roboto'>
                  ARS $ {price}
                </h1>
                <h2 className='text-bluebook font-semibold'>
                  Envío sin cargo para suscriptores y hasta 20% off
                </h2>
                <button
                  onClick={handlerBuyBook}
                  className='bg-greybook px-4 rounded-lg hover:bg-slate-300 '
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className=' w-full'>
              <h1 className='text-start font-semibold font-roboto'>
                Comprar usado
              </h1>
              <div className='border rounded-lg border-slate-300 p-2'>
                <h1 className='font-semibold font-roboto'>
                  ARS $ {price}
                </h1>
                <h2 className='text-bluebook font-semibold'>
                  Envío sin cargo para suscriptores y hasta 20% off
                </h2>
                <button
                  onClick={handlerBuyBook}
                  className='bg-greybook px-4 rounded-lg hover:bg-slate-300 '
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className=' w-full'>
              <h1 className='text-start font-semibold font-roboto'>
                Comprar audiolibro
              </h1>
              <div className='border rounded-lg border-slate-300 p-2'>
                <h1 className='font-semibold font-roboto'>
                  ARS $ {price}
                </h1>
                <h2 className='text-bluebook font-semibold'>
                  Envío sin cargo para suscriptores y hasta 20% off
                </h2>
                <button
                  onClick={handlerBuyBook}
                  className='bg-greybook px-4 rounded-lg hover:bg-slate-300 '
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className=' w-full'>
              <h1 className='text-start font-semibold font-roboto'>Alquiler</h1>
              <div className='border rounded-lg border-slate-300 p-2'>
                <h1 className='font-semibold font-roboto'>
                  ARS $ {price}
                </h1>
                <h2 className='text-bluebook font-semibold'>
                  Solo para suscriptores. Envío y retiro sin cargo (AMBA)
                </h2>
                <button
                  onClick={handlerBuyBook}
                  className='bg-greybook px-4 rounded-lg hover:bg-slate-300 '
                >
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
