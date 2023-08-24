import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api';

const initialState = {
  mostPopular: [],
  mostPopularStatus: 'idle',
  mostPopularError: null,
  newlyArrived: [],
  newlyArrivedStatus: 'idle',
  newlyArrivedError: null,
  latestReleases: [],
  latestReleasesStatus: 'idle',
  latestReleasesError: null,
};

export const getMostPopular = createAsyncThunk(
  'bookCategory/getMostPopular',
  async () => {
    const { data } = await axios.get(
      `${URL_BASE}/books/categories/most-popular`
    );
    return data;
  }
);

export const getNewlyArrived = createAsyncThunk(
  'bookCategory/getNewlyArrived',
  async () => {
    const { data } = await axios.get(
      `${URL_BASE}/books/categories/newly-arrived`
    );
    return data;
  }
);

export const getLatestReleases = createAsyncThunk(
  'bookCategory/getLatestReleases',
  async () => {
    const { data } = await axios.get(
      `${URL_BASE}/books/categories/latest-releases`
    );
    return data;
  }
);

const bookCategorySlice = createSlice({
  name: 'bookCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMostPopular.pending, (state) => {
        state.mostPopularStatus = 'loading';
      })
      .addCase(getMostPopular.fulfilled, (state, action) => {
        state.mostPopularStatus = 'succeeded';
        state.mostPopular = action.payload;
      })
      .addCase(getMostPopular.rejected, (state, action) => {
        state.mostPopularStatus = 'failed';
        state.mostPopularError = action.error.message;
      })
      .addCase(getNewlyArrived.pending, (state) => {
        state.newlyArrivedStatus = 'loading';
      })
      .addCase(getNewlyArrived.fulfilled, (state, action) => {
        state.newlyArrivedStatus = 'succeeded';
        state.newlyArrived = action.payload;
      })
      .addCase(getNewlyArrived.rejected, (state, action) => {
        state.newlyArrivedStatus = 'failed';
        state.newlyArrivedError = action.error.message;
      })
      .addCase(getLatestReleases.pending, (state) => {
        state.latestReleasesStatus = 'loading';
      })
      .addCase(getLatestReleases.fulfilled, (state, action) => {
        state.latestReleasesStatus = 'succeeded';
        state.latestReleases = action.payload;
      })
      .addCase(getLatestReleases.rejected, (state, action) => {
        state.latestReleasesStatus = 'failed';
        state.latestReleasesError = action.error.message;
      });
  },
});

export const selectMostPopular = (state) => state.bookCategory.mostPopular;
export const selectMostPopularStatus = (state) =>
  state.bookCategory.mostPopularStatus;
export const selectMostPopularError = (state) =>
  state.bookCategory.mostPopularError;

export const selectNewlyArrived = (state) => state.bookCategory.newlyArrived;
export const selectNewlyArrivedStatus = (state) =>
  state.bookCategory.newlyArrivedStatus;
export const selectNewlyArrivedError = (state) =>
  state.bookCategory.newlyArrivedError;

export const selectLatestReleases = (state) =>
  state.bookCategory.latestReleases;
export const selectLatestReleasesStatus = (state) =>
  state.bookCategory.latestReleasesStatus;
export const selectLatestReleasesError = (state) =>
  state.bookCategory.latestReleasesError;

export default bookCategorySlice.reducer;
