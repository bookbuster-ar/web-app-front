import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import bookshelvesReducer from './books/bookshelvesSlice';
import userReducer from './user/userSlice';
import moviesReducer from '../store/books/moviesSlice'

const store = configureStore({
  reducer: {
    books: bookReducer,
    bookshelves: bookshelvesReducer,
    user: userReducer,
    movies: moviesReducer
  },
});

export default store;
