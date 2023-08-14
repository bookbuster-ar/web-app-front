import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const URL_BASE = 'https://bookbuster-dev.onrender.com/api/books';

const initialState = {
  reviews: [],
  status: 'idle',
  error: null,
  comment: [],
  commentStatus: 'idle',
  commentError: null,
  reloadReviews: false,
  reloadComments: false,
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
  'comment/getComment',
  async ({ reviewId, id }) => {
    console.log('ReviewIddddd: ', reviewId, 'bookIdddd: ', id);
    const { data } = await axios.get(
      `${URL_BASE}/${id}/reviews/${reviewId}/comments`
    );
    console.log('Este es el resultado del fatch: ', data);
    return data;
  }
);

export const postComment = createAsyncThunk(
  'comment/postComment',
  async ({ newComment, id, reviewId }) => {
    console.log(newComment);
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    const response = await axios.post(
      `${URL_BASE}/${id}/reviews/${reviewId}/comments`,
      newComment,
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
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reloadReviews = !state.reloadReviews;
      })
      .addCase(postReview.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postComment.pending, (state) => {
        state.commentStatus = 'loading';
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.commentStatus = 'succeeded';
        state.reloadComments = !state.reloadComments;
      })
      .addCase(postComment.rejected, (state, action) => {
        state.commentStatus = 'failed';
        state.commentError = action.error.message;
      })
      .addCase(getComment.pending, (state) => {
        state.commentStatus = 'loading';
      })
      .addCase(getComment.fulfilled, (state, action) => {
        state.commentStatus = 'succeeded';
        state.comment = action.payload;
      })
      .addCase(getComment.rejected, (state, action) => {
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

export const selectReloadComments = (state) => state.reviews.reloadComments;
export const selectReloadReviews = (state) => state.reviews.reloadReviews;

export default reviewsSlice.reducer;
