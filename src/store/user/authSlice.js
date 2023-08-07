import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {

  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../services/firebase/firebase';
import axios from 'axios';

// thunk to login with email and password
export const signInWithEmailAsync = createAsyncThunk(
  'auth/signInWithEmail',
  async ({ email, password }) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    // Request your backend with the user data
    const { data } = await axios.post('api/auth/email', user);

    return {
      ...user,
      ...data,
    };
  }
);

export const signInWithGoogleAsync = createAsyncThunk('auth/signInWithGoogle', async () => {
  const result = await signInWithPopup(auth, new GoogleAuthProvider());
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken

  const {data} = await axios.post('api/auth/google', { token });

  return {
    ...result.user,
    ...data
  }
})

export const signUpWithEmailAsync = createAsyncThunk('auth/signUpWithEmail', async({email, password}) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)

  const { data } = await axios.post('api/auth/signup', user);

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
    isLoading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInWithEmailAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInWithEmailAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
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
        state.user = action.payload
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

export default authSlice.reducer;