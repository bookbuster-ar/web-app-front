import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllReviews,
  selectReviewsStatus,
  selectReviewsError,
  selectReloadReviews,
  fetchReviews,
} from '../../store/reviews/reviewsSlice';
import { useEffect } from 'react';
import Review from './Review';
import { useParams } from 'react-router-dom';
import Loader from '../../icons/Loader/Loader';

const ReviewList = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const reviews = useSelector(selectAllReviews);
  const status = useSelector(selectReviewsStatus);
  const reloadReviews = useSelector(selectReloadReviews);

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, [reloadReviews, dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'failed') {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2 className='text-xl font-semibold text-gray-800'>
        Opiniones de otros lectores
      </h2>

      {status !== 'failed' &&
        reviews.length > 0 &&
        reviews?.map((review) => (
          <Review key={review.id} review={review} id={id} />
        ))}
    </div>
  );
};

export default ReviewList;
