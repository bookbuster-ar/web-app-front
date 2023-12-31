import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { setUser } from './userSlice';
import { auth } from '../../services/firebase/firebase';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api';

// thunk to login with email and password
export const signInWithEmailAsync = createAsyncThunk(
  'auth/signInWithEmail',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post(`${URL_BASE}/auth/login/local`, {
        email,
        password,
      });
      const { session_id, user } = data.data;
      thunkAPI.dispatch(setUser(user));
      return {
        user,
        session_id,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signInWithGoogleAsync = createAsyncThunk(
  'auth/signInWithGoogle',
  async (_, thunkAPI) => {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    const token = await result.user.getIdToken();

    const { data } = await axios.post(`${URL_BASE}/auth/signup/google`, {
      token,
    });
    const { user, session_id } = data;
    thunkAPI.dispatch(setUser(user));
    return {
      user,
      session_id,
    };
  }
);

export const signUpWithEmailAsync = createAsyncThunk(
  'auth/signUpWithEmail',
  async ({ name, lastname, email, password }) => {
    const { data } = await axios.post(`${URL_BASE}/auth/signup/local`, {
      name,
      lastname,
      email,
      password,
    });
    return {
      ...data?.data,
    };
  }
);

export const verifyUserEmail = createAsyncThunk(
  'auth/verifyUserEmail',
  async (_, thunkAPI) => {
    const currentUserId = localStorage.getItem('user_id');
    try {
      const response = await axios.post(`${URL_BASE}/auth/VerifyEmail`, {
        userId: currentUserId,
      });
      const { status } = response;
      const { data, message } = response.data;
      return {
        ...data,
        message,
        status,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        ...error.response.data,
      });
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  const sessionid = localStorage.getItem('session_id');
  const userid = localStorage.getItem('user_id');
  if (!sessionid || !userid) {
    return thunkAPI.rejectWithValue('No session found in localStorage');
  }

  try {
    const response = await axios.post(
      `${URL_BASE}/auth/logout`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          sessionid: sessionid,
        },
      }
    );
    localStorage.removeItem('session_id');
    localStorage.removeItem('user_id');
    return {
      isLogged: response.status === 204 ? false : true,
      user: null,
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
    },
    unsetEmailStatus: (state) => {
      state.statusEmailVerified = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithEmailAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInWithEmailAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isLogged = true;
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
        state.isLogged = true;
        state.user = action.payload;
        localStorage.setItem('session_id', action.payload.session_id);
        localStorage.setItem('user_id', action.payload.user.id);
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
        state.error = action.error.response;
      })
      .addCase(verifyUserEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyUserEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.statusEmailVerified = action.payload.status;
      })
      .addCase(verifyUserEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.statusEmailVerified = action.payload.status;
        state.error = action.payload.message;
      });
  },
});

export const { setRedirectPath, unsetEmailStatus } = authSlice.actions;
export const redirectPathSelector = (state) => state.auth.redirectPath;
export const selectStatusVerified = (state) => state.auth.statusEmailVerified;
export const selectIsLogged = (state) => state.auth.isLogged;
export const selectUserAuth = (state) => state.auth.user;

export default authSlice.reducer;
