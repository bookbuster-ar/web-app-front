import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllComment,
  selectCommentStatus,
  selectCommentError,
} from '../../store/reviews/reviewsSlice';

const CommentList = () => {
  const comments = useSelector(selectAllComment);
  const status = useSelector(selectCommentStatus);
  const error = useSelector(selectCommentError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReviews(id));
    }
  }, [status, dispatch]);

  return (<div>

  </div>);
};
