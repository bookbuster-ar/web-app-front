import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api/admin';

const initialState = {
  users: [],
  usersStatus: 'idle',
  usersError: null,
  singleUser: {},
  singleUserStatus: 'idle',
  singleUserError: null,
  recommend: [],
  recommendStatus: 'idle',
  recommendError: null,
  allBannedUsers: [],
  allBannedUsersStatus: 'idle',
  allBannedUsersError: null,
};

export const getAllUsers = createAsyncThunk(
  'admin/getAllUsers',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/users`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserByName = createAsyncThunk(
  'admin/getUserByName',
  async (name) => {
    const { data } = await axios.get(`${URL_BASE}/users/search?name=${name}`);
    return data;
  }
);

export const getUsersBanned = createAsyncThunk('admin/getUsersBanned', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`${URL_BASE}/banned`);
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
})

export const addCreditUser = createAsyncThunk(
  'admin/addCreditUser',
  async (amount, thunkAPI) => {
    const { data } = await axios.post(`${URL_BASE}/`);
  }
);

export const bannedUser = createAsyncThunk(
  'admin/bannedUser',
  async ({ id, duration }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${URL_BASE}/admin/users/${id}/ban`,
        duration
      );
      console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createGenre = createAsyncThunk(
  'admin/createGenre',
  async (genre) => {
    const { data } = await axios.post(`${URL_BASE}/`);
  }
);

export const createRecommend = createAsyncThunk('admin/createRecommend', async (booksId) => {
  const { data } = await axios.post(`${URL_BASE}/recommend`, booksId)
  return data
})

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.usersStatus = 'loading';
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.usersStatus = 'succeeded';
        state.users = action.payload;
      })
      .addCase(getUserByName.pending, (state) => {
        state.singleUserStatus = 'loading';
      })
      .addCase(getUserByName.fulfilled, (state, action) => {
        state.singleUserStatus = 'succeeded';
        state.singleUser = action.payload;
      })
      .addCase(getUserByName.rejected, (state, action) => {
        state.singleUserStatus = 'failed';
        state.singleUserError = action.error;
      })
      .addCase(createRecommend.pending, (state) => {
        state.recommendStatus = 'loading'
      })
      .addCase(createRecommend.fulfilled, (state, action) => {
        state.recommendStatus = 'succeeded';
        state.recommend = action.payload;
      })
      .addCase(createRecommend.rejected, (state, action) => {
        state.recommendStatus = 'failed';
        state.recommendError = action.error;
      })
      .addCase(getUsersBanned.pending, (state) => {
        state.allBannedUsersStatus = 'loading';
      })
      .addCase(getUsersBanned.fulfilled, (state, action) => {
        state.allBannedUsersStatus = 'succeeded';
        state.allBannedUsers = action.payload
      })
      .addCase(getUsersBanned.rejected, (state, action) => {
        state.allBannedUsersStatus = 'failed';
        state.allBannedUsersError = action.error
      })
  },
});

export default adminSlice.reducer;
