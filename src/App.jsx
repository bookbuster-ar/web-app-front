import SignInWithGoogle from './components/Authentication/AuthGoogle';
import SignInWithEmail from './components/Authentication/AuthEmail';
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
