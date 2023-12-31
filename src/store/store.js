import bookReducer from './books/bookSlice';
import bookshelvesReducer from './books/bookshelvesSlice';
import userReducer from './user/userSlice';
import adminReducer from './user/adminSlice';
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './user/authSlice';
import reviewsReducer from './reviews/reviewsSlice';
import paymentReducer from './payment/paymentSlice';
import quotesReducer from './quotes/quotesSlice';
import booksForRentReducer from './books/booksForRentSlice';
import booksForCartReducer from './shopping/shoppingSlice';
import recommendedBookReducer from './books/recommendedBookSlice';
import notificationsReducer from './notifications/notificationsSlice';
import priceByFormatReducer from './books/bookPriceSlice';
import bookCategoryReducer from './books/bookCategory';
import weeklyRecommendedBooksReducer from './books/weeklyRecommendedSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'user'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
  bookshelves: bookshelvesReducer,
  user: userReducer,
  admin: adminReducer,
  reviews: reviewsReducer,
  payment: paymentReducer,
  quotes: quotesReducer,
  booksForRent: booksForRentReducer,
  booksForCart: booksForCartReducer,
  recommendedBooks: recommendedBookReducer,
  notifications: notificationsReducer,
  priceByFormat: priceByFormatReducer,
  bookCategory: bookCategoryReducer,
  weeklyRecommended: weeklyRecommendedBooksReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
