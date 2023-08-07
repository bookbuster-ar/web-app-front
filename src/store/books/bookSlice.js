import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-dev.onrender.com';

export const getBooksBySearch = createAsyncThunk(
  'books/getBooksBySearch',
  async (search) => {
    const { data } = await axios.get(`${URL_BASE}/api/books?title=${search}`);
    return data;
  }
);

const initialState = {
  books: [],
  status: 'idle', // loading, failed, succedded
  error: null,
  genres: [],
  genresStatus: 'idle',
  genresError: null,
  singleGenre: {},
  singleGenreStatus: 'idle',
  singleGenreError: null,
};

export const fetchGenres = createAsyncThunk('books/fetchGenres', async () => {
  const { data } = await axios.get(`${URL_BASE}/api/genres`);
  return data;
});

export const fetchGenre = createAsyncThunk('books/fetchGenre', async (id) => {
  const { data } = await axios.get(`${URL_BASE}/api/books/genre?id=${id}`);
  return data;
});

export const createBook = createAsyncThunk(
  'books/createBook',
  async (bookData) => {
    const response = await axios.post(`${URL_BASE}/api/books`, bookData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.status;
  }
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.genresStatus = 'loading';
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genresStatus = 'succeeded';
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.genresStatus = 'failed';
        state.genresError = action.error.message;
      })
      .addCase(fetchGenre.pending, (state) => {
        state.singleGenreStatus = 'loading';
      })
      .addCase(fetchGenre.fulfilled, (state, action) => {
        state.singleGenreStatus = 'succeeded';
        state.singleGenre = action.payload;
      })
      .addCase(fetchGenre.rejected, (state, action) => {
        state.singleGenreStatus = 'failed';
        state.singleGenreError = action.error.message;
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
      }) // ------------------          A partir de aca los Case de Search            -----------------
      .addCase(getBooksBySearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooksBySearch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(getBooksBySearch.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export const selectAllBooks = (state) => state.books.books;
export const selectStatus = (state) => state.books.status;
export const selectError = (state) => state.books.error;

export const selectAllGenres = (state) => state.books.genres;
export const selectGenreStatus = (state) => state.books.genresStatus;
export const selectGenreError = (state) => state.books.genresError;

export const selectSingleGenre = (state) => state.books.singleGenre;
export const selectSingleGenreStatus = (state) => state.books.singleGenreStatus;
export const selectSingleGenreError = (state) => state.books.singleGenreError;

// export const {actions jeje} = booksSlice.actions;
export default bookSlice.reducer;
