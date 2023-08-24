import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api';

const initialState = {
  weeklyRecommended: [],
  status: 'idle',
  error: null,
};

export const getWeeklyRecommendedBooks = createAsyncThunk(
  'weeklyRecommended/getWeeklyRecommendedBooks',
  async (genreId) => {
    const { data } = await axios.get(`${URL_BASE}/books/weekly/${genreId}`);
    return data?.recommendedBook;
  }
);

const weeklyRecommendedBooksSlice = createSlice({
  name: 'weeklyRecommended',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeeklyRecommendedBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getWeeklyRecommendedBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.weeklyRecommended = action.payload;
      })
      .addCase(getWeeklyRecommendedBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectWeeklyRecommended = (state) =>
  state.weeklyRecommended.weeklyRecommended;
export const selectWeeklyRecommendedStatus = (state) =>
  state.weeklyRecommended.status;
export const selectWeeklyRecommendedError = (state) =>
  state.weeklyRecommended.error;

export default weeklyRecommendedBooksSlice.reducer;
