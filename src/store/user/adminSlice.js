import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api';

const initialState = {

}

export const addCreditUser = createAsyncThunk('admin/addCreditUser', async (amount, thunkAPI) => {
  const { data } = await axios.post(`${URL_BASE}/`)
})

export const bannedUser = createAsyncThunk('admin/bannedUser', async ({id, duration}, thunkAPI) => {
  try {
    const { data } = await axios.post(`${URL_BASE}/admin/users/${id}/ban`, duration)
    console.log(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
})

export const createGenre = createAsyncThunk('admin/createGenre', async (genre) => {
  const { data } = await axios.post(`${URL_BASE}/`)
})

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCreditUser.fulfilled, (state, action) => {
        state.
      })
  }
})
