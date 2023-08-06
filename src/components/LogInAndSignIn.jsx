import SignInWithGoogle from './authentication/AuthGoogle';
import SignInWithEmail from './authentication/AuthEmail';
import SignupForm from './authentication/AuthSignUp';
import bgImage from '../assets/girl.jpg';

const LogInAndSignIn = () => {
  return (
    <div
      className='flex items-center justify-center h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='flex flex-col justify-content items-center w-96 h-100 bg-gray-100 p-6 m-1 rounded-xl shadow-lg'>
        <p className='font-bold text-lg m-2'>
          Inicia sesión con correo electrónico
        </p>
        <SignInWithEmail />
        <p className='font-bold text-lg m m-2'>Regístrate</p>
        <SignupForm />
        <SignInWithGoogle />
      </div>
    </div>
  );
};

export default LogInAndSignIn;
