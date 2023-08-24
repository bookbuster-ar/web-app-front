import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api/admin';

const initialState = {
  users: [],
  usersStatus: 'idle',
  usersError: null,
  usersByName: {},
  usersByNameStatus: 'idle',
  usersByNameError: null,
  recommend: [],
  recommendStatus: 'idle',
  recommendError: null,
  allBannedUsers: [],
  allBannedUsersStatus: 'idle',
  allBannedUsersError: null,
  bannedUser: '',
  bannedUserStatus: 'idle',
  newGenre: {},
  newGenreStatus: 'idle',
  newGenreError: null,
  newSubgenre: {},
  newSubgenreStatus: 'idle',
  newSubgenreError: null,
  singleTransaction: {},
  singleTransactionStatus: 'idle',
  singleTransactionError: null,
  transactions: [],
  transactionsStatus: 'idle',
  transactionsError: null,
  soldBooks: [],
  soldBooksStatus: 'idle',
  soldBooksError: null,
  subscriptions: {},
  subscriptionsStatus: 'idle',
  subscriptionsError: null,
  roles: [],
  rolesStatus: 'idle',
  rolesError: null,
  userRole: {},
  userRoleStatus: 'idle',
  userRoleError: null,
  recommendBooks: [],
  sortOrder: 'name',  // este puede ser 'name' o 'date'
};

export const getAllUsers = createAsyncThunk(
  'admin/getAllUsers',
  async (_, thunkAPI) => {
    const sessionid = localStorage.getItem('session_id');
    const userid = localStorage.getItem('user_id');
    try {
      const { data } = await axios.get(`${URL_BASE}/users`, {
        headers: {
          'Content-Type': 'application/json',
          userid,
          sessionid,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserByName = createAsyncThunk(
  'admin/getUserByName',
  async (name, thunkAPI) => {
    try {
      const sessionid = localStorage.getItem('session_id');
      const userid = localStorage.getItem('user_id');

      const { data } = await axios.get(
        `${URL_BASE}/users/search?name=${name}`,
        {
          headers: {
            'Content-Type': 'application/json',
            userid,
            sessionid,
          },
        }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUsersBanned = createAsyncThunk(
  'admin/getUsersBanned',
  async (_, thunkAPI) => {
    try {
      const sessionid = localStorage.getItem('session_id');
      const userid = localStorage.getItem('user_id');
      const { data } = await axios.get(`${URL_BASE}/banned`, {
        headers: {
          'Content-Type': 'application/json',
          userid,
          sessionid,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const bannedUser = createAsyncThunk(
  'admin/bannedUser',
  async ({ id, duration, reason }) => {
    const sessionid = localStorage.getItem('session_id');
    const userid = localStorage.getItem('user_id');
    const { data } = await axios.post(
      `${URL_BASE}/users/${id}/ban`,
      { duration, reason },
      {
        headers: {
          'Content-Type': 'application/json',
          userid,
          sessionid,
        },
      }
    );
    return data;
  }
);

export const getTransaction = createAsyncThunk(
  'admin/getTransaction',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/transactions/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllTransactions = createAsyncThunk(
  'admin/getAllTransactions',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${URL_BASE}/transactions`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getSoldBooks = createAsyncThunk('admin/getSoldBooks', async () => {
  const { data } = await axios.get(`${URL_BASE}/books/sold`);
  return data;
});

export const getSubscriptions = createAsyncThunk(
  'admin/getSubscriptions',
  async () => {
    const sessionid = localStorage.getItem('session_id');
    const userid = localStorage.getItem('user_id');
    const { data } = await axios.get(`${URL_BASE}/subscriptions`, {
      headers: {
        'Content-Type': 'application/json',
        userid,
        sessionid,
      },
    });
    return data;
  }
);

export const getRoles = createAsyncThunk('admin/getRoles', async () => {
  const sessionid = localStorage.getItem('session_id');
  const userid = localStorage.getItem('user_id');
  const { data } = await axios.get(`${URL_BASE}/roles`, {
    headers: {
      'Content-Type': 'application/json',
      userid,
      sessionid,
    },
  });
  return data;
});

export const addCreditUser = createAsyncThunk(
  'admin/addCreditUser',
  async ({ id, credits }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${URL_BASE}/user/${id}/credits`,
        credits
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createGenre = createAsyncThunk(
  'admin/createGenre',
  async (genre) => {
    const { data } = await axios.post(`${URL_BASE}/genre`, genre);
    return data;
  }
);

export const createSubgenre = createAsyncThunk(
  'admin/createSubgenre',
  async ({ genreId, subgenre }, thunkAPI) => {
    try {
      const { data } = await axios.post(`${URL_BASE}/subgenre`, {
        genreId,
        subgenre,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createRecommend = createAsyncThunk(
  'admin/createRecommend',
  async ({ booksId, genreId }) => {
    const sessionid = localStorage.getItem('session_id');
    const userid = localStorage.getItem('user_id');
    const { data } = await axios.post(
      `${URL_BASE}/recommend/${genreId}`,
      { booksId },
      {
        headers: {
          'Content-Type': 'application/json',
          userid,
          sessionid,
        },
      }
    );
    return data;
  }
);

export const updateRole = createAsyncThunk(
  'admin/updateRole',
  async ({userId, roleId}) => {
    const sessionid = localStorage.getItem('session_id');
    const userid = localStorage.getItem('user_id');
    const { data } = await axios.put(
      `${URL_BASE}/user/${userId}/role`,
      { roleId },
      {
        headers: {
          'Content-Type': 'application/json',
          userid,
          sessionid,
        },
      }
    );
    return data;
  }
);

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.usersStatus = 'loading';
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.usersStatus = 'succeeded';
        if (state.sortOrder === 'name') {
          state.users = action.payload.sort((a, b) => a.name.localeCompare(b.name));
        } else {
          state.users = action.payload.sort((a, b) => new Date(a.date_of_register) - new Date(b.date_of_register));
        }
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.usersStatus = 'failed';
        state.usersError = action.error;
      })
      .addCase(getUserByName.pending, (state) => {
        state.usersStatus = 'loading';
      })
      .addCase(getUserByName.fulfilled, (state, action) => {
        state.usersStatus = 'succeeded';
        if (state.sortOrder === 'name') {
          state.users = action.payload.sort((a, b) => a.name.localeCompare(b.name));
        } else {
          state.users = action.payload.sort((a, b) => new Date(a.date_of_register) - new Date(b.date_of_register));
        }
      })
      .addCase(getUserByName.rejected, (state, action) => {
        state.usersStatus = 'failed';
        state.usersError = action.error;
      })
      .addCase(createRecommend.pending, (state) => {
        state.recommendStatus = 'loading';
      })
      .addCase(createRecommend.fulfilled, (state, action) => {
        state.recommendStatus = 'succeeded';
        state.recommend = action.payload;
      })
      .addCase(createRecommend.rejected, (state, action) => {
        state.recommendStatus = 'failed';
        state.recommendError = action.error;
      })
      .addCase(getUsersBanned.pending, (state) => {
        state.allBannedUsersStatus = 'loading';
      })
      .addCase(getUsersBanned.fulfilled, (state, action) => {
        state.allBannedUsersStatus = 'succeeded';
        state.allBannedUsers = action.payload;
      })
      .addCase(getUsersBanned.rejected, (state, action) => {
        state.allBannedUsersStatus = 'failed';
        state.allBannedUsersError = action.error;
      })
      .addCase(bannedUser.pending, (state) => {
        state.bannedUserStatus = 'loading';
      })
      .addCase(bannedUser.fulfilled, (state, action) => {
        state.bannedUserStatus = 'succeeded';
        state.bannedUser = action.payload;
      })
      .addCase(createGenre.pending, (state) => {
        state.newGenreStatus = 'loading';
      })
      .addCase(createGenre.fulfilled, (state, action) => {
        state.newGenreStatus = 'succeeded';
        state.newGenre = action.payload;
      })
      .addCase(createGenre.rejected, (state, action) => {
        state.newGenreStatus = 'failed';
        state.newGenreError = action.error;
      })
      .addCase(createSubgenre.pending, (state) => {
        state.newSubgenreStatus = 'loading';
      })
      .addCase(createSubgenre.fulfilled, (state, action) => {
        state.newSubgenreStatus = 'succeeded';
        state.newSubgenre = action.payload;
      })
      .addCase(createSubgenre.rejected, (state, action) => {
        state.newSubgenreStatus = 'failed';
        state.newSubgenreError = action.error;
      })
      .addCase(getTransaction.pending, (state) => {
        state.singleTransactionStatus = 'loading';
      })
      .addCase(getTransaction.fulfilled, (state, action) => {
        state.singleTransactionStatus = 'succeeded';
        state.singleTransaction = action.payload;
      })
      .addCase(getTransaction.rejected, (state, action) => {
        state.singleTransactionStatus = 'failed';
        state.singleTransactionError = action.error;
      })
      .addCase(getAllTransactions.pending, (state) => {
        state.transactionsStatus = 'loading';
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.transactionsStatus = 'succeeded';
        state.transactions = action.payload;
      })
      .addCase(getAllTransactions.rejected, (state, action) => {
        state.transactionsStatus = 'failed';
        state.transactionsError = action.error;
      })
      .addCase(getSoldBooks.pending, (state) => {
        state.soldBooksStatus = 'loading';
      })
      .addCase(getSoldBooks.fulfilled, (state, action) => {
        state.soldBooksStatus = 'succeeded';
        state.soldBooks = action.payload;
      })
      .addCase(getSoldBooks.rejected, (state, action) => {
        state.soldBooksStatus = 'failed';
        state.soldBooksError = action.error;
      })
      .addCase(getSubscriptions.pending, (state) => {
        state.subscriptionsStatus = 'loading';
      })
      .addCase(getSubscriptions.fulfilled, (state, action) => {
        state.subscriptionsStatus = 'succeeded';
        state.subscriptions = action.payload;
      })
      .addCase(getSubscriptions.rejected, (state, action) => {
        state.singleTransactionStatus = 'failed';
        state.allBannedUsersError = action.error;
      })
      .addCase(getRoles.pending, (state) => {
        state.rolesStatus = 'loading';
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.rolesStatus = 'succeeded';
        state.roles = action.payload;
      })
      .addCase(getRoles.rejected, (state, action) => {
        state.rolesStatus = 'failed';
        state.rolesError = action.error;
      })
      .addCase(updateRole.pending, (state) => {
        state.userRoleStatus = 'loading';
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        state.userRoleStatus = 'succeeded';
        const updatedUser = action.payload; 
        const userIndex = state.users.findIndex(user => user.id === updatedUser.id);
        if (userIndex !== -1) {
           state.users[userIndex] = updatedUser;
        }
      })
      .addCase(updateRole.rejected, (state, action) => {
        state.userRoleStatus = 'failed';
        state.userRoleError = action.error.message; 
      });
  },
});

export const {setSortOrder} = adminSlice.actions;

export const selectAllUsers = (state) => state.admin.users;
export const selectUsersStatus = (state) => state.admin.usersStatus;
export const selectUsersError = (state) => state.admin.usersError;

export const selectWeeklyRecommended = (state) => state.admin.recommend;
export const selectWeeklyRecommendedStatus = (state) =>
  state.admin.recommendStatus;
export const selectWeeklyRecommendedError = (state) =>
  state.admin.recommendError;

export const selectallBannedUsers = (state) => state.admin.allBannedUsers;

export const selectSubscriptions = (state) => state.admin.subscriptions;

export const selectRoles = (state) => state.admin.roles;
export const selectUserRoleStatus = (state) => state.admin.userRoleStatus


export default adminSlice.reducer;
