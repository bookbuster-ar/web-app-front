import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase/firebase';

const SignInWithEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
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
    <form onSubmit={handlerSubmit} className='flex flex-col'>
      <input
        className='m-2 min-w-full rounded-md'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Ingresa correo electrónico'
        required
      />
      <input
        className='m-2 min-w-full rounded-md'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Ingresa contraseña'
        required
      />
      <button type='submit' className='bg-blue-200 rounded-2xl m-1'>
        Iniciar sesión
      </button>
    </form>
  );
};

export default SignInWithEmail;
