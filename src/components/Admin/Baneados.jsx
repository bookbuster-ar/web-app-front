import { useDispatch, useSelector } from 'react-redux';
import { getUsersBanned, selectallBannedUsers } from '../../store/user/adminSlice';
import { useEffect } from 'react';

const Baneados = () => {
  const dispatch = useDispatch()
  const usersBanned = useSelector(selectallBannedUsers)

  useEffect(() => {
    dispatch(getUsersBanned())
  },[])

  const imageDefault =
    'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';

  return (
    <div className='text-center'>
      <h1 className='bg-bluebook w-60 mx-auto text-white rounded-lg py-2 px-4'>Usuarios Bloqueados</h1>
      <ul className='hidden lg:grid grid-cols-12 gap-5 w-full font-bold sticky top-0 bg-white py-4'>
        <li className='col-span-2'>Foto</li>
        <li className='col-span-2'>Nombre</li>
        <li className='col-span-3 text-center'>Email</li>
        <li className='col-span-4'>Razón de ban</li>
      </ul>
      <ul className='grid grid-cols-1 gap-5 w-full'>
        {usersBanned.map((user) => (
          <li
            className={`grid grid-cols-12 items-center gap-x-5 border-b-2 rounded-lg `}
            key={user.id}
          >
            <img
              src={user.image || imageDefault}
              alt={user.name}
              className='mx-auto h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 col-span-4 md:col-span-2 lg:col-span-2 p-4 object-cover rounded-full'
            />
            <h3 className='font-semibold text-md col-span-8 md:col-span-3 lg:col-span-2'>
              {user.name} {user.last_name}
            </h3>
            <h3 className='font-semibold text-sm col-span-12 md:col-span-3'>{user.email}</h3>
            <p className='text-md col-span-12 md:col-span-4 text-red-500'>Bloqueado por incumplir con las normas de BookBuster</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Baneados;