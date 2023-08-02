import SignInWithGoogle from '../Authentication/AuthGoogle';
import SignInWithEmail from '../Authentication/AuthEmail';
import SignupForm from '../Authentication/AuthSignUp';

const LogInAndSignIn = () => {
  <>
    <p>Inicia sesion con Email</p>
      <SignInWithEmail />
      <p>Registrate</p>
      <SignupForm />
      <p>Inicia sesion con google</p>
      <SignInWithGoogle />
  </>
}

export default LogInAndSignIn