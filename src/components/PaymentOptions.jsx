const PaymentOptions = ({ handlerBuyBook, handleClose, formatPrice }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white mx-2 p-6 rounded-lg shadow-md text-center h-[620px] '>
        <button
          onClick={handleClose}
          className='bg-blue-600 text-white rounded-full w-6 hover:bg-blue-700'
        >
          x
        </button>
        {formatPrice &&
          formatPrice.map((formatAndPrice, index) => (
            <div className='hover:scale-105 transition-all duration-700' key={index}>
              <h1 className='text-start ml-4 font-semibold font-roboto'>
                {formatAndPrice.name}
              </h1>
              <div className='border rounded-lg py-2 px-6 border-slate-300 p-2'>
                <h1 className='font-semibold font-roboto'>
                  ARS $ {parseInt(formatAndPrice.price)}
                </h1>
                <h2 className='text-bluebook font-semibold'>
                  Envío sin cargo para suscriptores y hasta 20% off
                </h2>
                <button
                  onClick={() =>
                    handlerBuyBook(
                      parseInt(formatAndPrice.price),
                      formatAndPrice.name
                    )
                  }
                  className='bg-greybook px-4 py-2 rounded-lg hover:bg-slate-300 '
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PaymentOptions;
