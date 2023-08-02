import SearchBar from './SearchBar';


const NavBar = () => {
  return (
    <div>
      <div>
        <img src='' alt='Logo' />
        <button>Explorá nuestros libros</button>
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
