import { useState } from 'react';
import { signUpWithEmailAsync } from '../../store/user/authSlice';
import { useDispatch } from 'react-redux';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signUpWithEmailAsync({email, password}))
  };

  return (
    <form id='signup-form' onSubmit={handleSubmit} className='flex flex-col'>
      <input
        type='email'
        placeholder='Correo electrónico'
        id='signup-email'
        value={email}
        onChange={handleChangeEmail}
        className='m-2 p-1 min-w-full rounded-md'
      />
      <input
        type='password'
        placeholder='Contraseña'
        id='signup-password'
        value={password}
        onChange={handleChangePassword}
        className='m-2 p-1 min-w-full rounded-md'
      />
      <button type='submit' className='bg-blue-200 rounded-2xl m-1 p-1 hover:bg-blue-300'>
        Registrarme
      </button>
    </form>
  );
};

export default SignupForm;
