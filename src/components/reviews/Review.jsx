import ReviewAuthor from './ReviewAuthor';

const Review = ({ review }) => {
  return (
    <article>
      <p>{review.content}</p>
      <p>
        <ReviewAuthor userId={review.by.id} />
      </p>
    </article>
  );
};

export default Review;
