import CommentList from './CommentList';
import LikeReview from './LikeReview';
import Foto from '../../assets/home/noencontras/Background.png';
import { deleteReview } from '../../store/reviews/reviewsSlice';
import { useDispatch } from 'react-redux';

const reactions = [
  {
    name: '😍 Me lo devoré',
    id: 'mld',
    color: 'bg-pinkbook',
    hover: 'hover:bg-pink-400',
    text: 'text-bluebook',
  },
  {
    name: '💤 Me costó terminarlo',
    id: 'mct',
    color: 'bg-bluebook',
    hover: 'hover:bg-blue-800',
    text: 'text-white',
  },
  {
    name: '✈️ Para viajar',
    id: 'pv',
    color: 'bg-redbook',
    hover: 'hover:bg-red-700',
    text: 'text-yellowbook',
  },
  {
    name: '🤩 Soy Fan',
    id: 'sf',
    color: 'bg-bluebook',
    hover: 'hover:bg-blue-800',
    text: 'text-yellowbook',
  },
  {
    name: '💧 Preparate para llorar',
    id: 'ppl',
    color: 'bg-pinkbook',
    hover: 'hover:bg-pink-400',
    text: 'text-redbook',
  },
  {
    name: '💕 Romántico',
    id: 'rom',
    color: 'bg-yellowbook',
    hover: 'hover:bg-yellow-400',
    text: 'text-bluebook',
  },
  {
    name: '💖 Adorable',
    id: 'ado',
    color: 'bg-redbook',
    hover: 'hover:bg-red-700',
    text: 'text-white',
  },
  {
    name: '🤚 Ni fu ni fa',
    id: 'nfnf',
    color: 'bg-yellowbook',
    hover: 'hover:bg-yellow-400',
    text: 'text-bluebook',
  },
  {
    name: '🌟 Profundo',
    id: 'pro',
    color: 'bg-bluebook',
    hover: 'hover:bg-blue-800',
    text: 'text-pinkbook',
  },
  {
    name: '🎀 Para regalar',
    id: 'pp',
    color: 'bg-orangebook',
    hover: 'hover:bg-orange-700',
    text: 'text-yellowbook',
  },
  {
    name: '💀 Espeluznante',
    id: 'esp',
    color: 'bg-pinkbook',
    hover: 'hover:bg-pink-400',
    text: 'text-bluebook',
  },
  {
    name: '💪 Justo en el blanco',
    id: 'jeeb',
    color: 'bg-orangebook',
    hover: 'hover:bg-orange-700',
    text: 'text-white',
  },
  {
    name: '😎 Adictivo',
    id: 'adi',
    color: 'bg-yellowbook',
    hover: 'hover:bg-yellow-400',
    text: 'text-bluebook',
  },
  {
    name: '☀️ Perfecto para la playa',
    id: 'pplp',
    color: 'bg-orangebook',
    hover: 'hover:bg-orange-700',
    text: 'text-white',
  },
  {
    name: '💡 He aprendido mucho',
    id: 'hap',
    color: 'bg-redbook',
    hover: 'hover:bg-red-700',
    text: 'text-white',
  },
];

const Review = ({ review, id }) => {
  const reactionFound = reactions.find((reac) => reac.id === review.reaction);
  const dispatch = useDispatch();
  const reviewId = review.id;
  const userid = localStorage.getItem('user_id');

  let reviewOwner = review.creator?.id === userid;

  const handleDelete = () => {
    dispatch(deleteReview({ id, reviewId }));
  };

  return (
    <article className=' bg-white p-6 shadow-lg rounded-lg w-9/12'>
      <div className='flex flex-col'>
        {reviewOwner ? (
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
            {`${review.creator?.name} ${review.creator?.last_name}` ||
              'unknown author'}{' '}
          </p>
          <p className='mx-1 text-sm'> compartió una opinión -</p>
          <p className=' text-sm'>{review.createdAt}</p>
        </div>
      </div>
      <div>
        <div
          className={`${reactionFound.color}  ${reactionFound.hover} ${reactionFound.color} ${reactionFound.text} font-bold m-2 border-none px-4 py-2 w-fit h-fit text-center`}
        >
          {reactionFound.name}
        </div>
        <p className='my-4'>{review.content}</p>

        <LikeReview
          reviewId={review.id}
          id={id}
          likes={review.likes}
          reviewCreator={review.creator}
        />
      </div>
      <CommentList reviewId={review.id} />
    </article>
  );
};

export default Review;
