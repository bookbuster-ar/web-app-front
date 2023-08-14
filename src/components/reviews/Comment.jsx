import Foto from '../../assets/ElementoHome4.png';

const Comment = ({ comment }) => {
  return (
    <article className='md:col-span-4 bg-white p-6 shadow-lg rounded-lg my-11'>
      <div className='flex items-center'>
        <img src={Foto} alt='Foto' className='w-12 rounded-full mr-2' />
        <p className='font-bold'>
          {`${comment.by.name} ${comment.by.last_name}` || 'unknown author'}{' '}
        </p>
        <p className='mx-1'> compartió una cita</p>
      </div>
      <div>
        <p className='my-4'>{comment.content}</p>
        <p className='text-sm'>{comment.createdAt} </p>
      </div>
    </article>
  );
};

export default Comment;
