import { Link } from 'react-router-dom';
import HomeIcon from '../icons/HomeIcon';
import { selectUser, fetchUser } from '../store/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import PersonalInfo from '../components/userProfile/PersonalInfo';
import UserBooks from '../components/userProfile/UserBooks';
import Bookshelves from '../components/userProfile/Bookshelves';

function UserProfile() {
  const user = useSelector(selectUser);
  const [toggle, setToggle] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const updateToggle = (value) => {
    setToggle(value);
  };

  return (
    <div className='min-h-screen bg-gray-100 flex no-scroll-x'>
      {/* Barra Lateral */}
      <div className='w-[100px] md:w-[200px] lg:w-[300px] transition-all duration-300 bg-white p-8 shadow-lg flex flex-col items-center '>
        <div className='flex flex-col items-center transition-all duration-300 justify-center mb-8 w-[300px]'>
          <img
            src={
              user.image ||
              'https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14042.jpg?w=826'
            }
            alt='User Avatar'
            className={`w-12 h-12 md:w-20 md:h-20 lg:w-32 lg:h-32 transition-all duration-300 rounded-full border-4 ${
              user.subscription ? 'border-violet-600' : 'border-gray-600'
            } object-cover`}
          />
        </div>
        <h2 className='text-md md:text-2xl mb-6 text-center capitalize'>{user.name}</h2>
        <ul className='flex flex-col text-center'>
          <li
            className={`${
              toggle === 1 ? 'text-bluebook mb-4' : 'text-gray-800 mb-4'
            }  cursor-pointer`}
            onClick={() => updateToggle(1)}
          >
            Mi perfil
          </li>
          <Link to='/user/profile'>
            <li
              className=' text-gray-800 mb-4 cursor-pointer'
              onClick={() => updateToggle(1)}
            >
              Editar perfil
            </li>
          </Link>
          <li
            className={` ${
              toggle === 2 ? 'text-bluebook mb-4' : 'text-gray-800 mb-4'
            }  cursor-pointer`}
            onClick={() => updateToggle(2)}
          >
            Mis libros
          </li>
          <li
            className={` ${
              toggle === 3 ? 'text-bluebook mb-4' : 'text-gray-800 mb-4'
            }  cursor-pointer`}
            onClick={() => updateToggle(3)}
          >
            Mis estanterías
          </li>
          <li
            className={`mx-auto ${
              toggle === 4 ? 'text-bluebook mb-4' : 'text-gray-800 mb-4'
            } cursor-pointer`}
            onClick={() => updateToggle(4)}
          >
            <Link to='/'>
              <HomeIcon />
            </Link>
          </li>
        </ul>
      </div>

      <div className={toggle === 1 ? 'block w-11/12' : 'hidden '}>
        <PersonalInfo user={user} />
      </div>
      <div className={toggle === 2 ? 'block' : 'hidden'}>
        <UserBooks />
      </div>
      <div className={toggle === 3 ? 'block' : 'hidden'}>
        <Bookshelves />
      </div>
    </div>
  );
}

export default UserProfile;
