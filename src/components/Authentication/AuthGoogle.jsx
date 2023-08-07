import { useDispatch } from 'react-redux';
import { signInWithGoogleAsync } from '../../store/user/authSlice'

const GoogleSignIn = () => {
  const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    try {
      await dispatch(signInWithGoogleAsync());
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
