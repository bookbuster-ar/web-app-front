import Foto from '../../assets/home/noencontras/Background.png';
import LikeComment from './LikeComment';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../store/reviews/reviewsSlice';

const Comment = ({ comment, id, reviewId }) => {
  const commentId = comment.id;
  const userid = localStorage.getItem('user_id');
  const dispatch = useDispatch();
  console.log(comment);
  let commentOwner = comment.by.id === userid;

  const handleDelete = () => {
    dispatch(deleteComment({ id, reviewId, commentId }));
  };

  return (
    <article className='md:col-span-4 bg-white p-6 shadow-lg rounded-lg my-11'>
      <div className='flex flex-col'>
        {commentOwner ? (
          <button
            onClick={handleDelete}
            className='bg-pink-300 rounded-full w-6 text-white my-4 hover:bg-pink-400 self-end'
          >
            X
          </button>
        ) : (
          ''
        )}
        <div className='flex items-center'>
          <img src={Foto} alt='Foto' className='w-12 rounded-full mr-2' />
          <p className='font-bold'>
            {`${comment.by?.name} ${comment?.by?.last_name}` ||
              'unknown author'}
          </p>
          <p className='mx-1 text-sm'> comentó esta reseña -</p>
          <p className=' text-sm'>{comment.createdAt}</p>
        </div>
      </div>
      <div>
        <p className='my-4'>{comment.content}</p>
      </div>
      <div>
        <LikeComment
          commentId={comment.id}
          likes={comment.likes}
          id={id}
          reviewId={reviewId}
          commentCreator={comment.by}
        />
      </div>
    </article>
  );
};

export default Comment;
