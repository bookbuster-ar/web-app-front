import SignInWithGoogle from './authentication/AuthGoogle';
import SignInWithEmail from './authentication/AuthEmail';
import SignupForm from './authentication/AuthSignUp';

const LogInAndSignIn = () => {
  return (
    <div className='flex flex-col justify-content items-center m-3'>
      <div className='flex flex-col justify-content items-center w-96 h-96 bg-gray-100 p-6 m-1'>
        <p className='font-bold'>Inicia sesion con correo electrónico</p>
        <SignInWithEmail />
        <p className='font-bold'>Registrate</p>
        <SignupForm />
        <p className='font-bold'>Inicia sesion con google</p>
        <SignInWithGoogle />
      </div>
    </div>
  );
};

export default LogInAndSignIn;
