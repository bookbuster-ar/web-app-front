import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllComment,
  selectCommentStatus,
  selectCommentError,
  getComment,
} from '../../store/reviews/reviewsSlice';
import Loader from '../../icons/Loader/Loader';
import Comment from './Comment';
import FormAddComment from './FormAddComment';

const CommentList = ({ reviewId }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const comments = useSelector(selectAllComment);
  const status = useSelector(selectCommentStatus);
  const error = useSelector(selectCommentError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getComment(reviewId, id));
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <div>
      <FormAddComment reviewId={reviewId} />

      <h2>Comentarios</h2>
      {status !== 'failed' &&
        comments.length > 0 &&
        comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default CommentList;
