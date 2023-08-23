import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api';

const initialState = {
  booksInCart: [],
  status: 'idle',
  error: null,
  totalPrice: 0,
};

export const getBooksForCart = createAsyncThunk(
  'books/getBooksInCart',
  async () => {
    const { data } = await axios.get(`${URL_BASE}/cart`);
    return data;
  }
);

export const addBookToCart = createAsyncThunk(
  'books/addBookToCart',
  async (book) => {
    const { data } = await axios.post(`${URL_BASE}/cart`, book);
    return data;
  }
);

export const removeBookFromCart = createAsyncThunk(
  'books/removeBookFromCart',
  async (bookId) => {
    const { data } = await axios.delete(`${URL_BASE}/cart/${bookId}`);
    return data;
  }
);

const booksForCartSlice = createSlice({
  name: 'booksForCart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksForCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooksForCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.booksInCart = action.payload;
        state.totalPrice = state.booksInCart.reduce(
          (total, book) => total + book.price,
          0
        ); // Itera sobre los libros en el carrito para mantener actualizado el subtotal
      })
      .addCase(getBooksForCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBookToCart.fulfilled, (state, action) => {
        state.booksInCart.push(action.payload);
        state.totalPrice += action.payload.price;
      })
      .addCase(removeBookFromCart.fulfilled, (state, action) => {
        const bookToRemove = state.booksInCart.find(
          (book) => book.id === action.payload.id
        );
        if (bookToRemove) {
          state.totalPrice -= bookToRemove.price;
          state.booksInCart = state.booksInCart.filter(
            (book) => book.id !== action.payload.id
          );
        }
      });
  },
});

export const selectBooksForCart = (state) => state.booksForCart.booksInCart;
export const selectBooksForCartStatus = (state) => state.booksForCart.status;
export const selectBooksForCartError = (state) => state.booksForCart.error;
export const selectTotalPrice = (state) => state.booksForCart.totalPrice;

export default booksForCartSlice.reducer;
