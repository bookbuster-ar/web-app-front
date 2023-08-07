import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInWithEmailAsync } from '../../store/user/authSlice'

const SignInWithEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const handlerSubmit = async (event) => {
    event.preventDefault();
    dispatch(signInWithEmailAsync({email, password}))
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
