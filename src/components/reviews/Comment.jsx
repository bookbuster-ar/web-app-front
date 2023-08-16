import Foto from '../../assets/home/noencontras/Background.png';
import LikeComment from './LikeComment';

const Comment = ({ comment, id, reviewId }) => {
  return (
    <article className='md:col-span-4 bg-white p-6 shadow-lg rounded-lg my-11'>
      <div className='flex items-center'>
        <img src={Foto} alt='Foto' className='w-12 rounded-full mr-2' />
        <p className='font-bold'>
          {`${comment.by?.name} ${comment?.by?.last_name}` || 'unknown author'}
        </p>
        <p className='mx-1'> comentó esta reseña</p>
      </div>
      <div>
        <p className='my-4'>{comment.content}</p>
        <p className='text-sm'>{comment.createdAt} </p>
      </div>
      <div>
        <LikeComment
          commentId={comment.id}
          likes={comment.likes}
          id={id}
          reviewId={reviewId}
        />
      </div>
    </article>
  );
};

export default Comment;
