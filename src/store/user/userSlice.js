import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api';

const initialState = {
  //user en singular
  user: {},
  status: 'idle',
  error: null,
  updateStatus: 'idle',
  updateError: null,
  favGenres: [],
  favGenresStatus: 'idle',
  favGenresError: null,
};

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const { data } = await axios.get(`${URL_BASE}/users/profile`);
  return data.data.user;
});

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (updatedProfile) => {
    const userId = localStorage.getItem('user_id');
    const sessionId = localStorage.getItem('session_id');
    const { data } = await axios.put(
      `${URL_BASE}/users/profile`,
      updatedProfile, sessionId,
      {
        headers: {
          'Content-Type': 'application/json',
          userId,
          sessionId,
        },
      }
    );
    console.log(data);
    return data;
  }
);

//No terminado
//FALTAN LOS CASOS
export const addFavGenres = createAsyncThunk('user/addFavGenres', async () => {
  const response = await axios.post(
    `${URL_BASE}/users/preferences/genres`,
    favGenre
  );
});

export const getFavGenres = createAsyncThunk('user/getFavGenres', async () => {
  const { data } = await axios.get(`${URL_BASE}/users/preferences/genres`);
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder //USER
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.updateStatus = 'loading';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.updateStatus = 'succeeded';
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.updateStatus = 'failed';
        state.updateError = action.error.message;
      })
      //FAV GENRES
      .addCase(getFavGenres.pending, (state) => {
        state.favGenresStatus = 'loading';
      })
      .addCase(getFavGenres.fulfilled, (state, action) => {
        state.favGenresStatus = 'succeeded';
        state.favGenres = action.payload;
      })
      .addCase(getFavGenres.rejected, (state, action) => {
        state.favGenresStatus = 'failed';
        state.favGenresError = action.error.message;
      });
  },
});


export const {setUser} = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;

export const selectFavGenres = (state) => state.user.favGenres;
export const selectFavGenresStatus = (state) => state.user.favGenresStatus;
export const selectFavGenresError = (state) => state.user.favGenresError;

export default userSlice.reducer;
