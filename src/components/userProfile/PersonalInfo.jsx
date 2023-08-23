import { Link } from 'react-router-dom';

const PersonalInfo = ({ user }) => {
  return (
    <div>
      {/* Contenido principal */}
      <div className=' mx-6 bg-gray-100 '>
        <h2 className='font-bold font-roboto text-5xl text-bluebook my-10 ml-6 uppercase'>
          Mi perfil
        </h2>
        <div className='bg-white p-8 rounded-xl shadow-lg'>
          {/* <h3 className='font-semibold text-xl mb-6'>
            Preferencias de Géneros de Libros:
          </h3> */}
          {/* <ul className='list-disc pl-5 mb-8'>
            {user.bookGenres.map((genre) => (
              <li key={genre} className='text-gray-700 mb-2'>
                {genre}
              </li>
            ))}
          </ul> */}

          <h3 className='font-semibold text-xl mb-6'>Datos Personales:</h3>
          <ul>
            <li className='text-gray-700 mb-4'>
              <strong>Nombre:</strong> {user.name || null}
            </li>
            <li className='text-gray-700 mb-4'>
              <strong>Apellido:</strong> {user.last_name || null}
            </li>
            <li className='text-gray-700 mb-4'>
              <strong>Email:</strong> {user.email}
            </li>
            <li className='text-gray-700 mb-4'>
              <strong>Teléfono:</strong> {user.phone || null}
            </li>
            <li className='text-gray-700 mb-4'>
              <strong>creditos:</strong> {user.credit ?? null}
            </li>
            {user.subscription ? (
              <li className='text-gray-700 mb-4'>
                <strong className='bg-violet-600 rounded-lg py-2 px-4 text-white'>
                  Suscrito
                </strong>
              </li>
            ) : (
              <Link to='/subscription'>
                <li className=' text-gray-700 mb-4'>
                  <strong className='bg-bluebook rounded-lg py-2 px-4 text-white'>
                    Suscribirse
                  </strong>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
