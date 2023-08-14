import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-dev.onrender.com/api';
const LOCALHOST = 'http://localhost:3001/api';

export const subscribeUser = createAsyncThunk(
  'payment/subscribe',
  async (_, thunkAPI) => {
    try {
      const sessionid = localStorage.getItem('session_id');
      const userid = localStorage.getItem('user_id');

      console.log('sessionid:', sessionid);
      console.log('userid:', userid);

      const response = await axios.post(
        `${LOCALHOST}/payment/subscriptionOrder`,
        {},
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
      console.log(error);
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
      });
  },
});

export const selectResponseUrl = (state) => state.payment.responseUrl;
export const selectStatus = (state) => state.payment.status;

export default paymentSlice.reducer;