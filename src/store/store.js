import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import bookshelvesReducer from './books/bookshelvesSlice';
import userReducer from './user/userSlice';
import authReducer from './user/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer,
    bookshelves: bookshelvesReducer,
    user: userReducer,
  },
});

export default store;
