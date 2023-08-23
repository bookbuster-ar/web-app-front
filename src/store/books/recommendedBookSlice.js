import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api';

const initialState = {
  recommendedBooks: [],
  status: 'idle',
  error: null,
};

export const getRecommendedBooks = createAsyncThunk(
  'recommendedBooks/getRecommendedBoooks',
  async ({ format, pages, author_nationality, genres }) => {
    const { data } = await axios.get(
      `${URL_BASE}/books/recommendation?format=${format}&pages=${pages}&author_nationality=${author_nationality}&genres=${genres}`
    );
    return data;
  }
);

const recommendedBooksSlice = createSlice({
  name: 'recommendedBooks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendedBooks.pending, (state) => {state.status = 'loading'
  })
  .addCase(getRecommendedBooks.fulfilled, (state, action)=> {
    state.status = 'succeeded';
    state.recommendedBooks = action.payload;
  })
  .addCase(getRecommendedBooks.rejected,
     (state, action) => {
       state.status = 'failed';
       state.error = action.error.message;
     })
  },
});

export const selectRecommendedBooks = (state) =>
  state.recommendedBooks.recommendedBooks;
export const selectRecommendedBooksStatus = (state) =>
  state.recommendedBooks.status;
export const selectRecommendedBooksError = (state) =>
  state.recommendedBooks.error;

export default recommendedBooksSlice.reducer;
