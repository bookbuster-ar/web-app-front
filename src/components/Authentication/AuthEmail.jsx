import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Agregar useSelector
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAsync, setRedirectPath, selectIsLogged, redirectPathSelector } from '../../store/user/authSlice';

const SignInWithEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    await dispatch(signInWithEmailAsync({email, password})).unwrap().then(() => {
      if (redirectPathValue) {
        navigate(redirectPathValue);
        dispatch(setRedirectPath(null)); // Limpiar el redirectPath después de usarlo
      } else {
        navigate('/');
      }
    }).catch((error) => {
      console.log(error);
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
      <input
        className='m-2 p-1 min-w-full rounded-md'
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder='Ingresa contraseña'
        required
      />
      <button type='submit' className='bg-blue-200 rounded-2xl m-1 p-1 hover:bg-blue-300'>
        Iniciar sesión
      </button>
    </form>
  );
};

export default SignInWithEmail;
