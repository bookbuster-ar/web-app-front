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
      <label htmlFor='signup-email'>Email: </label>
      <input
        type='email'
        id='signup-email'
        value={email}
        onChange={handleChangeEmail}
      />
      <label htmlFor='signup-password'>Password: </label>
      <input
        type='password'
        id='signup-password'
        value={password}
        onChange={handleChangePassword}
      />
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignupForm;
