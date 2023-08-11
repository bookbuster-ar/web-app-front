import { Link } from 'react-router-dom';

function UserProfile() {
  const user = {
    photoURL:
      'https://media.tycsports.com/files/2023/02/10/532928/lionel-messi_1440x810_wmk.webp',
    name: 'Juan Pérez',
    bookGenres: ['Ciencia Ficción', 'Fantasía', 'Historia', 'Poesía'],
    email: 'juan@example.com',
    phone: '+1234567890',
    birthdate: '01/01/1990',
  };

  return (
    <div className='min-h-screen bg-gray-100 flex'>
      {/* Barra Lateral */}
      <div className='w-1/4 bg-white p-8 shadow-lg'>
        <div className='flex items-center justify-center mb-8'>
          <img
            src={user.photoURL}
            alt='User Avatar'
            className='w-32 h-32 rounded-full border-2 border-gray-300'
          />
        </div>
        <h2 className='text-2xl mb-6 text-center'>{user.name}</h2>
        <ul>
          <Link to={'/user/profile'}>
            <li className='mb-4 text-blue-600 cursor-pointer hover:text-blue-800'>
              Editar perfil
            </li>
          </Link>

          <li className='mb-4 text-blue-600 cursor-pointer hover:text-blue-800'>
            Mis libros
          </li>
          <li className='mb-4 text-blue-600 cursor-pointer hover:text-blue-800'>
            Notificaciones
          </li>
          <li className='mb-4 text-blue-600 cursor-pointer hover:text-blue-800'>
            Salir
          </li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className='w-3/4 bg-gray-100 p-8'>
        <h2 className='text-3xl mb-8'>Información de Perfil</h2>
        <div className='bg-white p-8 rounded-xl shadow-lg'>
          <h3 className='font-semibold text-xl mb-6'>
            Preferencias de Géneros de Libros:
          </h3>
          <ul className='list-disc pl-5 mb-8'>
            {user.bookGenres.map((genre) => (
              <li key={genre} className='text-gray-700 mb-2'>
                {genre}
              </li>
            ))}
          </ul>

          <h3 className='font-semibold text-xl mb-6'>Datos Personales:</h3>
          <ul>
            <li className='text-gray-700 mb-4'>
              <strong>Email:</strong> {user.email}
            </li>
            <li className='text-gray-700 mb-4'>
              <strong>Teléfono:</strong> {user.phone}
            </li>
            <li className='text-gray-700 mb-4'>
              <strong>Fecha de nacimiento:</strong> {user.birthdate}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
