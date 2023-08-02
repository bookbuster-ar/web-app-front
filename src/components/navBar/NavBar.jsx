import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';
import logoNav from './Logo.jpeg';
const NavBar = () => {
  return (
    <div className='text-xs bg-white flex flex-row py-5 space-x-6 w-screen items-center'>
      <div className='flex items-center'>
        <div>
          <img className='w-12 rounded-full ml-4 mr-4' src={logoNav} alt='Logo' />
        </div>
        <div className='space-x-6 mr-24'>
          <NavLink to={'/home/library'}>
            <button className='h-8 text-black transition bg-blue-500 hover:scale-110 hover:bg-sky-500 duration-300'>Explorá nuestros libros</button>
          </NavLink>
          <button className='h-8 text-black transition bg-blue-500 hover:scale-110 hover:bg-sky-500 duration-300'>¿Por qué suscribirme?</button>
          <button className='h-8 text-black transition bg-blue-500 hover:scale-110 hover:bg-sky-500 duration-300'>Vendé tus libros</button>
          <button className='h-8 text-black transition bg-blue-500 hover:scale-110 hover:bg-sky-500 duration-300'>Comprar suscripción</button>
          <button className='h-8 text-black transition bg-blue-500 hover:scale-110 hover:bg-sky-500 duration-300'>Iniciar sesión</button>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
