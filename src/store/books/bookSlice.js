import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-dev.onrender.com';

// console.log('vamos a usar axios para las peticiones', axios); // --------------------
// /* const {data} =  */

const initialState = {
  books: [],
  status: 'idle', // loading, failed, succedded
  error: null,
  genres: [],
  genreStatus: 'idle',
  genreError: null,
};

export const fetchGenres = createAsyncThunk('books/fetchGenres', async () => {
  const { data } = await axios.get(`${URL_BASE}/api/genres`);
  return data;
});

export const createBook = createAsyncThunk('books/createBook', async () => {
  const response = await axios.post(`${URL_BASE}/api/books`, form);
  return response.status;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.genreStatus = 'loading';
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genreStatus = 'succeeded';
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.genreStatus = 'failed';
        state.genreError = action.error.message;
      })
      .addCase(createBook.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        if (action.payload.status === 201) {
          state.status = 'succeeded';
        }
      })
      .addCase(createBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllBooks = (state) => state.books.books;
export const selectStatus = (state) => state.books.status;
export const selectError = (state) => state.books.error;

export const selectAllGenres = (state) => state.books.genres;
export const selectGenreStatus = (state) => state.books.genreStatus;
export const selectGenreError = (state) => state.books.genreError;

// export const {actions jeje} = booksSlice.actions;
export default bookSlice.reducer;
