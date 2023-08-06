import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://bookbuster-dev.onrender.com/'

export const getBooksBySearch = createAsyncThunk('books/getBooksBySearch', async (search) => {
  const { data } = await axios.get(`${BASE_URL}api/books?title=${search}`)
  return data;
})

const initialState = {
  books: [],
  status: 'idle', // loading, failed, succedded
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksBySearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooksBySearch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload
      })
      .addCase(getBooksBySearch.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      })
  }
});

export const selectAllBooks = (state) => state.books.books;
export const selectStatus = (state) => state.books.status;
export const selectError = (state) => state.books.error;

// export const {actions jeje} = booksSlice.actions;
export default bookSlice.reducer;
