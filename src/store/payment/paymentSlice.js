import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api';

export const subscribeUser = createAsyncThunk(
  'payment/subscribe',
  async (data, thunkAPI) => {
    try {
      const sessionid = localStorage.getItem('session_id');
      const userid = localStorage.getItem('user_id');

      const response = await axios.post(
        `${URL_BASE}/payment/subscriptionOrder`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            userid,
            sessionid,
          },
        }
      );
      const { status } = response;
      const { linkCheckout } = response.data.link;
      return { linkCheckout, status };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const BuyBook = createAsyncThunk(
  'payment/buyBook',
  async (data, thunkAPI) => {
    const sessionid = localStorage.getItem('session_id');
    const userid = localStorage.getItem('user_id');
    try {
      const response = await axios.post(
        `${URL_BASE}/payment/placeOrder`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            userid,
            sessionid,
          },
        }
      );
      const { status } = response;
      const init_point = response.data.response.body.init_point;

      return { status, init_point };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const initialState = {
  responseUrl: null,
  isLoading: false,
  status: null,
  error: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(subscribeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.responseUrl = action.payload.linkCheckout;
        state.status = action.payload.status;
        // action ya veremos
      })
      .addCase(subscribeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
        state.status = action.payload.status;
      })
      .addCase(BuyBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(BuyBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.responseUrl = action.payload.init_point;
        state.status = action.payload.status;
      });
  },
});

export const selectResponseUrl = (state) => state.payment.responseUrl;
export const selectStatus = (state) => state.payment.status;

export default paymentSlice.reducer;