import { useDispatch } from 'react-redux';
import { postLikeComment } from '../../store/reviews/reviewsSlice';
import { useState } from 'react';
import iconoOjo from '../../assets/PurpleEye.png';

const LikeComment = ({ commentId, id, likes, reviewId, commentCreator }) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(
    likes.whoLiked.some((user) => user.id === commentCreator.id)
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    dispatch(postLikeComment({ id, reviewId, commentId }));
  };

  const whoLikedComment = likes.whoLiked?.map(
    (user) => `${user.name} ${user.last_name}`
  );

  const handleOpen = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className='flex'>
      {isLiked ? (
        <button onClick={handleLike}>💙</button>
      ) : (
        <button onClick={handleLike}>🤍</button>
      )}
      <div>
        {likes.count === 1 ? (
          <p> A 1 persona le gusta esta reseña </p>
        ) : (
          <p>a {likes.count} personas les gusta esta reseña</p>
        )}
      </div>

      <button onClick={handleOpen} className='bg-blue-500 rounded-3xl w-6 ml-2'>
        <img src={iconoOjo} alt='ver' />
      </button>

      {isDialogOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-md max-w-sm w-full'>
            <h4 className='mb-4'>Personas a las que les gusta esta reseña:</h4>
            {whoLikedComment?.map((user, index) => (
              <p key={index}>{user}</p>
            ))}
            <div className='flex flex-col items-center justify-center'>
              <button
                onClick={handleClose}
                className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LikeComment;
