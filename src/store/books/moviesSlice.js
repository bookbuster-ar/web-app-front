// src/store/books/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchMovies } from '../../services/movies/movies';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (search) => {
    const response = await searchMovies({ search });
    return response;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    loading: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  }
});

export const selectAllMovies = (state) => state.movies.movies;
export const selectStatus = (state) => state.movies.loading;


export default moviesSlice.reducer;