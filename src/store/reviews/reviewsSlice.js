import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const URL_BASE = 'https://bookbuster-dev.onrender.com/api/books';

const initialState = {
  reviews: [],
  status: 'idle',
  error: null,
  comment: {},
  commentStatus: 'idle',
  commentError: null,
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
  async ({ newReview, id }) => {
    const userId = localStorage.getItem('user_id');
    const sessionId = localStorage.getItem('session_id');
    const response = await axios.post(`${URL_BASE}/${id}/reviews`, newReview, {
      headers: {
        'Content-Type': 'application/json',
        userId,
        sessionId,
      },
    });

    return response.status;
  }
);

export const getComment = createAsyncThunk(
  'comment/fetchComment',
  async ({ reviewId, id }) => {
    const { data } = await axios.post(
      `${URL_BASE}/${id}/reviews/${reviewId}/comments`
    );
    return data;
  }
);

export const postComment = createAsyncThunk(
  'comment/postComment',
  async ({ newComment, id, reviewId }) => {
    const response = await axios.post(
      `${URL_BASE}/${id}/reviews/${reviewId}/comments`,
      newComment,
      {
        headers: {
          'Content-Type': 'application/json',
          userId,
          sessionId,
        },
      }
    );
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
        state.status = 'loading';
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reviews = action.payload;
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
      })
      .addCase(postComment.pending, (state) => {
        state.commentStatus = 'loading';
        state.commentError = null;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        if (action.payload.status === 201) {
          state.commentStatus = 'succeeded';
        }
      })
      .addCase(postComment.rejected, (state, action) => {
        state.commentStatus = 'failed';
        state.commentError = action.error.message;
      });
  },
});

export const selectAllReviews = (state) => state.reviews.reviews;
export const selectReviewsStatus = (state) => state.reviews.status;
export const selectReviewsError = (state) => state.reviews.error;

export const selectAllComment = (state) => state.reviews.comment;
export const selectCommentStatus = (state) => state.reviews.commentError;
export const selectCommentError = (state) => state.reviews.commentError;

export default reviewsSlice.reducer;
