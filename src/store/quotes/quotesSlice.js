import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showNotification } from '../notifications/notificationsSlice';
const URL_BASE = 'https://bookbuster-main.onrender.com/api';

const initialState = {
  quotes: [],
  status: 'idle',
  error: null,
  reloadQuotes: false,
};

export const fetchQuotes = createAsyncThunk(
  'quotes/fetchQuotes',
  async (bookId) => {
    const { data } = await axios.get(`${URL_BASE}/books/${bookId}/quotes`);
    return data;
  }
);

export const postQuote = createAsyncThunk(
  'quotes/postQuote',
  async ({ newQuote, id }, thunkAPI) => {
    try {
      const userId = localStorage.getItem('user_id');
      const sessionId = localStorage.getItem('session_id');
      const response = await axios.post(
        `${URL_BASE}/books/${id}/quotes`,
        newQuote,
        {
          headers: {
            'Content-Type': 'application/json',
            userId,
            sessionId,
          },
        }
      );
      thunkAPI.dispatch(
        showNotification({
          message: 'Ve a citas para ver lo que publicaste',
          type: 'success',
        })
      );
      return response.status;
    } catch (error) {
      thunkAPI.dispatch(
        showNotification({ message: error.response.data.error, type: 'error' })
      );
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postQuoteLike = createAsyncThunk(
  'quotes/postLikeReview',
  async ({ id, quoteId }) => {
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    const response = await axios.post(
      `${URL_BASE}/books/${id}/quotes/${quoteId}/like`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          userid,
          sessionid,
        },
      }
    );
    return { status: response.status, data: response.data };
  }
);

export const deleteQuote = createAsyncThunk(
  'quotes/deleteQuote',
  async ({ id, quoteId }, thunkAPI) => {
    try {
      const userid = localStorage.getItem('user_id');
      const sessionid = localStorage.getItem('session_id');
      const response = await axios.delete(
        `${URL_BASE}/books/${id}/quotes/${quoteId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            userid,
            sessionid,
          },
        }
      );
      thunkAPI.dispatch(
        showNotification({
          message: 'Se ha eliminado tu cita',
          type: 'success',
        })
      );
      return { status: response.status, data: response.data };
    } catch (error) {
      thunkAPI.dispatch(
        showNotification({ message: error.response.data.error, type: 'error' })
      );
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.quotes = action.payload;
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postQuote.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postQuote.fulfilled, (state) => {
        state.status = 'succeeded';
        state.reloadQuotes = !state.reloadQuotes;
      })
      .addCase(postQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.response?.data?.error;
      })
      .addCase(postQuoteLike.fulfilled, (state) => {
        state.reloadQuotes = !state.reloadQuotes;
      })
      .addCase(deleteQuote.fulfilled, (state) => {
        state.reloadQuotes = !state.reloadQuotes;
      });
  },
});

export const selectAllQuotes = (state) => state.quotes.quotes;
export const selectQuotesStatus = (state) => state.quotes.status;
export const selectQuotesError = (state) => state.quotes.error;

export const selectReloadQuotes = (state) => state.quotes.reloadQuotes;

export default quotesSlice.reducer;
