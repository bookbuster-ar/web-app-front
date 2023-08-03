import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: [],
  read: [],
  wantToRead: [],
  favorites: [],
};

//getAllUserBooks => trae todos los libros que
// alguna vez haya catalogado el usuario

const bookshelvesSlice = createSlice({
  name: 'bookshelves',
  initialState,
  reducers: {},
});

export const selectAllBookshelves = (state) => state.bookshelves.all;

export default bookshelvesSlice.reducer;