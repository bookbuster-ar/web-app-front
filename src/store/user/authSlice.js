import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../../services/firebase/firebase';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-dev.onrender.com/api';

// thunk to login with email and password
export const signInWithEmailAsync = createAsyncThunk(
  'auth/signInWithEmail',
  async ({ email, password }, thunkAPI) => {
    try {
      const {data} = await axios.post(
        `${URL_BASE}/auth/login/local`,
        { email, password }
      );
      console.log(data);
      const { session_id, user } = data.data;
      console.log(user, session_id);
      return {
        user,
        session_id,
      };

    } catch (error) {
      // Enviar error al reducer
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signInWithGoogleAsync = createAsyncThunk(
  'auth/signInWithGoogle',
  async () => {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    console.log(token, 'token');

    const { data } = await axios.post(`${URL_BASE}/auth/signup/google`, {
      token,
    });
    console.log(data);
    const user = {
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName,
    };
    return {
      ...user,
      ...data,
      isLogged: true,
    };
  }
);

export const signUpWithEmailAsync = createAsyncThunk(
  'auth/signUpWithEmail',
  async ({ name, lastname, email, password }) => {
    const { data } = await axios.post(
      `${URL_BASE}/auth/signup/local`,
      { name, lastname, email, password }
    );
    return {
      ...data?.data,
    };
  }
);

export const verifyUserEmail = createAsyncThunk('auth/verifyUserEmail', async (_, thunkAPI) => {
  const currentUserId = localStorage.getItem('user_id');
  try {
    const response = await axios.post(`${URL_BASE}/auth/VerifyEmail`, {userId: currentUserId});
    console.log(response);
    const { status } = response;
    const { data, message } = response.data;
    return {
      ...data,
      message,
      status,
    }
  } catch (error) {
    return thunkAPI.rejectWithValue({ status: error.response.status, ...error.response.data });
  }
})

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  const session_id = localStorage.getItem('session_id');
  if (!session_id) {
    return thunkAPI.rejectWithValue('No session_id found in localStorage');
  }
  
  try {
    const response = await axios.post(`${URL_BASE}/auth/logout`, { sessionId: session_id });
    localStorage.removeItem('session_id');

    return {
      isLogged: response.status === 204 ? false : true,
      user: null
    };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    isLogged: false,
    isLoading: false,
    statusEmailVerified: null,
    redirectPath: null,
  },
  reducers: {
    setRedirectPath: (state, action) => {
      state.redirectPath = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithEmailAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInWithEmailAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isLogged = true
        localStorage.setItem('session_id', action.payload.session_id);
        localStorage.setItem('user_id', action.payload.user.id);
      })
      .addCase(signInWithEmailAsync.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.error = action.payload.error;
        } else if (action.error) {
          state.error = action.error.message; // Para errores que no provienen de la respuesta del servidor
        }
      })
      .addCase(signInWithGoogleAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInWithGoogleAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        localStorage.setItem('session_id', action.payload.session_id);
      })
      .addCase(signInWithGoogleAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.response.data;
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
        state.error = action.error.response.data;
      })
      .addCase(logOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.isLogged = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.response.data
      })
      .addCase(verifyUserEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyUserEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.statusEmailVerified = action.payload.status
      })
      .addCase(verifyUserEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.statusEmailVerified = action.payload.status
        state.error = action.payload.message;
      })
  },
});

export const { setRedirectPath } = authSlice.actions;
export const redirectPathSelector = (state) => state.auth.redirectPath;
export const selectStatusVerified = (state) => state.auth.statusEmailVerified;
export const selectIsLogged = (state) => state.auth.isLogged;

export default authSlice.reducer;
