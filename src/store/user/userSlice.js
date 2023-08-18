import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [
    { id: '0', name: 'Dude Lebowski' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'David Gris' },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users.users;

export default userSlice.reducer;
