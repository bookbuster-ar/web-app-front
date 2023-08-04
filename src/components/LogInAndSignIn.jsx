import SignInWithGoogle from './authentication/AuthGoogle';
import SignInWithEmail from './authentication/AuthEmail';
import SignupForm from './authentication/AuthSignUp';

const LogInAndSignIn = () => {
  return (
    <div>
      <p>Inicia sesion con Email</p>
      <SignInWithEmail />
      <p>Registrate</p>
      <SignupForm />
      <p>Inicia sesion con google</p>
      <SignInWithGoogle />
    </div>
  );
};

export default LogInAndSignIn;
