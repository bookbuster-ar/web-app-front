import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api';

const initialState = {
  priceByFormat: [],
  status: 'idle',
  error: null,
};

//agregarle paginado:  /categories/for-rent?page=1
export const getPriceByFormat = createAsyncThunk(
  'books/getPriceByFormat',
  async (id) => {
    const { data } = await axios.get(`${URL_BASE}/books/format/price/${id}`);
    console.log(data);
    return data;
  }
);

const priceByFormatSlice = createSlice({
  name: 'priceByFormat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPriceByFormat.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPriceByFormat.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.priceByFormat = action.payload;
      })
      .addCase(getPriceByFormat.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectFormatPrice = (state) => state.priceByFormat.priceByFormat;
export const selectBooksForRentStatus = (state) => state.priceByFormat.status;
export const selectBooksForRentError = (state) => state.priceByFormat.error;

export default priceByFormatSlice.reducer;
