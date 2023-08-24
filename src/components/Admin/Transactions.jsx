const Transactions = () => {
  const transactions = [
    {
      user: {
        user_name: 'admin',
        user_last_name: 'test',
      },
      transaction: {
        mercado_pago_transaction_id: '123456789',
        transaction_date: '2023-01-01',
        total_amount: 100,
        transaction_status: 'approved',
      },
      books: [
        {
          id: 'ce10629e-33b3-4ccb-ba75-c87703c1b450',
          title: 'Poesía completa',
          quantity: 1,
          unit_price: 100,
        },
      ],
    },
    {
      user: {
        user_name: 'admin',
        user_last_name: 'test',
      },
      transaction: {
        mercado_pago_transaction_id: '123456789',
        transaction_date: '2023-01-01',
        total_amount: 100,
        transaction_status: 'approved',
      },
      books: [
        {
          id: 'ce10629e-33b3-4ccb-ba75-c87703c1b450',
          title: 'Poesía completa',
          quantity: 1,
          unit_price: 100,
        },
      ],
    },
  ];

  return (
    <div className='text-center'>
      <h1 className='bg-bluebook w-60 mx-auto text-white rounded-lg py-2 px-4'>
        Transactions
      </h1>
      <br />
      <ul className='hidden lg:bg-bluebook text-white rounded-lg lg:grid grid-cols-6 gap-5 w-full font-bold sticky top-0 bg-white py-4'>
        <li>Usuario</li>
        <li className='col-span-2'>Transacción</li>
        <li className='col-span-3 text-center'>Libros</li>
      </ul>
      <ul className='grid grid-cols-1 gap-5 w-full'>
        {transactions?.map((transac, index) => (
          <li
            key={index}
            className={`grid grid-cols-12 items-center gap-x-5 border-b-2 rounded-lg `}
          >
            <h3 className='mx-auto md:h-20 md:w-20 lg:h-24 lg:w-24 col-span-4 md:col-span-2 lg:col-span-2 p-4'>
              {transac.user.user_name}
            </h3>
            <h3 className='font-semibold text-md col-span-8 md:col-span-3 lg:col-span-4'>
              {transac.transaction.transaction_date} {transac.user_last_name}
            </h3>
            <h3 className='font-semibold text-sm col-span-12 md:col-span-6'>
              {transac.books.map((book) => {
                return <p key={book.id}>{book.title}</p>;
              })}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
