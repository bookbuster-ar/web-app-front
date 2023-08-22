import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api';

const initialState = {
  bookshelves: [],
  status: 'idle',
  error: null,
  addStatus: null,
  deletedStatus: null,
  bookshelf: [],
  bookshelfStatus: 'idle',
  bookshelfError: null,
};

export const getBookshelves = createAsyncThunk(
  'bookshelves/getBookshelves',
  async () => {
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    const { data } = await axios.get(`${URL_BASE}/shelves`, {
      headers: {
        'Content-Type': 'application/json',
        userid,
        sessionid,
      },
    });
    console.log(data);
    // return data.book_shelf_categories;
    return data;
  }
);

export const addToBookshelf = createAsyncThunk(
  'bookshelves/addToBookshelf',
  async ({ bookId, book_shelf_categoriy_id }) => {
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    console.log('userid de add', userid);
    console.log('sessionid de add', sessionid);
    const response = await axios.post(
      `${URL_BASE}/shelves/addBookToShelf?bookId=${bookId}&book_shelf_categoriy_id=${book_shelf_categoriy_id}`,
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

//faltan los cases
export const deleteBookFromShelf = createAsyncThunk(
  'bookshelves/deleteBookFromShelf',
  async ({ bookId, book_shelf_categoriy_id }) => {
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    const response = await axios.delete(
      `${URL_BASE}/shelves/deleteBookFromShelf?bookId=${bookId}&book_shelf_category_id=${book_shelf_categoriy_id}`,
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

export const getBookshelf = createAsyncThunk(
  'bookshelves/getBookshelf',
  async ({ book_shelf_categoriy_id }) => {
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    const { data } = await axios.get(
      `${URL_BASE}/shelves/shelfbooks?book_shelf_category_id=${book_shelf_categoriy_id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          userid,
          sessionid,
        },
      }
    );
    console.log(data);
    return data;
  }
);

export const createNewShelf = createAsyncThunk(
  'bookshelves/createNewShelf',
  async ({ name, book_shelves_id }) => {
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    const response = await axios.post(
      `${URL_BASE}/shelves/createNewShelf?name=${name}&book_shelves_id =${book_shelves_id}`,
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

export const editNameShelf = createAsyncThunk(
  'bookshelves/editNameShelf',
  async ({ name, shelfId }) => {
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    const response = await axios.post(
      `${URL_BASE}/shelves/editNameShelf?name=${name}&shelfId=${shelfId}`,
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

const bookshelvesSlice = createSlice({
  name: 'bookshelves',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookshelves.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBookshelves.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.bookshelves = action.payload;
      })
      .addCase(getBookshelves.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(addToBookshelf.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToBookshelf.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // state.addStatus = action.data;
      })
      .addCase(addToBookshelf.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(deleteBookFromShelf.fulfilled, (state, action) => {
        state.deletedStatus = action.data;
      })
      .addCase(getBookshelf.pending, (state) => {
        state.bookshelfStatus = 'loading';
      })
      .addCase(getBookshelf.fulfilled, (state, action) => {
        state.bookshelfStatus = 'succeeded';
        state.bookshelf = action.payload;
      })
      .addCase(getBookshelf.rejected, (state, action) => {
        state.bookshelfError = action.error;
      })
      .addCase(createNewShelf.pending, (state) => {
        state.bookshelfStatus = 'loading';
      })
      .addCase(createNewShelf.fulfilled, (state, action) => {
        state.bookshelfStatus = 'succeeded';
        // state.addStatus = action.data;
      })
      .addCase(createNewShelf.rejected, (state, action) => {
        state.bookshelfStatus = 'failed';
        state.bookshelfError = action.error;
      })
      .addCase(editNameShelf.pending, (state) => {
        state.bookshelfStatus = 'loading';
      });
  },
});

export const selectAllBookshelves = (state) => state.bookshelves.bookshelves;
export const selectBookshelvesStatus = (state) => state.bookshelves.status;
export const selectBookshelvesError = (state) => state.bookshelves.error;

export const selectAddStatus = (state) => state.bookshelves.addStatus;
export const selectDeletedStatus = (state) => state.bookshelves.bookshelfError;

export const selectBookshelf = (state) => state.bookshelves.bookshelf;
export const selectBookshelfStatus = (state) =>
  state.bookshelves.bookshelfStatus;
export const selectBookshelfError = (state) => state.bookshelves.bookshelfError;

export default bookshelvesSlice.reducer;
