import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllReviews,
  selectReviewsStatus,
  selectReviewsError,
  fetchReviews,
} from '../../store/reviews/reviewsSlice';
import { useEffect } from 'react';
import Review from './Review';
import { useParams } from 'react-router-dom';

const ReviewList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const reviews = useSelector(selectAllReviews);
  const status = useSelector(selectReviewsStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchReviews(id));
    }
  }, [status, dispatch]);

  return (
    <section>
      <h2>Reviews</h2>
      {status !== 'failed' &&
        reviews.map((review) => <Review key={review.id} review={review} />)}
    </section>
  );
};

export default ReviewList;

/* if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    const orderedReviews = reviews
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedReviews?.map((review) => {
      return ;
    });
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  } */
