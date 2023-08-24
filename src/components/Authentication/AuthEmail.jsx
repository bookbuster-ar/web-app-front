import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Agregar useSelector
import { useNavigate } from 'react-router-dom';
import {
  signInWithEmailAsync,
  setRedirectPath,
  selectIsLogged,
  redirectPathSelector,
} from '../../store/user/authSlice';
import { fetchUser } from '../../store/user/userSlice';
import Eye from '../../icons/Eye';
import EyeSlash from '../../icons/EyeSlash'

const SignInWithEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Utiliza useSelector para obtener los valores reales
  const isLogged = useSelector(selectIsLogged);
  const redirectPathValue = useSelector(redirectPathSelector);

  useEffect(() => {
    if (isLogged && redirectPathValue) {
      navigate(redirectPathValue);
      dispatch(setRedirectPath(null)); // Limpiar el redirectPath después de usarlo
    }
  }, [isLogged, redirectPathValue, navigate, dispatch]);

  const handlerSubmit = async (event) => {
    event.preventDefault();
    await dispatch(signInWithEmailAsync({ email, password }))
      .unwrap()
      .then(() => {
        dispatch(fetchUser());
        if (redirectPathValue) {
          navigate(redirectPathValue);
          dispatch(setRedirectPath(null)); // Limpiar el redirectPath después de usarlo
        } else {
          navigate('/');
        }
      })
      .catch((error) => {
        window.alert(error?.error);
      });
  };

  return (
    <form onSubmit={handlerSubmit} className='flex flex-col'>
      <input
        className='m-2 p-1 min-w-full rounded-md'
        type='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder='Ingresa correo electrónico'
        required
      />

      <div className='relative'>
        <input
          className='m-2 p-1 min-w-full rounded-md'
          type={showPassword ? 'text' : 'password'} // Toggle entre 'text' y 'password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='Ingresa contraseña'
          required
        />

        <div
          className='absolute top-4 right-3 cursor-pointer'
          onClick={() => setShowPassword(!showPassword)} // Cambiar estado al hacer clic
        >
          {showPassword ?  <Eye /> : <EyeSlash />}
        </div>
      </div>

      <button
        type='submit'
        className='bg-blue-200 rounded-2xl m-1 p-1 hover:bg-blue-300'
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default SignInWithEmail;
