import SearchAdmin from './SearchAdmin';
import { useSelector } from 'react-redux';
import { Users } from './UserList';
import {
  selectAllUsers,
  selectUsersStatus,} from '../../store/user/adminSlice';
import { useState } from 'react';

const Usuarios = () => {
  const [colorBg, setColorBg] = useState(false)

  const usersStatus = useSelector(selectUsersStatus);
  const users = useSelector(selectAllUsers);
  

  const toggleColor = () => {
    setColorBg(!colorBg)
  }
  
  return (
    <div className='mt-8'>
      <SearchAdmin/>
      <div className='flex mb-7'>
        <h1 className='text-3xl'>Usuarios</h1>
        <button onClick={toggleColor} className='bg-blue-500 text-sm rounded ml-2 text-white py-0 px-2'>
          Pintar grillas
        </button>
      </div>
      <div className='flex'>
        <div className='w-full'>
          {usersStatus === 'loading' ? <p className='absolute -mt-28'>Cargando usuarios...</p> : null}
          {usersStatus === 'failed' ? <p className='absolute -mt-28'>No se encontraron usuarios con ese nombre</p> : null}
          <Users users={users} toggle={colorBg} />
        </div>
      </div>
      
    </div>
  );
};

export default Usuarios;