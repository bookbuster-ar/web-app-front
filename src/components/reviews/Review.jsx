const Review = ({ review }) => {
  return (
    <article>
      <p>{review?.content}</p>
      <p>Por {review.creator?.name || 'unknown author'}</p>
    </article>
  );
};

export default Review;
