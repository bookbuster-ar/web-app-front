import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase/firebase';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
    }
  };

  return (
    <form id='signup-form' onSubmit={handleSubmit} className='flex flex-col'>
      <input
        type='email'
        placeholder='Correo electrónico'
        id='signup-email'
        value={email}
        onChange={handleChangeEmail}
        className='m-1'
      />
      <input
        type='password'
        placeholder='Contraseña'
        id='signup-password'
        value={password}
        onChange={handleChangePassword}
        className='m-1'
      />
      <button type='submit' className='bg-blue-200 rounded-2xl m-1'>
        Registrarme
      </button>
    </form>
  );
};

export default SignupForm;
