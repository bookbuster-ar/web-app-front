import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bannedUser } from '../../store/user/adminSlice';
import { useEffect } from 'react';

export function ListOfUsers({ users }) {
  const dispatch = useDispatch();
  const [durations, setDurations] = useState({});

  const handleDuration = (id, event) => {
    setDurations((prevDurations) => ({
      ...prevDurations,
      [id]: event.target.value,
    }));
  };

  const handleBanned = (id) => {
    const duration = durations[id] || 0
    const data = {id, duration}
    dispatch(bannedUser(data));
  };

  const imageDefault =
    'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';

  return (
    <div className='text-center'>
      <ul className='grid grid-cols-10 gap-5 w-full font-bold sticky top-0 bg-white py-4'>
        <li>Foto</li>
        <li>Nombre</li>
        <li>Suscriptor</li>
        <li className='col-span-2 text-center'>Email</li>
        <li>Algo mas</li>
        <li>Banear</li>
      </ul>
      <ul className='grid grid-cols-1 gap-5 w-full'>
        {users.map((user) => (
          <li
            className='grid grid-cols-10 items-center gap-x-5 border-b-2'
            key={user.id}
          >
            <img
              src={user.image || imageDefault}
              alt={user.name}
              className='mx-auto p-4 object-cover rounded-full'
            />
            <h3 className='font-semibold text-sm'>{user.name}</h3>
            <p className='text-xs'>{user.subscription ? 'Si' : 'No'}</p>
            <h3 className='font-semibold text-sm col-span-2'>{user.email}</h3>
            <button className='text-white text-sm bg-bluebook rounded-lg py-1 px-2 hover:bg-red-600'>
              Re
            </button>
            <div className='flex'>
              <input
                className='h-8 rounded-l-xl w-20'
                type='number'
                name='banear'
                id={`banear-${user.id}`} // Para evitar duplicidad de ids
                min={0}
                onChange={(e) => handleDuration(user.id, e)}
                placeholder='días'
                value={durations[user.id] || ''}
              />

              <button
                onClick={() => handleBanned(user.id)}
                disabled={!durations[user.id] || durations[user.id] <= 0}
                className={`text-white text-sm rounded-r-xl py-1 px-2 ${!durations[user.id] || durations[user.id] <= 0 ? 'bg-gray-500' : 'bg-red-500 hover:bg-red-600'} `}
              >
                Banear
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NoUsersResults() {
  return <p>No se encontraron usuarios para esta búsqueda</p>;
}

export function Users({ users }) {
  const hasUsers = users?.length > 0;

  return hasUsers ? <ListOfUsers users={users} /> : <NoUsersResults />;
}
