import SignInWithGoogle from './components/Authentication/Google/AuthGoogle';
import SignInWithEmail from './components/Authentication/Email/AuthEmail';
import SignupForm from './components/Authentication/AuthSignUp';
import './App.css';

function App() {
  return (
    <>
      <p>Inicia sesion con Email</p>
      <SignInWithEmail />
      <p>Registrate</p>
      <SignupForm />
      <p>Inicia sesion con google</p>
      <SignInWithGoogle />
    </>
  );
}

export default App;
