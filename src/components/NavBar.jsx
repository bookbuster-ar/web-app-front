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
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    setShowMenu(!showMenu)
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='bg-bluebook shadow-lg md:shadow-none '>
      <div className='h-14 md:h-20 lg:h-24 xl:h-32 w-full flex justify-between xl:justify-center'>
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
            <Link to='/home/library'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-current hover:border-yellowbook'>
                Explorá la Librería
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/home/subscription'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-current hover:border-yellowbook'>
                ¿Por qué suscribirme?
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/home/sellbook'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-current hover:border-yellowbook'>
                Vendé o Alquila
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/gift'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-current hover:border-yellowbook'>
                Regalá Bookbuste
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/home/search'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-current hover:border-yellowbook'>
                Encontrá tu próximo libro
              </span>
            </Link>
          </div>
          {isLogged ? (
            <div
              className='text-white my-4 cursor-pointer'
              onClick={handleLogOut}
            >
              <Avatar />
            </div>
          ) : (
            <div className='text-white my-4'>
              <Link to='/login'>
                <button className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-current border bg-redbook hover:border-red-700 px-4 py-2 rounded-md'>
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
            {showMenu ? <Delete color={'yellowbook'} /> : <ResponsiveMenu />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {showMenu && (
        <div className='xl:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            <ul>
              <li className='text-white text-center my-4'>
              <Link to='/home/library'>
                <span onClick={handleMenu} className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                  Explorá la Librería
                </span>
                </Link>
              </li>
              <li className='text-white text-center my-4'>
              <Link to='/home/subscription'>
                <span onClick={handleMenu} className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                  ¿Por qué suscribirme?
                </span>
                </Link>
              </li>
              <li className='text-white text-center my-4'>
              <Link to='/home/sellbook'>
                <span onClick={handleMenu} className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                  Vendé o Alquila
                </span>
                </Link>
              </li>
              <li className='text-white text-center my-4'>
              <Link to='/gift'>
                <span onClick={handleMenu} className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                  Regalá Bookbuste
                </span>
                </Link>
              </li>
              <li className='text-white text-center my-4'>
              <Link to='/home/search'>
                <span onClick={handleMenu} className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook'>
                  Encontrá tu próximo libro
                </span>
                </Link>
              </li>
              {isLogged ? (
                <li
                  className='text-white text-center my-4'
                  onClick={handleLogOut}
                >
                  <Link to='/'>
                    <Avatar />
                  </Link>
                </li>
              ) : (
                <li onClick={handleMenu} className='text-white text-center my-4'>
                  <Link to='/login'>
                    <button className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-current border bg-redbook hover:border-red-700 px-4 py-2 rounded-md'>
                      Iniciar sesión
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
