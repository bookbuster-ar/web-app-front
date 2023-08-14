import CommentList from './CommentList';
import Foto from '../../assets/ElementoHome4.png';

const reactions = [
  { name: 'Me lo devoré', id: 'mld', color: 'bg-red-300' },
  { name: 'Me costó terminarlo', id: 'mct', color: 'bg-blue-500' },
  { name: 'Para viajar', id: 'pv', color: 'bg-green-500' },
  { name: 'Soy Fan', id: 'sf', color: 'bg-red-600' },
  { name: 'Preparate para llorar', id: 'ppl', color: 'bg-yellow-400' },
  { name: 'Romántico', id: 'rom', color: 'bg-red-300' },
  { name: 'Adorable', id: 'ado', color: 'bg-yellow-400' },
  { name: 'Ni fu ni fa', id: 'nfnf', color: 'bg-red-300' },
  { name: 'Profundo', id: 'pro', color: 'bg-green-500' },
  { name: 'Para regalar', id: 'pp', color: 'bg-blue-500' },
  { name: 'Espeluznante', id: 'esp', color: 'bg-red-600' },
  { name: 'Justo en el blanco', id: 'jeeb', color: 'bg-yellow-400' },
  { name: 'Adictivo', id: 'adi', color: 'bg-red-300' },
  { name: 'Perfecto para la playa', id: 'pplp', color: 'bg-green-500' },
  { name: 'He aprendido mucho', id: 'hap', color: 'bg-blue-500' },
];

const Review = ({ review }) => {
  const reactionFound = reactions.find((reac) => reac.id === review.reaction);
  return (
    <article className='md:col-span-4 bg-white p-6 shadow-lg rounded-lg my-11'>
      <div className='flex items-center'>
        <img src={Foto} alt='Foto' className='w-12 rounded-full mr-2' />
        <p className='font-bold'>
          {`${review.creator.name} ${review.creator.last_name}` ||
            'unknown author'}{' '}
        </p>
        <p className='mx-1'> compartió una opinión</p>
      </div>
      <div>
        <div
          className={`${reactionFound.color} m-2 border-none text-white px-4 py-2 m-2 w-fit h-fit text-center`}
        >
          {reactionFound.name}
        </div>
        <p className='my-4'>{review.content}</p>
        <p className='text-sm'>{review.createdAt} </p>
      </div>
      <CommentList reviewId={review.id} />
    </article>
  );
};

export default Review;
