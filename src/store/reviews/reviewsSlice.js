import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { showNotification } from '../notifications/notificationsSlice';
import axios from 'axios';
const URL_BASE = 'https://bookbuster-main.onrender.com/api';

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
    const { data } = await axios.get(`${URL_BASE}/books/${id}/reviews`);
    return data;
  }
);

export const postReview = createAsyncThunk(
  'reviews/postReview',
  async ({ newReview, id }, thunkAPI) => {
    try {
      const userId = localStorage.getItem('user_id');
    const sessionId = localStorage.getItem('session_id');
    const response = await axios.post(
      `${URL_BASE}/books/${id}/reviews`,
      newReview,
      {
        headers: {
          'Content-Type': 'application/json',
          userId,
          sessionId,
        },
      }
    );
    thunkAPI.dispatch(showNotification({message: "La Review se publicó correctamente!", type: "success"}))
    return response.status;
    } catch (error) {
      console.log(error);
      thunkAPI.dispatch(showNotification({message: error.response.data.error, type: "error"}));
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
);

export const getComment = createAsyncThunk(
  'comment/getComment',
  async ({ reviewId, id }) => {
    const { data } = await axios.get(
      `${URL_BASE}/books//${id}/reviews/${reviewId}/comments`
    );

    return data;
  }
);

export const postComment = createAsyncThunk(
  'comment/postComment',
  async ({ newComment, id, reviewId }) => {
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    const response = await axios.post(
      `${URL_BASE}/books/${id}/reviews/${reviewId}/comments`,
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

export const postLikeReview = createAsyncThunk(
  'likeReview/postLikeReview',
  async ({ id, reviewId }) => {
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    const response = await axios.post(
      `${URL_BASE}/books/${id}/reviews/${reviewId}/like`,
      {},
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

export const postLikeComment = createAsyncThunk(
  'likeComment/postLikeComment',
  async ({ id, reviewId, commentId }) => {
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    const response = await axios.post(
      `${URL_BASE}/books/${id}/reviews/${reviewId}/comments/${commentId}/like`,
      {},
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

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async ({ id, reviewId }) => {
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    const response = await axios.delete(
      `${URL_BASE}/books/${id}/reviews/${reviewId}`,
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

export const deleteComment = createAsyncThunk(
  'comment/deleteComment',
  async ({ id, reviewId, commentId }) => {
    const userid = localStorage.getItem('user_id');
    const sessionid = localStorage.getItem('session_id');
    const response = await axios.delete(
      `${URL_BASE}/books/${id}/reviews/${reviewId}/comments/${commentId}`,
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
      .addCase(postReview.fulfilled, (state) => {
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
      .addCase(postComment.fulfilled, (state) => {
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
      })
      .addCase(postLikeReview.fulfilled, (state) => {
        state.reloadReviews = !state.reloadReviews;
      })
      .addCase(postLikeComment.fulfilled, (state) => {
        state.reloadComments = !state.reloadComments;
      })
      .addCase(deleteReview.fulfilled, (state) => {
        state.reloadReviews = !state.reloadReviews;
      })
      .addCase(deleteComment.fulfilled, (state) => {
        state.reloadComments = !state.reloadReviews;
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
