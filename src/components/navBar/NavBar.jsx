import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div>
        <img src='' alt='Logo' />
        <NavLink to={'/home/library'}>
          <button>Explorá nuestros libros</button>
        </NavLink>
        <button>¿Por qué suscribirme?</button>
        <button>Vendé tus libros</button>
      </div>
      <div>
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
