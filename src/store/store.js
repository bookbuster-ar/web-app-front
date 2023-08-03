import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import bookshelvesReducer from './books/bookshelvesSlice';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    bookshelves: bookshelvesReducer,
    user: userReducer,
  },
});

export default store;
