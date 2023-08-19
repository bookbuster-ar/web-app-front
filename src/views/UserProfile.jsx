import { Link } from 'react-router-dom';
import HomeIcon from '../icons/HomeIcon';
import { selectUser } from '../store/user/userSlice';
import { useSelector } from 'react-redux';

/* Asi llega el user
user: {
    id: '',
    name: '',
    last_name: '',
    email: '',
    email_verified: false,
    about: null,
    subscription: false,
    date_of_register: '',
    is_blocked: false,
    credit: 0,
    is_inactive: false,
    want_notifications: false,
    image: null,
    role: {
      id: '',
      name: '',
    },
*/

function UserProfile() {
  const user = useSelector(selectUser);

  return (
    <div className='min-h-screen bg-gray-100 flex'>
      {/* Barra Lateral */}
      <div className='w-1/4 bg-white p-8 shadow-lg'>
        <div className='flex items-center justify-center mb-8'>
          <img
            src={
              user.image ||
              'https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14042.jpg?w=826'
            }
            alt='User Avatar'
            className={`w-32 h-32 rounded-full border-4 ${user.subscription ? 'border-violet-600' : 'border-gray-600'} object-cover`}
          />
        </div>
        <h2 className='text-2xl mb-6 text-center'>{user.name}</h2>
        <ul>
          <Link to={'/user/profile'}>
            <li className='mb-4 text-bluebook cursor-pointer hover:text-blue-800'>
              Editar perfil
            </li>
          </Link>

          <li className='mb-4 text-bluebook cursor-pointer hover:text-blue-800'>
            Mis libros
          </li>
          <li className='mb-4 text-bluebook cursor-pointer hover:text-blue-800'>
            Notificaciones
          </li>
          <li className='mb-4 text-bluebook cursor-pointer hover:text-blue-800'>
            <Link to='/'>
              <HomeIcon />
            </Link>
          </li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className='w-3/4 bg-gray-100 p-8'>
        <h2 className='text-3xl mb-8'>Información de Perfil</h2>
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
                  <strong className='bg-violet-600 rounded-lg py-2 px-4 text-white'>
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
}

export default UserProfile;
