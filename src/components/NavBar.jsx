import { NavLink, Link } from 'react-router-dom';
import logoNav from '../assets/Logo.jpeg';
import { useState } from 'react';

const NavBar = () => {
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className='text-xs bg-white flex flex-row py-5 space-x-6 w-full items-center h-20'>
      <div className='flex items-center'>
        <div>
          <Link to='/'>
            <img
              className='w-12 rounded-full ml-4 mr-4'
              src={logoNav}
              alt='Logo'
            />
          </Link>
        </div>
        <div className='space-x-6 mr-24'>
          <Link to={'/home/search'}>
            <button>Buscá</button>
          </Link>

          <NavLink to={'/home/library'}>
            <button className='h-8 rounded-lg p-3 text-black transition bg-transparent hover:scale-110 hover:bg-sky-500 duration-300'>
              Explorá la librería
            </button>
          </NavLink>
          <button
            onClick={openDialog}
            className='h-8 rounded-lg p-3 text-black transition bg-transparent hover:scale-110 hover:bg-sky-500 duration-300'
          >
            ¿Por qué suscribirme?
          </button>
          <button className='h-8 rounded-lg p-3 text-black transition bg-transparent hover:scale-110 hover:bg-sky-500 duration-300'>
            Vendé tus libros
          </button>
          <button className='h-8 rounded-lg p-3 text-black transition bg-transparent hover:scale-110 hover:bg-sky-500 duration-300'>
            Comprar suscripción
          </button>
          <Link to='/login'>
            <button className='h-8 rounded-lg p-3 text-black transition bg-transparent hover:scale-110 hover:bg-sky-500 duration-300'>
              Iniciar sesión
            </button>
          </Link>
        </div>
      </div>

      {showDialog && (
        <div className='fixed inset-0 flex items-center justify-center '>
          <div className='inset-0 bg-gray-700 opacity-50'></div>
          <div className='bg-white absolute rounded-lg p-4 flex flex-col items-center justify-center w-2/4 h-5/6 shadow-xl'>
            <h2 className='text-lg font-semibold mb-2'>
              ¿Por qué suscribirme?
            </h2>
            <h3>Al suscribirte a Bookbuster:</h3>
            <p>
              • Opción de alquilar libros físicos.• Tenés descuentos en compras
              y descargas sobre el precio regular de la plataforma.
            </p>
            <p>
              • Tenés la posibilidad de vender tus libros a la plataforma, y
              usar el crédito para comprar o alquilar otros libros.{' '}
            </p>
            <p> • No pagas nunca costos de envío o retiro de libros. </p>
            <p>• Accedés a un catálogo exclusivo para socios. </p>
            <p>
              • Descuentos en compras de productos y servicios de nuestras
              tiendas amigas.
            </p>
            <h2 className='text-lg font-semibold mb-2'>
              Nuestras suscripciones
            </h2>
            <div className='bg-gray-100 flex flex-row'>
              <div>
                <h2 className='text-lg font-semibold mb-2'>Clásica</h2>
                <p>
                  • Envió sin cargo en caso de compra de libros nuevos y usados.
                </p>
                <p>• Alquilar hasta 2 libros en simultáneo.</p>
                <p>
                  • Podés vender tus libros usados a la plataforma para comprar
                  nuevos.
                </p>
                <p>• Acceso a catálogo exclusivo para suscriptores</p>
                <p>• 30 días de permanencia de libros</p>
                <h2 className='text-lg font-semibold mb-2 text-blue-500'>
                  ARS$2.000
                </h2>
              </div>

              <div>
                <h2 className='text-lg font-semibold mb-2'>Manija</h2>
                <p>
                  • Envió sin cargo en caso de compra de libros nuevos y usados.
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
                <h2 className='text-lg font-semibold mb-2 color text-blue-500'>
                  ARS$8.000
                </h2>
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
    </div>
  );
};

export default NavBar;
