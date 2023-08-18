const Usuarios = () => {
  const users = [
    {
      photoURL:
        'https://media.tycsports.com/files/2023/02/10/532928/lionel-messi_1440x810_wmk.webp',
      name: 'Juan Pérez',
      email: 'juan@example.com',
      phone: '+1234567890',
      birthdate: '01/01/1990',
    },
    {
      photoURL:
        'https://media.tycsports.com/files/2023/02/10/532928/lionel-messi_1440x810_wmk.webp',
      name: 'Carlos Lopez',
      email: 'carlos@example.com',
      phone: '+1248495830',
      birthdate: '01/01/1990',
    },
    {
      photoURL:
        'https://media.tycsports.com/files/2023/02/10/532928/lionel-messi_1440x810_wmk.webp',
      name: 'Julian Acosta',
      email: 'julian@example.com',
      phone: '+1249384890',
      birthdate: '01/01/1990',
    },
  ];
  return (
    <div>
      <div className='flex mb-7'>
        <h1 className='text-3xl'>Usuarios</h1>
        <button className='bg-blue-500 text-sm rounded ml-2 text-white py-0 px-2'>
          Añadir nuevo
        </button>
      </div>
      <div className='h-auto w-11/12 space-y-3'>
        {users?.map((user, index) => (
          <div key={index} className='flex space-x-28 items-center'>
            <div className='flex space-x-3'>
              <button className='hover:text-red-600'>Bloquear</button>
              <div className='flex items-center w-40 space-x-2'>
                <img src={user.photoURL} alt='photo' className='w-9 h-9 bg-contain' />
                <p>{user.name}</p>
              </div>
            </div>
            <span>{user.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usuarios;
