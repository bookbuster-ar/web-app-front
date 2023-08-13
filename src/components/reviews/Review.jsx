import ReviewAuthor from './ReviewAuthor';

const Review = ({ review }) => {
  return (
    <article>
      <p>{review.content}</p>
      <p>
        <ReviewAuthor userId={review.creator.id} />
      </p>
    </article>
  );
};

export default Review;
