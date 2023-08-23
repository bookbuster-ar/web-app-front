import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSubscriptions, selectSubscriptions } from '../../store/user/adminSlice'


const Subscribers = () => {
  const dispatch = useDispatch()
  const subscribersList = useSelector(selectSubscriptions)

  useEffect(() => {
    dispatch(getSubscriptions())
  },[])

  const imageDefault =
    'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';

  return (
    <div className='text-center'>
      {/* <h1>Suscriptores totales: ${subscribersList.subscriptionCount}</h1>
      <ul className='grid grid-cols-12 gap-5 w-full font-bold sticky top-0 bg-white py-4'>
        <li>Foto</li>
        <li className='col-span-2'>Nombre</li>
        <li className='col-span-3 text-center'>Email</li>
        <li className='col-span-4'>Razón de ban</li>
      </ul>
      <ul className='grid grid-cols-1 gap-5 w-full'>
        {subscribersList.map((user) => (
          <li
            className={`grid grid-cols-12 items-center gap-x-5 border-b-2 rounded-lg `}
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
            <h3 className='font-semibold text-sm col-span-3'>{user.email}</h3>
            <p className='text-md col-span-4'>Si llegamos le metemos la razon</p>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default Subscribers