const Stock = () => {
  const stock = [
    {
      stock: 10,
      libro: 'Poeta Chileno',
    },
    {
      stock: 25,
      libro: 'Harry Potter y la piedra filosofal',
    },
    {
      stock: 25,
      libro: 'El retrato de Dorian Gray',
    },
  ];

  return (
    <div className='text-center'>
      <h1 className='bg-bluebook w-60 mx-auto text-white rounded-lg py-2 px-4'>
        Stock
      </h1>
      <br />
      <ul className='hidden lg:bg-bluebook text-white rounded-lg lg:grid grid-cols-6 gap-5 w-full font-bold sticky top-0 bg-white py-4'>
        <li>Stock actual</li>
        <li className='col-span-2'>Agregar Stock</li>
        <li className='col-span-3 text-center'>Libros</li>
      </ul>
      <ul className='grid grid-cols-1 gap-5 w-full'>
        {stock?.map((stock, index) => (
          <li
            key={index}
            className={`grid grid-cols-12 items-center gap-x-5 border-b-2 rounded-lg `}
          >
            <h3 className='mx-auto md:h-20 md:w-20 flex justify-center text-center items-center lg:h-30  lg:w-24 col-span-4 md:col-span-2 lg:col-span-2 p-4'>
              {stock.stock}
            </h3>

            <button className='font-semibold hover:bg-gray-500 mx-auto hover:text-gray-200 text-center text-xl col-span-8 md:col-span-3 lg:col-span-4 bg-slate-200 w-fit p-4 rounded-lg'>
              Agregar +
            </button>
            <h3 className='font-semibold text-xl col-span-12 md:col-span-6'>
              {stock.libro}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stock;
