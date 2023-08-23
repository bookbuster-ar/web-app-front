import { useSelector } from 'react-redux'
import { selectUser } from '../store/user/userSlice'

export default function Avatar() {
  const user = useSelector(selectUser)

  const imageDefault =
  'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';

  return (
    <>
      <div className="flex justify-center -space-x-2 overflow-hidden">
        <img
          className="inline-block h-8 w-8 md:h-10 md:w-10 lg:w-12 lg:h-12 xl:h-14 xl:w-14 rounded-full border-yellowbook border-2"
          src={user.image || imageDefault}
          alt={user.name}
        />
      </div>
    </>
  )
}
