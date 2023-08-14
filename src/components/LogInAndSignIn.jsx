import SignInWithGoogle from './Authentication/AuthGoogle';
import SignInWithEmail from './Authentication/AuthEmail';
import SignupForm from './Authentication/AuthSignUp';
import bgImage from '../assets/BgPink.png';

const LogInAndSignIn = () => {
  return (
    <div
      className='flex items-center justify-center h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='flex flex-col justify-content items-center w-96 h-100 bg-gray-100 p-6 m-1 rounded-xl shadow-2xl'>
        <p className='font-bold text-lg m-2'>
          Iniciá sesión con correo electrónico
        </p>
        <SignInWithEmail />
        <p className='font-bold text-lg m m-2'>Registrate</p>
        <SignupForm />
        <SignInWithGoogle />
      </div>
    </div>
  );
};

export default LogInAndSignIn;
