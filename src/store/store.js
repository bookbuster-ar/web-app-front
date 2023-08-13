import bookReducer from './books/bookSlice';
import bookshelvesReducer from './books/bookshelvesSlice';
import userReducer from './user/userSlice';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './user/authSlice';

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
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
});

export const persistor = persistStore(store);