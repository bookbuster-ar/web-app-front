import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'idle', // loading, failed, succedded
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

export const selectAllBooks = (state) => state.books.books;
export const selectStatus = (state) => state.books.status;
export const selectError = (state) => state.books.error;

// export const {actions jeje} = booksSlice.actions;
export default bookSlice.reducer;
