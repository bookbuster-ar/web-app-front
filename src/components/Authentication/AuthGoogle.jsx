import {
  signInWithPopup,
  GoogleAuthProvider,
  getAdditionalUserInfo,
} from "firebase/auth";
import { provider, auth } from "../../services/firebase/firebase";

async function signInWithPopupAsync(auth, provider) {
  try {
    const result = await signInWithPopup(auth, provider);

    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);

    const token = credential.accessToken;
    console.log("mandar el siguiente token al back", token); // TOKENNNNNNNNNNNNNNNNNN
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
    <button
      onClick={() => signInWithPopupAsync(auth, provider)}
      className="flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-400 hover:bg-gray-600"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        alt="Google Logo"
        className="h-5 w-5 mr-3"
      />
      Iniciar sesión con Google
    </button>
  );
};

export default GoogleSignIn;
