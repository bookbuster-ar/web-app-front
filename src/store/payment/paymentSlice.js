import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL_BASE = 'https://bookbuster-dev.onrender.com/api';

export const subscribeUser = createAsyncThunk('payment/subscribe', async (_, thunkAPI) => {
  const successId = localStorage.getItem('success_id')
  const userId = localStorage.getItem('user_id')

  const { data } = await axios.post(`${URL_BASE}/payment/subscriptionOrder`,_, {
    headers: {
      
    }
  })
})

const initialState = {
  status: null,
  error: null,
}

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //cases
  }
})

export default paymentSlice.reducer;