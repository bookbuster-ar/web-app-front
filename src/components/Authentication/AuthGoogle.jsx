import { useDispatch } from 'react-redux';
import { signInWithGoogleAsync } from '../../store/user/authSlice'
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../store/user/userSlice';

const GoogleSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await dispatch(signInWithGoogleAsync()).unwrap().then(() => {
        dispatch(fetchUser());
        navigate('/')
      });
    } catch (error) {
      console.error('Error al iniciar sesión con Google: ', error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className='flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-red-700 my-4'
    >
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
        alt='Google Logo'
        className='h-5 w-5 mr-3 '
      />
      Iniciar sesión con Google
    </button>
  );
};

export default GoogleSignIn;
