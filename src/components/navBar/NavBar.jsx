import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='text-xs bg-gray-50 flex p-5 '>
      <div className='flex-row space-x-6  items-center '>
        <img src='' alt='Logo' />
        <NavLink to={'/home/library'}>
          <button>Explorá nuestros libros</button>
        </NavLink>
        <button>¿Por qué suscribirme?</button>
        <button>Vendé tus libros</button>
        <button>Comprar suscripción</button>
        <button>Iniciar sesión</button>
      </div>

      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
