import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {

  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../services/firebase/firebase';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-dev.onrender.com';

// thunk to login with email and password
export const signInWithEmailAsync = createAsyncThunk(
  'auth/signInWithEmail',
  async ({ email, password }) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    // Request your backend with the user data
    const { data } = await axios.post(`${URL_BASE}/api/auth/login/local`, user);

    return {
      uid: user.uid,
      email: user.email,
      ...data,
      isLogged: true,
    };
  }
);

export const signInWithGoogleAsync = createAsyncThunk('auth/signInWithGoogle', async () => {
  const result = await signInWithPopup(auth, new GoogleAuthProvider());
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken

  const {data} = await axios.post(`${URL_BASE}/api/auth/signup/google`, { token });

  const user = {
    uid: result.user.uid,
    email: result.user.email,
    displayName: result.user.displayName
  }
  return {
    ...user,
    ...data,
    isLogged: true,
  }
})

export const signUpWithEmailAsync = createAsyncThunk('auth/signUpWithEmail', async({email, password}) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)

  const { data } = await axios.post(`${URL_BASE}/api/auth/signup/local`, user);

  return {
    ...user,
    ...data,
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    isLogged: false,
    isLoading: false
  },
  reducers: {
    logOut: (state,action) => {
      state.isLogged = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithEmailAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInWithEmailAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLogged = action.payload.isLogged;
      })
      .addCase(signInWithEmailAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
      })
      .addCase(signInWithGoogleAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInWithGoogleAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLogged = action.payload.isLogged;
      })
      .addCase(signInWithGoogleAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(signUpWithEmailAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpWithEmailAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signUpWithEmailAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
})

export const selectIsLogged = (state) => state.auth.isLogged

export const { logOut } = authSlice.actions

export default authSlice.reducer;