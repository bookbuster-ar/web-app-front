import { useState } from 'react';
import Usuarios from '../components/Admin/Usuarios';
import Productos from '../components/Admin/Productos';
import Compras from '../components/Admin/Compras';
import Reseñas from '../components/Admin/Reseñas';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../store/user/userSlice';
import ResponsiveMenu from '../icons/ResponsiveMenu';
import Delete from '../icons/Delete';

const Admin = () => {
  const user = useSelector(selectUser);
  const [adminMenu, setAdminMenu] = useState(true);
  const [activeView, setActiveView] = useState(0);

  return (
    <div>
      <div className='min-h-screen bg-gray-500 flex'>
        <nav className='hidden bg-bluebook xl:flex xl:flex-col xl:w-40 xl:items-center'>
          <div className='hidden bg-bluebook xl:flex xl:flex-col xl:justify-around xl:w-40 xl:items-center'>
            <div className='text-white my-4'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Usuarios
              </span>
            </div>
            <div className='text-white my-4'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Suscripciones
              </span>
            </div>
            <div className='text-white my-4'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Baneados
              </span>
            </div>
            <div className='text-white my-4'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Recomendados
              </span>
            </div>
            <div className='text-white my-4'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Generos
              </span>
            </div>
            <div className='text-white my-4'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Subgeneros
              </span>
            </div>
            
            <div className='text-white my-4'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Libros vendidos
              </span>
            </div>
            <div className='text-white my-4'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Transacciones
              </span>
            </div>
          </div>
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
