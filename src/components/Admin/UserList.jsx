import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bannedUser } from '../../store/user/adminSlice';

export function ListOfUsers({ users, toggle }) {
  const dispatch = useDispatch();
  const [durations, setDurations] = useState({});
  const [reasons, setReasons] = useState({});

  const handleReasons = (id, event) => {
    setReasons((prevReasons) => ({
      ...prevReasons,
      [id]: event.target.value,
    }));
  };

  const handleDuration = (id, event) => {
    setDurations((prevDurations) => ({
      ...prevDurations,
      [id]: event.target.value,
    }));
  };

  const handleBanned = (id) => {
    const duration = durations[id] || 0;
    const reason = reasons[id] || '';
    const data = { id, duration, reason };
    dispatch(bannedUser(data));
    setDurations({})
    setReasons({})
  };


  const imageDefault =
    'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';

  return (
    <div className='text-center'>
      <ul className='grid grid-cols-12 gap-5 w-full font-bold sticky top-0 bg-white py-4'>
        <li>Foto</li>
        <li className='col-span-2'>Nombre</li>
        <li>Suscriptor</li>
        <li className='col-span-3 text-center'>Email</li>
        <li className='text-center'>
          Miembro <br />
          desde
        </li>
        <li className='col-span-2'>Banear</li>
        <li className='col-span-1'>Razón de ban</li>
      </ul>
      <ul className='grid grid-cols-1 gap-5 w-full'>
        {users.map((user) => (
          <li
            className={`grid grid-cols-12 items-center gap-x-5 border-b-2 rounded-lg ${
              toggle ? 'bg-blue-100' : ''
            }`}
            key={user.id}
          >
            <img
              src={user.image || imageDefault}
              alt={user.name}
              className='mx-auto p-4 object-cover rounded-full'
            />
            <h3 className='font-semibold text-md col-span-2'>
              {user.name} {user.last_name}
            </h3>
            <p className='text-md'>{user.subscription ? 'Si' : 'No'}</p>
            <h3 className='font-semibold text-sm col-span-3'>{user.email}</h3>
            <p className='text-xs'>{user.date_of_register}</p>
            <div className='flex col-span-2 justify-center'>
              <input
                className='h-8 rounded-l-xl w-20'
                type='number'
                name='banear'
                id={`banear-${user.id}`} // Para evitar duplicidad de ids
                min={0}
                onChange={(event) => handleDuration(user.id, event)}
                placeholder='días'
                value={durations[user.id] || ''}
              />

              <button
                onClick={() => handleBanned(user.id)}
                disabled={!durations[user.id] || durations[user.id] <= 0}
                className={`text-white text-sm rounded-r-xl py-1 px-2 ${
                  !durations[user.id] || durations[user.id] <= 0
                    ? 'bg-gray-500'
                    : 'bg-red-500 hover:bg-red-600'
                } `}
              >
                Banear
              </button>
            </div>
            <div>
              <input
                className='h-8 w-40'
                value={reasons[user.id] || ''}
                onChange={(event) => handleReasons(user.id, event)}
                type='text'
              />
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

export function Users({ users, toggle }) {
  const hasUsers = users?.length > 0;

  return hasUsers ? (
    <ListOfUsers users={users} toggle={toggle} />
  ) : (
    <NoUsersResults />
  );
}
