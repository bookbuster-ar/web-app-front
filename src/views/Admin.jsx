import { useState } from 'react';
import Usuarios from '../components/Admin/Usuarios';
import Productos from '../components/Admin/Productos';
import Compras from '../components/Admin/Compras';
import Reseñas from '../components/Admin/Reseñas';

const Admin = () => {
  const user = {
    photoURL:
      'https://media.tycsports.com/files/2023/02/10/532928/lionel-messi_1440x810_wmk.webp',
    name: 'Juan Pérez',
    bookGenres: ['Ciencia Ficción', 'Fantasía', 'Historia', 'Poesía'],
    email: 'juan@example.com',
    phone: '+1234567890',
    birthdate: '01/01/1990',
  };

  const [activeView, setActiveView] = useState(0);

  return (
    <div className='min-h-screen bg-gray-100 flex'>
      {/* Barra Lateral */}
      <div className='w-40 pt-4 bg-blue-900 shadow-lg'>
      <div className='flex items-center justify-center mb-1'>
          <img
            src={user.photoURL}
            alt='User Avatar'
            className='w-20 h-20 rounded-full border-2 border-gray-300'
          />
        </div>
        <h2 className='text-xl mb-6 text-center text-white'>(admin)</h2>
        <ul>
          <li className='mb-2 pl-4 text-white cursor-pointer hover:bg-blue-500'>
            <button onClick={() => setActiveView(0)}>Usuarios</button>
          </li>
          <li className='mb-2 pl-4 text-white cursor-pointer hover:bg-blue-500'>
            <button onClick={() => setActiveView(1)}>Productos</button>
          </li>
          <li className='mb-2 pl-4 text-white cursor-pointer hover:bg-blue-500'>
          <button onClick={() => setActiveView(2)}>Compras</button>
          </li>
          <li className='mb-2 pl-4 text-white cursor-pointer hover:bg-blue-500'>
          <button onClick={() => setActiveView(3)}>Reseñas</button>
          </li>
          <li className='mb-2 pl-4 text-white cursor-pointer hover:bg-blue-500'>
            Salir
          </li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className='w-5/6 bg-gray-100 p-8'>
        <div className='flex place-content-between mb-10'>
          <div className='bg-white p-8 rounded-xl shadow-lg w-72 h-24'>
            <h2>Suscriptores</h2>
          </div>
          <div className='bg-white p-8 rounded-xl shadow-lg w-72 h-24'>
            <h2>Libros Vendidos / Mes</h2>
          </div>
          <div className='bg-white p-8 rounded-xl shadow-lg w-72 h-24'>
            <h2>Stock General</h2>
          </div>
        </div>

        <div className='bg-white p-8 rounded-xl shadow-lg'>
          {activeView === 0 ? (
            <Usuarios />
          ) : activeView === 1 ? (
            <Productos />
          ) : activeView === 2 ? (
            <Compras />
          ) : activeView === 3 ? (
            <Reseñas />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
