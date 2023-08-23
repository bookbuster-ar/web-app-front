import { createSlice } from '@reduxjs/toolkit';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    message: '',
    type: null, // "success" or "error"
    isActive: false
  },
  reducers: {
    showNotification: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.isActive = true;
    },
    hideNotification: (state) => {
      state.message = '';
      state.type = null;
      state.isActive = false;
    }
  }
});

export const { showNotification, hideNotification } = notificationsSlice.actions;

export default notificationsSlice.reducer;
