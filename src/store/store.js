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
import recommendedBookSlice from './books/recommendedBookSlice';
import notificationsReducer from './notifications/notificationsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
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
  recommendedBooks: recommendedBookSlice,
  notifications: notificationsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);