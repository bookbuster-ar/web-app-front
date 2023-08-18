import { Link } from 'react-router-dom';
import logoNav from '../assets/Logo.png';
import ResponsiveMenu from '../icons/ResponsiveMenu';
import Delete from '../icons/Delete';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogged } from '../store/user/authSlice';
import { logOut } from '../store/user/authSlice';
import Avatar from '../components/Avatar';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  const isAdmin = true; // Harcodeada temporalmente

  const handleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogOut = () => {
    dispatch(logOut());
    setShowMenu(false);
    setShowProfile(false);
  };

  const handleClose = () => {
    setShowMenu(false);
    setShowProfile(false);
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='relative shadow-lg md:shadow-none '>
      <div className='bg-bluebook h-14 md:h-20 lg:h-24 xl:h-32 w-full flex justify-between xl:justify-center'>
        <div className='px-5 py-3.5 md:px-6 md:py-4 lg:px-7 lg:py-5 xl:px-12 xl:py-9 '>
          <Link to='/'>
            <img
              className='h-7 md:h-11 lg:h-14 xl:w-16'
              src={logoNav}
              alt='Logo'
            />
          </Link>
        </div>
        <div className='hidden xl:ml-6 xl:flex xl:w-full xl:justify-around xl:items-center space-x-4 mx-4'>
          <div className='text-white my-4'>
            <Link to='/library'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Explorá la Librería
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/subscription'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                ¿Por qué suscribirme?
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/sellbook'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Vendé
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/rent'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Alquilá
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/gift'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Regalá Bookbuster
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/search'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                Encontrá tu próximo libro
              </span>
            </Link>
          </div>
          {isLogged ? (
            <div
              className='text-white my-4 cursor-pointer'
              onClick={handleProfile}
            >
              <Avatar />
            </div>
          ) : (
            <div className='text-white my-4'>
              <Link to='/login'>
                <button className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out border bg-redbook hover:border-red-700 px-4 py-2 rounded-md'>
                  Iniciar sesión
                </button>
              </Link>
            </div>
          )}
        </div>
        <div
          className='xl:hidden cursor-pointer my-4 mx-5'
          onClick={handleMenu}
        >
          <button>
            {showMenu ? (
              <Delete
                color={'yellowbook'}
                size={'md:w-11 md:h-12 lg:w-14 lg:h-16 lg:mr-2'}
              />
            ) : (
              <ResponsiveMenu />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {showMenu && (
        <div className='bg-bluebook xl:hidden'>
          <div className='px-2 pb-3 pt-1'>
            <ul>
              <li className='text-white text-center my-4'>
                <Link to='/library'>
                  <span
                    onClick={handleClose}
                    className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                  >
                    Explorá la Librería
                  </span>
                </Link>
              </li>
              <li className='text-white text-center my-4'>
                <Link to='/subscription'>
                  <span
                    onClick={handleClose}
                    className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                  >
                    ¿Por qué suscribirme?
                  </span>
                </Link>
              </li>
              <li className='text-white text-center my-4'>
                <Link to='/sellbook'>
                  <span
                    onClick={handleClose}
                    className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                  >
                    Vendé o Alquila
                  </span>
                </Link>
              </li>
              <li className='text-white text-center my-4'>
                <Link to='/gift'>
                  <span
                    onClick={handleClose}
                    className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                  >
                    Regalá Bookbuste
                  </span>
                </Link>
              </li>
              <li className='text-white text-center my-4'>
                <Link to='/search'>
                  <span
                    onClick={handleClose}
                    className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                  >
                    Encontrá tu próximo libro
                  </span>
                </Link>
              </li>
              {isLogged ? (
                <li
                  className='text-white text-center my-4'
                  onClick={handleProfile}
                >
                  <Link to='/'>
                    <Avatar />
                  </Link>
                </li>
              ) : (
                <li
                  onClick={handleMenu}
                  className='text-white text-center my-4'
                >
                  <Link to='/login'>
                    <button className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out border bg-redbook hover:border-red-700 px-4 py-2 rounded-md'>
                      Iniciar sesión
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
      {/* Show Profile Menu */}
      {showProfile && (
        <div className='bg-bluebook xl:absolute xl:right-0 xl:w-60 xl:rounded-bl-2xl xl:z-10'>
          <div className='px-4 pb-3 pt-1 text-center'>
            <ul>
              <li className='text-white my-4'>
                <Link to='/user'>
                  <span
                    onClick={handleClose}
                    className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                  >
                    Tu perfil
                  </span>
                </Link>
              </li>
              <li className='text-white my-4'>
                <Link to='/user/profile'>
                  <span
                    onClick={handleClose}
                    className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                  >
                    Configuración
                  </span>
                </Link>
              </li>
              {isAdmin && (
                <li className='text-white my-4'>
                  <Link to='/admin'>
                    <span
                      onClick={handleClose}
                      className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'
                    >
                      Administrador
                    </span>
                  </Link>
                </li>
              )}
              <div className='text-white my-4' onClick={handleLogOut}>
                <Link to='/'>
                  <button className='cursor-pointer border-transparent transition-colors duration-300 ease-in-out border bg-redbook hover:border-red-700 px-4 py-2 rounded-md'>
                    Cerrar sesión
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
