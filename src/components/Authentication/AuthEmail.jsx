import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInWithEmail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handlerSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth()
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);

    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
    }
  
  }

  return (
    <form onSubmit={handlerSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
      <button type="submit">Inicia sesión con correo electrónico</button>
    </form>
  );
}

export default SignInWithEmail;
