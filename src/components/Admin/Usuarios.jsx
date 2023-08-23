import SearchAdmin from './SearchAdmin';
import { useSelector } from 'react-redux';
import { Users } from '../Admin/UserList';
import {
  selectAllUsers,
  selectUsersStatus,} from '../../store/user/adminSlice';

const Usuarios = () => {

  const usersStatus = useSelector(selectUsersStatus);
  const users = useSelector(selectAllUsers);

  
  return (
    <div className=''>
      <SearchAdmin/>
      <div className='flex mb-7'>
        <h1 className='text-3xl'>Usuarios</h1>
        <button className='bg-blue-500 text-sm rounded ml-2 text-white py-0 px-2'>
          Añadir nuevo
        </button>
      </div>
      <div className='flex'>
        <div className='w-full'>
          {usersStatus === 'loading' ? <p>Cargando usuarios...</p> : null}
          {usersStatus === 'failed' ? <p>No se encontraron usuarios con ese nombre</p> : null}
          <Users users={users}/>
        </div>
      </div>
      
    </div>
  );
};

export default Usuarios;

/* <div className='h-auto w-11/12 space-y-3'>
        {users?.map((user, index) => (
          <div key={index} className='flex space-x-28 items-center'>
            <div className='flex space-x-3'>
              <button className='hover:text-red-600'>Bloquear</button>
              <div className='flex items-center w-40 space-x-2'>
                <img src={user.photoURL} alt='photo' className='w-9 h-9 bg-contain' />
                <p>{user.name}</p>
              </div>
            </div>
            <span>{user.email}</span>
          </div>
        ))}
      </div> */