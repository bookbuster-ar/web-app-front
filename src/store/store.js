import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import bookshelvesReducer from './books/bookshelvesSlice';
import userReducer from './user/userSlice';
import authReducer from './user/authSlice';
import reviewsReducer from './reviews/reviewsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer,
    bookshelves: bookshelvesReducer,
    users: userReducer,
    reviews: reviewsReducer,
  },
});

export default store;
