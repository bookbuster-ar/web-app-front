import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import axios from 'axios';
const URL_BASE = 'https://bookbuster-dev.onrender.com/api/books';

const initialState = {
  reviews: [],
  status: 'idle',
  error: null,
};

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async (id) => {
    const { data } = await axios.get(`${URL_BASE}/${id}/reviews`);
    return data;
  }
);

export const postReview = createAsyncThunk(
  'reviews/postReview',
  async (newReview, id) => {
    const response = await axios.post(`${URL_BASE}/${id}/reviews`, newReview, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.status;
  }
);

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.status === 'loading';
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status === 'succeeded';
        let min = 1;
        const loadedReviews = action.payload.map((rev) => {
          rev.date = sub(new Date(), { minutes: min++ }).toISOString();
          rev.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return rev;
        });
        state.reviews = state.reviews.concat(loadedReviews);
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postReview.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        if (action.payload.status === 201) {
          state.status = 'succeeded';
        }
      })
      .addCase(postReview.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllReviews = (state) => state.reviews.reviews;
export const selectReviewsStatus = (state) => state.reviews.status;
export const selectReviewsError = (state) => state.reviews.error;

export const { reviewAdded, reactionAdded } = reviewsSlice.actions;

export default reviewsSlice.reducer;
