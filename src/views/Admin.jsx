import { useState } from 'react';
import Usuarios from '../components/Admin/Usuarios';
import Productos from '../components/Admin/Productos';
import Compras from '../components/Admin/Compras';
import Revision from '../components/Admin/Reseñas';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../store/user/userSlice';
import ResponsiveMenu from '../icons/ResponsiveMenu';
import Delete from '../icons/Delete';

const Admin = () => {
  const user = useSelector(selectUser);
  const [adminMenu, setAdminMenu] = useState(true);
  const [activeView, setActiveView] = useState(1);

  const updateView = (value) => {
    setActiveView(value);
  };

  return (
    <div>
      <div className='min-h-screen flex no-scroll-x'>
        <nav className='hidden bg-bluebook xl:flex xl:flex-col xl:w-40 xl:items-center'>
          <ul className='hidden xl:flex xl:flex-col xl:justify-around xl:w-40 xl:items-center'>
            <li
              className={` text-white my-4 ursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook ${
                activeView === 1 ? 'text-yellowbook' : 'text-white'
              } `}
              onClick={() => setActiveView(1)}
            >
              Usuarios
            </li>
            <li
              className={` text-white my-4 ursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook ${
                activeView === 2 ? 'text-yellowbook' : 'text-white'
              } `}
              onClick={() => setActiveView(2)}
            >
              Suscripciones
            </li>
            <li
              className={` text-white my-4 ursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook ${
                activeView === 3 ? 'text-yellowbook' : 'text-white'
              } `}
              onClick={() => setActiveView(3)}
            >
              Baneados
            </li>
            <li
              className={` text-white my-4 ursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook ${
                activeView === 4 ? 'text-yellowbook' : 'text-white'
              } `}
              onClick={() => setActiveView(4)}
            >
              Revisión
            </li>
            <li
              className={` text-white my-4 ursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook ${
                activeView === 5 ? 'text-yellowbook' : 'text-white'
              } `}
              onClick={() => setActiveView(5)}
            >
              Generos
            </li>
            <li
              className={` text-white my-4 ursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook ${
                activeView === 6 ? 'text-yellowbook' : 'text-white'
              } `}
              onClick={() => setActiveView(6)}
            >
              Subgeneros
            </li>
            <li
              className={` text-white my-4 ursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook ${
                activeView === 7 ? 'text-yellowbook' : 'text-white'
              } `}
              onClick={() => setActiveView(7)}
            >
              Libros vendidos
            </li>
            <li
              className={` text-white my-4 ursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook ${
                activeView === 8 ? 'text-yellowbook' : 'text-white'
              } `}
              onClick={() => setActiveView(8)}
            >
              Transacciones
            </li>
          </ul>

          <div className='xl:hidden cursor-pointer mx-5' onClick=''>
            <button>
              {adminMenu ? (
                <Delete
                  color={'yellowbook'}
                  size={'md:w-11 md:h-12 lg:w-14 lg:h-16 lg:mr-2'}
                />
              ) : (
                <ResponsiveMenu />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {adminMenu && (
            <div className='bg-bluebook xl:hidden'>
              <div className='px-2 pb-3 pt-1'>
                <ul>
                  <li className='text-white text-center'>
                    <span
                      onClick=''
                      className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                    >
                      Explorá la Librería
                    </span>
                  </li>
                  <li className='text-white text-center'>
                    <span
                      onClick=''
                      className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                    >
                      ¿Por qué suscribirme?
                    </span>
                  </li>
                  <li className='text-white text-center'>
                    <span
                      onClick=''
                      className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                    >
                      Vendé o Alquila
                    </span>
                  </li>
                  <li className='text-white text-center'>
                    <span
                      onClick=''
                      className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                    >
                      Regalá Bookbuste
                    </span>
                  </li>
                  <li className='text-white text-center'>
                    <span
                      onClick=''
                      className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                    >
                      Encontrá tu próximo libro
                    </span>
                  </li>

                  <li onClick='' className='text-white text-center'>
                    <button className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out border bg-redbook hover:border-red-700 px-4 py-2 rounded-md'>
                      Iniciar sesión
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </nav>
        {/* ... */}

        <div>
          <div className={activeView === 1 ? 'block' : 'hidden'}>
            <Usuarios />
          </div>
          <div className={activeView === 2 ? 'block' : 'hidden'}>
            <h1>Suscriptores</h1>
          </div>
          <div className={activeView === 3 ? 'block' : 'hidden'}>
            <h1>Baneados</h1>
          </div>
          <div className={activeView === 4 ? 'block' : 'hidden'}>
            <Revision />
          </div>
          <div className={activeView === 5 ? 'block' : 'hidden'}>
            <h1>Géneros</h1>
          </div>
          <div className={activeView === 6 ? 'block' : 'hidden'}>
            <h1>Subgéneros</h1>
          </div>
          <div className={activeView === 7 ? 'block' : 'hidden'}>
            <h1>Libros vendidos</h1>
          </div>
          <div className={activeView === 8 ? 'block' : 'hidden'}>
            <h1>Transacciones</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

<div className='xl:w-40 flex flex-col items-center justify-between'>
  <button
    className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
    aria-current='page'
  >
    Dashboard
  </button>
  <button className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
    Team
  </button>
  <button className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
    Projects
  </button>
  <button className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
    Calendar
  </button>
  <button className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
    Reports
  </button>
</div>;
