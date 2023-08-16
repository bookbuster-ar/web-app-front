import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllComment,
  selectCommentStatus,
  selectCommentError,
  getComment,
  selectReloadComments,
} from '../../store/reviews/reviewsSlice';
import Loader from '../../icons/Loader/Loader';
import Comment from './Comment';
import FormAddComment from './FormAddComment';
import { useParams } from 'react-router-dom';

const CommentList = ({ reviewId }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const comments = useSelector(selectAllComment);
  const status = useSelector(selectCommentStatus);
  const error = useSelector(selectCommentError);

  const reloadComments = useSelector(selectReloadComments);

  useEffect(() => {
    dispatch(getComment({ reviewId, id }));
  }, [reloadComments, dispatch]);

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
          <Comment
            key={comment.id}
            comment={comment}
            id={id}
            reviewId={reviewId}
          />
        ))}
    </div>
  );
};

export default CommentList;
