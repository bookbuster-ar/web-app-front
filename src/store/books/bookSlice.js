import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL_BASE = 'https://bookbuster-main.onrender.com/api';

const initialState = {
  books: [],
  status: 'idle', // loading, failed, succedded
  error: null,
  genres: [],
  genresStatus: 'idle',
  genresError: null,
  singleGenre: {},
  singleGenreStatus: 'idle',
  singleGenreError: null,
  detail: {},
  detailStatus: 'idle',
  detailError: null,
  editorials: [],
  editorialsStatus: 'idle',
  editorialsError: null,
  bookSubgenres: [],
  bookSubgenresStatus: 'idle',
  bookSubgenresError: null,
  genreSubgenres: [],
  genreSubgenresStatus: 'idle',
  genreSubgenresError: null,
  booksByGenre: [],
  booksByGenreStatus: 'idle',
  booksByGenreError: null,
  currentPage: 1,
  totalPages: 1,
};
export const getBooksByPage = createAsyncThunk(
  'books/getBooksByPage',
  async ({ page }) => {
    const { data } = await axios.get(`${URL_BASE}/books?page=${page}`);
    return data;
  }
);
export const getTitleByPage = createAsyncThunk(
  'books/getTitleByPage',
  async ({ title, page }) => {
    const { data } = await axios.get(`${URL_BASE}/books?title=${title}&page=${page}`);
    return data;
  }
);
export const getAuthorByPage = createAsyncThunk(
  'books/getAuthorByPage',
  async ({ author, page }) => {
    const { data } = await axios.get(`${URL_BASE}/books?author=${author}&page=${page}`);
    return data;
  }
);
// export const getSearchByPage = createAsyncThunk(
//   'books/getSearchByPage',
//   async ({ search, page }) => {
//     const { data } = await axios.get(`${URL_BASE}/books?search=${search}&page=${page}`);
//     return data;
//   }
// );
export const getAuthorTitleByPage = createAsyncThunk(
  'books/getAuthorTitleByPage',
  async ({ author, title, page }) => {
    const { data } = await axios.get(`${URL_BASE}/books?author=${author}&title=${title}&page=${page}`);
    return data;
  }
);
export const getGenreIdByPage = createAsyncThunk(
  'books/getGenreIdByPage',
  async ({ id, page }) => {
    const { data } = await axios.get(`${URL_BASE}/books/genre?id=${id}&page=${page}`);
    return data;
  }
);
export const getSubGenreIdByPage = createAsyncThunk(
  'books/getSubGenreIdByPage',
  async ({ id, page }) => {
    const { data } = await axios.get(`${URL_BASE}/books/subgenre?id=${id}&page=${page}`);
    return data;
  }
);
export const getBooksRentByPage = createAsyncThunk(
  'books/getBooksRentByPage',
  async ({ page }) => {
    const { data } = await axios.get(`${URL_BASE}/books/categories/for-rent?page=${page}`);
    return data;
  }
);
//-----------------------------------------------------------------------------------------------------------
export const getBooksBySearch = createAsyncThunk(
  'books/getBooksBySearch',
  async (search) => {
    const { data } = await axios.get(`${URL_BASE}/books?search=${search}`);
    return data.data;
  }
);

export const getBookByDetail = createAsyncThunk(
  'books/getBookByDetail',
  async (id) => {
    const { data } = await axios.get(`${URL_BASE}/books/${id}`);
    return data;
  }
);

export const fetchGenres = createAsyncThunk('books/fetchGenres', async () => {
  const { data } = await axios.get(`${URL_BASE}/genres`);
  return data;
});

export const fetchGenre = createAsyncThunk('books/fetchGenre', async (id) => {
  const { data } = await axios.get(`${URL_BASE}/books/genre?id=${id}`);
  return data.data;
});

export const createBook = createAsyncThunk(
  'books/createBook',
  async (bookData) => {
    const response = await axios.post(`${URL_BASE}/books`, bookData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.status;
  }
);

export const getEditorials = createAsyncThunk(
  'books/getEditorials',
  async () => {
    const { data } = await axios.get(`${URL_BASE}/editorials`);
    return data;
  }
);

export const getBookSubgenres = createAsyncThunk(
  'books/getBookSubgenres',
  async (id) => {
    const { data } = await axios.get(
      `${URL_BASE}/books/subgenres?bookId=${id}`
    );
    return data;
  }
);

export const getGenreSubgenres = createAsyncThunk(
  'books/getGenreSubgenres',
  async (id) => {
    const { data } = await axios.get(
      `${URL_BASE}/books/genre/subgenres?bookId=${id}`
    );
    return data.subgenres;
  }
);


const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    resetBooks: (state) => {
      state.books = [];
      state.status = 'idle';
      state.error = null;
      state.singleGenreStatus = 'idle';
      state.singleGenreError = null;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;// podria volver la pagina a 1
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getBooksByPage.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getBooksByPage.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload.data;
      state.currentPage = action.payload.paginated.currentPage;
      state.totalPages = action.payload.paginated.totalPages;
    })
    .addCase(getBooksByPage.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    .addCase(getAuthorTitleByPage.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getAuthorTitleByPage.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload.data;
      state.currentPage = action.payload.paginated.currentPage;
      state.totalPages = action.payload.paginated.totalPages;
    })
    .addCase(getAuthorTitleByPage.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    // .addCase(getSearchByPage.pending, (state) => {
    //   state.status = 'loading';
    // })
    // .addCase(getSearchByPage.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.books = action.payload.data;
    //   state.currentPage = action.payload.paginated.currentPage;
    //   state.totalPages = action.payload.paginated.totalPages;
    // })
    // .addCase(getSearchByPage.rejected, (state, action) => {
    //   state.status = 'failed';
    //   state.error = action.error.message;
    // })
    .addCase(getTitleByPage.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getTitleByPage.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload.data;
      state.currentPage = action.payload.paginated.currentPage;
      state.totalPages = action.payload.paginated.totalPages;
    })
    .addCase(getTitleByPage.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    .addCase(getAuthorByPage.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getAuthorByPage.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload.data;
      state.currentPage = action.payload.paginated.currentPage;
      state.totalPages = action.payload.paginated.totalPages;
    })
    .addCase(getAuthorByPage.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    .addCase(getGenreIdByPage.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getGenreIdByPage.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload.data.books;
      state.currentPage = action.payload.paginated.currentPage;
      state.totalPages = action.payload.paginated.totalPages;
    })
    .addCase(getGenreIdByPage.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    .addCase(getSubGenreIdByPage.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getSubGenreIdByPage.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload.data.books;
      state.currentPage = action.payload.paginated.currentPage;
      state.totalPages = action.payload.paginated.totalPages;
    })
    .addCase(getSubGenreIdByPage.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    .addCase(getBooksRentByPage.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getBooksRentByPage.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload.data;
      state.currentPage = action.payload.paginated.currentPage;
      state.totalPages = action.payload.paginated.totalPages;
    })
    .addCase(getBooksRentByPage.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })

    //-----------------------------------------------------------------------------------------------------------------------------
      .addCase(fetchGenres.pending, (state) => {
        state.genresStatus = 'loading';
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genresStatus = 'succeeded';
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.genresStatus = 'failed';
        state.genresError = action.error.message;
      })
      .addCase(fetchGenre.pending, (state) => {
        state.singleGenreStatus = 'loading';
      })
      .addCase(fetchGenre.fulfilled, (state, action) => {
        state.singleGenreStatus = 'succeeded';
        state.singleGenre = action.payload;
      })
      .addCase(fetchGenre.rejected, (state, action) => {
        state.singleGenreStatus = 'failed';
        state.singleGenreError = action.error.message;
      })
      .addCase(createBook.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        if (action.payload.status === 201) {
          state.status = 'succeeded';
        }
      })
      .addCase(createBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }) // ------------------          A partir de aca los Case de Search            -----------------
      .addCase(getBooksBySearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBooksBySearch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(getBooksBySearch.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      })
      .addCase(getBookByDetail.pending, (state) => {
        state.detailStatus = 'loading';
      })
      .addCase(getBookByDetail.fulfilled, (state, action) => {
        state.detailStatus = 'succeeded';
        state.detail = action.payload;
      })
      .addCase(getBookByDetail.rejected, (state, action) => {
        state.detailStatus = 'failed';
        state.detailError = action.error.message;
      })
      .addCase(getEditorials.pending, (state) => {
        state.genresStatus = 'loading';
      })
      .addCase(getEditorials.fulfilled, (state, action) => {
        state.editorialsStatus = 'succeeded';
        state.editorials = action.payload;
      })
      .addCase(getEditorials.rejected, (state, action) => {
        state.editorialsStatus = 'failed';
        state.editorialsError = action.error.message;
      })
      .addCase(getBookSubgenres.pending, (state) => {
        state.bookSubgenresStatus = 'loading';
      })
      .addCase(getBookSubgenres.fulfilled, (state, action) => {
        state.bookSubgenresStatus = 'succeeded';
        state.bookSubgenres = action.payload;
      })
      .addCase(getBookSubgenres.rejected, (state, action) => {
        state.bookSubgenresStatus = 'failed';
        state.bookSubgenresError = action.error.message;
      });
  },
});


export const { setCurrentPage } = bookSlice.actions;
export const selectCurrentPage = (state) => state.books.currentPage;
export const selectTotalPages = (state) => state.books.totalPages;

//-------------------------------------------------------------------------------------------------------------------------------
export const { resetBooks } = bookSlice.actions;

export const selectAllBooks = (state) => state.books.books;
export const selectStatus = (state) => state.books.status;
export const selectError = (state) => state.books.error;

export const selectAllGenres = (state) => state.books.genres;
export const selectGenreStatus = (state) => state.books.genresStatus;
export const selectGenreError = (state) => state.books.genresError;

export const selectSingleGenre = (state) => state.books.singleGenre;
export const selectSingleGenreStatus = (state) => state.books.singleGenreStatus;
export const selectSingleGenreError = (state) => state.books.singleGenreError;

export const selectDetail = (state) => state.books.detail;
export const selectDetailStatus = (state) => state.books.detailStatus;
export const selectDetailError = (state) => state.books.detailError;

export const selectEditorials = (state) => state.books.editorials;
export const selectEditorialsStatus = (state) => state.books.editorialsStatus;
export const selectEditorialsError = (state) => state.books.editorialsError;

export const selectBookSubgenres = (state) => state.books.bookSubgenres;
export const selectBookSubgenresStatus = (state) =>
  state.books.bookSubgenresStatus;
export const selectBookSubgenresError = (state) =>
  state.books.bookSubgenresError;

export default bookSlice.reducer;
