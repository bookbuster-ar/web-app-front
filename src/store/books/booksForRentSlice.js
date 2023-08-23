import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api';

const initialState = {
  booksForRent: [],
  status: 'idle',
  error: null,
};

//agregarle paginado:  /categories/for-rent?page=1
export const getBooksForRent = createAsyncThunk(
  'books/getBooksBySearch',
  async () => {
    const { data } = await axios.get(`${URL_BASE}/books/categories/for-rent`);
    return data.data;
  }
);

const booksForRentSlice = createSlice({
  name: 'booksForRent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksForRent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooksForRent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.booksForRent = action.payload;
      })
      .addCase(getBooksForRent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectBooksForRent = (state) => state.booksForRent.booksForRent;
export const selectBooksForRentStatus = (state) => state.booksForRent.status;
export const selectBooksForRentError = (state) => state.booksForRent.error;

export default booksForRentSlice.reducer;
