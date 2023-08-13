import CommentList from './CommentList';

const Review = ({ review }) => {
  const nameAndLastname = `${review.creator.name} ${review.creator.last_name}`;
  return (
    <article>
      <p>{review?.content}</p>
      <p>Por {nameAndLastname || 'unknown author'}</p>
      <p>{review.createdAt} </p>
      <CommentList reviewId={review.id} />
    </article>
  );
};

export default Review;
