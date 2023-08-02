import {
  signInWithPopup,
  GoogleAuthProvider,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { provider, auth } from '../../services/firebase/firebase';

async function signInWithPopupAsync(auth, provider) {
  try {
    const result = await signInWithPopup(auth, provider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);

    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    const additionalUserInfo = getAdditionalUserInfo(result);
    console.log(additionalUserInfo);
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);

    const email = error.email;
    console.log(email);

    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
  }
}

const GoogleSignIn = () => {
  return (
    <button onClick={() => signInWithPopupAsync(auth, provider)}>
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;
