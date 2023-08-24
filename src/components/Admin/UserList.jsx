import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bannedUser } from '../../store/user/adminSlice';
import { getRoles, selectRoles, updateRole, selectUserRoleStatus } from '../../store/user/adminSlice';
import AdminRoleIcon from '../../icons/AdminRole';
import UserRoleIcon from '../../icons/userRole';

export function ListOfUsers({ users, toggle }) {
  const dispatch = useDispatch();
  const [durations, setDurations] = useState({});
  const [reasons, setReasons] = useState({});
  const [userRole, adminRole] = useSelector(selectRoles);
  

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

  const toggleRole = async (userId, currentRole) => {
    const newRole = currentRole === 'Admin' ? 'User' : 'Admin'; // Cambiar el rol
    const objectRoleId = newRole === 'Admin' ? adminRole : userRole; // Suponiendo que adminRole y userRole son los IDs de los roles. Si no es así, ajusta esta línea adecuadamente.
    const roleId = objectRoleId.id
    dispatch(updateRole({userId, roleId})); // Llama a la acción para actualizar el rol en el backend
  };

  const handleBanned = (id) => {
    const duration = durations[id] || 0;
    const reason = reasons[id] || '';
    const data = { id, duration, reason };

    dispatch(bannedUser(data));
    setDurations({});
    setReasons({});
  };

  

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  const imageDefault =
    'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';

  return (
    <div className='text-center flex flex-col lg:inline'>
      <ul className='hidden lg:grid lg:bg-bluebook text-white  rounded-lg grid-cols-12 gap-5 w-full font-bold sticky -top-2 bg-white py-4'>
        <li className='lg:col-span-2'>Foto</li>
        <li className='col-span-2'>Nombre</li>
        <li>Suscrip.</li>
        <li className='col-span-3 text-center xl:col-span-2'>Email</li>
        <li className='text-center -mb-3 -mt-3'>
          Miembro <br />
          desde
        </li>
        <li className='col-span-3 xl:col-span-4'>Banear - Razon</li>
      </ul>
      <ul className='grid grid-cols-1 gap-5 w-full'>
        {users?.map((user) => (
          <li
            className={`grid grid-cols-12 items-center gap-x-5 border-b-2 rounded-lg p-2 ${
              toggle ? 'bg-blue-100' : ''
            }`}
            key={user.id}
          >
            <img
              src={user.image || imageDefault}
              alt={user.name}
              className='mx-auto col-span-4 md:col-span-2 md:h-20 md:w-20 lg:h-24 lg:w-24 lg:col-span-2 p-4 object-cover rounded-full'
            />
            <h3 className='font-semibold flex text-md col-span-4 md:col-span-3 lg:col-span-2'>
              <span onClick={() => toggleRole(user.id, user.role)} className='mr-5 hover:scale-110 transition-all duration-200 cursor-pointer'>
                {user.role === 'Admin' ? <AdminRoleIcon /> : <UserRoleIcon />}
              </span>
              {user.name} {user.last_name}
            </h3>
            <p className='text-md col-span-4 md:col-span-2 lg:col-span-1'>
              {user.subscription ? 'Si' : 'No'}
            </p>
            <h3 className='font-semibold text-sm lg:text-xs col-span-6 md:col-span-5 lg:col-span-3 xl:col-span-2'>
              {user.email}
            </h3>
            <p className='text-xs col-span-6 md:col-span-2 lg:col-span-1 xl:col-span-1'>
              {user.date_of_register}
            </p>
            <div className='flex col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 justify-center'>
              <input
                className='rounded-l-xl h-5 md:h-6 xl:h-8 text-xs xl:text-md  w-16 xl:w-20'
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
                className={`text-white rounded-r-xl h-5 md:h-6 xl:h-8 text-xs xl:text-md w-14 xl:w-20 px-2 ${
                  !durations[user.id] || durations[user.id] <= 0
                    ? 'bg-gray-500'
                    : 'bg-red-500 hover:bg-red-600'
                } `}
              >
                Banear
              </button>
            </div>
            <div className='lg:col-span-9 xl:hidden'></div>
            <div>
              <input
                className='h-5 md:h-6 xl:h-8 align-middle w-24 md:w-40 -ml-4 lg:ml-6 xl:ml-0 lg:w-40 xl:w-40 col-span-6 md:col-span-4 lg:col-span-4 text-[8px] md:text-xs xl:text-sm rounded-md'
                placeholder='Razón de baneo..'
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
  return <p className='absolute'>No se encontraron usuarios para esta búsqueda</p>;
}

export function Users({ users, toggle }) {
  const hasUsers = users?.length > 0;

  return hasUsers ? (
    <ListOfUsers users={users} toggle={toggle} />
  ) : (
    <NoUsersResults />
  );
}
