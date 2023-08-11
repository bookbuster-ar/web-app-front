import { NavLink, Link } from 'react-router-dom';
import logoNav from '../assets/Logo.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogged } from '../store/user/authSlice';
import { logOut } from '../store/user/authSlice';
import User from '../icons/User';

const NavBar = () => {
  const [showDialog, setShowDialog] = useState(false);
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const handleLogOut = () => {
    dispatch(logOut(false));
  };

  return (
    <nav className='text-xs bg-white flex flex-row py-5 space-x-6 w-full items-center h-20 shadow-lg justify-between sm:'>
      <div className='flex items-center py-3 px-10'>
        <div className='flex-grow-0'>
          <Link to='/'>
            <img
              className='w-12 rounded-full ml-4 mr-4'
              src={logoNav}
              alt='Logo'
            />
          </Link>
        </div>

        <div></div>
        <nav className='space-x-6 flex text-sm transition-colors duration-200 text-current font-medium'>
          <ul className='flex space-x-4'>
            <li>
              <Link to={'/home/search'}>
                <button className='px-4 py-2 inline-block'>Buscá</button>
              </Link>
            </li>
            <li>
              <NavLink to='/home/library'>
                <button className='px-4 py-2 inline-block'>
                  Explorá la librería
                </button>
              </NavLink>
            </li>
            <li>
              <Link to='/home/sellbook'>
                <button className='px-4 py-2 inline-block'>
                  Vendé tus libros
                </button>
              </Link>
            </li>
            <li>
              <Link to={'/home/subscription'}>
                <button className='px-4 py-2 inline-block'>
                  ¿Por qué suscribirme?
                </button>
              </Link>
            </li>
            <li>
              <Link to={'/gift'}>
                <button className='px-4 py-2 inline-block'>
                  Regalá una suscripción a Bookbuster
                </button>
              </Link>
            </li>
            {isLogged ? (
              <li>
                <Link to='/'>
                  <button
                    className='px-4 py-2 inline-block'
                    onClick={handleLogOut}
                  >
                    Cerrar sesión
                  </button>
                </Link>
              </li>
            ) : (
              <li>
                <Link to='/login'>
                  <button className='px-4 py-2 inline-block'>
                    Iniciar sesión
                  </button>
                </Link>
              </li>
            )}
            <li>
              <Link to='/home/user'>
                <button className='px-4 py-2 inline-block'>
                  <User />
                </button>
              </Link>
            </li>
            <li>
              <Link to='/home/admin'>
                <button className='px-4 py-2 inline-block'>Admin</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {showDialog && (
        <div className='fixed inset-0 flex items-center justify-center '>
          <div className='inset-0 bg-gray-700 opacity-50'></div>
          <div className='bg-white absolute rounded-lg p-4 flex flex-col items-center justify-center w-2/4 h-5/6 shadow-xl shadow-gray-300'>
            <h2 className='text-lg font-semibold mb-2'>
              Nuestras suscripciones
            </h2>
            <div className='bg-gray-100 flex'>
              <div className='flex flex-col justify-center '>
                <div className='flex justify-center '>
                  <h2 className='text-lg font-semibold mb-2 '>Clásica</h2>
                </div>
                <p>
                  • Envío sin cargo en caso de compra de libros nuevos y usados.
                </p>
                <p>• Alquilar hasta 2 libros en simultáneo.</p>
                <p>
                  • Podés vender tus libros usados a la plataforma para comprar
                  nuevos.
                </p>
                <p>• Acceso a catálogo exclusivo para suscriptores</p>
                <p>• 30 días de permanencia de libros</p>
                <div className='flex justify-center '>
                  <h2 className='text-lg font-semibold mb-2 text-blue-500 p-3'>
                    ARS$2.000
                  </h2>
                </div>
              </div>

              <div className='flex flex-col justify-center '>
                <div className='flex justify-center '>
                  <h2 className='text-lg font-semibold mb-2'>Manija</h2>
                </div>

                <p>
                  • Envío sin cargo en caso de compra de libros nuevos y usados.
                </p>
                <p>• Alquilar hasta 4 libros en simultáneo.</p>
                <p>
                  • Podés vender tus libros usados a la plataforma para comprar
                  nuevos.
                </p>
                <p>• Acceso a catálogo exclusivo para suscriptores</p>
                <p>• 45 días de permanencia de libros</p>
                <p>
                  • 20% de descuento en cualquier compra o descarga de libros
                </p>
                <div className='flex justify-center '>
                  <h2 className='text-lg font-semibold mb-2 color text-blue-500'>
                    ARS $8.000
                  </h2>
                </div>
              </div>
            </div>
            <button
              onClick={closeDialog}
              className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg'
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
